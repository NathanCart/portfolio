'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import Link from 'next/link';
import FloatIntoScreen from './FloatIntoScreen';

export default function Homepage() {
	const $black = useRef<HTMLDivElement>(null);
	const $whiteCircle = useRef<HTMLDivElement>(null);
	const $blackCircle = useRef<HTMLDivElement>(null);

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
		};

		window.addEventListener('mousemove', handleMove);
		window.addEventListener('touchmove', handleMove);

		return () => {
			window.removeEventListener('mousemove', handleMove);
			window.removeEventListener('touchmove', handleMove);
		};
	}, []);

	return (
		<div className="bg-neutral-100">
			<main className="flex flex-col items-center justify-center w-full relative h-screen">
				<section className="text-neutral-900 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm lg:flex bg-neutral-100 absolute top-0 left-0">
					<div
						ref={$blackCircle}
						className="rounded-full bg-neutral-900 size-6 md:size-8 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
					/>

					<div className="z-30 container mx-auto p-4">
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
							<Link href="/work">
								<div className="flex gap-4 items-center mt-1 md:mt-4">
									<h2 className="text-3xl md:text-5xl font-sans transition-all">
										Work
									</h2>
									<FontAwesomeIcon size="2x" icon={faArrowRight} />
								</div>
							</Link>
						</FloatIntoScreen>
					</div>
				</section>
				<section
					ref={$black}
					className="text-neutral-100 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm lg:flex bg-neutral-900 absolute top-0 left-0"
				>
					<div
						ref={$whiteCircle}
						className="rounded-full bg-neutral-100 size-10 md:size-12 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
					/>

					<div className="z-30 container mx-auto p-4">
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
							<Link href="#work">
								<div className="flex gap-4 items-center mt-1 md:mt-4 hover:text-red-500 transition-all">
									<h2 className="text-3xl md:text-5xl font-sans">Work</h2>
									<FontAwesomeIcon size="2x" icon={faArrowRight} />
								</div>
							</Link>
						</FloatIntoScreen>
					</div>
				</section>
			</main>
			<section
				id="work"
				className="relative container mx-auto p-4 text-center py-8 bg-neutral-100 z-30"
			>
				<div className="flex items-end gap-2">
					<h2 className="text-2xl md:text-3xl font-sans font-extrabold">Recent work</h2>
					<p className="text-lg">Explore my most recent projects!</p>
				</div>
			</section>
		</div>
	);
}
