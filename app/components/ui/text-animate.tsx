/** @format */

'use client';

import { memo } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
	TEXT_ANIMATE_MOTION_ELEMENTS,
	TEXT_ANIMATE_STAGGER_TIMINGS,
} from './text-animate.constants';
import {
	resolveTextAnimateVariants,
	splitTextByAnimationType,
} from './text-animate.helpers';
import type { TextAnimateProps } from './text-animate.types';

function resolveSegmentClassName(
	segmentClassName: TextAnimateProps['segmentClassName'],
	segment: string,
	index: number,
) {
	if (typeof segmentClassName === 'function') {
		return segmentClassName(segment, index);
	}

	return segmentClassName;
}

export const TextAnimate = memo(function TextAnimate({
	children,
	delay = 0,
	duration = 0.3,
	variants,
	className,
	segmentClassName,
	as: Component = 'p',
	startOnView = true,
	once = false,
	by = 'word',
	animation = 'fadeIn',
	accessible = true,
	...props
}: TextAnimateProps) {
	const MotionComponent = TEXT_ANIMATE_MOTION_ELEMENTS[Component];
	const segments = splitTextByAnimationType(children, by);
	const resolvedVariants = resolveTextAnimateVariants({
		customVariants: variants,
		animation,
		delay,
		duration,
		segmentCount: segments.length,
	});
	const showState = 'show';
	const whileInViewState = startOnView ? showState : undefined;
	const animateState = startOnView ? undefined : showState;
	const baseSegmentClassName =
		by === 'line' ? 'block' : 'inline-block whitespace-pre';
	const ariaLabel = accessible ? children : undefined;
	const segmentAriaHidden = accessible ? true : undefined;

	return (
		<AnimatePresence mode='popLayout'>
			<MotionComponent
				variants={resolvedVariants.container}
				initial='hidden'
				whileInView={whileInViewState}
				animate={animateState}
				exit='exit'
				className={cn('whitespace-pre-wrap', className)}
				viewport={{ once }}
				aria-label={ariaLabel}
				{...props}>
				{accessible && <span className='sr-only'>{children}</span>}
				{segments.map((segment, i) => (
					<motion.span
						key={`${by}-${segment}-${i}`}
						variants={resolvedVariants.item}
						custom={i * TEXT_ANIMATE_STAGGER_TIMINGS[by]}
						className={cn(
							baseSegmentClassName,
							resolveSegmentClassName(segmentClassName, segment, i),
						)}
						aria-hidden={segmentAriaHidden}>
						{segment}
					</motion.span>
				))}
			</MotionComponent>
		</AnimatePresence>
	);
});
