/** @format */

'use client';

import Image from 'next/image';
import { useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

import { SHARED_VIDEO_LAYOUT_ID } from '../../../constants/landing';
import {
	DOCKED_VIDEO_HEIGHT_PX,
	DOCKED_VIDEO_WIDTH_PX,
	SOCIAL_PROOF_DOCK_TARGET_IN_VIEW_AMOUNT,
	SOCIAL_PROOF_DOCK_TARGET_IN_VIEW_MARGIN,
} from '../../../constants/social-proof';
import { isImageItem } from '../../../helpers/social-proof';
import type { SocialProofItem } from '../../../types/landing';
import { DockedVideo } from './docked-video';
import { FloatingItem } from './floating-item';
import { Headline } from './headline';

type SectionProps = {
	headline: string;
	items: SocialProofItem[];
	isVideoDocked?: boolean;
	onVideoDockChange?: (nextValue: boolean) => void;
	sharedVideoLayoutId?: string;
	heroVideoSrc?: string;
	heroVideoPosterSrc?: string;
	heroVideoObjectPosition?: string;
};

export function Section({
	headline,
	items,
	isVideoDocked = false,
	onVideoDockChange,
	sharedVideoLayoutId = SHARED_VIDEO_LAYOUT_ID,
	heroVideoSrc,
	heroVideoPosterSrc,
	heroVideoObjectPosition = 'center 40%',
}: SectionProps) {
	const isReducedMotion = useReducedMotion() ?? false;
	const dockTargetRef = useRef<HTMLDivElement | null>(null);
	const isDockZoneInView = useInView(dockTargetRef, {
		amount: SOCIAL_PROOF_DOCK_TARGET_IN_VIEW_AMOUNT,
		margin: SOCIAL_PROOF_DOCK_TARGET_IN_VIEW_MARGIN,
	});
	const imageItems = items.filter(isImageItem);

	useEffect(() => {
		onVideoDockChange?.(isDockZoneInView);
	}, [isDockZoneInView, onVideoDockChange]);

	return (
		<section
			id='social-proof'
			className='relative overflow-hidden pb-24 pt-10 text-foreground md:pb-30 md:pt-14'>
			<div className='relative mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<Headline
					headline={headline}
					isReducedMotion={isReducedMotion}
					className='mx-auto max-w-[14ch] text-center text-5xl font-light leading-[1.06] tracking-[-0.03em] md:hidden'
				/>

				<div className='relative mt-12 hidden h-[620px] md:block lg:h-[700px]'>
					<Headline
						headline={headline}
						isReducedMotion={isReducedMotion}
						className='pointer-events-none absolute left-1/2 top-[55%] z-30 w-full max-w-[20ch] -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-light leading-[1.06] tracking-[-0.03em]'
					/>

					<div className='pointer-events-none absolute inset-0 z-10'>
						<div
							ref={dockTargetRef}
							className='absolute left-1/2 top-[72%] -translate-x-1/2 -translate-y-1/2'
							style={{
								width: `${DOCKED_VIDEO_WIDTH_PX}px`,
								height: `${DOCKED_VIDEO_HEIGHT_PX}px`,
							}}
						/>

						<DockedVideo
							isVideoDocked={isVideoDocked}
							heroVideoSrc={heroVideoSrc}
							heroVideoPosterSrc={heroVideoPosterSrc}
							heroVideoObjectPosition={heroVideoObjectPosition}
							sharedVideoLayoutId={sharedVideoLayoutId}
						/>
					</div>

					<div className='absolute inset-0 z-20'>
						{items.map((item, index) => (
							<FloatingItem
								key={item.id}
								item={item}
								index={index}
								isReducedMotion={isReducedMotion}
							/>
						))}
					</div>
				</div>

				<div className='mt-10 grid grid-cols-2 gap-3 md:hidden'>
					{imageItems.map((item) => (
						<div
							key={item.id}
							className='relative aspect-square overflow-hidden rounded-2xl border border-border'>
							<Image
								src={item.imageSrc}
								alt={item.imageAlt}
								fill
								sizes='46vw'
								className='object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
