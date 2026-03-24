"use client";
import { useState } from "react";

const resets: Record<string,string> = {
  "Minimal": `*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }`,
  "Normalize": `html { line-height: 1.15; -webkit-text-size-adjust: 100%; }
body { margin: 0; }
main { display: block; }
h1 { font-size: 2em; margin: 0.67em 0; }
hr { box-sizing: content-box; height: 0; overflow: visible; }
pre { font-family: monospace, monospace; font-size: 1em; }
a { background-color: transparent; }
img { border-style: none; }
button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0; }`,
  "Full Reset": `* { margin: 0; padding: 0; box-sizing: border-box; }
body { line-height: 1; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote::before, blockquote::after, q::before, q::after { content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }`,
  "Modern": `*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
html, body { height: 100%; }
body { line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
#root, #__next { isolation: isolate; }`,
  "Tailwind Preflight": `*, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; }
html { line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; font-family: ui-sans-serif, system-ui; }
body { margin: 0; line-height: inherit; }
hr { height: 0; color: inherit; border-top-width: 1px; }
abbr:where([title]) { text-decoration: underline dotted; }
h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
a { color: inherit; text-decoration: inherit; }`,
};

export default function CssResetGenerator() {
  const [selected, setSelected] = useState("Modern");
  const [custom, setCustom] = useState("");
  const output = resets[selected];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Reset Generator</h1>
        <p className="text-gray-400 mb-8">Choose and copy CSS resets for your projects.</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(resets).map(r=>(
            <button key={r} onClick={()=>setSelected(r)} className={`px-4 py-2 rounded-lg text-sm ${selected===r?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{r}</button>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">{selected} Reset</h2>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Copy CSS</button>
          </div>
          <pre className="text-sm text-green-400 whitespace-pre-wrap overflow-x-auto">{output}</pre>
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Add Custom Properties</h3>
          <textarea value={custom} onChange={e=>setCustom(e.target.value)} rows={4} placeholder="/* your custom CSS here */" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm resize-none" />
          {custom && (
            <button onClick={()=>navigator.clipboard.writeText(output+"
"+custom)} className="mt-3 text-sm bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">Copy Combined</button>
          )}
        </div>
      </div>
    </main>
  );
}