import projects from '@/utils/projects';
import Card from '../components/Card';
import FloatIntoScreen from '../components/FloatIntoScreen';
import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '../components/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/pro-regular-svg-icons';
import BlurImage from '../components/BlurImage';

export default function Projects() {
	return (
		<div className="bg-neutral-100 overflow-hidden">
			<section
				id="projects"
				className="relative container mx-auto p-4 text-center py-8 mt-4 bg-neutral-100 z-30"
			>
				<FloatIntoScreen direction="left" y={100} bounce={0.4}>
					<div className="flex flex-col md:flex-row items-start md:items-end md:gap-2">
						<h1 className="text-2xl md:text-3xl font-sans font-extrabold">Projects</h1>
						<p className="md:text-lg font-mono">Explore all my projects!</p>
					</div>
				</FloatIntoScreen>
				<div className="grid grid-cols-12 mt-4 text-start gap-4">
					{projects.map((project, index) => {
						return (
							<div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
								<FloatIntoScreen className="h-full card-item">
									<div className="border-[1px] rounded-lg p-4 hover:border-neutral-400 bg-neutral-50 hover:bg-neutral-100 transition-all h-full relative grid">
										{!!project.hosted?.length ? (
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={`${project.hosted}`}
											>
												<BlurImage
													className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
													src={project.image}
													alt={project.title}
												/>
											</a>
										) : (
											<Tooltip text="No hosted link available">
												<BlurImage
													className={`rounded-md object-cover transition-all w-full h-[250px] max-h-[250px]`}
													src={project.image}
													alt={project.title}
												/>
											</Tooltip>
										)}

										<div className={`flex gap-1 items-center mt-2 `}>
											<h3
												className={`text-xl font-sans font-semibold line-clamp-1`}
											>
												{project.title}
											</h3>
											{!project.github?.length ? (
												<Tooltip
													text="No Github link available"
													className=""
												>
													<Image
														className="rounded-md h-5 w-5 opacity-30 "
														src={`/logos/github-logo.png`}
														alt={`Github logo`}
														width={50}
														height={50}
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
														className="rounded-md h-5 w-5"
														src={`/logos/github-logo.png`}
														alt={`Github logo`}
														width={50}
														height={50}
													/>
												</a>
											)}
											{!project.hosted?.length ? (
												<Tooltip
													text="No hosted link available"
													className="flex"
												>
													<FontAwesomeIcon
														className="opacity-30 size-5"
														icon={faGlobe}
													/>
												</Tooltip>
											) : (
												<a
													aria-label="Hosted link"
													className="flex"
													rel="noopener noreferrer"
													target="_blank"
													href={`${project.hosted}`}
												>
													<FontAwesomeIcon
														className="size-5"
														icon={faGlobe}
													/>
												</a>
											)}
										</div>
										<div className={`flex gap-2 my-1`}>
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
										<p className={`text-md font-mono`}>{project.description}</p>

										<Link href={`/projects/${project.slug}`}>
											<button className="mt-1 font-semibold mr-1 hover:text-blue-500 transition-all">
												View details
											</button>
										</Link>
									</div>
								</FloatIntoScreen>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
