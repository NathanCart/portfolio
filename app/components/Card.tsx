'use client';

import Image from 'next/image';
import Tooltip from './Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGlobe } from '@fortawesome/pro-regular-svg-icons';
import { useState } from 'react';
import FloatIntoScreen from './FloatIntoScreen';
import Link from 'next/link';
import BlurImage from './BlurImage';

interface ICard {
	slug: string;
	title: string;
	description: string;
	image: string;
	github?: string;
	hosted?: string;
	technologies: string[];
	detailedDescription?: string;
}

export default function Card(props: ICard) {
	return (
		<FloatIntoScreen className="h-full">
			<div className="border-[1px] rounded-lg p-4 hover:border-neutral-400 bg-neutral-50 hover:bg-neutral-100 transition-all h-full relative grid">
				{!!props.hosted?.length ? (
					<a target="_blank" rel="noopener noreferrer" href={`${props.hosted}`}>
						<Image
							className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
							src={props.image}
							alt={props.title}
							width={2000}
							height={250}
						/>
					</a>
				) : (
					<Tooltip text="No hosted link available">
						<Image
							className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
							src={props.image}
							alt={props.title}
							width={2000}
							height={250}
						/>
					</Tooltip>
				)}

				<div className={`flex gap-1 items-center mt-2 `}>
					<h3 className={`text-xl font-sans font-semibold line-clamp-1`}>
						{props.title}
					</h3>
					{!props.github?.length ? (
						<Tooltip text="No Github link available" className="">
							<Image
								className="rounded-md h-5 w-5 opacity-30 "
								src={`/logos/github-logo.png`}
								alt={`Github logo`}
								width={50}
								height={50}
							/>
						</Tooltip>
					) : (
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={`${props.github}`}
							className=""
						>
							<Image
								className="rounded-md h-5 w-5"
								src={`/logos/github-logo.png`}
								alt={`Github logo`}
								width={50}
								height={50}
							/>
						</a>
					)}
					{!props.hosted?.length ? (
						<Tooltip text="No hosted link available" className="flex">
							<FontAwesomeIcon className="opacity-30 size-5" icon={faGlobe} />
						</Tooltip>
					) : (
						<a
							aria-label="Hosted link"
							className="flex"
							rel="noopener noreferrer"
							target="_blank"
							href={`${props.hosted}`}
						>
							<FontAwesomeIcon className="size-5" icon={faGlobe} />
						</a>
					)}
				</div>
				<div className={`flex gap-2 my-1`}>
					{props.technologies.map((technology, index) => {
						return (
							<Tooltip
								key={index}
								text={
									technology
										?.split('.')[0]
										?.split('-')
										?.join(' ')
										.split('logo')[0]
								}
							>
								<Image
									className="rounded-md h-5 w-5"
									src={`/logos/${technology.toLowerCase()}`}
									alt={`${technology} logo`}
									width={0}
									height={0}
								/>
							</Tooltip>
						);
					})}
				</div>
				<p className={`text-md font-mono`}>{props.description}</p>

				<Link href={`/projects/${props.slug}`}>
					<button className="mt-1 font-semibold mr-1 hover:text-blue-500 transition-all">
						View details
					</button>
				</Link>
			</div>
		</FloatIntoScreen>
	);
}
