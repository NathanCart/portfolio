import projects from '@/utils/projects';
import Card from '../components/Card';
import FloatIntoScreen from '../components/FloatIntoScreen';

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
								<Card {...project} />
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
