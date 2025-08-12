import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Category } from '../types/Category';
import { useLanguage } from './LanguageContext';
import { getCategories } from '../services/strapiService';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';

interface CategoryContextType {
  categories: Category[];
  loading: boolean;
  error: string | null;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getChildrenBySlug: (slug: string) => Category[];
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const locale = language === 'BY' ? 'be' : 'ru';

  // Effect for categories loading - handles both initial load and language changes
  useRunOnceWithDeps(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCategories(locale);
      function mapCategory(item: any): Category {
        const attr = item.attributes || {};
        const contentAttr = attr.content || item.content;
        const content = contentAttr ? {
          id: contentAttr.id,
          title: contentAttr.title || contentAttr.attributes?.title,
          slug: contentAttr.slug || contentAttr.attributes?.slug,
          description: contentAttr.description || contentAttr.attributes?.description,
          imageUrl: contentAttr.imageUrl || contentAttr.attributes?.imageUrl,
          publishedAt: contentAttr.publishedAt || contentAttr.attributes?.publishedAt,
        } : undefined;
        return {
          id: item.id,
          name: attr.name || item.name,
          slug: attr.slug || item.slug,
          image: attr.image?.data?.attributes || item.image,
          content,
          child: (attr.child || item.child || []).map(mapCategory),
        };
      }
      const formattedCategories = (data || []).map(mapCategory);
      setCategories(formattedCategories);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [locale]);

  const getCategoryBySlug = (slug: string): Category | undefined => {
    return categories.find(cat => cat.slug === slug);
  };

  const getChildrenBySlug = (slug: string): Category[] => {
    const category = getCategoryBySlug(slug);
    return category?.child || [];
  };

  const getParentCategorySlug = (childSlug: string): string | undefined => {
    for (const category of categories) {
      if (category.child && category.child.some((child: any) => child.slug === childSlug)) {
        return category.slug;
      }
      if (category.child) {
        for (const child of category.child) {
          if (child.child && child.child.some((grandChild: any) => grandChild.slug === childSlug)) {
            return category.slug;
          }
        }
      }
    }
    return undefined;
  };

  const getCategoryPathBySlug = (slug: string): Category[] => {
    const path: Category[] = [];
    function findPath(categories: Category[], targetSlug: string): boolean {
      for (const cat of categories) {
        if (cat.slug === targetSlug) {
          path.unshift(cat);
          return true;
        }
        if (cat.child && findPath(cat.child, targetSlug)) {
          path.unshift(cat);
          return true;
        }
      }
      return false;
    }
    findPath(categories, slug);
    return path;
  };

  const value: CategoryContextType & { getParentCategorySlug: (childSlug: string) => string | undefined, getCategoryPathBySlug: (slug: string) => Category[] } = {
    ...{
    categories,
    loading,
    error,
    getCategoryBySlug,
    getChildrenBySlug,
    },
    getParentCategorySlug,
    getCategoryPathBySlug,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = (): CategoryContextType & { getParentCategorySlug: (childSlug: string) => string | undefined, getCategoryPathBySlug: (slug: string) => Category[] } => {
  const context = useContext(CategoryContext) as CategoryContextType & { getParentCategorySlug: (childSlug: string) => string | undefined, getCategoryPathBySlug: (slug: string) => Category[] };
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
}; 