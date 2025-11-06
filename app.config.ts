/*
░██████╗████████╗██╗░░░██╗██████╗░██╗░█████╗░  ███████╗██████╗░███████╗██╗░██████╗░██╗░░██╗████████╗
██╔════╝╚══██╔══╝██║░░░██║██╔══██╗██║██╔══██╗  ██╔════╝██╔══██╗██╔════╝██║██╔════╝░██║░░██║╚══██╔══╝
╚█████╗░░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  █████╗░░██████╔╝█████╗░░██║██║░░██╗░███████║░░░██║░░░
░╚═══██╗░░░██║░░░██║░░░██║██║░░██║██║██║░░██║  ██╔══╝░░██╔══██╗██╔══╝░░██║██║░░╚██╗██╔══██║░░░██║░░░
██████╔╝░░░██║░░░╚██████╔╝██████╔╝██║╚█████╔╝  ██║░░░░░██║░░██║███████╗██║╚██████╔╝██║░░██║░░░██║░░░
╚═════╝░░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░

Nuxt 4 Boilerplate
@author: Studio Freight
*/

import { generateShades } from './shared/sass-utils/utils';

interface AppConfig {
	title: string;
	ssr: boolean;
	storyblok: {
		enabled: boolean;
		settings?: string;
		forceDraft?: boolean;
		apiOptions: {
			region?: string;
		};
	};
	three: {
		enabled: boolean;
		options: {
			alpha: boolean;
			antialias: boolean;
			stencil: boolean;
			depth: boolean;
			powerPreference: string;
			preserveDrawingBuffer: boolean;
		};
	};
	fonts: {
		devtools: boolean;
		assets?: {
			prefix: string;
		};
		defaults: {
			weights: number[];
		};
		families: {
			name: string;
			provider?: string;
			src?: string;
		}[];
	};
	link: {
		prefetch: string;
	};
}

// Define base colors and generate their shades
const colors: any = generateShades({
	black: '#080808',
	'off-white': '#F8F6EF',
	white: '#fffdfd',
	yellow: '#FFD417',
	teal: '#7CE7CF',
});

// Define light and dark themes using generated colors
const themes: any = {
	light: {
		bg: colors['white'],
		fg: colors['black'],
		contrast: colors['yellow'],
	},
	dark: {
		bg: colors['black'],
		fg: colors['white'],
		contrast: colors['yellow'],
	},
};

// Define responsive design breakpoints for layouts
const breakpoints: any = {
	mobile: 960,
	wide: 1720,
};

// Define grid system with columns, gap, and margin settings
const grid: any = {
	columns: [4, 12],
	gap: [8, 8],
	margin: [32, 32],
};

// Define global spacers
const spacers: any = [2, 4, 8, 16, 24, 32, 48, 64, 96, 128];

// Application-level configuration (SSR, prefetching, etc.)
export const app: AppConfig = {
	title: 'Browser Cash',
	ssr: false,
	storyblok: {
		enabled: true,
		forceDraft: process.env.STORYBLOK_FORCE_DRAFT === 'true',
		settings: 'global', // true if global settings must be loaded before the app is mounted
		apiOptions: {
			region: 'eu',
		},
	},
	three: {
		enabled: false,
		options: {
			alpha: false,
			antialias: false,
			stencil: false,
			depth: false,
			powerPreference: 'high-performance',
			preserveDrawingBuffer: false,
		},
	},
	fonts: {
		devtools: false,
		defaults: {
			weights: [400, 500],
		},
		families: [
			{
				name: 'PPNeueMontreal-Regular',
				provider: 'local',
				src: '/fonts/PPNeueMontreal-Regular.woff2',
			},
			{
				name: 'PPNeueMontreal-Medium',
				provider: 'local',
				src: '/fonts/PPNeueMontreal-Medium.woff2',
			},
			{
				name: 'PPNeueMachina-InktrapRegular',
				provider: 'local',
				src: '/fonts/PPNeueMachina-InktrapRegular.woff2',
			},
		],
	},
	link: {
		prefetch: 'visibility', // nuxt default
	},
};

// Export the configuration object for use throughout SCSS
export default {
	colors,
	themes,
	breakpoints,
	spacers,
	grid,
};
