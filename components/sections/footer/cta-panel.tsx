/** @format */

import type { PreorderContent } from '../../../types/landing';
import { useFooterCtaForm } from './use-footer-cta-form';

type CtaPanelProps = {
	preorderContent: PreorderContent;
};

const FOOTER_HIGHLIGHT_WORD = 'antecipado';
const FOOTER_HIGHLIGHT_CLASS =
	'font-display text-[1.06em] font-light italic text-primary';

function renderFooterTitleWithHighlight(title: string) {
	const titleParts = title.split(new RegExp(`(${FOOTER_HIGHLIGHT_WORD})`, 'i'));

	return titleParts.map((part, index) => {
		const key = `${part}-${index}`;
		if (part.toLocaleLowerCase() !== FOOTER_HIGHLIGHT_WORD) {
			return <span key={key}>{part}</span>;
		}

		return (
			<span
				key={key}
				className={FOOTER_HIGHLIGHT_CLASS}>
				{part}
			</span>
		);
	});
}

export function CtaPanel({ preorderContent }: CtaPanelProps) {
	const {
		contact,
		isSubmitted,
		submittedContact,
		handleReset,
		handleSubmit,
		setContact,
	} = useFooterCtaForm();

	return (
		<section
			aria-labelledby='footer-preorder-title'
			className='min-w-0 xl:max-w-[56ch]'>
			<h2
				id='footer-preorder-title'
				className='max-w-[14ch] text-balance text-[clamp(2.1rem,4vw,4rem)] font-light leading-[1.03] tracking-[-0.03em] text-foreground'>
				{renderFooterTitleWithHighlight(preorderContent.title)}
			</h2>

			{isSubmitted ? (
				<div className='mt-6 rounded-2xl border border-primary/35 bg-primary/15 p-5'>
					<p className='text-base font-semibold text-foreground'>
						{preorderContent.successMessage}
					</p>
					<p className='mt-2 text-sm text-foreground/80'>{submittedContact}</p>
					<button
						type='button'
						onClick={handleReset}
						className='mt-5 inline-flex h-11 cursor-pointer items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-foreground hover:bg-secondary/70'>
						Alterar contato
					</button>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className='mt-6 flex flex-col gap-3 md:flex-row md:items-end md:gap-4'>
					<div className='w-full'>
						<input
							id='footer-preorder-contact'
							type='text'
							value={contact}
							onChange={(event) => setContact(event.target.value)}
							aria-label={preorderContent.inputLabel}
							placeholder={preorderContent.inputPlaceholder}
							required
							className='h-12 w-full rounded-full border border-input bg-background/65 px-5 text-base text-foreground outline-none ring-ring/30 placeholder:text-foreground/45 focus-visible:ring-2'
						/>
					</div>
					<button
						type='submit'
						className='inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-primary/25 bg-primary px-7 text-base font-semibold whitespace-nowrap text-primary-foreground hover:bg-accent'>
						{preorderContent.submitLabel}
					</button>
				</form>
			)}
		</section>
	);
}
