'use client';

import { Bodies, Body, Engine, Render, World } from 'matter-js';
import { MouseEvent as ReactMouseEvent, RefObject, useEffect, useRef, useState } from 'react';

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

export default function Canvas({
	children,
	blobColor,
	$container,
}: {
	children: React.ReactNode;
	blobColor: 'white' | 'black';
	$container: RefObject<HTMLDivElement>;
}) {
	const [canSpawn, setCanSpawn] = useState(true);

	const engine = useRef(Engine.create());
	const mouseBody = useRef(Body.create({ isStatic: true, render: { visible: false } }));
	const $whiteSection = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCanSpawn(true);
		}, 100);

		return () => clearInterval(interval);
	}, [canSpawn]);

	useEffect(() => {
		// mount

		if (!$container.current) return;
		World.clear(engine.current.world, false);

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
					fillStyle: blobColor === 'black' ? '#000000' : '#ffffff',
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

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			Body.setPosition(mouseBody.current, { x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const handleAddCircle = (e: ReactMouseEvent<HTMLElement>) => {
		if (!canSpawn) return;

		// Prevent spawning too many circles
		setCanSpawn(false);
		const radius = 10 + Math.random() * 30;
		const vertices = generateRandomBlob(e.clientX, e.clientY, radius);
		const blob = Bodies.fromVertices(e.clientX, e.clientY, [vertices], {
			mass: 0.001,
			restitution: 0.01,
			friction: 0.005,
			render: {
				fillStyle: blobColor === 'black' ? '#000000' : '#ffffff',
			},
		});

		World.add(engine.current.world, [blob]);

		const wobbleInterval = setInterval(() => {
			const forceMagnitude = 0.000001;
			const randomForce = {
				x: (Math.random() - 0.5) * forceMagnitude,
				y: (Math.random() - 0.5) * forceMagnitude,
			};
			Body.applyForce(blob, { x: blob.position.x, y: blob.position.y }, randomForce);
		}, 500);

		// Clean up interval on component unmount
		return () => clearInterval(wobbleInterval);
	};

	return (
		<div onMouseDown={handleAddCircle} ref={$whiteSection} className="w-full h-full z-10">
			{children}
		</div>
	);
}
