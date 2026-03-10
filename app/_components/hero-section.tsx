/** @format */

'use client';

import {
	AnimatePresence,
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TextAnimate } from '@/components/ui/text-animate';
import type { CtaLink, HeroContent } from './landing-types';

type HeroSectionProps = HeroContent & {
	isVideoDocked?: boolean;
	sharedVideoLayoutId?: string;
};

type HeroCopyProps = {
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	description: string;
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
	proofPoints: string[];
	withMotion: boolean;
	revealInitial: false | { opacity: number; y: number };
};

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;
const DEFAULT_PROOF_POINTS = [
	'Sob medida',
	'Preço acessível',
	'Entrega em casa',
] as const;
const EXPAND_PHASE_END = 0.42;
const CONTENT_MOVE_START = 0.56;
const CONTENT_MOVE_END = 0.84;

function useRotatingWord(words: string[], shouldReduceMotion: boolean) {
	const [wordIndex, setWordIndex] = useState(0);

	useEffect(() => {
		if (shouldReduceMotion || words.length < 2) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setWordIndex((currentIndex) => {
				const nextIndex = currentIndex + 1;
				return nextIndex >= words.length ? 0 : nextIndex;
			});
		}, 2500);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [words, shouldReduceMotion]);

	return words[wordIndex] ?? words[0] ?? '';
}

function HeroTitle({
	headlineStart,
	headlineEnd,
	activeWord,
	animateWord,
}: {
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	animateWord: boolean;
}) {
	return (
		<h1 className='mt-10 max-w-[20ch] text-balance text-5xl font-light leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl'>
			{headlineStart}
			<br />
			{headlineEnd}{' '}
			<span className='inline-flex items-baseline gap-2 align-baseline'>
				{animateWord ? (
					<TextAnimate
						key={activeWord}
						as='span'
						by='character'
						animation='blurInUp'
						startOnView={false}
						duration={0.5}
						accessible={false}
						className='font-display text-[1.06em] font-light italic text-[#f2dfb6]'>
						{activeWord}
					</TextAnimate>
				) : (
					<span className='font-display text-[1.06em] font-light italic text-[#f2dfb6]'>
						{activeWord}
					</span>
				)}
			</span>
		</h1>
	);
}

function HeroCtas({
	primaryCta,
	secondaryCta,
}: {
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
}) {
	return (
		<div className='mt-9 flex flex-wrap items-center gap-4'>
			<a
				href={primaryCta.href}
				className='inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#f2dfb6] px-6 py-3 text-lg font-semibold text-[#0b1617] transition hover:bg-[#fff2d3]'>
				{primaryCta.label}
			</a>
			<a
				href={secondaryCta.href}
				className='inline-flex min-w-[190px] items-center justify-center rounded-full border border-foreground/72 px-6 py-3 text-lg font-semibold text-foreground transition hover:bg-white/10'>
				{secondaryCta.label}
			</a>
		</div>
	);
}

function HeroCopy({
	headlineStart,
	headlineEnd,
	activeWord,
	primaryCta,
	secondaryCta,
	withMotion,
	revealInitial,
}: HeroCopyProps) {
	if (!withMotion) {
		return (
			<>
				<HeroTitle
					headlineStart={headlineStart}
					headlineEnd={headlineEnd}
					activeWord={activeWord}
					animateWord={false}
				/>

				<HeroCtas
					primaryCta={primaryCta}
					secondaryCta={secondaryCta}
				/>
			</>
		);
	}

	return (
		<>
			<motion.div
				initial={revealInitial}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.12, duration: 0.62, ease: SMOOTH_EASE }}>
				<HeroTitle
					headlineStart={headlineStart}
					headlineEnd={headlineEnd}
					activeWord={activeWord}
					animateWord
				/>
			</motion.div>

			<motion.div
				initial={revealInitial}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.24, duration: 0.6, ease: SMOOTH_EASE }}>
				<HeroCtas
					primaryCta={primaryCta}
					secondaryCta={secondaryCta}
				/>
			</motion.div>
		</>
	);
}

