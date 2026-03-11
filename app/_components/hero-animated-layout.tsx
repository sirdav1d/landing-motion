/** @format */

import {
	AnimatePresence,
	motion,
	type MotionValue,
} from 'motion/react';
import type { RefObject } from 'react';
import { HERO_SMOOTH_EASE, type HeroMediaClipValue } from '../constants/hero';
import type { CtaLink } from '../types/landing';
import { HeroCopy } from './hero-copy';
import { HeroVideo } from './hero-video';

type HeroAnimatedLayoutProps = {
	sectionRef: RefObject<HTMLElement | null>;
	isVideoDocked: boolean;
	sharedVideoLayoutId: string;
	mediaClipPath: MotionValue<HeroMediaClipValue>;
	mediaY: MotionValue<number>;
	mediaScale: MotionValue<number>;
	contentOpacity: MotionValue<number>;
	contentY: MotionValue<number>;
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
	revealInitial: false | { opacity: number; y: number };
	bottomVideoSrc: string;
	bottomPosterSrc: string;
	videoObjectPosition: string;
};

type HeroAnimatedLayoutGenericProps<
	TClipPath extends HeroMediaClipValue,
	TMediaY extends number,
	TMediaScale extends number,
	TContentOpacity extends number,
	TContentY extends number,
> = Omit<
	HeroAnimatedLayoutProps,
	'mediaClipPath' | 'mediaY' | 'mediaScale' | 'contentOpacity' | 'contentY'
> & {
	mediaClipPath: MotionValue<TClipPath>;
	mediaY: MotionValue<TMediaY>;
	mediaScale: MotionValue<TMediaScale>;
	contentOpacity: MotionValue<TContentOpacity>;
	contentY: MotionValue<TContentY>;
};

export function HeroAnimatedLayout<
	TClipPath extends HeroMediaClipValue,
	TMediaY extends number,
	TMediaScale extends number,
	TContentOpacity extends number,
	TContentY extends number,
>({
	sectionRef,
	isVideoDocked,
	sharedVideoLayoutId,
	mediaClipPath,
	mediaY,
	mediaScale,
	contentOpacity,
	contentY,
	headlineStart,
	headlineEnd,
	activeWord,
	primaryCta,
	secondaryCta,
	revealInitial,
	bottomVideoSrc,
	bottomPosterSrc,
	videoObjectPosition,
}: HeroAnimatedLayoutGenericProps<
	TClipPath,
	TMediaY,
	TMediaScale,
	TContentOpacity,
	TContentY
>) {
	return (
		<section
			id='hero'
			ref={sectionRef}
			className='relative text-foreground'>
			<div className='relative h-[300vh]'>
				<div className='sticky top-0 h-screen overflow-hidden'>
					<AnimatePresence initial={false}>
						{!isVideoDocked ? (
							<motion.div
								key='hero-shared-video'
								layoutId={sharedVideoLayoutId}
								layoutCrossfade={false}
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 1 }}
								transition={{
									layout: { duration: 0.95, ease: HERO_SMOOTH_EASE },
								}}
								style={{
									clipPath: mediaClipPath,
									y: mediaY,
									scale: mediaScale,
								}}
								className='hero-media-layer pointer-events-none absolute inset-0 z-10'>
								<HeroVideo
									src={bottomVideoSrc}
									posterSrc={bottomPosterSrc}
									objectPosition={videoObjectPosition}
								/>
							</motion.div>
						) : null}
					</AnimatePresence>

					<motion.div
						style={{ opacity: contentOpacity, y: contentY }}
						className='hero-content-layer relative z-20 mx-auto flex h-full max-w-[1320px] px-5 md:px-8 lg:px-10'>
						<div className='w-full max-w-[790px] pt-34 md:pt-38 lg:pt-42'>
							<HeroCopy
								headlineStart={headlineStart}
								headlineEnd={headlineEnd}
								activeWord={activeWord}
								primaryCta={primaryCta}
								secondaryCta={secondaryCta}
								withMotion
								revealInitial={revealInitial}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
