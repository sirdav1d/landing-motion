/** @format */

import { motion } from 'motion/react';
import {
	HERO_COPY_CTA_REVEAL_DELAY,
	HERO_COPY_CTA_REVEAL_DURATION,
	HERO_COPY_TITLE_REVEAL_DELAY,
	HERO_COPY_TITLE_REVEAL_DURATION,
	HERO_SMOOTH_EASE,
} from '../../../constants/hero';
import type { CtaLink } from '../../../types/landing';
import { Ctas } from './ctas';
import { Title } from './title';

type CopyProps = {
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
	withMotion: boolean;
	revealInitial: false | { opacity: number; y: number };
};

export function Copy({
	headlineStart,
	headlineEnd,
	activeWord,
	primaryCta,
	secondaryCta,
	withMotion,
	revealInitial,
}: CopyProps) {
	if (!withMotion) {
		return (
			<>
				<Title
					headlineStart={headlineStart}
					headlineEnd={headlineEnd}
					activeWord={activeWord}
					animateWord={false}
				/>

				<Ctas
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
				<Title
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
				<Ctas
					primaryCta={primaryCta}
					secondaryCta={secondaryCta}
				/>
			</motion.div>
		</>
	);
}
