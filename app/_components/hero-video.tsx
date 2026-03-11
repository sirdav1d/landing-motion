/** @format */

type HeroVideoProps = {
	src: string;
	posterSrc?: string;
	objectPosition: string;
};

export function HeroVideo({ src, posterSrc, objectPosition }: HeroVideoProps) {
	return (
		<video
			className='h-full w-full object-cover'
			style={{ objectPosition }}
			autoPlay
			loop
			muted
			playsInline
			poster={posterSrc}
			preload='metadata'>
			<source
				src={src}
				type='video/mp4'
			/>
		</video>
	);
}
