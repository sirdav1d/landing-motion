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

export type SolutionItem = {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
};

export type SolutionsContent = {
	eyebrow: string;
	title: string;
	description: string;
	ctaLabel: string;
	ctaHref: string;
	items: SolutionItem[];
};

export type PlatformStep = {
	id: string;
	title: string;
	description: string;
};

export type PlatformContent = {
	eyebrow: string;
	title: string;
	description: string;
	backgroundVideoSrc: string;
	backgroundVideoPosterSrc?: string;
	backgroundVideoObjectPosition?: string;
	steps: PlatformStep[];
	ctaLabel: string;
	ctaHref: string;
};

export type ProductCategoryItem = {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	href: string;
};

export type CategoriesContent = {
	eyebrow: string;
	title: string;
	description: string;
	items: ProductCategoryItem[];
};

export type FooterHighlightItem = {
	id: string;
	labelPrefix: string;
	label: string;
	meta: string;
	href: string;
};

export type FooterContent = {
	brandName: string;
	highlightItems: FooterHighlightItem[];
	socialLinks: CtaLink[];
	creditLabel: string;
};

export type PreorderContent = {
	eyebrow: string;
	title: string;
	description: string;
	inputLabel: string;
	inputPlaceholder: string;
	submitLabel: string;
	successMessage: string;
	privacyNote: string;
};
