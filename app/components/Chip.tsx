'use client';

interface IChip {
	className?: string;
	text: string | React.ReactNode;
	startIcon?: React.ReactNode;
	disableAnimation?: boolean;
}

export default function Chip(props: IChip) {
	return (
		<div
			className={`flex gap-1 border-[1px] rounded-full p-4 ${
				!props.disableAnimation && 'hover:scale-105'
			}  transition-all bg-neutral-900  border-neutral-300 text-neutral-100 text-sm md:text-md font-mono px-4 py-1 ${
				!!props.className ? props.className : ''
			} relative`}
		>
			{props.startIcon}
			{props.text}
		</div>
	);
}
