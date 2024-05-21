import armaKarmaVeygo from './aramaKarmaVeygo';
import revwise from './revwise';

export interface Project {
	github?: string;
	seoTitle: string;
	seoDescription: string;
	slug: string;
	hosted: string;
	image: string;
	title: string;
	description: string;
	what: string;
	how: string;
	conclusion: string;
	technologies: string[];
}

export function getBlogBySlug(slug: string): Project | null {
	switch (slug) {
		case 'revwise':
			return revwise;
		case 'arma-karma-veygo':
			return armaKarmaVeygo;
		default:
			return null;
	}
}

const projects: Project[] = [revwise, armaKarmaVeygo];

export default projects;
