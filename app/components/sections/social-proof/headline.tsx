/** @format */

import { motion } from 'motion/react';
import {
	SOCIAL_PROOF_HEADLINE_INITIAL_OFFSET_Y,
	SOCIAL_PROOF_HEADLINE_TRANSITION,
	SOCIAL_PROOF_HEADLINE_VIEWPORT_AMOUNT,
} from '../../../constants/social-proof';

type HeadlineProps = {
	headline: string;
	className: string;
	isReducedMotion: boolean;
};

export function Headline({
	headline,
	className,
	isReducedMotion,
}: HeadlineProps) {
	return (
		<motion.h2
			initial={
				isReducedMotion
					? false
					: { opacity: 0, y: SOCIAL_PROOF_HEADLINE_INITIAL_OFFSET_Y }
			}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: SOCIAL_PROOF_HEADLINE_VIEWPORT_AMOUNT }}
			transition={SOCIAL_PROOF_HEADLINE_TRANSITION}
			className={className}>
			{headline}
		</motion.h2>
	);
}
