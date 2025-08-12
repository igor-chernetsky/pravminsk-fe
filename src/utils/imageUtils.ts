import type { CmsImage as CmsImageType } from '../types/Image';

/**
 * Get the appropriate image URL based on variant and available formats
 * @param image - The CMS image object
 * @param variant - The image variant ('category' | 'article')
 * @returns The complete image URL
 */
export const getImageUrl = (image: CmsImageType, variant: 'category' | 'article' = 'article'): string => {
  const cmsUrl = import.meta.env.VITE_CMS_URL;
  
  if (variant === 'category') {
    // For category images, use medium format for better quality
    return image.formats.medium ? `${cmsUrl}${image.formats.medium.url}` : `${cmsUrl}${image.url}`;
  } else {
    // For article images, use small format for performance
    return image.formats.small ? `${cmsUrl}${image.formats.small.url}` : `${cmsUrl}${image.url}`;
  }
};

/**
 * Get the appropriate image URL for article.imageUrl field
 * @param imageUrl - The image URL string
 * @returns The complete image URL or undefined
 */
export const getArticleImageUrl = (imageUrl: string | undefined): string | undefined => {
  if (!imageUrl) return undefined;
  
  const strapiUrl = import.meta.env.VITE_CMS_URL;
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  
  // If imageUrl starts with 'images/', use imageBaseUrl
  if (imageUrl.startsWith('images/')) {
    return `${imageBaseUrl}/${imageUrl}`;
  }
  
  // Otherwise, use strapiUrl (existing logic)
  return `${strapiUrl}${imageUrl}`;
}; 