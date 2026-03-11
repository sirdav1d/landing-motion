/** @format */

export const HERO_SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

export const HERO_DEFAULT_PROOF_POINTS = [
	'Sob medida',
	'Preço acessível',
	'Entrega em casa',
] as const;

export const HERO_EXPAND_PHASE_END = 0.42;
export const HERO_CONTENT_MOVE_START = 0.56;
export const HERO_CONTENT_MOVE_END = 0.84;

export const HERO_SCROLL_OFFSETS = ['start start', 'end end'] as const;
export const HERO_REVEAL_INITIAL_OFFSET_Y = 20;

export const HERO_CONTENT_OPACITY_STOPS = [
	0,
	HERO_EXPAND_PHASE_END,
	HERO_CONTENT_MOVE_START,
	HERO_CONTENT_MOVE_END,
	1,
] as const;
export const HERO_CONTENT_OPACITY_VALUES = [1, 1, 1, 0.08, 0] as const;

export const HERO_CONTENT_Y_STOPS = [
	0,
	HERO_CONTENT_MOVE_START,
	HERO_CONTENT_MOVE_END,
	1,
] as const;
export const HERO_CONTENT_Y_VALUES = [0, 0, -72, -112] as const;

export const HERO_MEDIA_CLIP_STOPS = [
	0,
	0.16,
	0.3,
	HERO_EXPAND_PHASE_END,
	1,
] as const;
export const HERO_MEDIA_CLIP_VALUES = [
	'inset(58% 3.5% 6% 3.5% round 34px)',
	'inset(40% 3.5% 5.8% 3.5% round 32px)',
	'inset(30% 2.8% 4.2% 2.8% round 24px)',
	'inset(0% 0% 0% 0% round 0px)',
	'inset(0% 0% 0% 0% round 0px)',
] as const;
export type HeroMediaClipValue = (typeof HERO_MEDIA_CLIP_VALUES)[number];

export const HERO_MEDIA_Y_VALUES = [120, 0, 0] as const;
export const HERO_MEDIA_SCALE_STOPS = [0, HERO_EXPAND_PHASE_END, 0.82, 1] as const;
export const HERO_MEDIA_SCALE_VALUES = [1, 1, 1.015, 1.02] as const;

export const HERO_COPY_TITLE_REVEAL_DELAY = 0.12;
export const HERO_COPY_TITLE_REVEAL_DURATION = 0.62;
export const HERO_COPY_CTA_REVEAL_DELAY = 0.24;
export const HERO_COPY_CTA_REVEAL_DURATION = 0.6;
