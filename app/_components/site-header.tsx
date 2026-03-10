/** @format */

'use client';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

const navItems = [
	{ label: 'Soluções', href: '#hero' },
	{ label: 'Plataforma', href: '#hero' },
	{ label: 'Preços', href: '#social-proof' },
	{ label: 'Grandes marcas', href: '#social-proof' },
];

const HEADER_COMPACT_OFFSET_PX = 24;

function getCompactStartY() {
	const socialProofSection = document.getElementById('social-proof');
	if (!socialProofSection) {
		return Number.POSITIVE_INFINITY;
	}

	const sectionStart =
		socialProofSection.getBoundingClientRect().top + window.scrollY;
	return Math.max(sectionStart - window.innerHeight + HEADER_COMPACT_OFFSET_PX, 0);
}

export function SiteHeader() {
	const { scrollY } = useScroll();
	const [compactStartY, setCompactStartY] = useState(Number.POSITIVE_INFINITY);
	const [isCompact, setIsCompact] = useState(false);

	const updateCompactStartY = useCallback(() => {
		const nextCompactStartY = getCompactStartY();
		setCompactStartY(nextCompactStartY);
		setIsCompact(window.scrollY >= nextCompactStartY);
	}, []);

	useEffect(() => {
		const rafId = window.requestAnimationFrame(updateCompactStartY);
		const timeoutId = window.setTimeout(updateCompactStartY, 240);

		window.addEventListener('resize', updateCompactStartY);
		window.addEventListener('load', updateCompactStartY);

		return () => {
			window.cancelAnimationFrame(rafId);
			window.clearTimeout(timeoutId);
			window.removeEventListener('resize', updateCompactStartY);
			window.removeEventListener('load', updateCompactStartY);
		};
	}, [updateCompactStartY]);

	useMotionValueEvent(scrollY, 'change', (latestValue) => {
		const nextIsCompact = latestValue >= compactStartY;
		setIsCompact((currentValue) =>
			currentValue === nextIsCompact ? currentValue : nextIsCompact,
		);
	});

	return (
		<header className='pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6'>
			<motion.div
				layout
				transition={{ duration: 0.54, ease: 'easeInOut' }}
				className={[
					'pointer-events-auto mx-auto flex items-center justify-between gap-4',
					isCompact
						? 'max-w-[980px] rounded-full border border-white/22 bg-[#10201fcc] px-5 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
						: 'max-w-[1260px] border border-transparent bg-transparent px-3 py-2',
				].join(' ')}>
				<a
					href='#hero'
					className='inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-[#f1e8d5]'>
					<span className='inline-block h-5 w-8 rounded-full border-2 border-[#f1e8d5]' />
					atelier lume
				</a>

				<nav
					aria-label='Navegação principal'
					className='hidden items-center gap-8 text-base font-semibold text-[#f1e8d5]/82 lg:flex'>
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className='transition hover:opacity-85'>
							{item.label}
						</a>
					))}
				</nav>

				<a
					href='#social-proof'
					className={[
						'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition',
						isCompact
							? 'border border-[#f2dfb6] bg-[#f2dfb6] text-[#0b1617] hover:bg-[#fff2d3]'
							: 'border border-white/44 bg-white text-[#0b1617] hover:bg-[#ece7da]',
					].join(' ')}>
					Acessar meu painel
				</a>
			</motion.div>
		</header>
	);
}
