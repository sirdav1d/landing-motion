/** @format */

import type { CtaLink } from '../types/landing';

type HeroCtasProps = {
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
};

export function HeroCtas({ primaryCta, secondaryCta }: HeroCtasProps) {
	return (
		<div className='mt-9 flex flex-wrap items-center gap-4'>
			<a
				href={primaryCta.href}
				className='inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#f2dfb6] px-6 py-3 text-lg font-semibold text-[#0b1617] transition hover:bg-[#fff2d3]'>
				{primaryCta.label}
			</a>
			<a
				href={secondaryCta.href}
				className='inline-flex min-w-[190px] items-center justify-center rounded-full border border-foreground/72 px-6 py-3 text-lg font-semibold text-foreground transition hover:bg-white/10'>
				{secondaryCta.label}
			</a>
		</div>
	);
}
