/** @format */

export const CARD_STAGGER_DELAY = 0.45;
export const CARD_ANIMATION_DURATION = 0.85;
export const CARD_ANIMATION_EASE: [number, number, number, number] = [
	0.22, 1, 0.36, 1,
];
export const PLATFORM_ANIMATION_VIEWPORT_AMOUNT = 0.9;
export const CARD_ENTER_BASE_DELAY = 0.75;
export const CARD_EXIT_BASE_DELAY = 0.12;
export const CARD_INNER_DIVIDER_DELAY_OFFSET = 0.18;
export const CARD_INNER_DIVIDER_DURATION = 0.55;
export const TITLE_ANIMATION_WINDOW = 1.35;
export const CONNECTORS_AFTER_ALL_DELAY = 0.35;
export const VIDEO_POSTER_HOLD_MS = 600;

export function resolveConnectorsAnimationStartDelay(stepCount: number) {
	const lastStepIndex = Math.max(stepCount - 1, 0);
	const cardsVisibleEnd =
		CARD_ENTER_BASE_DELAY +
		lastStepIndex * CARD_STAGGER_DELAY +
		CARD_ANIMATION_DURATION;
	const cardDividersEnd =
		CARD_ENTER_BASE_DELAY +
		lastStepIndex * CARD_STAGGER_DELAY +
		CARD_INNER_DIVIDER_DELAY_OFFSET +
		CARD_INNER_DIVIDER_DURATION;
	const sectionAnimationEnd = Math.max(
		cardsVisibleEnd,
		cardDividersEnd,
		TITLE_ANIMATION_WINDOW,
	);

	return sectionAnimationEnd + CONNECTORS_AFTER_ALL_DELAY;
}
