/** @format */

'use client';

import { LayoutGroup } from 'motion/react';
import { startTransition, useCallback, useState } from 'react';
import { SHARED_VIDEO_LAYOUT_ID } from '../constants/landing';
import type {
	CategoriesContent,
	FooterContent,
	HeroContent,
	PlatformContent,
	PreorderContent,
	SocialProofItem,
	SolutionsContent,
} from '../types/landing';

import { Section as CategoriesSection } from './sections/categories';
import { Section as FooterSection } from './sections/footer';
import { Section } from './sections/hero';
import { Section as PlatformSection } from './sections/platform';
import { Section as SocialProofSection } from './sections/social-proof';
import { Section as SolutionsSection } from './sections/solutions';

type LandingExperienceProps = {
	heroContent: HeroContent;
	socialProofHeadline: string;
	socialProofItems: SocialProofItem[];
	solutionsContent: SolutionsContent;
	platformContent: PlatformContent;
	categoriesContent: CategoriesContent;
	preorderContent: PreorderContent;
	footerContent: FooterContent;
};

export function LandingExperience({
	heroContent,
	socialProofHeadline,
	socialProofItems,
	solutionsContent,
	platformContent,
	categoriesContent,
	preorderContent,
	footerContent,
}: LandingExperienceProps) {
	const [isVideoDocked, setIsVideoDocked] = useState(false);

	const handleVideoDockChange = useCallback((nextDockedState: boolean) => {
		startTransition(() => {
			setIsVideoDocked(nextDockedState);
		});
	}, []);

	return (
		<LayoutGroup id='hero-video-flow'>
			<Section
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
			<SolutionsSection {...solutionsContent} />
			<PlatformSection {...platformContent} />
			<CategoriesSection {...categoriesContent} />
			<FooterSection
				preorderContent={preorderContent}
				footerContent={footerContent}
			/>
		</LayoutGroup>
	);
}
