import type { CmsImage } from './Image';

export interface Panel {
  id: number;
  documentId: string;
  title: string;
  description: string;
  position: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: CmsImage;
  data?: {
    type: string;
    bio?: string;
    slujenie?: string;
    poslaniya?: string;
    deatelnost?: string;
    [key: string]: any;
  };
} 