export function HeroSection({
	headlineStart,
	headlineEnd,
	rotatingWords,
	description,
	primaryCta,
	secondaryCta,
	bottomVideoSrc,
	bottomPosterSrc,
	proofPoints = [...DEFAULT_PROOF_POINTS],
	videoObjectPosition = 'center 40%',
	isVideoDocked = false,
	sharedVideoLayoutId = 'hero-shared-video-frame',
}: HeroSectionProps) {
	const shouldReduceMotion = useReducedMotion() ?? false;
	const sectionRef = useRef<HTMLElement | null>(null);
	const activeWord = useRotatingWord(rotatingWords, shouldReduceMotion);
	const revealInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end end'],
	});

	const contentOpacity = useTransform(
		scrollYProgress,
		[0, EXPAND_PHASE_END, CONTENT_MOVE_START, CONTENT_MOVE_END, 1],
		[1, 1, 1, 0.08, 0],
	);
	const contentY = useTransform(
		scrollYProgress,
		[0, CONTENT_MOVE_START, CONTENT_MOVE_END, 1],
		[0, 0, -72, -112],
	);
	const mediaClipPath = useTransform(
		scrollYProgress,
		[0, 0.16, 0.3, EXPAND_PHASE_END, 1],
		[
			'inset(58% 3.5% 6% 3.5% round 34px)',
			'inset(40% 3.5% 5.8% 3.5% round 32px)',
			'inset(30% 2.8% 4.2% 2.8% round 24px)',
			'inset(0% 0% 0% 0% round 0px)',
			'inset(0% 0% 0% 0% round 0px)',
		],
	);
	const mediaY = useTransform(
		scrollYProgress,
		[0, EXPAND_PHASE_END, 1],
		[120, 0, 0],
	);
	const mediaScale = useTransform(
		scrollYProgress,
		[0, EXPAND_PHASE_END, 0.82, 1],
		[1, 1, 1.015, 1.02],
	);

	if (shouldReduceMotion) {
		return (
			<section
				id='hero'
				ref={sectionRef}
				className='relative overflow-hidden pb-14 pt-34 text-foreground md:pt-38'>
				<div className='relative mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
					<div className='max-w-[790px]'>
						<HeroCopy
							headlineStart={headlineStart}
							headlineEnd={headlineEnd}
							activeWord={activeWord}
							description={description}
							primaryCta={primaryCta}
							secondaryCta={secondaryCta}
							proofPoints={proofPoints}
							withMotion={false}
							revealInitial={revealInitial}
						/>
					</div>

					<div className='mt-12 overflow-hidden rounded-4xl'>
						<div className='relative aspect-19/10 w-full'>
							<video
								className='h-full w-full object-cover'
								style={{ objectPosition: videoObjectPosition }}
								autoPlay
								loop
								muted
								playsInline
								poster={bottomPosterSrc}
								preload='metadata'>
								<source
									src={bottomVideoSrc}
									type='video/mp4'
								/>
							</video>
						</div>
					</div>
				</div>
			</section>
		);
	}

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
								transition={{ layout: { duration: 0.95, ease: SMOOTH_EASE } }}
								style={{
									clipPath: mediaClipPath,
									y: mediaY,
									scale: mediaScale,
								}}
								className='hero-media-layer pointer-events-none absolute inset-0 z-10'>
								<video
									className='h-full w-full object-cover'
									style={{ objectPosition: videoObjectPosition }}
									autoPlay
									loop
									muted
									playsInline
									poster={bottomPosterSrc}
									preload='metadata'>
									<source
										src={bottomVideoSrc}
										type='video/mp4'
									/>
								</video>
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
								description={description}
								primaryCta={primaryCta}
								secondaryCta={secondaryCta}
								proofPoints={proofPoints}
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
