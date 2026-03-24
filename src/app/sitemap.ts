
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devtools-hub-green.vercel.app'
  const tools = [
    'base64-tool', 'chmod-calculator', 'color-picker', 'cron-parser',
    'css-minifier', 'diff-checker', 'hash-generator', 'html-entity-encoder',
    'json-formatter', 'json-to-csv', 'jwt-decoder', 'lorem-ipsum',
    'markdown-preview', 'password-generator', 'regex-tester', 'sql-formatter',
    'text-case-converter', 'timestamp-converter', 'url-encoder', 'uuid-generator',
  ]
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...tools.map(tool => ({
      url: ,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
