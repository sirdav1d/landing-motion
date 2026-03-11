/** @format */

import { AnimatePresence, motion } from 'motion/react';
import {
	DOCKED_VIDEO_HEIGHT_PX,
	DOCKED_VIDEO_WIDTH_PX,
	SOCIAL_PROOF_DOCKED_VIDEO_LAYOUT_TRANSITION,
} from '../constants/social-proof';
import { HeroVideo } from './hero-video';

type SocialProofDockedVideoProps = {
	isVideoDocked: boolean;
	heroVideoSrc?: string;
	heroVideoPosterSrc?: string;
	heroVideoObjectPosition: string;
	sharedVideoLayoutId: string;
};

export function SocialProofDockedVideo({
	isVideoDocked,
	heroVideoSrc,
	heroVideoPosterSrc,
	heroVideoObjectPosition,
	sharedVideoLayoutId,
}: SocialProofDockedVideoProps) {
	return (
		<AnimatePresence
			initial={false}
			mode='sync'>
			{isVideoDocked && heroVideoSrc ? (
				<motion.div
					key='section-two-shared-video'
					layoutId={sharedVideoLayoutId}
					layoutCrossfade={false}
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 1 }}
					transition={SOCIAL_PROOF_DOCKED_VIDEO_LAYOUT_TRANSITION}
					className='absolute left-1/2 top-[90%] z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl'
					style={{
						width: `${DOCKED_VIDEO_WIDTH_PX}px`,
						height: `${DOCKED_VIDEO_HEIGHT_PX}px`,
					}}>
					<HeroVideo
						src={heroVideoSrc}
						posterSrc={heroVideoPosterSrc}
						objectPosition={heroVideoObjectPosition}
					/>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
