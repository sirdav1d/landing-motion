/** @format */

'use client';

import { useRef } from 'react';
import type { PlatformContent } from '../../../types/landing';
import { BackgroundVideoLayer } from './background-video-layer';
import { resolveConnectorsAnimationStartDelay } from './constants';
import { StepsFlow } from './steps-flow';
import { Title } from './title';
import { useLazySectionVideo } from './use-lazy-section-video';

type SectionProps = PlatformContent;

export function Section({
	title,
	backgroundVideoSrc,
	backgroundVideoPosterSrc,
	backgroundVideoObjectPosition,
	steps,
	ctaLabel,
	ctaHref,
}: SectionProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const { isVideoRevealed, setIsVideoReady, shouldLoadVideo } =
		useLazySectionVideo(sectionRef, videoRef);
	const connectorsAnimationStartDelay = resolveConnectorsAnimationStartDelay(
		steps.length,
	);

	return (
		<section
			ref={sectionRef}
			id='plataforma'
			className='relative isolate overflow-hidden border-t border-border/60 pt-10 pb-24 lg:pb-32 min-h-screen'>
			<BackgroundVideoLayer
				backgroundVideoSrc={backgroundVideoSrc}
				backgroundVideoPosterSrc={backgroundVideoPosterSrc}
				backgroundVideoObjectPosition={backgroundVideoObjectPosition}
				shouldLoadVideo={shouldLoadVideo}
				isVideoRevealed={isVideoRevealed}
				videoRef={videoRef}
				onLoadedData={() => setIsVideoReady(true)}
			/>

			<div className='mx-auto w-full px-4 md:px-6 lg:px-8'>
				<div className='relative'>
					<Title
						title={title}
						isVideoRevealed={isVideoRevealed}
					/>
				</div>

				<StepsFlow
					steps={steps}
					connectorsAnimationStartDelay={connectorsAnimationStartDelay}
					isVideoRevealed={isVideoRevealed}
				/>
			</div>

			<a
				href={ctaHref}
				className='absolute left-10 mt-6 inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-base font-semibold text-foreground hover:bg-primary hover:text-primary-foreground'>
				{ctaLabel}
			</a>
		</section>
	);
}
