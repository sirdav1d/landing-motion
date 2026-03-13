/** @format */

import type { Variants } from 'motion/react';
import {
	TEXT_ANIMATE_DEFAULT_VARIANTS,
	TEXT_ANIMATE_PRESET_VARIANTS,
} from './text-animate.constants';
import type {
	AnimationType,
	ResolveVariantsInput,
	VariantMap,
} from './text-animate.types';

const MIN_SEGMENT_COUNT = 1;

function resolveStaggerDuration(duration: number, segmentCount: number) {
	return duration / Math.max(segmentCount, MIN_SEGMENT_COUNT);
}

function asVariantObject(variant: unknown): Record<string, unknown> {
	if (!variant || typeof variant !== 'object') {
		return {};
	}

	return variant as Record<string, unknown>;
}

export function splitTextByAnimationType(
	text: string,
	animationType: AnimationType,
) {
	switch (animationType) {
		case 'word':
			return text.split(/(\s+)/);
		case 'character':
			return text.split('');
		case 'line':
			return text.split('\n');
		case 'text':
		default:
			return [text];
	}
}

function buildPresetVariants(
	preset: VariantMap,
	delay: number,
	staggerDuration: number,
): VariantMap {
	const show = asVariantObject(preset.container.show);
	const exit = asVariantObject(preset.container.exit);

	return {
		container: {
			...preset.container,
			show: {
				...show,
				transition: {
					delayChildren: delay,
					staggerChildren: staggerDuration,
				},
			},
			exit: {
				...exit,
				transition: {
					staggerChildren: staggerDuration,
					staggerDirection: -1,
				},
			},
		},
		item: preset.item,
	};
}

function buildCustomVariants(
	customVariants: Variants,
	delay: number,
	staggerDuration: number,
): VariantMap {
	return {
		container: {
			hidden: { opacity: 0 },
			show: {
				opacity: 1,
				transition: {
					opacity: { duration: 0.01, delay },
					delayChildren: delay,
					staggerChildren: staggerDuration,
				},
			},
			exit: {
				opacity: 0,
				transition: {
					staggerChildren: staggerDuration,
					staggerDirection: -1,
				},
			},
		},
		item: customVariants,
	};
}

export function resolveTextAnimateVariants({
	customVariants,
	animation,
	delay,
	duration,
	segmentCount,
}: ResolveVariantsInput): VariantMap {
	const staggerDuration = resolveStaggerDuration(duration, segmentCount);

	if (customVariants) {
		return buildCustomVariants(customVariants, delay, staggerDuration);
	}

	const preset = TEXT_ANIMATE_PRESET_VARIANTS[animation];
	if (!preset) {
		return TEXT_ANIMATE_DEFAULT_VARIANTS;
	}

	return buildPresetVariants(preset, delay, staggerDuration);
}
