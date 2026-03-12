/** @format */

import { type RefObject } from 'react';
import type { CtaLink } from '../../../types/landing';
import { Copy } from './copy';
import { Video } from './video';

type ReducedMotionLayoutProps = {
	sectionRef: RefObject<HTMLElement | null>;
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

export function ReducedMotionLayout({
	sectionRef,
	headlineStart,
	headlineEnd,
	activeWord,
	primaryCta,
	secondaryCta,
	revealInitial,
	bottomVideoSrc,
	bottomPosterSrc,
	videoObjectPosition,
}: ReducedMotionLayoutProps) {
	return (
		<section
			id='hero'
			ref={sectionRef}
			className='relative overflow-hidden pb-14 pt-34 text-foreground md:pt-38'>
			<div className='relative mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<div className='max-w-[790px]'>
					<Copy
						headlineStart={headlineStart}
						headlineEnd={headlineEnd}
						activeWord={activeWord}
						primaryCta={primaryCta}
						secondaryCta={secondaryCta}
						withMotion={false}
						revealInitial={revealInitial}
					/>
				</div>

				<div className='mt-12 overflow-hidden rounded-4xl'>
					<div className='relative aspect-19/10 w-full'>
						<Video
							src={bottomVideoSrc}
							posterSrc={bottomPosterSrc}
							objectPosition={videoObjectPosition}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
