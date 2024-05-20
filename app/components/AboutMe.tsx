'use client';

import { useState } from 'react';
import FloatIntoScreen from './FloatIntoScreen';

export default function AboutMe() {
	return (
		<section
			id="about-me"
			className="relative container mx-auto p-4 md:py-16 mt-4 text-center py-8 bg-neutral-100 z-30 border-y-2"
		>
			<FloatIntoScreen direction="left" y={100} bounce={0.4}>
				<div className="flex flex-col md:flex-row items-start md:items-end md:gap-2">
					<h2 className="text-2xl md:text-3xl font-sans font-extrabold">About me</h2>
					<p className="md:text-lg font-mono">Find out what {"I'm"} all about!</p>
				</div>
			</FloatIntoScreen>

			<div className="grid-cols-8 md:grid-cols-12 grid mt-4">
				<div className="text-start col-span-8">
					<FloatIntoScreen direction="right" y={100} bounce={0.4}>
						<p className="text-lg font-semibold">Hey there, {"I'm"} Nathan Carter!</p>
					</FloatIntoScreen>
					<FloatIntoScreen direction="right" y={100} bounce={0.4}>
						<p className="font-mono">
							{"I've"} been diving deep into full stack web development at{' '}
							<a
								className="text-blue-500"
								href="https://and-element.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								&Element
							</a>{' '}
							for the past year, creating a wide variety of projects that keep me
							learning new things. My journey into the tech world started back in
							college with games development coding, but I quickly found my passion in
							building web applications. I put my head down, taught myself React, and
							landed my first job – and {"I've"} been loving every minute of it since.{' '}
							<br />
							<br /> Whether {"it's"} crafting smooth, responsive front-ends or
							tackling complex back-end logic, I thrive on creating seamless user
							experiences. When {"I'm"} not coding, you can find me at the gym
							power-lifting, playing video games, or hanging out with friends!
						</p>
					</FloatIntoScreen>
				</div>
				<div className="text-start col-span-4 justify-center hidden md:flex">
					<svg
						className="size-60 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 200 200"
						version="1.1"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						// xmlns:svgjs="http://svgjs.dev/svgjs"
					>
						<path
							fill="rgba(23, 23, 23, 1)"
							d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
						></path>
					</svg>
				</div>
			</div>
		</section>
	);
}
