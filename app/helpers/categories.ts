/** @format */

import type { ProductCategoryItem } from '../types/landing';

export const MAX_PRODUCT_CATEGORIES = 4;

export function getVisibleCategories(
	items: ProductCategoryItem[],
): ProductCategoryItem[] {
	return items.slice(0, MAX_PRODUCT_CATEGORIES);
}
