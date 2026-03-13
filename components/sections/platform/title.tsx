/** @format */

import { TextAnimate } from '@/components/ui/text-animate';
import { cn } from '@/lib/utils';
import { PLATFORM_ANIMATION_VIEWPORT_AMOUNT } from './constants';

type TitleProps = {
	title: string;
	isVideoRevealed: boolean;
};

const PLATFORM_HIGHLIGHT_WORD = 'prática';
const PLATFORM_HIGHLIGHT_WORD_CLASS =
	'font-display text-[1.06em] font-light italic text-primary';

function resolvePlatformWordClass(segment: string) {
	const normalizedSegment = segment.trim().toLocaleLowerCase();
	if (normalizedSegment !== PLATFORM_HIGHLIGHT_WORD) {
		return undefined;
	}

	return PLATFORM_HIGHLIGHT_WORD_CLASS;
}

export function Title({ title, isVideoRevealed }: TitleProps) {
	if (!isVideoRevealed) {
		return (
			<h2
				aria-hidden='true'
				className={cn('platform-title', 'opacity-0')}>
				{title}
			</h2>
		);
	}

	return (
		<TextAnimate
			as='h2'
			by='word'
			animation='blurInUp'
			duration={1.2}
			startOnView
			once
			viewport={{ once: true, amount: PLATFORM_ANIMATION_VIEWPORT_AMOUNT }}
			className='platform-title'
			segmentClassName={resolvePlatformWordClass}>
			{title}
		</TextAnimate>
	);
}
