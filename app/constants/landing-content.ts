/** @format */

import type {
	CategoriesContent,
	FooterContent,
	HeroContent,
	PlatformContent,
	PreorderContent,
	SocialProofItem,
	SolutionsContent,
} from '../types/landing';

export const heroContent: HeroContent = {
	headlineStart: 'Mais do que acessórios.',
	headlineEnd: 'A base para seu estilo',
	rotatingWords: ['fazer bonito.', 'se destacar.', 'acontecer.'],
	description:
		'Criamos peças com materiais acessíveis para universitárias que querem estilo sem complicação.',
	primaryCta: {
		label: 'Entrar na pré-venda',
		href: '#pre-venda',
	},
	secondaryCta: {
		label: 'Ver soluções',
		href: '#solucoes',
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
	'+180 mil clientes satisfeitos com a Atelier Lume';

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
			'https://images.unsplash.com/photo-1699894717283-1866e3f976aa?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Close em brinco brilhante com foco no acessório.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1721206624521-3393ded42e11?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Retrato jovem com colar e anéis em luz suave.',
	},
	{
		id: 'left-middle-style',
		kind: 'image',
		left: '4%',
		top: '32%',
		width: 170,
		height: 170,
		imageSrc:
			'https://images.unsplash.com/photo-1697635418866-5d3f1ea9788c?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Universitária em retrato fashion com brinco em destaque.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1556941975-8963a1f2a5a8?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Close em brinco pendente com luz quente.',
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
		imageAlt: 'Close de mão ajustando brinco dourado.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1693987663069-87c923c25984?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Retrato universitário em paleta azul.',
	},
	{
		id: 'left-bottom-style',
		kind: 'image',
		left: '4%',
		top: '70%',
		width: 188,
		height: 168,
		imageSrc:
			'https://images.unsplash.com/photo-1721206624521-3393ded42e11?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Retrato com colar e anéis em tons neutros.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1715374033196-0ff662284a7e?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Processo artesanal de montagem de acessório.',
	},
	{
		id: 'right-bottom-style',
		kind: 'image',
		left: '74%',
		top: '72%',
		width: 188,
		height: 168,
		imageSrc:
			'https://images.unsplash.com/photo-1556941975-8963a1f2a5a8?auto=format&fit=crop&q=80&w=900',
		imageAlt: 'Close de universitária com brinco em destaque.',
		secondaryImageSrc:
			'https://images.unsplash.com/photo-1771447676899-594e3a8265d9?auto=format&fit=crop&q=80&w=620',
		secondaryImageAlt: 'Pulso com acessórios em luz de fim de tarde.',
	},
];

export const solutionsContent: SolutionsContent = {
	eyebrow: 'Soluções',
	title: 'Seu estilo acompanha cada momento do campus',
	description:
		'Uma curadoria pensada para rotina universitária, com combinações fáceis e acabamento sob medida.',
	ctaLabel: 'Quero ver categorias',
	ctaHref: '#categorias',
	items: [
		{
			id: 'aula',
			title: 'Aula com presença',
			description:
				'Peças leves e versáteis para usar o dia inteiro sem perder conforto.',
			imageSrc:
				'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1600',
			imageAlt:
				'Jovem universitária com acessórios discretos em ambiente de estudo.',
		},
		{
			id: 'estagio',
			title: 'Estágio com identidade',
			description:
				'Visual elegante para reuniões e apresentações, mantendo sua autenticidade.',
			imageSrc:
				'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1600',
			imageAlt: 'Mulher com colar e brincos em retrato com luz suave.',
		},
		{
			id: 'festa',
			title: 'Festa com destaque',
			description:
				'Acabamentos brilhantes e composições expressivas para noites especiais.',
			imageSrc:
				'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1600',
			imageAlt:
				'Close em acessórios metálicos com clima noturno e fundo escuro.',
		},
	],
};

