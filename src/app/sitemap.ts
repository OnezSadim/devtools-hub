import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devtools-hub-green.vercel.app'
  const tools = [
    'json-formatter','base64-tool','url-encoder','hash-generator','uuid-generator',
    'regex-tester','css-minifier','color-picker','lorem-ipsum','markdown-preview',
    'jwt-decoder','timestamp-converter','diff-checker','cron-parser','password-generator',
    'svg-optimizer','css-gradient-generator','html-formatter','xml-formatter','yaml-validator',
    'code-beautifier','char-counter','line-sorter','duplicate-remover','text-case-converter',
    'url-parser','json-to-csv','markdown-to-html','image-resizer','favicon-generator',
    'json-to-typescript','meta-tag-generator','text-to-slug','html-entity-encoder','binary-converter',
    'number-base-converter','image-base64','http-status-codes','word-counter','ip-lookup'
  ]
  const toolUrls = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    ...toolUrls,
  
  {
    url: `${baseUrl}/tools/html-entities`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/tools/text-to-slug`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/tools/unicode-lookup`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/tools/chmod-calculator`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/tools/css-gradient-generator`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
]
}
