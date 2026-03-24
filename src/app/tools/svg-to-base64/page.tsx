"use client";
import { useState } from "react";
export default function SvgToBase64() {
  const [svg, setSvg] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("datauri");
  const convert = () => {
    if (!svg.trim()) return;
    const b64 = btoa(unescape(encodeURIComponent(svg)));
    if (mode === "datauri") setResult(`data:image/svg+xml;base64,${b64}`);
    else setResult(b64);
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">SVG to Base64</h1>
      <p className="text-gray-400 mb-4">Convert SVG markup to a base64 data URI or raw base64 string.</p>
      <div className="flex gap-4 mb-3">
        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="datauri" checked={mode==="datauri"} onChange={e=>setMode(e.target.value)} /> Data URI</label>
        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="base64" checked={mode==="base64"} onChange={e=>setMode(e.target.value)} /> Raw Base64</label>
      </div>
      <textarea className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3" placeholder="Paste SVG markup here..." value={svg} onChange={e=>setSvg(e.target.value)} />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium mb-3">Convert</button>
      {result && <div><p className="text-sm text-gray-400 mb-1">Result:</p><textarea readOnly className="w-full h-24 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-xs" value={result} onClick={e=>(e.target as HTMLTextAreaElement).select()} /><button onClick={()=>navigator.clipboard.writeText(result)} className="mt-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Copy</button></div>}
    </div>
  );
}
