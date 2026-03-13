/** @format */

import { type RefObject, useEffect, useState } from 'react';
import {
	PLATFORM_ANIMATION_VIEWPORT_AMOUNT,
	VIDEO_POSTER_HOLD_MS,
} from './constants';

export function useLazySectionVideo(
	sectionRef: RefObject<HTMLElement | null>,
	videoRef: RefObject<HTMLVideoElement | null>,
) {
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
	const [isVideoReady, setIsVideoReady] = useState(false);
	const [hasReachedRevealViewport, setHasReachedRevealViewport] =
		useState(false);
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
		const sectionNode = sectionRef.current;
		if (!sectionNode || hasReachedRevealViewport) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const hasReachedThreshold = entries.some(
					(entry) =>
						entry.isIntersecting &&
						entry.intersectionRatio >= PLATFORM_ANIMATION_VIEWPORT_AMOUNT,
				);

				if (hasReachedThreshold) {
					setHasReachedRevealViewport(true);
					observer.disconnect();
				}
			},
			{ threshold: [PLATFORM_ANIMATION_VIEWPORT_AMOUNT] },
		);

		observer.observe(sectionNode);
		return () => observer.disconnect();
	}, [hasReachedRevealViewport, sectionRef]);

	useEffect(() => {
		if (!shouldLoadVideo || !isVideoReady) return;
		const videoNode = videoRef.current;
		if (!videoNode) return;
		videoNode.play().catch(() => {});
	}, [isVideoReady, shouldLoadVideo, videoRef]);

	useEffect(() => {
		if (!isVideoReady || !hasReachedRevealViewport) return;

		const revealTimer = window.setTimeout(() => {
			setIsVideoRevealed(true);
		}, VIDEO_POSTER_HOLD_MS);

		return () => window.clearTimeout(revealTimer);
	}, [hasReachedRevealViewport, isVideoReady]);

	return {
		isVideoRevealed: isVideoReady && isVideoRevealed,
		setIsVideoReady,
		shouldLoadVideo,
	};
}