export const platformContent: PlatformContent = {
	eyebrow: 'Plataforma',
	title: 'Como funciona na prática',
	description:
		'Processo direto para você montar seu kit e receber em casa sem fricção.',
	backgroundVideoSrc: '/videos/platform-video.mp4',
	backgroundVideoPosterSrc: '/videos/platform-video-poster.jpg',
	backgroundVideoObjectPosition: 'center 78%',
	steps: [
		{
			id: 'escolha',
			title: 'Escolha seu estilo',
			description:
				'Selecione categorias, acabamento e referência visual em poucos cliques.',
		},
		{
			id: 'sob-medida',
			title: 'Ajuste sob medida',
			description:
				'Produzimos cada peça com foco em encaixe, conforto e durabilidade.',
		},
		{
			id: 'entrega',
			title: 'Receba em casa',
			description:
				'Entrega rastreada com prazo claro para você planejar o próximo look.',
		},
	],
	ctaLabel: 'Entrar na pré-venda',
	ctaHref: '#pre-venda',
};

export const categoriesContent: CategoriesContent = {
	eyebrow: 'Categorias',
	title: 'Quatro linhas para montar seu mix',
	description:
		'Explore as categorias principais e combine peças para criar composições autorais.',
	items: [
		{
			id: 'brincos',
			title: 'Brincos',
			description: 'Do minimalista ao statement para variar seu visual.',
			imageSrc:
				'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=1400',
			imageAlt: 'Close em brincos metálicos com iluminação quente.',
			href: '#pre-venda',
		},
		{
			id: 'colares',
			title: 'Colares',
			description: 'Camadas e pingentes para dar personalidade ao look.',
			imageSrc:
				'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1400',
			imageAlt: 'Colares em composição sobre fundo neutro.',
			href: '#pre-venda',
		},
		{
			id: 'pulseiras',
			title: 'Pulseiras',
			description:
				'Texturas e combinações para uso diário ou ocasião especial.',
			imageSrc:
				'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1400',
			imageAlt: 'Pulso com pulseiras em composição moderna.',
			href: '#pre-venda',
		},
		{
			id: 'aneis',
			title: 'Anéis',
			description:
				'Modelagens ajustáveis para composições delicadas ou marcantes.',
			imageSrc:
				'https://images.unsplash.com/photo-1605102062083-ae61a51393f3?auto=format&fit=crop&q=80&w=1400',
			imageAlt: 'Anel com pedra central sobre páginas de livro.',
			href: '#pre-venda',
		},
	],
};

export const footerContent: FooterContent = {
	brandName: 'atelier lume',
	highlightItems: [
		{
			id: 'daily-kit',
			labelPrefix: 'KIT',
			label: 'Campus Daily',
			meta: 'Disponivel na pre-venda',
			href: '#categorias',
		},
		{
			id: 'light-stack',
			labelPrefix: 'KIT',
			label: 'Light Stack',
			meta: 'Disponivel na pre-venda',
			href: '#categorias',
		},
		{
			id: 'night-edit',
			labelPrefix: 'KIT',
			label: 'Night Edit',
			meta: 'Lote 2026',
			href: '#categorias',
		},
	],
	socialLinks: [
		{ label: 'Instagram', href: '#' },
		{ label: 'TikTok', href: '#' },
		{ label: 'YouTube', href: '#' },
	],
	creditLabel: 'Website by David Diniz Dos Santos',
};

export const preorderContent: PreorderContent = {
	eyebrow: 'Pré-venda',
	title: 'Receba acesso antecipado',
	description:
		'Cadastre um único contato para garantir prioridade quando os kits abrirem.',
	inputLabel: 'Seu melhor contato',
	inputPlaceholder: 'E-mail, WhatsApp ou Instagram',
	submitLabel: 'Entrar na lista',
	successMessage: 'Contato recebido. Você já está na lista de pré-venda.',
	privacyNote:
		'Usaremos seu contato apenas para avisos sobre lançamento e disponibilidade.',
};
