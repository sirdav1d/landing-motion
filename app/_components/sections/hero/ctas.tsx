/** @format */

import type { CtaLink } from '../../../types/landing';

type CtasProps = {
	primaryCta: CtaLink;
	secondaryCta: CtaLink;
};

export function Ctas({ primaryCta, secondaryCta }: CtasProps) {
	return (
		<div className='mt-9 flex flex-wrap items-center gap-4'>
			<a
				href={primaryCta.href}
				className='inline-flex min-w-[170px] items-center justify-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition hover:bg-accent'>
				{primaryCta.label}
			</a>
			<a
				href={secondaryCta.href}
				className='inline-flex min-w-[190px] items-center justify-center rounded-full border border-border px-6 py-3 text-lg font-semibold text-foreground transition hover:bg-secondary/70'>
				{secondaryCta.label}
			</a>
		</div>
	);
}
