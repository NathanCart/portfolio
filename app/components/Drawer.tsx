'use client';
import React from 'react';

export default function Drawer({
	children,
	isOpen,
	setIsOpen,
}: {
	children?: React.ReactNode;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	return (
		<main
			className={
				'fixed overflow-hidden z-40 bg-gray-900 bg-opacity-25 top-0 left-0 w-full h-full transform ease-in-out ' +
				(isOpen
					? 'transition-opacity opacity-100 duration-500 translate-y-0'
					: 'transition-all delay-500 opacity-0 translate-y-full')
			}
		>
			<section
				className={
					'w-full h-full absolute bg-white shadow-xl duration-500 ease-in-out transition-all transform ' +
					(isOpen ? 'translate-y-0' : '-translate-y-full')
				}
				style={{ top: isOpen ? 0 : '-100%' }}
			>
				<article className="relative h-full">
					<div className="overflow-y-scroll h-full">{children}</div>
				</article>
			</section>
		</main>
	);
}
