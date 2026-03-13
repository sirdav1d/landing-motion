/** @format */

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { PlatformStep } from '../../../types/landing';
import {
	CARD_ANIMATION_DURATION,
	CARD_ANIMATION_EASE,
	CARD_ENTER_BASE_DELAY,
	CARD_EXIT_BASE_DELAY,
	CARD_INNER_DIVIDER_DELAY_OFFSET,
	CARD_INNER_DIVIDER_DURATION,
	CARD_STAGGER_DELAY,
	PLATFORM_ANIMATION_VIEWPORT_AMOUNT,
} from './constants';

type StepsFlowProps = {
	steps: PlatformStep[];
	connectorsAnimationStartDelay: number;
	isVideoRevealed: boolean;
};

export function StepsFlow({
	steps,
	connectorsAnimationStartDelay,
	isVideoRevealed,
}: StepsFlowProps) {
	return (
		<div className='relative mt-10 md:h-80 lg:h-90 '>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 hidden md:block'>
				<motion.span
					initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
					whileInView={
						isVideoRevealed
							? { scaleX: 1, scaleY: 1, opacity: 1 }
							: { scaleX: 0, scaleY: 0, opacity: 0 }
					}
					transition={{
						duration: 0.72,
						ease: CARD_ANIMATION_EASE,
						delay: connectorsAnimationStartDelay,
					}}
					viewport={{ once: true, amount: PLATFORM_ANIMATION_VIEWPORT_AMOUNT }}
					className='absolute top-[28%] left-[14%] h-20 w-[14%] origin-top-left border-l border-b border-dashed border-border/70'
				/>
				<motion.span
					initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
					whileInView={
						isVideoRevealed
							? { scaleX: 1, scaleY: 1, opacity: 1 }
							: { scaleX: 0, scaleY: 0, opacity: 0 }
					}
					transition={{
						duration: 0.72,
						ease: CARD_ANIMATION_EASE,
						delay: connectorsAnimationStartDelay + 0.2,
					}}
					viewport={{ once: true, amount: PLATFORM_ANIMATION_VIEWPORT_AMOUNT }}
					className='absolute top-[69%] left-[59%] h-20 w-[15%] origin-top-right border-r border-t border-dashed border-border/70'
				/>
			</div>

			<ol className='relative space-y-2 md:h-full md:space-y-0 '>
				{steps.map((step, index) => (
					<motion.li
						key={step.id}
						initial='hidden'
						whileInView={isVideoRevealed ? 'visible' : 'hidden'}
						variants={{
							hidden: {
								opacity: 0,
								x: -34,
								transition: {
									duration: 0.28,
									delay: CARD_EXIT_BASE_DELAY + index * 0.1,
									ease: CARD_ANIMATION_EASE,
								},
							},
							visible: {
								opacity: 1,
								x: 0,
								transition: {
									duration: CARD_ANIMATION_DURATION,
									delay: CARD_ENTER_BASE_DELAY + index * CARD_STAGGER_DELAY,
									ease: CARD_ANIMATION_EASE,
								},
							},
						}}
						viewport={{ once: true, amount: PLATFORM_ANIMATION_VIEWPORT_AMOUNT }}
						className={cn(
							'relative platform-step-card',
							`platform-step-card--${index + 1}`,
						)}>
						<article className='relative rounded-[1.4rem] border border-border/40 bg-card/80 p-4 backdrop-blur-sm md:min-h-[128px] md:p-5 lg:p-6'>
							<motion.span
								aria-hidden='true'
								initial={{ scaleY: 0, opacity: 0 }}
								whileInView={
									isVideoRevealed
										? { scaleY: 1, opacity: 1 }
										: { scaleY: 0, opacity: 0 }
								}
								transition={{
									duration: CARD_INNER_DIVIDER_DURATION,
									ease: CARD_ANIMATION_EASE,
									delay:
										CARD_ENTER_BASE_DELAY +
										index * CARD_STAGGER_DELAY +
										CARD_INNER_DIVIDER_DELAY_OFFSET,
								}}
								viewport={{
									once: true,
									amount: PLATFORM_ANIMATION_VIEWPORT_AMOUNT,
								}}
								className='pointer-events-none absolute top-1/2 left-1/2 hidden h-[58%] w-px -translate-x-1/2 -translate-y-1/2 border-l border-border/65 md:block'
							/>
							<div className='grid gap-4 md:grid-cols-2 md:items-end md:gap-5'>
								<div className='md:pr-6'>
									<h3 className='text-2xl font-medium leading-[1.04] tracking-[-0.025em] text-foreground md:text-[1.8rem]'>
										{step.title}
									</h3>
								</div>
								<p className='text-xs leading-relaxed text-foreground/82 md:pl-6 md:text-sm'>
									{step.description}
								</p>
							</div>
						</article>
					</motion.li>
				))}
			</ol>
		</div>
	);
}
