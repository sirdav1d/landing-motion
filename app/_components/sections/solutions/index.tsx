/** @format */

import Image from 'next/image';
import type { SolutionsContent } from '../../../types/landing';

type SectionProps = SolutionsContent;

export function Section({
	eyebrow,
	title,
	description,
	ctaLabel,
	ctaHref,
	items,
}: SectionProps) {
	return (
		<section
			id='solucoes'
			className='relative border-t border-border/60 py-20 md:py-24'>
			<div className='mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<div className='max-w-[840px]'>
					<p className='text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
						{eyebrow}
					</p>
					<h2 className='mt-5 text-balance text-4xl font-light leading-[1.08] tracking-[-0.03em] text-foreground md:text-6xl'>
						{title}
					</h2>
					<p className='mt-4 max-w-[62ch] text-lg text-foreground/85'>
						{description}
					</p>
				</div>

				<div className='mt-11 grid gap-6 lg:grid-cols-3'>
					{items.map((item) => (
						<article
							key={item.id}
							className='overflow-hidden rounded-3xl border border-border bg-card/55'>
							<div className='relative aspect-16/10'>
								<Image
									src={item.imageSrc}
									alt={item.imageAlt}
									fill
									sizes='(max-width: 1024px) 100vw, 33vw'
									className='object-cover'
								/>
							</div>

							<div className='p-6'>
								<h3 className='text-2xl font-semibold tracking-tight text-foreground'>
									{item.title}
								</h3>
								<p className='mt-3 text-base text-foreground/80'>{item.description}</p>
							</div>
						</article>
					))}
				</div>

				<a
					href={ctaHref}
					className='mt-9 inline-flex items-center justify-center rounded-full border border-primary/25 bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-accent'>
					{ctaLabel}
				</a>
			</div>
		</section>
	);
}
