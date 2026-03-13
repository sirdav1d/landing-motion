/** @format */

import { Instagram, Music2, Youtube } from 'lucide-react';
import type {
	CtaLink,
	FooterHighlightItem,
} from '../../../types/landing';

type LinksPanelProps = {
	highlightItems: FooterHighlightItem[];
	socialLinks: CtaLink[];
};

function getSocialIcon(label: string) {
	const normalizedLabel = label.toLowerCase();
	if (normalizedLabel.includes('instagram')) {
		return (
			<Instagram
				size={17}
				aria-hidden='true'
			/>
		);
	}

	if (normalizedLabel.includes('tiktok')) {
		return (
			<Music2
				size={17}
				aria-hidden='true'
			/>
		);
	}

	return (
		<Youtube
			size={17}
			aria-hidden='true'
		/>
	);
}

export function LinksPanel({
	highlightItems,
	socialLinks,
}: LinksPanelProps) {
	return (
		<section
			aria-label='Navegacao do rodape'
			className='flex flex-col gap-8'>
			<ul>
				{highlightItems.map((item) => (
					<li
						key={item.id}
						className='border-b border-border/70'>
						<a
							href={item.href}
							className='grid cursor-pointer grid-cols-[56px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 py-3 md:grid-cols-[72px_minmax(0,1fr)_auto] md:gap-x-4 md:py-4'>
							<span className='text-base text-foreground/72'>{item.labelPrefix}</span>
							<span className='text-[clamp(2.05rem,3.8vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.02em] text-foreground'>
								{item.label}
							</span>
							<span className='col-start-2 text-sm text-muted-foreground md:col-auto md:text-right'>
								{item.meta}
							</span>
						</a>
					</li>
				))}
			</ul>

			<nav
				aria-label='Redes sociais'
				className='mt-1 flex items-center gap-3 md:justify-end'>
				{socialLinks.map((link) => (
					<SocialLink
						key={link.label}
						link={link}
					/>
				))}
			</nav>
		</section>
	);
}

type SocialLinkProps = {
	link: CtaLink;
};

function SocialLink({ link }: SocialLinkProps) {
	return (
		<a
			href={link.href}
			aria-label={link.label}
			title={link.label}
			className='inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/80 text-foreground/74 hover:border-foreground/40 hover:bg-card/70 hover:text-foreground'
			target={link.href.startsWith('http') ? '_blank' : undefined}
			rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
			{getSocialIcon(link.label)}
		</a>
	);
}
