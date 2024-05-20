'use client';

import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Card from './Card';
import FloatIntoScreen from './FloatIntoScreen';
import Image from 'next/image';
import Header from './Header';
import RecentWork from './RecentWork';
import AboutMe from './AboutMe';

const projects = [
	{
		hosted: 'https://www.revwise.co.uk/',
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		detailedDescription:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
	{
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
	{
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
	{
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
	{
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
	{
		image: '/work/revwise/revwise-cover-image.webp',
		title: 'RevWise',
		description: 'RevWise global Affiliate Management Agencies marketing website.',
		technologies: ['nextjs', 'contentful', 'framer-motion', 'tailwind'],
	},
];

export default function Homepage() {
	return (
		<div className="bg-neutral-100 overflow-hidden">
			<Header />
			<AboutMe />
			<RecentWork />
		</div>
	);
}
