import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Nathan Carter Web Developer',
	description: 'Nathan Carter is a full-stack developer based in the UK.',
	alternates: {
		canonical: '',
	},
};

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="z-30 container mx-auto p-4 relative h-full flex flex-col justify-center">
				<nav className="absolute top-4 left-0 font-bold flex gap-4 md:gap-8 px-4">
					<Link href="/#about-me">
						<p className="text-lg md:text-2xl font-mono transition-all hover:text-blue-500">
							About
						</p>
					</Link>
					<Link href="/#experience">
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
			</div>
			{children}
		</>
	);
}
