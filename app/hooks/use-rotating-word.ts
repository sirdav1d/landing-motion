/** @format */

import { useEffect, useState } from 'react';

export function useRotatingWord(words: string[], shouldReduceMotion: boolean) {
	const [wordIndex, setWordIndex] = useState(0);

	useEffect(() => {
		if (shouldReduceMotion || words.length < 2) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setWordIndex((currentIndex) => {
				const nextIndex = currentIndex + 1;
				return nextIndex >= words.length ? 0 : nextIndex;
			});
		}, 2500);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [words, shouldReduceMotion]);

	return words[wordIndex] ?? words[0] ?? '';
}
