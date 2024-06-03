import BlurImage from '@/app/components/BlurImage';
import FloatIntoScreen from '@/app/components/FloatIntoScreen';
import Tooltip from '@/app/components/Tooltip';
import projects, { getBlogBySlug } from '@/utils/projects';
import { faGlobe } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const project = getBlogBySlug(params.slug);
	return {
		title: project?.seoTitle,
		description: project?.seoDescription,
		openGraph: {
			title: project?.seoTitle,
			description: project?.seoDescription,
		},
		twitter: {
			title: project?.seoTitle,
			description: project?.seoDescription,
		},
	};
}

export async function generateStaticParams() {
	const allProjects = projects;

	return allProjects?.map((project) => ({
		slug: project.slug,
	}));
}

export default function Project({ params }: { params: { slug: string } }) {
	const project = getBlogBySlug(params.slug);

	if (!project) {
		return (
			<div className="bg-neutral-100 h-full">
				<div className="z-30 container mx-auto p-4 relative h-full flex gap-4 flex-col justify-center mt-4">
					<p>Project not found</p>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-neutral-100 h-full">
			<div className="z-30 container mx-auto p-4 relative h-full flex gap-4 flex-col justify-center mt-4">
				<FloatIntoScreen direction="left" y={150} bounce={0.4}>
					<div className="flex gap-2  md:mt-6 mb-1">
						{!project.github?.length ? (
							<Tooltip text="No Github link available" className="">
								<Image
									className="rounded-md size-7 opacity-30 "
									src={`/logos/github-logo.png`}
									alt={`Github logo`}
									width={100}
									height={100}
								/>
							</Tooltip>
						) : (
							<a
								rel="noopener noreferrer"
								target="_blank"
								href={`${project.github}`}
								className=""
							>
								<Image
									className="rounded-md size-7"
									src={`/logos/github-logo.png`}
									alt={`Github logo`}
									width={100}
									height={100}
								/>
							</a>
						)}
						{!project.hosted?.length ? (
							<Tooltip text="No hosted link available" className="flex">
								<FontAwesomeIcon className="opacity-30 size-7" icon={faGlobe} />
							</Tooltip>
						) : (
							<a
								aria-label="Hosted link"
								className="flex"
								rel="noopener noreferrer"
								target="_blank"
								href={`${project.hosted}`}
							>
								<FontAwesomeIcon className="size-7" icon={faGlobe} />
							</a>
						)}
					</div>
					<h1 className="text-2xl md:text-3xl font-sans font-extrabold ">
						{project.title}
					</h1>
				</FloatIntoScreen>
				<div className="w-[400px] max-w-full">
					{!project.hosted?.length ? (
						<FloatIntoScreen direction="right" y={100} bounce={0.6}>
							<Tooltip text="No hosted link available" className="flex">
								<BlurImage
									className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
									src={project.image}
									alt={project.title}
								/>
							</Tooltip>
						</FloatIntoScreen>
					) : (
						<a target="_blank" rel="noopener noreferrer " href={`${project.hosted}`}>
							<FloatIntoScreen direction="right" y={100} bounce={0.6}>
								<BlurImage
									className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
									src={project.image}
									alt={project.title}
								/>
							</FloatIntoScreen>
						</a>
					)}
					{!!project.hosted?.length ? (
						<FloatIntoScreen direction="right" y={100} bounce={0.6}>
							<a target="_blank" rel="noopener noreferrer" href={project.hosted}>
								<button className="mt-2 bg-neutral-900 rounded-full border-neutral-300 hover:scale-105 transition-all text-sm md:text-md font-mono px-4 py-1 text-white font-semibold mr-1 ">
									View website
								</button>
							</a>
						</FloatIntoScreen>
					) : (
						<></>
					)}
				</div>

				<div className="max-w-2xl flex flex-col gap-4">
					<FloatIntoScreen y={120} bounce={0.3}>
						<div className={`flex gap-2`}>
							{project.technologies.map((technology, index) => {
								return (
									<Tooltip
										key={index}
										text={
											technology
												?.split('.')[0]
												?.split('-')
												?.join(' ')
												.split('logo')[0]
										}
									>
										<Image
											className="rounded-md h-5 w-5"
											src={`/logos/${technology.toLowerCase()}`}
											alt={`${technology} logo`}
											width={0}
											height={0}
										/>
									</Tooltip>
								);
							})}
						</div>
					</FloatIntoScreen>

					<FloatIntoScreen y={120} bounce={0.3}>
						<section>
							<h2 className=" md:text-lg font-sans font-semibold">
								What{"'s"} {project.title}
							</h2>
							<p className="font-mono text-sm md:text-md">{project.what}</p>
						</section>
						<section>
							<h2 className="text-lg font-sans font-semibold">Strategy</h2>
							<p className="font-mono text-sm md:text-md">{project.how}</p>
						</section>
						<section>
							<h2 className="text-lg font-sans font-semibold">Conclusion</h2>
							<p className="font-mono text-sm md:text-md">{project.conclusion}</p>
						</section>
					</FloatIntoScreen>
				</div>
			</div>
		</div>
	);
}
