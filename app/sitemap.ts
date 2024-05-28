import projects from '@/utils/projects';

export default async function generateSitemaps() {
	return [
		...projects?.map?.((post) => ({
			url: `https://nathan-carter.dev/projects/${post.slug}`,
			lastModified: new Date(Date.now()),
			changeFrequency: 'monthly',
			priority: 0.8,
		})),
		{
			url: 'https://nathan-carter.dev/projects',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://nathan-carter.dev',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	];
}
