/** @format */

'use client';

import { FormEvent, startTransition, useState } from 'react';
import type { PreorderContent } from '../../../types/landing';

type SectionProps = PreorderContent;

export function Section({
	eyebrow,
	title,
	description,
	inputLabel,
	inputPlaceholder,
	submitLabel,
	successMessage,
	privacyNote,
}: SectionProps) {
	const [contact, setContact] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submittedContact, setSubmittedContact] = useState('');

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const normalizedContact = contact.trim();
		if (!normalizedContact) {
			return;
		}

		startTransition(() => {
			setSubmittedContact(normalizedContact);
			setIsSubmitted(true);
			setContact('');
		});
	}

	function handleReset() {
		startTransition(() => {
			setIsSubmitted(false);
		});
	}

	return (
		<section
			id='pre-venda'
			className='relative border-t border-border/60 py-20 md:py-24'>
			<div className='mx-auto max-w-[1320px] px-5 md:px-8 lg:px-10'>
				<div className='mx-auto max-w-[900px] rounded-4xl border border-border bg-card/60 p-7 md:p-10'>
					<p className='text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
						{eyebrow}
					</p>
					<h2 className='mt-4 text-balance text-4xl font-light leading-[1.08] tracking-[-0.03em] text-foreground md:text-6xl'>
						{title}
					</h2>
					<p className='mt-4 max-w-[56ch] text-lg text-foreground/85'>
						{description}
					</p>

					{isSubmitted ? (
						<div className='mt-8 rounded-2xl border border-primary/35 bg-primary/15 p-5'>
							<p className='text-base font-semibold text-foreground'>
								{successMessage}
							</p>
							<p className='mt-2 text-sm text-foreground/80'>
								{submittedContact}
							</p>
							<button
								type='button'
								onClick={handleReset}
								className='mt-4 inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary/70'>
								Alterar contato
							</button>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-end'>
							<label
								htmlFor='preorder-contact'
								className='w-full'>
								<span className='mb-2 block text-sm font-semibold text-foreground/90'>
									{inputLabel}
								</span>
								<input
									id='preorder-contact'
									type='text'
									value={contact}
									onChange={(event) => setContact(event.target.value)}
									placeholder={inputPlaceholder}
									required
									className='h-12 w-full rounded-full border border-input bg-background px-5 text-base text-foreground outline-none ring-ring/30 placeholder:text-foreground/45 focus-visible:ring-2'
								/>
							</label>
							<button
								type='submit'
								className='inline-flex h-12 items-center justify-center rounded-full border border-primary/25 bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-accent'>
								{submitLabel}
							</button>
						</form>
					)}

					<p className='mt-4 text-sm text-muted-foreground'>{privacyNote}</p>
				</div>
			</div>
		</section>
	);
}
