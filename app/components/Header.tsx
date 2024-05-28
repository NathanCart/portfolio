'use client';

import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Card from './Card';
import FloatIntoScreen from './FloatIntoScreen';
import Image from 'next/image';

export default function Header() {
	const $black = useRef<HTMLDivElement>(null);
	const $whiteCircle = useRef<HTMLDivElement>(null);
	const $blackCircle = useRef<HTMLDivElement>(null);
	const $container = useRef<HTMLDivElement>(null);

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

		if (!$container.current) return;

		$container.current.addEventListener('mousemove', handleMove);
		$container.current.addEventListener('touchmove', handleMove);

		return () => {
			if (!$container.current) return;

			$container.current.removeEventListener('mousemove', handleMove);
			$container.current.removeEventListener('touchmove', handleMove);
		};
	}, []);

	return (
		<main
			className="flex flex-col items-center justify-center w-full relative h-[90dvh] cursor-none"
			ref={$container}
		>
			<section className=" text-neutral-900 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm flex bg-neutral-100 absolute top-0 left-0">
				<Image
					priority
					src="/blobs/blob-1.svg"
					alt="Blob 1"
					width={0}
					height={0}
					className="animate-blob absolute top-6 -left-10 h-auto w-[200px]"
				/>
				<Image
					priority
					src="/blobs/blob-2.svg"
					alt="Blob 2"
					width={0}
					height={0}
					className="animate-blobThree absolute bottom-28 left-1/2 h-auto w-[150px]"
				/>
				<Image
					src="/blobs/blob-3.svg"
					alt="Blob 3"
					width={0}
					priority
					height={0}
					className="animate-blobFour absolute top-3/4 left-3/4 h-auto w-[250px]"
				/>
				<Image
					src="/blobs/blob-4.svg"
					alt="Blob 4"
					width={0}
					priority
					height={0}
					className="animate-blob absolute bottom-10 -left-8 h-auto w-[250px]"
				/>
				<Image
					src="/blobs/blob-5.svg"
					alt="Blob 5"
					width={0}
					height={0}
					priority
					className="animate-blobSix absolute top-20 right-10 h-auto w-[100px]"
				/>
				<Image
					src="/blobs/blob-6.svg"
					alt="Blob 6"
					width={0}
					priority
					height={0}
					className="animate-blob absolute top-1/4 left-1/2 h-auto w-[165px] "
				/>
				<div
					ref={$blackCircle}
					style={{ left: '18%', top: '25%' }}
					className="rounded-full bg-neutral-900  size-6 md:size-8 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				/>
				<div className="z-30 container mx-auto p-4 relative h-full flex flex-col justify-center">
					<nav className="absolute top-4 left-0 font-bold flex gap-4 md:gap-8 px-4">
						<Link href="#about-me">
							<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
								About
							</p>
						</Link>
						<Link href="#experience">
							<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
								Experience
							</p>
						</Link>
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
			<section
				ref={$black}
				style={{ clipPath: 'inset(0 0 0 18%)' }}
				className="text-neutral-100 z-10 w-full h-full items-center md:gap-20 gap-4 font-mono text-sm flex bg-neutral-900 absolute top-0 left-0"
			>
				<Image
					src="/blobs/blob-white-1.svg"
					alt="Blob 1"
					width={0}
					height={0}
					priority
					className="animate-blob absolute top-6 -left-10 h-auto w-[200px]"
				/>
				<Image
					src="/blobs/blob-white-2.svg"
					alt="Blob 2"
					width={0}
					height={0}
					priority
					className="animate-blobThree absolute bottom-28 left-1/2 h-auto w-[150px]"
				/>
				<Image
					src="/blobs/blob-white-2.svg"
					alt="Blob 6"
					width={0}
					priority
					height={0}
					className="animate-blob absolute top-1/4 left-1/2 h-auto w-[165px]"
				/>
				<Image
					src="/blobs/blob-white-3.svg"
					alt="Blob 3"
					width={0}
					priority
					height={0}
					className="animate-blobFour absolute top-3/4 left-3/4 h-auto w-[250px]"
				/>
				<Image
					src="/blobs/blob-white-4.svg"
					alt="Blob 4"
					width={0}
					priority
					height={0}
					className="animate-blob absolute bottom-10 -left-8 h-auto w-[250px]"
				/>
				<Image
					src="/blobs/blob-white-5.svg"
					alt="Blob 5"
					width={0}
					height={0}
					priority
					className="animate-blobSix absolute top-20 right-10 h-auto w-[100px]"
				/>
				<div
					style={{ left: '18%', top: '25%' }}
					ref={$whiteCircle}
					className="rounded-full bg-neutral-100 size-10 md:size-12 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				/>

				<div className="z-30 container mx-auto p-4 relative h-full flex flex-col justify-center">
					<nav className="absolute top-4 left-0 font-bold flex gap-4 md:gap-8 px-4">
						<Link href="#about-me">
							<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
								About
							</p>
						</Link>
						<Link href="#experience">
							<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
								Experience
							</p>
						</Link>
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
			</section>
		</main>
	);
}
