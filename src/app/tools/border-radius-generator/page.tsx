"use client";
import { useState } from "react";

export default function BorderRadiusGenerator() {
  const [tl, setTl] = useState(12);
  const [tr, setTr] = useState(12);
  const [br, setBr] = useState(12);
  const [bl, setBl] = useState(12);
  const [linked, setLinked] = useState(true);
  const [copied, setCopied] = useState(false);

  function setAll(v) { setTl(v); setTr(v); setBr(v); setBl(v); }
  function handleChange(setter, v) {
    if (linked) setAll(v); else setter(v);
  }
  const radius = linked ? `${tl}px` : `${tl}px ${tr}px ${br}px ${bl}px`;
  const css = `border-radius: ${radius};`;
  const copy = () => { navigator.clipboard.writeText(css); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const corners = [["Top Left", tl, setTl],["Top Right", tr, setTr],["Bottom Right", br, setBr],["Bottom Left", bl, setBl]];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Border Radius Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS border-radius values visually</p>
        <div className="flex items-center justify-center h-48 bg-gray-800 rounded-xl mb-6">
          <div className="w-40 h-32 bg-blue-500" style={{borderRadius: radius}} />
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={linked} onChange={e => setLinked(e.target.checked)} className="w-4 h-4" />
            <span className="text-gray-300">Link all corners</span>
          </label>
          {corners.map(([label, val, setter]) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">{label}</span><span className="font-mono text-green-400">{val}px</span></div>
              <input type="range" min={0} max={200} value={val} onChange={e => handleChange(setter, parseInt(e.target.value))} className="w-full" />
            </div>
          ))}
          <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">{css}</div>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
