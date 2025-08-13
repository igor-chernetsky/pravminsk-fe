const cmsUrl = import.meta.env.VITE_CMS_URL;
export async function getArticles({ locale, categorySlug, search, date, page = 1, pageSize = 10 }) {
    let url = `${cmsUrl}/api/articles?locale=${locale}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    if (categorySlug) {
        url = `${cmsUrl}/api/articles/category/${encodeURIComponent(categorySlug)}?locale=${locale}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    }
    if (search && search.trim()) {
        url += `&filters[$or][0][title][$containsi]=${encodeURIComponent(search)}&filters[$or][1][description][$containsi]=${encodeURIComponent(search)}`;
    }
    if (date) {
        url += `&filters[publishedAt][$contains]=${encodeURIComponent(date)}`;
    }
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getArticleBySlug({ locale, slug }) {
    const url = `${cmsUrl}/api/articles/${encodeURIComponent(slug)}?locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getCategories(locale) {
    const url = `${cmsUrl}/api/categories?filters[name][$eq]=menu&locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getPanels(locale) {
    const url = `${cmsUrl}/api/panels?filters[position][$eq]=home&locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getSidebarPanels(locale) {
    const url = `${cmsUrl}/api/panels?filters[position][$eq]=sidebar&locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getSocials(locale) {
    const url = `${cmsUrl}/api/socials?locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
export async function getArticlesWithPhotos({ locale, page = 1, pageSize = 6 }) {
    const url = `${cmsUrl}/api/articles?filters[old_photos][$notNull]=true&populate[old_photos]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}&locale=${locale}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
    return res.json();
}
