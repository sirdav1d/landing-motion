/** @format */

import { TextAnimate } from '@/components/ui/text-animate';

type HeroTitleProps = {
	headlineStart: string;
	headlineEnd: string;
	activeWord: string;
	animateWord: boolean;
};

export function HeroTitle({
	headlineStart,
	headlineEnd,
	activeWord,
	animateWord,
}: HeroTitleProps) {
	return (
		<h1 className='mt-10 max-w-[20ch] text-balance text-5xl font-light leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl'>
			{headlineStart}
			<br />
			{headlineEnd}{' '}
			<span className='inline-flex items-baseline gap-2 align-baseline'>
				{animateWord ? (
					<TextAnimate
						key={activeWord}
						as='span'
						by='character'
						animation='blurInUp'
						startOnView={false}
						duration={0.5}
						accessible={false}
						className='font-display text-[1.06em] font-light italic text-[#f2dfb6]'>
						{activeWord}
					</TextAnimate>
				) : (
					<span className='font-display text-[1.06em] font-light italic text-[#f2dfb6]'>
						{activeWord}
					</span>
				)}
			</span>
		</h1>
	);
}
