"use client";
import { useState } from "react";

export default function CssMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState<{original: number; minified: number} | null>(null);

  const minify = () => {
    let css = input;
    css = css.replace(/\/\*[\s\S]*?\*\//g, "");
    css = css.replace(/\/\/.*/g, "");
    css = css.replace(/\s+/g, " ");
    css = css.replace(/\s*([{}:;,>~+])\s*/g, "$1");
    css = css.replace(/;}/g, "}");
    css = css.trim();
    setOutput(css);
    setStats({ original: input.length, minified: css.length });
  };

  const beautify = () => {
    let css = input;
    css = css.replace(/\{/g, " {\n  ");
    css = css.replace(/;/g, ";\n  ");
    css = css.replace(/}/g, "\n}\n");
    css = css.replace(/  \n}/g, "\n}");
    setOutput(css.trim());
    setStats({ original: input.length, minified: css.trim().length });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">CSS Minifier</h1>
      <p className="text-gray-400 mb-6">Minify or beautify your CSS code.</p>
      <div className="flex gap-3 mb-4">
        <button onClick={minify} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">Minify</button>
        <button onClick={beautify} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Beautify</button>
      </div>
      {stats && (
        <div className="text-sm text-gray-400 mb-4">Original: {stats.original} chars | Result: {stats.minified} chars | Saved: {Math.round((1 - stats.minified / Math.max(stats.original, 1)) * 100)}%</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Paste CSS here..." className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-64 text-sm font-mono text-white resize-none" />
        <textarea value={output} readOnly placeholder="Output..." className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-64 text-sm font-mono text-green-400 resize-none" />
      </div>
      {output && <button onClick={() => navigator.clipboard.writeText(output)} className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Copy Output</button>}
    </div>
  );
}
