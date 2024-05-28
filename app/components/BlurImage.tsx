import Image from 'next/image';
import fs from 'node:fs/promises';
import getPlaiceholder from '@plaiceholder/next';

export default async function BlurImage({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className?: string;
}) {
	const buffer = await fs.readFile(`./public${src}`);

	const { base64 } = await getPlaiceholder(buffer);
	return (
		<Image
			className={className}
			placeholder="blur"
			blurDataURL={base64}
			src={src}
			alt={alt}
			width={400}
			height={200}
		/>
	);
}
