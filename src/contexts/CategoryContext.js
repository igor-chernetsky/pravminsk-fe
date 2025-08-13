import React, { createContext, useContext, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getCategories } from '../services/strapiService';
import { useRunOnceWithDeps } from '../hooks/useRunOnce';
const CategoryContext = createContext(undefined);
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const locale = language === 'BY' ? 'be' : 'ru';
    // Effect for categories loading - handles both initial load and language changes
    useRunOnceWithDeps(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getCategories(locale);
            function mapCategory(item) {
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
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    }, [locale]);
    const getCategoryBySlug = (slug) => {
        return categories.find(cat => cat.slug === slug);
    };
    const getChildrenBySlug = (slug) => {
        const category = getCategoryBySlug(slug);
        return category?.child || [];
    };
    const getParentCategorySlug = (childSlug) => {
        for (const category of categories) {
            if (category.child && category.child.some((child) => child.slug === childSlug)) {
                return category.slug;
            }
            if (category.child) {
                for (const child of category.child) {
                    if (child.child && child.child.some((grandChild) => grandChild.slug === childSlug)) {
                        return category.slug;
                    }
                }
            }
        }
        return undefined;
    };
    const getCategoryPathBySlug = (slug) => {
        const path = [];
        function findPath(categories, targetSlug) {
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
    const value = {
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
    return (<CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>);
};
// eslint-disable-next-line react-refresh/only-export-components
export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategories must be used within a CategoryProvider');
    }
    return context;
};
