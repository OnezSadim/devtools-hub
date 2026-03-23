import Link from "next/link";

const tools = [
  { name: "JSON Formatter", desc: "Format, validate and minify JSON data", href: "/tools/json-formatter", icon: "{ }" },
  { name: "Base64 Encoder/Decoder", desc: "Encode and decode Base64 strings", href: "/tools/base64-tool", icon: "B64" },
  { name: "URL Encoder/Decoder", desc: "Encode and decode URL components", href: "/tools/url-encoder", icon: "%20" },
  { name: "Hash Generator", desc: "Generate MD5, SHA-1, SHA-256 hashes", href: "/tools/hash-generator", icon: "#" },
  { name: "UUID Generator", desc: "Generate random UUIDs v4", href: "/tools/uuid-generator", icon: "ID" },
  { name: "Regex Tester", desc: "Test regular expressions with live matching", href: "/tools/regex-tester", icon: ".*" },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Developer Tools Hub
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Free, fast, client-side developer utilities. No data leaves your browser.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}
            className="group block p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 hover:bg-gray-900 transition-all">
            <div className="text-3xl font-mono text-blue-400 mb-3">{tool.icon}</div>
            <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition">{tool.name}</h2>
            <p className="text-sm text-gray-500">{tool.desc}</p>
          </Link>
        ))}
      </div>
      <footer className="mt-20 text-center text-gray-600 text-sm">
        All tools run 100% client-side. Your data never leaves your browser.
      </footer>
    </div>
  );
}
