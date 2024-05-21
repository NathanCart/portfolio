import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		keyframes: {
			rotate: {
				'0%': {
					transform: 'rotate(0deg) scale(0.9)',
				},
				'50%': {
					transform: 'rotate(180deg) scale(1.2)',
				},
				'100%': {
					transform: 'rotate(360deg) scale(0.9)',
				},
			},

			blob: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-2px, 2px) scale(1.1) rotate(45deg) skew(1deg, 1deg)',
				},
				'25%': {
					transform: 'translate(2px, -2px) scale(0.9) rotate(90deg) skew(-1deg, -1deg)',
				},
				'37.5%': {
					transform: 'translate(-3px, 3px) scale(1.1) rotate(135deg) skew(1deg, 1deg)',
				},
				'50%': {
					transform: 'translate(3px, -3px) scale(0.95) rotate(180deg) skew(-1deg, -1deg)',
				},
				'62.5%': {
					transform: 'translate(-4px, 4px) scale(1.1) rotate(120deg) skew(1deg, 1deg)',
				},
				'75%': {
					transform: 'translate(4px, -4px) scale(0.92) rotate(90deg) skew(-1deg, -1deg)',
				},
				'87.5%': {
					transform: 'translate(-2px, 2px) scale(1.15) rotate(25deg) skew(1deg, 1deg)',
				},
			},
			blobTwo: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-3px, 3px) scale(1.05) rotate(50deg) skew(2deg, 1deg)',
				},
				'25%': {
					transform: 'translate(3px, -3px) scale(0.92) rotate(95deg) skew(-2deg, -1deg)',
				},
				'37.5%': {
					transform: 'translate(-4px, 4px) scale(1.08) rotate(130deg) skew(2deg, 2deg)',
				},
				'50%': {
					transform: 'translate(4px, -4px) scale(0.97) rotate(175deg) skew(-2deg, -2deg)',
				},
				'62.5%': {
					transform: 'translate(-5px, 5px) scale(1.09) rotate(125deg) skew(2deg, 1deg)',
				},
				'75%': {
					transform: 'translate(5px, -5px) scale(0.94) rotate(85deg) skew(-2deg, -1deg)',
				},
				'87.5%': {
					transform: 'translate(-3px, 3px) scale(1.12) rotate(30deg) skew(2deg, 1deg)',
				},
			},
			blobThree: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-2px, 1px) scale(1.12) rotate(40deg) skew(1deg, 2deg)',
				},
				'25%': {
					transform: 'translate(1px, -2px) scale(0.88) rotate(100deg) skew(-1deg, -2deg)',
				},
				'37.5%': {
					transform: 'translate(-1px, 2px) scale(1.07) rotate(140deg) skew(1deg, 2deg)',
				},
				'50%': {
					transform: 'translate(2px, -1px) scale(0.93) rotate(170deg) skew(-1deg, -2deg)',
				},
				'62.5%': {
					transform: 'translate(-2px, 1px) scale(1.08) rotate(115deg) skew(1deg, 2deg)',
				},
				'75%': {
					transform: 'translate(1px, -2px) scale(0.91) rotate(80deg) skew(-1deg, -2deg)',
				},
				'87.5%': {
					transform: 'translate(-1px, 2px) scale(1.13) rotate(20deg) skew(1deg, 2deg)',
				},
			},
			blobFour: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-2px, 1px) scale(1.12) rotate(40deg) skew(1deg, 2deg)',
				},
				'25%': {
					transform: 'translate(1px, -2px) scale(0.88) rotate(100deg) skew(-1deg, -2deg)',
				},
				'37.5%': {
					transform: 'translate(-1px, 2px) scale(1.07) rotate(140deg) skew(1deg, 2deg)',
				},
				'50%': {
					transform: 'translate(2px, -1px) scale(0.93) rotate(170deg) skew(-1deg, -2deg)',
				},
				'62.5%': {
					transform: 'translate(-2px, 1px) scale(1.08) rotate(115deg) skew(1deg, 2deg)',
				},
				'75%': {
					transform: 'translate(1px, -2px) scale(0.91) rotate(80deg) skew(-1deg, -2deg)',
				},
				'87.5%': {
					transform: 'translate(-1px, 2px) scale(1.13) rotate(20deg) skew(1deg, 2deg)',
				},
			},
			blobFive: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-4px, 4px) scale(1.08) rotate(60deg) skew(2deg, 2deg)',
				},
				'25%': {
					transform: 'translate(4px, -4px) scale(0.95) rotate(110deg) skew(-2deg, -2deg)',
				},
				'37.5%': {
					transform: 'translate(-5px, 5px) scale(1.1) rotate(150deg) skew(2deg, 1deg)',
				},
				'50%': {
					transform: 'translate(5px, -5px) scale(0.96) rotate(160deg) skew(-2deg, -1deg)',
				},
				'62.5%': {
					transform: 'translate(-3px, 3px) scale(1.07) rotate(110deg) skew(2deg, 2deg)',
				},
				'75%': {
					transform: 'translate(3px, -3px) scale(0.93) rotate(95deg) skew(-2deg, -2deg)',
				},
				'87.5%': {
					transform: 'translate(-4px, 4px) scale(1.14) rotate(35deg) skew(2deg, 1deg)',
				},
			},
			blobSix: {
				'0%, 100%': {
					transform: 'translate(0, 0) scale(1) rotate(0deg) skew(0deg, 0deg)',
				},
				'12.5%': {
					transform: 'translate(-3px, 1px) scale(1.09) rotate(55deg) skew(1deg, 1deg)',
				},
				'25%': {
					transform: 'translate(3px, -1px) scale(0.91) rotate(105deg) skew(-1deg, -1deg)',
				},
				'37.5%': {
					transform: 'translate(-2px, 2px) scale(1.12) rotate(145deg) skew(1deg, 1deg)',
				},
				'50%': {
					transform: 'translate(2px, -2px) scale(0.94) rotate(185deg) skew(-1deg, -1deg)',
				},
				'62.5%': {
					transform: 'translate(-3px, 3px) scale(1.1) rotate(130deg) skew(1deg, 2deg)',
				},
				'75%': {
					transform: 'translate(3px, -3px) scale(0.9) rotate(85deg) skew(-1deg, -2deg)',
				},
				'87.5%': {
					transform: 'translate(-2px, 2px) scale(1.16) rotate(25deg) skew(1deg, 2deg)',
				},
			},
		},
		animation: {
			spinOnce: 'rotate 0.5s linear forwards',
			spin: 'rotate 10s linear infinite',
			quickSpin: 'rotate 1s linear infinite',
			blob: 'blob 15s infinite linear',
			blobTwo: 'blobTwo 13s infinite linear',
			blobThree: 'blobThree 17s infinite linear',
			blobFour: 'blobFour 11s infinite linear',
			blobFive: 'blobFive 12s infinite linear',
			blobSix: 'blobSix 16s infinite linear',
		},
	},
	plugins: [],
};
export default config;
