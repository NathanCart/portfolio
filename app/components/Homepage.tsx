'use client';

import AboutMe from './AboutMe';
import Header from './Header';
import RecentWork from './RecentWork';

export default function Homepage() {
	return (
		<div className="bg-neutral-100 overflow-clip">
			{/* <Header /> */}
			<Header />
			<AboutMe />
			<RecentWork />
		</div>
	);
}
