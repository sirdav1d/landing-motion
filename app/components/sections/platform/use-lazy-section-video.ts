/** @format */

import { type RefObject, useEffect, useState } from 'react';
import { VIDEO_POSTER_HOLD_MS } from './constants';

export function useLazySectionVideo(
	sectionRef: RefObject<HTMLElement | null>,
	videoRef: RefObject<HTMLVideoElement | null>,
) {
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
	const [isVideoReady, setIsVideoReady] = useState(false);
	const [isVideoRevealed, setIsVideoRevealed] = useState(false);

	useEffect(() => {
		const sectionNode = sectionRef.current;
		if (!sectionNode) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setShouldLoadVideo(true);
					observer.disconnect();
				}
			},
			{ rootMargin: '220px 0px' },
		);

		observer.observe(sectionNode);
		return () => observer.disconnect();
	}, [sectionRef]);

	useEffect(() => {
		if (!shouldLoadVideo || !isVideoReady) return;
		const videoNode = videoRef.current;
		if (!videoNode) return;
		videoNode.play().catch(() => {});
	}, [isVideoReady, shouldLoadVideo, videoRef]);

	useEffect(() => {
		if (!isVideoReady) return;

		const revealTimer = window.setTimeout(() => {
			setIsVideoRevealed(true);
		}, VIDEO_POSTER_HOLD_MS);

		return () => window.clearTimeout(revealTimer);
	}, [isVideoReady]);

	return {
		isVideoRevealed: isVideoReady && isVideoRevealed,
		setIsVideoReady,
		shouldLoadVideo,
	};
}
