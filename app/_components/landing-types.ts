/** @format */

export type CtaLink = {
	label: string;
	href: string;
};

export type HeroContent = {
	headlineStart: string;
	headlineEnd: string;
	rotatingWords: string[];
	description: string;
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
	backgroundVideoSrc: string;
	bottomVideoSrc: string;
	bottomPosterSrc: string;
	proofPoints: string[];
	videoObjectPosition?: string;
};

type SocialProofBaseItem = {
	id: string;
	left: string;
	top: string;
	width: number;
	height: number;
};

export type SocialProofLogoItem = SocialProofBaseItem & {
	kind: 'logo';
	label: string;
};

export type SocialProofImageItem = SocialProofBaseItem & {
	kind: 'image';
	imageSrc: string;
	imageAlt: string;
	secondaryImageSrc?: string;
	secondaryImageAlt?: string;
};

export type SocialProofItem = SocialProofLogoItem | SocialProofImageItem;
