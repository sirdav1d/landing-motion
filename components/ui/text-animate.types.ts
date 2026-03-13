/** @format */

import type { MotionProps, Variants } from 'motion/react';

export type AnimationType = 'text' | 'word' | 'character' | 'line';
export type AnimationVariant =
	| 'fadeIn'
	| 'blurIn'
	| 'blurInUp'
	| 'blurInDown'
	| 'slideUp'
	| 'slideDown'
	| 'slideLeft'
	| 'slideRight'
	| 'scaleUp'
	| 'scaleDown';

export type MotionElementType =
	| 'article'
	| 'div'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'li'
	| 'p'
	| 'section'
	| 'span';

export type VariantMap = {
	container: Variants;
	item: Variants;
};

export type ResolveVariantsInput = {
	customVariants?: Variants;
	animation: AnimationVariant;
	delay: number;
	duration: number;
	segmentCount: number;
};

export type SegmentClassNameResolver = (
	segment: string,
	index: number,
) => string | undefined;

export interface TextAnimateProps extends Omit<MotionProps, 'children'> {
	/**
	 * The text content to animate
	 */
	children: string;
	/**
	 * The class name to be applied to the component
	 */
	className?: string;
	/**
	 * The class name to be applied to each segment
	 */
	segmentClassName?: string | SegmentClassNameResolver;
	/**
	 * The delay before the animation starts
	 */
	delay?: number;
	/**
	 * The duration of the animation
	 */
	duration?: number;
	/**
	 * Custom motion variants for the animation
	 */
	variants?: Variants;
	/**
	 * The element type to render
	 */
	as?: MotionElementType;
	/**
	 * How to split the text ("text", "word", "character")
	 */
	by?: AnimationType;
	/**
	 * Whether to start animation when component enters viewport
	 */
	startOnView?: boolean;
	/**
	 * Whether to animate only once
	 */
	once?: boolean;
	/**
	 * The animation preset to use
	 */
	animation?: AnimationVariant;
	/**
	 * Whether to enable accessibility features (default: true)
	 */
	accessible?: boolean;
}
