/** @format */

'use client';

import { useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
	HERO_CONTENT_OPACITY_STOPS,
	HERO_CONTENT_OPACITY_VALUES,
	HERO_CONTENT_Y_STOPS,
	HERO_CONTENT_Y_VALUES,
	HERO_EXPAND_PHASE_END,
	HERO_MEDIA_CLIP_STOPS,
	HERO_MEDIA_CLIP_VALUES,
	HERO_MEDIA_SCALE_STOPS,
	HERO_MEDIA_SCALE_VALUES,
	HERO_MEDIA_Y_VALUES,
	HERO_REVEAL_INITIAL_OFFSET_Y,
	HERO_SCROLL_OFFSETS,
} from '../constants/hero';
import { SHARED_VIDEO_LAYOUT_ID } from '../constants/landing';
import { useRotatingWord } from '../hooks/use-rotating-word';
import type { HeroContent } from '../types/landing';
import { HeroAnimatedLayout } from './hero-animated-layout';
import { HeroReducedMotionLayout } from './hero-reduced-motion-layout';

type HeroSectionProps = HeroContent & {
	isVideoDocked?: boolean;
	sharedVideoLayoutId?: string;
};

export function HeroSection({
	headlineStart,
	headlineEnd,
	rotatingWords,
	primaryCta,
	secondaryCta,
	bottomVideoSrc,
	bottomPosterSrc,
	videoObjectPosition = 'center 40%',
	isVideoDocked = false,
	sharedVideoLayoutId = SHARED_VIDEO_LAYOUT_ID,
}: HeroSectionProps) {
	const shouldReduceMotion = useReducedMotion() ?? false;
	const sectionRef = useRef<HTMLElement | null>(null);
	const activeWord = useRotatingWord(rotatingWords, shouldReduceMotion);
	const revealInitial = shouldReduceMotion
		? false
		: { opacity: 0, y: HERO_REVEAL_INITIAL_OFFSET_Y };

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: [...HERO_SCROLL_OFFSETS],
	});
	const contentOpacity = useTransform(
		scrollYProgress,
		[...HERO_CONTENT_OPACITY_STOPS],
		[...HERO_CONTENT_OPACITY_VALUES],
	);
	const contentY = useTransform(
		scrollYProgress,
		[...HERO_CONTENT_Y_STOPS],
		[...HERO_CONTENT_Y_VALUES],
	);
	const mediaClipPath = useTransform(
		scrollYProgress,
		[...HERO_MEDIA_CLIP_STOPS],
		[...HERO_MEDIA_CLIP_VALUES],
	);
	const mediaY = useTransform(
		scrollYProgress,
		[0, HERO_EXPAND_PHASE_END, 1],
		[...HERO_MEDIA_Y_VALUES],
	);
	const mediaScale = useTransform(
		scrollYProgress,
		[...HERO_MEDIA_SCALE_STOPS],
		[...HERO_MEDIA_SCALE_VALUES],
	);

	if (shouldReduceMotion) {
		return (
			<HeroReducedMotionLayout
				sectionRef={sectionRef}
				headlineStart={headlineStart}
				headlineEnd={headlineEnd}
				activeWord={activeWord}
				primaryCta={primaryCta}
				secondaryCta={secondaryCta}
				revealInitial={revealInitial}
				bottomVideoSrc={bottomVideoSrc}
				bottomPosterSrc={bottomPosterSrc}
				videoObjectPosition={videoObjectPosition}
			/>
		);
	}

	return (
		<HeroAnimatedLayout
			sectionRef={sectionRef}
			isVideoDocked={isVideoDocked}
			sharedVideoLayoutId={sharedVideoLayoutId}
			mediaClipPath={mediaClipPath}
			mediaY={mediaY}
			mediaScale={mediaScale}
			contentOpacity={contentOpacity}
			contentY={contentY}
			headlineStart={headlineStart}
			headlineEnd={headlineEnd}
			activeWord={activeWord}
			primaryCta={primaryCta}
			secondaryCta={secondaryCta}
			revealInitial={revealInitial}
			bottomVideoSrc={bottomVideoSrc}
			bottomPosterSrc={bottomPosterSrc}
			videoObjectPosition={videoObjectPosition}
		/>
	);
}
