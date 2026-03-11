/** @format */

import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const manrope = Manrope({
	variable: '--font-body-source',
	subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
	variable: '--font-display-source',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Atelier Lume',
	description:
		'Landing page editorial para a pré-venda de acessórios sob medida com energia jovem e entrega em casa.',
	icons: {
		icon: [{ url: '/favicon.ico' }],
		shortcut: ['/favicon.ico'],
		apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-BR'
			className={cn('font-sans', inter.variable)}>
			<body
				className={`${manrope.variable} ${cormorantGaramond.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
				{children}
			</body>
		</html>
	);
}
