import type { CmsImage } from './Image';

export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: CmsImage;
  child?: Category[];
  content?: {
    id: number;
    title: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    publishedAt?: string;
  };
} 