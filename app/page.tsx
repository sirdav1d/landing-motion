/** @format */

import {
	categoriesContent,
	heroContent,
	platformContent,
	preorderContent,
	socialProofHeadline,
	socialProofItems,
	solutionsContent,
} from './constants/landing-content';
import { LandingExperience } from './_components/landing-experience';
import { SiteHeader } from './_components/header';

export default function Home() {
	return (
		<div className='min-h-screen overflow-x-clip bg-background text-foreground'>
			<SiteHeader />
			<main>
				<LandingExperience
					heroContent={heroContent}
					socialProofHeadline={socialProofHeadline}
					socialProofItems={socialProofItems}
					solutionsContent={solutionsContent}
					platformContent={platformContent}
					categoriesContent={categoriesContent}
					preorderContent={preorderContent}
				/>
			</main>
		</div>
	);
}
