/** @format */

import Image from 'next/image';
import type { SocialProofImageItem } from '../types/landing';

type SocialProofImageCardProps = {
	item: SocialProofImageItem;
};

export function SocialProofImageCard({ item }: SocialProofImageCardProps) {
	return (
		<div className='relative h-full w-full overflow-visible'>
			<div className='relative h-full w-full overflow-hidden rounded-[0.9rem] shadow-[0_16px_34px_rgba(0,0,0,0.22)]'>
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
