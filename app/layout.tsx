import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import IconProvider from './components/IconProvider';

export const metadata: Metadata = {
	title: 'Nathan Carter Web Developer',
	description: 'Nathan Carter is a full-stack developer based in the UK.',
	alternates: {
		canonical: '',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<IconProvider>
				<body className="min-h-screen bg-neutral-100">{children}</body>
			</IconProvider>
		</html>
	);
}
