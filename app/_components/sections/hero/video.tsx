/** @format */

type VideoProps = {
	src: string;
	posterSrc?: string;
	objectPosition: string;
};

export function Video({ src, posterSrc, objectPosition }: VideoProps) {
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
