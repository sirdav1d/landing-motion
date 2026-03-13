/** @format */

import {
	categoriesContent,
	footerContent,
	heroContent,
	platformContent,
	preorderContent,
	socialProofHeadline,
	socialProofItems,
	solutionsContent,
} from './constants/landing-content';
import { LandingExperience } from './components/landing-experience';
import { SiteHeader } from './components/header';

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
					footerContent={footerContent}
				/>
			</main>
		</div>
	);
}
