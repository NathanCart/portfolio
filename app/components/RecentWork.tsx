'use client';

import projects from '@/utils/projects';
import Card from './Card';
import FloatIntoScreen from './FloatIntoScreen';
import Link from 'next/link';

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
						<div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
							<Card {...project} />
						</div>
					);
				})}
			</div>
			<Link href="/projects">
				<p className="text-xl md:text-2xl font-sans font-semibold text-start mt-4 hover:text-blue-500">
					View all
				</p>
			</Link>
		</section>
	);
}
