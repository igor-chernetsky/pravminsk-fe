const cmsUrl = import.meta.env.VITE_CMS_URL;

export async function getArticles({ locale, categorySlug, search, date, page = 1, pageSize = 10 }: { locale: string; categorySlug?: string; search?: string; date?: string; page?: number; pageSize?: number }) {
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
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getArticleBySlug({ locale, slug }: { locale: string; slug: string }) {
  const url = `${cmsUrl}/api/articles/${encodeURIComponent(slug)}?locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getCategories(locale: string) {
  const url = `${cmsUrl}/api/categories?filters[name][$eq]=menu&locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getPanels(locale: string) {
  const url = `${cmsUrl}/api/panels?filters[position][$eq]=home&locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getSidebarPanels(locale: string) {
  const url = `${cmsUrl}/api/panels?filters[position][$eq]=sidebar&locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getSocials(locale: string) {
  const url = `${cmsUrl}/api/socials?locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getArticlesWithPhotos({ locale, page = 1, pageSize = 6 }: { locale: string; page?: number; pageSize?: number }) {
  const url = `${cmsUrl}/api/articles/with-photos?pagination[page]=${page}&pagination[pageSize]=${pageSize}&min=5&locale=${locale}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  return res.json();
} 