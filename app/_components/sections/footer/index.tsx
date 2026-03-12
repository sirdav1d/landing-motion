/** @format */

export function Section() {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-border/60 py-10'>
			<div className='mx-auto flex max-w-[1320px] flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10'>
				<div>
					<p className='text-base font-semibold text-foreground'>atelier lume</p>
					<p className='mt-1 text-sm text-muted-foreground'>
						Acessórios sob medida para sua rotina universitária.
					</p>
				</div>

				<nav
					aria-label='Links de rodapé'
					className='flex flex-wrap items-center gap-5 text-sm font-medium text-foreground/80'>
					<a
						href='#hero'
						className='hover:opacity-85'>
						Início
					</a>
					<a
						href='#categorias'
						className='hover:opacity-85'>
						Categorias
					</a>
					<a
						href='#pre-venda'
						className='hover:opacity-85'>
						Pré-venda
					</a>
				</nav>

				<p className='text-sm text-muted-foreground'>
					© {year} Atelier Lume. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
