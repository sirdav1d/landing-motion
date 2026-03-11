/** @format */

import { motion } from 'motion/react';
import {
	HERO_COPY_CTA_REVEAL_DELAY,
	HERO_COPY_CTA_REVEAL_DURATION,
	HERO_COPY_TITLE_REVEAL_DELAY,
	HERO_COPY_TITLE_REVEAL_DURATION,
	HERO_SMOOTH_EASE,
} from '../constants/hero';
import type { CtaLink } from '../types/landing';
import { HeroCtas } from './hero-ctas';
import { HeroTitle } from './hero-title';

type HeroCopyProps = {
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
	withMotion: boolean;
	revealInitial: false | { opacity: number; y: number };
};

export function HeroCopy({
	headlineStart,
	headlineEnd,
	activeWord,
	primaryCta,
	secondaryCta,
	withMotion,
	revealInitial,
}: HeroCopyProps) {
	if (!withMotion) {
		return (
			<>
				<HeroTitle
					headlineStart={headlineStart}
					headlineEnd={headlineEnd}
					activeWord={activeWord}
					animateWord={false}
				/>

				<HeroCtas
					primaryCta={primaryCta}
					secondaryCta={secondaryCta}
				/>
			</>
		);
	}

	return (
		<>
			<motion.div
				initial={revealInitial}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: HERO_COPY_TITLE_REVEAL_DELAY,
					duration: HERO_COPY_TITLE_REVEAL_DURATION,
					ease: HERO_SMOOTH_EASE,
				}}>
				<HeroTitle
					headlineStart={headlineStart}
					headlineEnd={headlineEnd}
					activeWord={activeWord}
					animateWord
				/>
			</motion.div>

			<motion.div
				initial={revealInitial}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: HERO_COPY_CTA_REVEAL_DELAY,
					duration: HERO_COPY_CTA_REVEAL_DURATION,
					ease: HERO_SMOOTH_EASE,
				}}>
				<HeroCtas
					primaryCta={primaryCta}
					secondaryCta={secondaryCta}
				/>
			</motion.div>
		</>
	);
}
