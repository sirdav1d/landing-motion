/** @format */

import {
	heroContent,
	socialProofHeadline,
	socialProofItems,
} from './_components/landing-content';
import { LandingExperience } from './_components/landing-experience';
import { SiteHeader } from './_components/site-header';

export default function Home() {
	return (
		<div className='min-h-screen overflow-x-clip bg-background text-foreground'>
			<SiteHeader />
			<main>
				<LandingExperience
					heroContent={heroContent}
					socialProofHeadline={socialProofHeadline}
					socialProofItems={socialProofItems}
				/>
			</main>
		</div>
	);
}
