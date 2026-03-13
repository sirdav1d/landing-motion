/** @format */

import Image from 'next/image';
import { getVisibleCategories } from '../../../helpers/categories';
import type { CategoriesContent } from '../../../types/landing';

type SectionProps = CategoriesContent;

export function Section({ eyebrow, title, description, items }: SectionProps) {
	const visibleItems = getVisibleCategories(items);

	return (
		<section
			id='categorias'
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

				<div className='no-scrollbar mt-11 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible'>
					{visibleItems.map((item) => (
						<article
							key={item.id}
							className='w-[84vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card/55 md:w-auto md:max-w-none'>
							<div className='relative aspect-16/10'>
								<Image
									src={item.imageSrc}
									alt={item.imageAlt}
									fill
									sizes='(max-width: 768px) 84vw, 50vw'
									className='object-cover'
								/>
							</div>

							<div className='p-6'>
								<h3 className='text-2xl font-semibold tracking-tight text-foreground'>
									{item.title}
								</h3>
								<p className='mt-3 text-base text-foreground/80'>{item.description}</p>
								<a
									href={item.href}
									className='mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-accent-foreground'>
									Explorar categoria
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
