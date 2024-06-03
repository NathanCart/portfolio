'use client';

import { useState } from 'react';
import FloatIntoScreen from './FloatIntoScreen';
import Image from 'next/image';
import Chip from './Chip';
import Tooltip from './Tooltip';

const skills = [
	{ skill: 'react-logo.svg', link: 'https://react.dev/' },
	{ skill: 'nextjs-logo.svg', link: 'https://nextjs.org/' },
	{ skill: 'nodejs-logo.svg', link: 'https://nodejs.org/en' },
	{ skill: 'mongodb-logo.svg', link: 'https://www.mongodb.com' },
	{ skill: 'express-logo.svg', link: 'https://expressjs.com/' },
	{ skill: 'mui-logo.svg', link: 'https://mui.com/' },
	{
		skill: 'tailwind-logo.svg',
		link: 'https://tailwindcss.com',
	},
	{ skill: 'tina-logo.svg', link: 'https://tina.io/' },
	{ skill: 'contentful-logo.svg', link: 'https://www.contentful.com/get-started/' },
	{ skill: 'framer-motion-logo.svg', link: 'https://www.framer.com/motion/' },
];

export default function AboutMe() {
	return (
		<section className="relative container mx-auto p-4 md:py-16 mt-4 text-center py-8 bg-neutral-100 z-30 border-y-2">
			<div id="about-me">
				<FloatIntoScreen direction="left" y={100} bounce={0.4}>
					<div className="flex flex-col md:flex-row items-start md:items-end md:gap-2">
						<h2 className="text-2xl md:text-3xl font-sans font-extrabold">About me</h2>
						<p className="md:text-lg font-mono">Find out what {"I'm"} all about!</p>
					</div>
				</FloatIntoScreen>

				<div className="grid-cols-8 md:grid-cols-12 grid mt-4">
					<div className="text-start col-span-8">
						<FloatIntoScreen direction="left" y={100} bounce={0.4}>
							<div className="mb-4 flex gap-2 items-end">
								<a
									href="https://github.com/NathanCart"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										className="rounded-md size-8 hover:scale-105 transition-all"
										src={`/logos/github-logo.png`}
										alt={`Github logo`}
										width={100}
										height={100}
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/nathan-carter-782725297/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										className="rounded-md size-8 hover:scale-105 transition-all"
										src={`/logos/linkedin-logo.svg`}
										alt={`Github logo`}
										width={100}
										height={100}
									/>
								</a>
								{/* TODO Add CV Link */}
								{/* <Chip text="View CV" className="cursor-pointer" /> */}
							</div>
						</FloatIntoScreen>

						<FloatIntoScreen direction="right" y={100} bounce={0.4}>
							<p className="text-lg font-semibold">
								Hey there, {"I'm"} Nathan Carter!
							</p>
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
								college with games development coding, but I quickly found my
								passion in building web applications. I put my head down, taught
								myself React, and landed my first job – and {"I've"} been loving
								every minute of it since. <br />
								<br /> Whether {"it's"} crafting smooth, responsive front-ends or
								tackling complex back-end logic, I thrive on creating seamless user
								experiences. When {"I'm"} not coding, you can find me with my
								partner, at the gym , playing video games or hanging out with
								friends!
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
				<FloatIntoScreen direction="left" y={100} bounce={0.4}>
					<div
						className="flex flex-col md:flex-row items-start text-start md:items-end md:gap-2 mt-4"
						id="experience"
					>
						<h2 className="text-2xl md:text-3xl font-sans font-extrabold">
							Company Experience
						</h2>

						<p className="md:text-md font-mono">
							Discover the amazing companies {"I've"} worked with!
						</p>
					</div>

					<div className="flex gap-2 max-w-2xl flex-wrap mt-4">
						<a
							className="flex-shrink-0"
							href="https://ballenstudios.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="Ballen Studios" />
						</a>
						<a
							className="flex-shrink-0 cursor-pointer"
							href="https://merlincloud.ai"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="Merlin Cloud" />
						</a>
						<a
							className="flex-shrink-0 cursor-pointer"
							href="https://www.pmi.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="Philip Morris" />
						</a>
						<a
							className="flex-shrink-0 cursor-pointer"
							href="https://and-element.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="And Element" />
						</a>
						<a
							className="flex-shrink-0 cursor-pointer"
							href="https://www.ajg.com/uk"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="Gallagher" />
						</a>
						<a
							className="flex-shrink-0 cursor-pointer"
							href="https://armakarma.insure"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Chip text="Arma Karma" className="cursor-pointer shrink-0" />
						</a>

						<Chip text="And More..." disableAnimation />
					</div>
				</FloatIntoScreen>
				<FloatIntoScreen direction="right" y={100} bounce={0.4}>
					<div
						className="flex flex-col md:flex-row items-start text-start md:items-end md:gap-2 mt-3"
						id="experience"
					>
						<h2 className="mt-4 text-xl md:text-2xl font-sans font-extrabold">
							Skills
						</h2>

						<p className="md:text-md font-mono">
							Some of the skills {"I've"} picked up along the way!
						</p>
					</div>

					<div className="flex gap-2 max-w-2xl flex-wrap mt-4">
						<div className={`flex flex-wrap gap-2 md:gap-4 my-1`}>
							{skills.map((technology, index) => {
								return (
									<Tooltip
										className="shrink-0 hover:scale-110 transition-all"
										key={index}
										text={
											technology.skill
												?.split('.')[0]
												?.split('-')
												?.join(' ')
												.split('logo')[0]
										}
									>
										<a
											rel="noopener noreferrer"
											target="_blank"
											href={technology.link}
										>
											<Image
												className="rounded-md size-6 md:size-8"
												src={`/logos/${technology.skill.toLowerCase()}`}
												alt={`${technology} logo`}
												width={0}
												height={0}
											/>
										</a>
									</Tooltip>
								);
							})}
						</div>
					</div>
				</FloatIntoScreen>
			</div>
		</section>
	);
}
