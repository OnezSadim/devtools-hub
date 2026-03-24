import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devtools-hub-green.vercel.app'
  const tools = [
    'base64-tool', 'chmod-calculator', 'color-converter', 'color-picker', 'cron-parser',
    'css-minifier', 'css-unit-converter', 'diff-checker', 'hash-generator', 'html-entity-encoder',
    'html-minifier', 'image-base64', 'json-formatter', 'json-to-csv', 'jwt-decoder',
    'line-sorter', 'lorem-ipsum', 'markdown-preview', 'number-base-converter', 'password-generator',
    'regex-tester', 'sql-formatter', 'string-escaper', 'text-case-converter', 'timestamp-converter',
    'url-encoder', 'url-parser', 'uuid-generator', 'word-counter', 'xml-formatter',
  ]
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...tools.map(tool => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
