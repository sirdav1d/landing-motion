/** @format */

import { motion } from 'motion/react';
import {
	SOCIAL_PROOF_ITEM_BASE_DURATION,
	SOCIAL_PROOF_ITEM_DELAY_STEP,
	SOCIAL_PROOF_ITEM_DURATION_STEP,
	SOCIAL_PROOF_ITEM_FLOAT_SEQUENCE,
	SOCIAL_PROOF_ITEM_INITIAL_OFFSET_Y,
	SOCIAL_PROOF_ITEM_INITIAL_SCALE,
	SOCIAL_PROOF_ITEM_VIEWPORT_AMOUNT,
} from '../../../constants/social-proof';
import type { SocialProofItem } from '../../../types/landing';
import { ImageCard } from './image-card';

type FloatingItemProps = {
	item: SocialProofItem;
	index: number;
	isReducedMotion: boolean;
};

export function FloatingItem({
	item,
	index,
	isReducedMotion,
}: FloatingItemProps) {
	return (
		<motion.article
			initial={
				isReducedMotion
					? false
					: {
							opacity: 0,
							scale: SOCIAL_PROOF_ITEM_INITIAL_SCALE,
							y: SOCIAL_PROOF_ITEM_INITIAL_OFFSET_Y,
						}
			}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, amount: SOCIAL_PROOF_ITEM_VIEWPORT_AMOUNT }}
			animate={
				isReducedMotion
					? undefined
					: {
							y: SOCIAL_PROOF_ITEM_FLOAT_SEQUENCE,
						}
			}
			transition={{
				duration: isReducedMotion
					? 0
					: SOCIAL_PROOF_ITEM_BASE_DURATION +
						SOCIAL_PROOF_ITEM_DURATION_STEP * index,
				ease: 'easeInOut',
				delay: index * SOCIAL_PROOF_ITEM_DELAY_STEP,
			}}
			className='absolute overflow-visible'
			style={{
				left: item.left,
				top: item.top,
				width: `${item.width}px`,
				height: `${item.height}px`,
			}}>
			{item.kind === 'logo' ? null : <ImageCard item={item} />}
		</motion.article>
	);
}
