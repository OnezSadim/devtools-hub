import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devtools-hub-green.vercel.app'
  const tools = [
    'json-formatter','base64-tool','url-encoder','hash-generator','uuid-generator',
    'regex-tester','css-minifier','color-picker','lorem-ipsum','markdown-preview',
    'jwt-decoder','timestamp-converter','diff-checker','cron-parser','password-generator',
    'number-base-converter','word-counter','html-minifier','image-base64','ip-lookup',
    'text-diff','json-minifier','css-formatter','http-status-codes','chmod-calculator',
    'url-parser','color-converter','xml-formatter','string-escaper','line-sorter',
    'json-to-typescript','meta-tag-generator','text-to-slug','html-entity-encoder','binary-converter'
  ]
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...tools.map(tool => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  ]
}
