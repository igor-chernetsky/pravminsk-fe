export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  publishedAt: string;
  createdAt: string;
  panel?: {
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
    image: any;
    data?: {
      type: string;
      bio?: string;
      slujenie?: string;
      poslaniya?: string;
      deatelnost?: string;
      [key: string]: any;
    };
  };
} 