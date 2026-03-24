"use client";
import { useState } from "react";

export default function SvgToCss() {
  const [svg, setSvg] = useState(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="#6366f1"/></svg>`);
  const [copied, setCopied] = useState(false);

  const encode = (s: string) => s
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/{/g, "%7B")
    .replace(/}/g, "%7D")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E");

  const dataUri = `url("data:image/svg+xml,${encode(svg.trim())}")`;
  const cssRule = `background-image: ${dataUri};
background-repeat: no-repeat;
background-size: contain;`;

  const copy = () => {
    navigator.clipboard.writeText(cssRule);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SVG to CSS</h1>
        <p className="text-gray-400 mb-6">Convert SVG code into a CSS background-image data URI.</p>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">SVG Input</label>
          <textarea value={svg} onChange={e=>setSvg(e.target.value)} rows={6}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm resize-y" />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">CSS Output</label>
          <pre className="bg-gray-800 border border-gray-700 rounded p-3 text-sm font-mono whitespace-pre-wrap break-all">{cssRule}</pre>
        </div>
        <div className="flex gap-3 mb-6">
          <button onClick={copy} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-medium">
            {copied ? "Copied!" : "Copy CSS"}
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-2">Preview</p>
          <div className="w-32 h-32 border border-gray-700 rounded" style={{backgroundImage: `url("data:image/svg+xml,${encode(svg.trim())}")`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}} />
        </div>
      </div>
    </div>
  );
}
