/** @format */

'use client';

import Image from 'next/image';
import {
	AnimatePresence,
	motion,
	useInView,
	useReducedMotion,
} from 'motion/react';
import { useEffect, useRef } from 'react';

import type { SocialProofImageItem, SocialProofItem } from './landing-types';

type SocialProofSectionProps = {
	headline: string;
	items: SocialProofItem[];
	isVideoDocked?: boolean;
	onVideoDockChange?: (nextValue: boolean) => void;
	sharedVideoLayoutId?: string;
	heroVideoSrc?: string;
	heroVideoPosterSrc?: string;
	heroVideoObjectPosition?: string;
};

function isImageItem(item: SocialProofItem): item is SocialProofImageItem {
	return item.kind === 'image';
}

function SocialProofImageCard({ item }: { item: SocialProofImageItem }) {
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

export function SocialProofSection({
	headline,
	items,
	isVideoDocked = false,
	onVideoDockChange,
	sharedVideoLayoutId = 'hero-shared-video-frame',
	heroVideoSrc,
	heroVideoPosterSrc,
	heroVideoObjectPosition = 'center 40%',
}: SocialProofSectionProps) {
	const shouldReduceMotion = useReducedMotion();
	const dockTargetRef = useRef<HTMLDivElement | null>(null);
	const isDockTargetInView = useInView(dockTargetRef, {
		amount: 0.45,
		margin: '-8% 0px -22% 0px',
	});
	const imageItems = items.filter(isImageItem);

	useEffect(() => {
		onVideoDockChange?.(isDockTargetInView);
	}, [isDockTargetInView, onVideoDockChange]);

	return (
		<section
			id='social-proof'
			className='relative overflow-hidden pb-24 pt-10 text-foreground md:pb-30 md:pt-14'>
			<div className='relative mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<motion.h2
					initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.45 }}
					transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
					className='mx-auto max-w-[14ch] text-center text-5xl font-light leading-[1.06] tracking-[-0.03em] md:hidden'>
					{headline}
				</motion.h2>

				<div className='relative mt-12 hidden h-[620px] md:block lg:h-[700px]'>
					<motion.h2
						initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.45 }}
						transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
						className='pointer-events-none absolute left-1/2 top-[50%] z-30 w-full max-w-[20ch] -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-light leading-[1.06] tracking-[-0.03em]'>
						{headline}
					</motion.h2>

					<div className='pointer-events-none absolute inset-0 z-10'>
						<div
							ref={dockTargetRef}
							className='absolute left-1/2 top-[72%] h-[34vh] w-[min(560px,66vw)] -translate-x-1/2 -translate-y-1/2'
						/>

						<AnimatePresence initial={false}>
							{isVideoDocked && heroVideoSrc ? (
								<motion.div
									key='section-two-shared-video'
									layoutId={sharedVideoLayoutId}
									transition={{
										layout: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
									}}
									className='absolute left-1/2 top-[90%] z-10 aspect-16/10 w-[min(400px,66vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-4xl border border-white/16 bg-[#0b1b1c] shadow-[0_24px_70px_rgba(0,0,0,0.42)]'>
									<video
										className='h-full w-full object-cover'
										style={{ objectPosition: heroVideoObjectPosition }}
										autoPlay
										loop
										muted
										playsInline
										poster={heroVideoPosterSrc}
										preload='metadata'>
										<source
											src={heroVideoSrc}
											type='video/mp4'
										/>
									</video>
									<motion.div
										animate={
											shouldReduceMotion
												? undefined
												: { opacity: [0.34, 0.25, 0.34] }
										}
										transition={
											shouldReduceMotion
												? undefined
												: {
														duration: 2.2,
														repeat: Number.POSITIVE_INFINITY,
														ease: 'easeInOut',
													}
										}
										className='absolute inset-0 bg-[linear-gradient(120deg,rgba(6,16,17,0.44),rgba(6,16,17,0.2),rgba(6,16,17,0.44))]'
									/>
								</motion.div>
							) : null}
						</AnimatePresence>
					</div>

					<div className='absolute inset-0 z-20'>
						{items.map((item, index) => (
							<motion.article
								key={item.id}
								initial={
									shouldReduceMotion
										? false
										: { opacity: 0, scale: 0.92, y: 20 }
								}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								animate={
									shouldReduceMotion
										? undefined
										: {
												y: [0, -8, 0],
											}
								}
								transition={{
									duration: shouldReduceMotion ? 0 : 0.8 + index * 0.25,
									ease: 'easeInOut',
									delay: index * 0.01,
								}}
								className='absolute overflow-visible'
								style={{
									left: item.left,
									top: item.top,
									width: `${item.width}px`,
									height: `${item.height}px`,
								}}>
								{item.kind === 'logo' ? null : (
									<SocialProofImageCard item={item} />
								)}
							</motion.article>
						))}
					</div>
				</div>

				<div className='mt-10 grid grid-cols-2 gap-3 md:hidden'>
					{imageItems.map((item) => (
						<div
							key={item.id}
							className='relative aspect-square overflow-hidden rounded-2xl border border-white/20'>
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
