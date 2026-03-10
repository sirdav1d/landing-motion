/** @format */

'use client';

import { LayoutGroup } from 'motion/react';
import { startTransition, useCallback, useState } from 'react';
import type { HeroContent, SocialProofItem } from './landing-types';

import { HeroSection } from './hero-section';
import { SocialProofSection } from './social-proof-section';

type LandingExperienceProps = {
	heroContent: HeroContent;
	socialProofHeadline: string;
	socialProofItems: SocialProofItem[];
};

const SHARED_VIDEO_LAYOUT_ID = 'hero-shared-video-frame';

export function LandingExperience({
	heroContent,
	socialProofHeadline,
	socialProofItems,
}: LandingExperienceProps) {
	const [isVideoDocked, setIsVideoDocked] = useState(false);

	const handleVideoDockChange = useCallback((nextDockedState: boolean) => {
		startTransition(() => {
			setIsVideoDocked(nextDockedState);
		});
	}, []);

	return (
		<LayoutGroup id='hero-video-flow'>
			<HeroSection
				{...heroContent}
				isVideoDocked={isVideoDocked}
				sharedVideoLayoutId={SHARED_VIDEO_LAYOUT_ID}
			/>
			<SocialProofSection
				headline={socialProofHeadline}
				items={socialProofItems}
				isVideoDocked={isVideoDocked}
				onVideoDockChange={handleVideoDockChange}
				sharedVideoLayoutId={SHARED_VIDEO_LAYOUT_ID}
				heroVideoSrc={heroContent.bottomVideoSrc}
				heroVideoPosterSrc={heroContent.bottomPosterSrc}
				heroVideoObjectPosition={heroContent.videoObjectPosition}
			/>
		</LayoutGroup>
	);
}
