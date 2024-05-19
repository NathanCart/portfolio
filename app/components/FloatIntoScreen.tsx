'use client';

import { Variants, motion } from 'framer-motion';

interface IFloatIntoScreen {
	y?: number;
	bounce?: number;
	children: React.ReactNode;
	direction?: 'left' | 'right' | 'top' | 'bottom';
	bringToFront?: boolean;
	className?: string;
}

export default function FloatIntoScreen(props: IFloatIntoScreen) {
	const { direction = 'bottom' } = props;
	const variants: Variants = {
		offscreen: {
			y:
				direction === 'bottom'
					? !!props.y
						? props.y
						: 150
					: direction === 'top'
					? !!props.y
						? -props.y
						: -150
					: 0,
			x:
				direction === 'right'
					? !!props.y
						? props.y
						: 150
					: direction === 'left'
					? !!props.y
						? -props.y
						: -150
					: 0,
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: 'spring',
				bounce: !!props.bounce ? props.bounce : 0.2,
				duration: 0.8,
			},
		},
	};

	return (
		<motion.div
			className={`${props.bringToFront ? 'z-20 relative' : ''} ${
				!!props.className?.length ? props.className : ''
			}`}
			initial="offscreen"
			whileInView="onscreen"
			variants={variants}
			viewport={{ once: true, amount: 0 }}
		>
			{props.children}
		</motion.div>
	);
}
