'use client';

import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Card from './Card';
import FloatIntoScreen from './FloatIntoScreen';
import Image from 'next/image';
import Header from './Header';

const projects = [
	{
		hosted: 'https://www.revwise.co.uk/',
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		detailedDescription:
			'RevWise is a global Affiliate Management Agencies marketing website. I was responsible for developing the entirety of the website. The website is built using Next.js and Tailwind CSS. Advanced animations were created using Framer Motion. The website is fully responsive and has a custom CMS to manage the content. The website is hosted on Vercel and uses Contentful as a CMS.',
		technologies: [
			'nextjs-logo.svg',
			'contentful-logo.svg',
			'framer-motion-logo.svg',
			'tailwind-logo.svg',
		],
	},
	{
		hosted: 'https://veygo-item-cover.armakarma.insure/item-selection',
		image: '/work/arma-karma/arma-karma-cover.webp',
		title: 'Arma Karma/Veygo Journey',
		description: 'Arma Karma/Veygo Journey is an insurance journey web application.',
		detailedDescription:
			'Arma Karma/Veygo Journey is an insurance journey website where users can select items to insure. My role was to develop all the frontend components and integrate them with the existing backend. I also expanded the backend to support the new frontend categories. The website is split using environment variables to allow for different configurations for different clients. For example, we have a different configuration for Veygo and Arma Karma for different styling.',
		technologies: ['nextjs-logo.svg', 'mui-logo.png', 'nodejs-logo.svg', 'express-logo.svg'],
	},
];

export default function RecentWork() {
	return (
		<section
			id="projects"
			className="relative container mx-auto p-4 text-center py-8 bg-neutral-100 z-30"
		>
			<FloatIntoScreen direction="left" y={100} bounce={0.4}>
				<div className="flex flex-col md:flex-row items-start md:items-end md:gap-2">
					<h2 className="text-2xl md:text-3xl font-sans font-extrabold">
						Recent projects
					</h2>
					<p className="md:text-lg font-mono">Explore my most recent projects!</p>
				</div>
			</FloatIntoScreen>

			<div className="grid grid-cols-12 mt-4 text-start gap-4">
				{projects.map((project, index) => {
					return (
						<div key={index} className="col-span-12 md:col-span-4">
							<Card {...project} />
						</div>
					);
				})}
			</div>
		</section>
	);
}
