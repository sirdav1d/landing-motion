/** @format */

import type { PlatformContent } from '../../../types/landing';

type SectionProps = PlatformContent;

export function Section({
	eyebrow,
	title,
	description,
	steps,
	ctaLabel,
	ctaHref,
}: SectionProps) {
	return (
		<section
			id='plataforma'
			className='relative border-t border-border/60 py-20 md:py-24'>
			<div className='mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<div className='max-w-[860px]'>
					<p className='text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
						{eyebrow}
					</p>
					<h2 className='mt-5 text-balance text-4xl font-light leading-[1.08] tracking-[-0.03em] text-foreground md:text-6xl'>
						{title}
					</h2>
					<p className='mt-4 max-w-[60ch] text-lg text-foreground/85'>
						{description}
					</p>
				</div>

				<ol className='mt-12 grid gap-4 md:grid-cols-3 md:gap-6'>
					{steps.map((step, index) => (
						<li
							key={step.id}
							className='rounded-3xl border border-border bg-card/50 p-6'>
							<div className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-foreground'>
								{index + 1}
							</div>
							<h3 className='mt-4 text-2xl font-semibold tracking-tight text-foreground'>
								{step.title}
							</h3>
							<p className='mt-3 text-base text-foreground/80'>{step.description}</p>
						</li>
					))}
				</ol>

				<a
					href={ctaHref}
					className='mt-9 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground hover:bg-secondary/70'>
					{ctaLabel}
				</a>
			</div>
		</section>
	);
}
