"use client";
import { useState } from "react";

export default function VolumeCalculator() {
  const [shape, setShape] = useState("sphere");
  const [r, setR] = useState("");
  const [l, setL] = useState("");
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    let vol = 0;
    if (shape === "sphere") { const rv = parseFloat(r); if (!isNaN(rv) && rv > 0) vol = (4/3) * Math.PI * rv**3; }
    else if (shape === "cube") { const lv = parseFloat(l); if (!isNaN(lv) && lv > 0) vol = lv**3; }
    else if (shape === "cylinder") { const rv = parseFloat(r), hv = parseFloat(h); if (!isNaN(rv) && !isNaN(hv) && rv > 0 && hv > 0) vol = Math.PI * rv**2 * hv; }
    else if (shape === "cone") { const rv = parseFloat(r), hv = parseFloat(h); if (!isNaN(rv) && !isNaN(hv) && rv > 0 && hv > 0) vol = (1/3) * Math.PI * rv**2 * hv; }
    else if (shape === "box") { const lv = parseFloat(l), wv = parseFloat(w), hv = parseFloat(h); if (!isNaN(lv) && !isNaN(wv) && !isNaN(hv) && lv > 0 && wv > 0 && hv > 0) vol = lv * wv * hv; }
    setResult(vol > 0 ? vol.toFixed(6) : "");
  };

  const shapes = ["sphere", "cube", "cylinder", "cone", "box"];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Volume Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate volume of sphere, cube, cylinder, cone, or box.</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {shapes.map(s => (
            <button key={s} onClick={() => { setShape(s); setResult(""); }} className={"px-3 py-1 rounded capitalize text-sm " + (shape === s ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>{s}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {(shape === "sphere" || shape === "cylinder" || shape === "cone") && <div><label className="block text-sm text-gray-400 mb-1">Radius</label><input type="number" value={r} onChange={e => setR(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>}
          {shape === "cube" && <div><label className="block text-sm text-gray-400 mb-1">Side Length</label><input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>}
          {shape === "box" && <><div><label className="block text-sm text-gray-400 mb-1">Length</label><input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div><div><label className="block text-sm text-gray-400 mb-1">Width</label><input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div></>}
          {(shape === "cylinder" || shape === "cone" || shape === "box") && <div><label className="block text-sm text-gray-400 mb-1">Height</label><input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" /></div>}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Calculate Volume</button>
        {result && (
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between"><span className="text-gray-400">Volume</span><span className="font-mono text-green-400 text-xl">{result}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
