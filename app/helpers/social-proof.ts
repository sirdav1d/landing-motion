/** @format */

import type { SocialProofImageItem, SocialProofItem } from '../types/landing';

export function isImageItem(item: SocialProofItem): item is SocialProofImageItem {
	return item.kind === 'image';
}
