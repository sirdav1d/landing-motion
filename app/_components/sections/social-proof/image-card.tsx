/** @format */

import Image from 'next/image';
import type { SocialProofImageItem } from '../../../types/landing';

type ImageCardProps = {
	item: SocialProofImageItem;
};

export function ImageCard({ item }: ImageCardProps) {
	return (
		<div className='relative h-full w-full overflow-visible'>
			<div className='relative h-full w-full overflow-hidden rounded-[0.9rem] shadow-xl'>
				<Image
					src={item.imageSrc}
					alt={item.imageAlt}
					fill
					sizes='(min-width: 1280px) 220px, 180px'
					className='object-cover'
				/>
			</div>
		</div>
	);
}
