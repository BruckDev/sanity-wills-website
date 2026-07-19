import type {MetadataRoute} from 'next'

const baseUrl = 'https://wills.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/wills', '/trusts', '/estate-planning', '/insights', '/about', '/contact', '/privacy', '/accessibility']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
