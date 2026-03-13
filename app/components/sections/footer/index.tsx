/** @format */

'use client';

import type { FooterContent, PreorderContent } from '../../../types/landing';
import { CtaPanel } from './cta-panel';
import { LinksPanel } from './links-panel';

type SectionProps = {
	preorderContent: PreorderContent;
	footerContent: FooterContent;
};

export function Section({ preorderContent, footerContent }: SectionProps) {
	const year = new Date().getFullYear();

	return (
		<footer
			id='pre-venda'
			className='relative isolate min-h-screen border-t border-border/60 py-10'>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-primary/10 via-primary/5 to-transparent'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute bottom-0 left-1/2 h-28 w-[70%] -translate-x-1/2 rounded-full bg-primary/12 opacity-20 blur-3xl'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-x-0 top-20 flex justify-center opacity-50 md:top-24 lg:top-24'>
				<span className='inline-block h-24 w-40 rounded-full border-10 border-foreground sm:h-28 sm:w-44 md:h-36 md:w-56 lg:h-42 lg:w-68' />
			</div>
			<div className='mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1320px] flex-col justify-end gap-10 px-5 md:min-h-[calc(100vh-7rem)] md:px-8 lg:px-10'>
				<div className='grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] xl:gap-10'>
					<CtaPanel preorderContent={preorderContent} />
					<LinksPanel
						highlightItems={footerContent.highlightItems}
						socialLinks={footerContent.socialLinks}
					/>
				</div>

				<div className='grid gap-3 border-t border-border/70 pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center'>
					<p className='text-sm text-muted-foreground'>
						&copy; {year} {footerContent.brandName}. Todos os direitos
						reservados.
					</p>
					<p className='text-sm text-muted-foreground md:text-right'>
						{footerContent.creditLabel}
					</p>
				</div>
			</div>
		</footer>
	);
}
