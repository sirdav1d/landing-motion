/** @format */

import Image from 'next/image';
import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { cn } from '@/lib/utils';
import { CARD_ANIMATION_EASE } from './constants';

type BackgroundVideoLayerProps = {
	backgroundVideoSrc: string;
	backgroundVideoPosterSrc?: string;
	backgroundVideoObjectPosition?: string;
	isVideoRevealed: boolean;
	shouldLoadVideo: boolean;
	onLoadedData: () => void;
	videoRef: RefObject<HTMLVideoElement | null>;
};

export function BackgroundVideoLayer({
	backgroundVideoObjectPosition,
	backgroundVideoPosterSrc,
	backgroundVideoSrc,
	isVideoRevealed,
	onLoadedData,
	shouldLoadVideo,
	videoRef,
}: BackgroundVideoLayerProps) {
	return (
		<div className='pointer-events-none absolute inset-0'>
			{backgroundVideoPosterSrc ? (
				<Image
					src={backgroundVideoPosterSrc}
					alt=''
					aria-hidden='true'
					fill
					sizes='100vw'
					className={cn(
						'object-cover object-bottom transition-opacity duration-[1100ms]',
						isVideoRevealed ? 'opacity-0' : 'opacity-55',
					)}
					style={{
						objectPosition: backgroundVideoObjectPosition ?? 'center',
					}}
				/>
			) : null}

			<motion.div
				initial={false}
				animate={
					isVideoRevealed
						? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 0.9 }
						: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }
				}
				transition={{
					duration: 1.05,
					ease: CARD_ANIMATION_EASE,
				}}
				className='absolute inset-0 overflow-hidden'>
				<video
					ref={videoRef}
					className={cn(
						'h-full w-full object-cover object-bottom transition-transform duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)]',
						isVideoRevealed ? 'scale-100' : 'scale-[1.04]',
					)}
					loop
					muted
					playsInline
					preload={shouldLoadVideo ? 'metadata' : 'none'}
					poster={backgroundVideoPosterSrc}
					aria-hidden='true'
					tabIndex={-1}
					onLoadedData={onLoadedData}
					style={{
						objectPosition: backgroundVideoObjectPosition ?? 'center',
					}}>
					{shouldLoadVideo ? (
						<source
							src={backgroundVideoSrc}
							type='video/mp4'
						/>
					) : null}
				</video>
			</motion.div>
		</div>
	);
}
