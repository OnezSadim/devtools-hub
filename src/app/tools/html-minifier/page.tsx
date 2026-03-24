'use client';
import { useState } from 'react';
export default function HtmlMinifier() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const minify = (html: string) => {
    return html
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s+/g, ' ')
      .replace(/> </g, '><')
      .replace(/ (class|id|src|href|alt|type|value|name|placeholder|action|method)=" /g, ' $1="')
      .trim();
  };
  const output = minify(input);
  const savings = input.length > 0 ? Math.round((1 - output.length / input.length) * 100) : 0;
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Minifier</h1>
        <p className="text-gray-400 mb-8">Remove whitespace and comments from HTML to reduce file size.</p>
        {input && (
          <div className="bg-gray-900 rounded-xl p-4 mb-6 flex gap-6">
            <div className="text-center"><div className="text-2xl font-bold text-blue-400">{input.length}</div><div className="text-gray-400 text-sm">Original bytes</div></div>
            <div className="text-center"><div className="text-2xl font-bold text-green-400">{output.length}</div><div className="text-gray-400 text-sm">Minified bytes</div></div>
            <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{savings}%</div><div className="text-gray-400 text-sm">Saved</div></div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Input HTML</label>
            <textarea value={input} onChange={e => setInput(e.target.value)}
              placeholder="Paste your HTML here..."
              className="w-full h-80 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 font-mono text-sm text-gray-100 focus:outline-none focus:border-blue-500 resize-none" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-400">Minified Output</label>
              {output && <button onClick={copy} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300">{copied ? 'Copied!' : 'Copy'}</button>}
            </div>
            <textarea readOnly value={output}
              className="w-full h-80 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 font-mono text-sm text-green-400 focus:outline-none resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
}