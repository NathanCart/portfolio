'use client';

import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import { Bodies, Body, Engine, Events, Render, Vertices, World } from 'matter-js';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Card from './Card';
import FloatIntoScreen from './FloatIntoScreen';
import Image from 'next/image';
import Canvas from './Canvas';

function generateRandomBlob(x: number, y: number, radius: number, points: number = 100) {
	const angleStep = (Math.PI * 2) / points;
	const vertices = [];

	for (let i = 0; i < points; i++) {
		const angle = i * angleStep;
		const offset = Math.random() * radius * 0.6;
		const px = x + (radius + offset) * Math.cos(angle);
		const py = y + (radius + offset) * Math.sin(angle);
		vertices.push({ x: px, y: py });
	}

	return vertices;
}

export default function Matter() {
	const $black = useRef<HTMLDivElement>(null);
	const $whiteCircle = useRef<HTMLDivElement>(null);
	const $blackCircle = useRef<HTMLDivElement>(null);
	const $container = useRef<HTMLDivElement>(null);
	const $whiteSection = useRef<HTMLDivElement>(null);
	const [canSpawn, setCanSpawn] = useState(true);

	const engine = useRef(Engine.create());
	const mouseBody = useRef(Body.create({ isStatic: true }));

	useEffect(() => {
		const interval = setInterval(() => {
			setCanSpawn(true);
		}, 100);

		return () => clearInterval(interval);
	}, [canSpawn]);

	useEffect(() => {
		const blackElement = $black.current;
		const whiteCircle = $whiteCircle.current;
		const blackCircle = $blackCircle.current;
		if (!blackElement || !whiteCircle || !blackCircle) return;

		const handleMove = (e: MouseEvent | TouchEvent) => {
			let clientX;
			let clientY;

			if (e instanceof MouseEvent) {
				clientX = e.pageX;
				clientY = e.pageY;
			} else if (e instanceof TouchEvent) {
				clientX = e.touches[0].pageX;
				clientY = e.touches[0].pageY;
			}

			const { innerWidth, innerHeight } = window;
			const x = (clientX! / innerWidth) * 100;
			const y = (clientY! / innerHeight) * 100;

			blackElement.style.clipPath = `inset(0 0 0 ${x}%)`;

			whiteCircle.style.left = `${x}%`;
			whiteCircle.style.top = `${clientY}px`;
			blackCircle.style.left = `${x}%`;
			blackCircle.style.top = `${clientY}px`;

			whiteCircle.style.boxShadow = `0 0 20px 10px rgba(255, 255, 255, 0.5)`;
			blackCircle.style.boxShadow = `0 0 20px 10px rgba(0, 0, 0, 0.5)`;

			// Update the mouse body position
			Body.setPosition(mouseBody.current, { x: clientX!, y: clientY! });
		};

		if (!$container.current) return;

		$container.current.addEventListener('mousemove', handleMove);
		$container.current.addEventListener('touchmove', handleMove);

		return () => {
			if (!$container.current) return;

			$container.current.removeEventListener('mousemove', handleMove);
			$container.current.removeEventListener('touchmove', handleMove);
		};
	}, []);

	useEffect(() => {
		// mount
		if (!$container.current) return;
		const cw = $container.current.clientWidth;
		const ch = $container.current.clientHeight;

		const render = Render.create({
			//@ts-ignore
			element: $whiteSection.current,
			engine: engine.current,
			options: {
				width: cw,
				height: ch,
				wireframes: false,
				background: 'transparent',
			},
		});

		engine.current.world.gravity.y = 0;

		// boundaries
		World.add(engine.current.world, [
			Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
			Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
			Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
			Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
		]);

		// Spawn 10 random blobs
		for (let i = 0; i < 10; i++) {
			const x = Math.random() * cw;
			const y = Math.random() * ch;
			const radius = 10 + Math.random() * 30;
			const vertices = generateRandomBlob(x, y, radius);
			const blob = Bodies.fromVertices(x, y, [vertices], {
				mass: 0.001,
				restitution: 1,
				friction: 0.005,
				render: {
					fillStyle: '#000000',
				},
			});

			const wobbleInterval = setInterval(() => {
				const forceMagnitude = 0.000001;
				const randomForce = {
					x: (Math.random() - 0.5) * forceMagnitude,
					y: (Math.random() - 0.5) * forceMagnitude,
				};
				Body.applyForce(blob, { x: blob.position.x, y: blob.position.y }, randomForce);
			}, 100);
			World.add(engine.current.world, blob);
		}

		// Add the mouse body to the world
		World.add(engine.current.world, mouseBody.current);

		// run the engine
		Engine.run(engine.current);
		Render.run(render);

		// unmount
		return () => {
			// destroy Matter
			Render.stop(render);
			World.clear(engine.current.world, false);
			Engine.clear(engine.current);
			render.canvas.remove();
			(render.canvas as HTMLCanvasElement | null) = null;
			(render.context as CanvasRenderingContext2D | null) = null;
			render.textures = {};
		};
	}, []);

	const isPressed = useRef(false);

	const handleAddCircle = (e: ReactMouseEvent<HTMLElement>) => {
		if (!canSpawn) return;

		// Prevent spawning too many circles
		setCanSpawn(false);
		const radius = 10 + Math.random() * 30;
		const vertices = generateRandomBlob(e.clientX, e.clientY, radius);
		const blob = Bodies.fromVertices(e.clientX, e.clientY, [vertices], {
			mass: 0.001,
			restitution: 1,
			friction: 0.005,
			render: {
				fillStyle: '#000000',
			},
		});

		World.add(engine.current.world, [blob]);

		// Collision event
		Events.on(engine.current, 'collisionStart', (event) => {
			const pairs = event.pairs;

			pairs.forEach((pair) => {
				const { bodyA, bodyB } = pair;
				if (bodyA === mouseBody.current || bodyB === mouseBody.current) {
					const blob = bodyA === mouseBody.current ? bodyB : bodyA;
					const forceMagnitude = 0.02;
					const direction = {
						x: (blob.position.x - mouseBody.current.position.x) * forceMagnitude,
						y: (blob.position.y - mouseBody.current.position.y) * forceMagnitude,
					};
					Body.applyForce(blob, blob.position, direction);
				}
			});
		});

		const wobbleInterval = setInterval(() => {
			const forceMagnitude = 0.000001;
			const randomForce = {
				x: (Math.random() - 0.5) * forceMagnitude,
				y: (Math.random() - 0.5) * forceMagnitude,
			};
			Body.applyForce(blob, { x: blob.position.x, y: blob.position.y }, randomForce);
		}, 100);

		// Clean up interval on component unmount
		return () => clearInterval(wobbleInterval);
	};

	return (
		<main
			onMouseMove={handleAddCircle}
			className="flex flex-col items-center justify-center w-full relative h-[90vh] "
			ref={$container}
		>
			<Canvas $container={$container} blobColor="black">
				<section className=" text-neutral-900 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm flex bg-neutral-100 absolute top-0 left-0">
					<div
						ref={$blackCircle}
						style={{ left: '18%', top: '25%', zIndex: 400 }}
						className="rounded-full bg-neutral-900  size-6 md:size-8 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
					/>
					<div className="z-30 container mx-auto p-4 relative h-full flex flex-col justify-center">
						<nav className="absolute top-4 left-0 font-bold flex gap-4 md:gap-8 px-4">
							<a href="#about-me">
								<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
									About
								</p>
							</a>
							<a href="#experience">
								<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
									Experience
								</p>
							</a>
							<Link href="/projects">
								<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
									Projects
								</p>
							</Link>
						</nav>
						<FloatIntoScreen direction="left" y={150} bounce={0.4}>
							<h1 className="text-5xl md:text-7xl font-sans font-extrabold">
								Nathan Carter
							</h1>
						</FloatIntoScreen>
						<FloatIntoScreen direction="right" y={250} bounce={0.55}>
							<p className="text-xl md:text-3xl font-mono">
								Creating inspiring frontend UI / UX.
							</p>
						</FloatIntoScreen>
						<FloatIntoScreen direction="left" y={200} bounce={0.45}>
							<Link href="/projects">
								<div className="flex gap-1 items-center mt-1 md:mt-4">
									<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
										Projects
									</p>
									<FontAwesomeIcon size="lg" icon={faArrowRight} />
								</div>
							</Link>
						</FloatIntoScreen>
					</div>
				</section>
			</Canvas>
			<div className="[&canvas]:z-[100] ">
				<section
					ref={$black}
					style={{ clipPath: 'inset(0 0 0 18%)' }}
					className="text-neutral-100 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm flex bg-neutral-900 absolute top-0 left-0"
				>
					<Canvas $container={$container} blobColor="white">
						<div
							style={{ left: '18%', top: '25%' }}
							ref={$whiteCircle}
							className="rounded-full bg-neutral-100 size-10 md:size-12 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
						/>

						<div className="z-30 container mx-auto p-4 relative h-full flex flex-col justify-center">
							<nav className="absolute top-4 left-0 font-bold flex gap-4 md:gap-8 px-4">
								<a href="#about-me">
									<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
										About
									</p>
								</a>
								<a href="#experience">
									<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
										Experience
									</p>
								</a>
								<Link href="/projects">
									<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
										Projects
									</p>
								</Link>
							</nav>
							<FloatIntoScreen direction="left" y={150} bounce={0.4}>
								<h2 className="text-5xl md:text-7xl font-sans font-extrabold">
									Nathan Carter
								</h2>
							</FloatIntoScreen>
							<FloatIntoScreen direction="right" y={250} bounce={0.55}>
								<p className="text-xl md:text-3xl font-mono">
									Creating complex backend integrations.
								</p>
							</FloatIntoScreen>
							<FloatIntoScreen direction="left" y={200} bounce={0.45}>
								<Link href="#projects">
									<div className="flex gap-1 items-center mt-1 md:mt-4 hover:text-blue-500 transition-all">
										<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
											Projects
										</p>
										<FontAwesomeIcon size="lg" icon={faArrowRight} />
									</div>
								</Link>
							</FloatIntoScreen>
						</div>
					</Canvas>
				</section>
			</div>
		</main>
	);
}
