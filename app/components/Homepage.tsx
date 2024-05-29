'use client';

import AboutMe from './AboutMe';
import Header from './Header';
import Matter from './Matter';
import RecentWork from './RecentWork';

export default function Homepage() {
	return (
		<div className="bg-neutral-100 overflow-hidden">
			<Header />
			<Matter />
			<AboutMe />
			<RecentWork />
		</div>
	);
}
