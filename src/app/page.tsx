import Link from "next/link";

const tools = [
  { name: "JSON Formatter", desc: "Format, validate and minify JSON data", href: "/tools/json-formatter", icon: "{ }" },
  { name: "Base64 Encoder/Decoder", desc: "Encode and decode Base64 strings", href: "/tools/base64-tool", icon: "B64" },
  { name: "URL Encoder/Decoder", desc: "Encode and decode URL components", href: "/tools/url-encoder", icon: "%" },
  { name: "Hash Generator", desc: "Generate MD5, SHA-1, SHA-256 hashes", href: "/tools/hash-generator", icon: "#" },
  { name: "UUID Generator", desc: "Generate unique UUIDs v1 and v4", href: "/tools/uuid-generator", icon: "ID" },
  { name: "Regex Tester", desc: "Test and debug regular expressions", href: "/tools/regex-tester", icon: ".*" },
  { name: "CSS Minifier", desc: "Minify and compress CSS code", href: "/tools/css-minifier", icon: "CS" },
  { name: "JWT Decoder", desc: "Decode and inspect JSON Web Tokens", href: "/tools/jwt-decoder", icon: "JW" },
  { name: "Timestamp Converter", desc: "Convert between Unix timestamps and dates", href: "/tools/timestamp-converter", icon: "TS" },
  { name: "Color Picker", desc: "Pick colors and convert between HEX, RGB, HSL", href: "/tools/color-picker", icon: "CL" },
  { name: "Lorem Ipsum Generator", desc: "Generate placeholder text for designs", href: "/tools/lorem-ipsum", icon: "Lp" },
  { name: "Markdown Preview", desc: "Preview and convert Markdown to HTML", href: "/tools/markdown-preview", icon: "MD" },

  { name: "HTML Entities", href: "/tools/html-entities", description: "Encode and decode HTML entities instantly" },
  { name: "Text to Slug", href: "/tools/text-to-slug", description: "Convert text to URL-friendly slugs" },
  { name: "Unicode Lookup", href: "/tools/unicode-lookup", description: "Inspect Unicode code points of any text" },
  { name: "Chmod Calculator", href: "/tools/chmod-calculator", description: "Calculate Unix file permission numbers visually" },
  { name: "CSS Gradient Generator", href: "/tools/css-gradient-generator", description: "Build beautiful CSS gradients visually" },

    { name: 'IP Address Info', desc: 'View your IP address, location, ISP, and network details', href: '/tools/ip-info' },
    { name: 'String Case Converter', desc: 'Convert text between camelCase, snake_case, kebab-case, PascalCase and more', href: '/tools/string-case-converter' },
    { name: 'PX to REM Converter', desc: 'Convert pixels to rem units with configurable base font size', href: '/tools/pixel-to-rem' },
    { name: 'HTML to Markdown', desc: 'Convert HTML markup to clean Markdown format', href: '/tools/html-to-markdown' },
    { name: 'Word Counter', desc: 'Count words, characters, sentences, paragraphs and estimate reading time', href: '/tools/word-counter' },];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          DevTools Hub
        </h1>
        <p className="text-gray-400 text-center text-lg mb-12">
          Free online developer utilities — no signup, no tracking, runs in your browser
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group"
            >
              <div className="text-2xl font-mono text-blue-400 mb-3">{tool.icon}</div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h2>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <footer className="mt-16 text-center text-gray-600 text-sm">
          Built with Next.js &mdash; 100% client-side, your data never leaves your browser
        </footer>
      </div>
    </main>
  );
}
