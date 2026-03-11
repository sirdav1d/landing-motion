/** @format */

import { motion, type Variants } from 'motion/react';
import type { AnimationType, AnimationVariant, VariantMap } from './text-animate.types';

const BASE_CONTAINER_VARIANTS = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.05,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
} as const;

const BASE_ITEM_VARIANTS: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

export const TEXT_ANIMATE_MOTION_ELEMENTS = {
	article: motion.article,
	div: motion.div,
	h1: motion.h1,
	h2: motion.h2,
	h3: motion.h3,
	h4: motion.h4,
	h5: motion.h5,
	h6: motion.h6,
	li: motion.li,
	p: motion.p,
	section: motion.section,
	span: motion.span,
} as const;

export const TEXT_ANIMATE_STAGGER_TIMINGS: Record<AnimationType, number> = {
	text: 0.06,
	word: 0.05,
	character: 0.03,
	line: 0.06,
};

export const TEXT_ANIMATE_DEFAULT_VARIANTS: VariantMap = {
	container: BASE_CONTAINER_VARIANTS,
	item: BASE_ITEM_VARIANTS,
};

export const TEXT_ANIMATE_PRESET_VARIANTS: Record<AnimationVariant, VariantMap> =
	{
		fadeIn: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { opacity: 0, y: 20 },
				show: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					opacity: 0,
					y: 20,
					transition: { duration: 0.3 },
				},
			},
		},
		blurIn: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { opacity: 0, filter: 'blur(10px)' },
				show: {
					opacity: 1,
					filter: 'blur(0px)',
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					opacity: 0,
					filter: 'blur(10px)',
					transition: { duration: 0.3 },
				},
			},
		},
		blurInUp: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
				show: {
					opacity: 1,
					filter: 'blur(0px)',
					y: 0,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
				exit: {
					opacity: 0,
					filter: 'blur(10px)',
					y: 20,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
			},
		},
		blurInDown: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { opacity: 0, filter: 'blur(10px)', y: -20 },
				show: {
					opacity: 1,
					filter: 'blur(0px)',
					y: 0,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
			},
		},
		slideUp: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { y: 20, opacity: 0 },
				show: {
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					y: -20,
					opacity: 0,
					transition: {
						duration: 0.3,
					},
				},
			},
		},
		slideDown: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { y: -20, opacity: 0 },
				show: {
					y: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					y: 20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		slideLeft: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { x: 20, opacity: 0 },
				show: {
					x: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					x: -20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		slideRight: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { x: -20, opacity: 0 },
				show: {
					x: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					x: 20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		scaleUp: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { scale: 0.5, opacity: 0 },
				show: {
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.3,
						scale: {
							type: 'spring',
							damping: 15,
							stiffness: 300,
						},
					},
				},
				exit: {
					scale: 0.5,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		scaleDown: {
			container: BASE_CONTAINER_VARIANTS,
			item: {
				hidden: { scale: 1.5, opacity: 0 },
				show: {
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.3,
						scale: {
							type: 'spring',
							damping: 15,
							stiffness: 300,
						},
					},
				},
				exit: {
					scale: 1.5,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
	};
