/** @format */

import { startTransition, useState } from 'react';
import type { FormEvent } from 'react';

export function useFooterCtaForm() {
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

	return {
		contact,
		isSubmitted,
		submittedContact,
		handleReset,
		handleSubmit,
		setContact,
	};
}
