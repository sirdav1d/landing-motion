/** @format */

import type { HeroContent, SocialProofItem } from './landing-types';

export const heroContent: HeroContent = {
	headlineStart: 'Mais do que acessórios.',
	headlineEnd: 'A base para seu estilo',
	rotatingWords: ['fazer bonito.', 'se destacar.', 'acontecer.'],
	description:
		'Criamos peças com materiais acessíveis para universitários que querem estilo sem complicação.',
	primaryCta: {
		label: 'Entrar na pré-venda',
		href: '#social-proof',
	},
	secondaryCta: {
		label: 'Falar com Vendas',
		href: '#social-proof',
	},
	backgroundVideoSrc:
		'https://videos.pexels.com/video-files/9430543/9430543-uhd_2732_1440_25fps.mp4',
	bottomVideoSrc:
		'https://videos.pexels.com/video-files/9430543/9430543-uhd_2732_1440_25fps.mp4',
	bottomPosterSrc:
		'https://images.unsplash.com/photo-1586878602450-90660b1cd6b8?auto=format&fit=crop&q=80&w=1700',
	proofPoints: ['Sob medida', 'Preço acessível', 'Entrega em casa'],
	videoObjectPosition: 'center 28%',
};

export const socialProofHeadline =
	'+180 mil marcas crescendo com a Atelier Lume';

export const socialProofItems: SocialProofItem[] = [
	{
		id: 'logo-is-bikini',
		kind: 'logo',
		label: 'IS BIKINI',
		left: '8%',
		top: '15%',
		width: 190,
		height: 82,
	},
	{
		id: 'logo-capeto',
		kind: 'logo',
		label: 'CAPETÔ',
		left: '73%',
		top: '17%',
		width: 190,
		height: 82,
	},
	{
		id: 'logo-desgosto',
		kind: 'logo',
		label: 'DESGOSTO',
		left: '15%',
		top: '55%',
		width: 230,
		height: 82,
	},
	{
		id: 'logo-dudah',
		kind: 'logo',
		label: 'DUDAH!',
		left: '41%',
		top: '72%',
		width: 190,
		height: 82,
	},
	{
		id: 'logo-mica',
		kind: 'logo',
		label: 'm i c a',
		left: '83%',
		top: '45%',
		width: 126,
		height: 108,
	},
	{
		id: 'top-center-model',
		kind: 'image',
		left: '41%',
		top: '6%',
		width: 178,
		height: 185,
		imageSrc:
			'https://images.unsplash.com/photo-1623113562048-627016402138?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Universitária com suéter azul e brincos dourados.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1708133302351-8121a58e342c?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Close de mão ajustando brinco.',
	},
	{
		id: 'left-middle-style',
		kind: 'image',
		left: '4%',
		top: '32%',
		width: 170,
		height: 170,
		imageSrc:
			'https://images.unsplash.com/photo-1663098007972-9cc732e72f8f?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Jovem com vestido azul e colar dourado.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1697635418866-5d3f1ea9788c?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Retrato com maquiagem brilhante e brinco.',
	},
	{
		id: 'right-middle-style',
		kind: 'image',
		left: '83%',
		top: '24%',
		width: 170,
		height: 170,
		imageSrc:
			'https://images.unsplash.com/photo-1708133302351-8121a58e342c?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Detalhe de mão colocando brinco.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1623113562048-627016402138?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Retrato urbano com acessórios dourados.',
	},
	{
		id: 'left-bottom-style',
		kind: 'image',
		left: '4%',
		top: '70%',
		width: 188,
		height: 168,
		imageSrc:
			'https://images.unsplash.com/photo-1755828564302-5c722f1c74a7?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Retrato com argolas e lenço estiloso.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1663098007972-9cc732e72f8f?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Look jovem em tons de azul.',
	},
	{
		id: 'right-bottom-style',
		kind: 'image',
		left: '74%',
		top: '72%',
		width: 188,
		height: 168,
		imageSrc:
			'https://images.unsplash.com/photo-1697635418866-5d3f1ea9788c?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Retrato fashion com brinco em tons azulados.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1708133302351-8121a58e342c?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Detalhe de acessório no campus.',
	},
];
