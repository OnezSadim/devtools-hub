"use client";
import { useState } from "react";

export default function RectangleCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const w = parseFloat(width), h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) { setResult(null); return; }
    setResult({
      area: (w * h).toFixed(6),
      perimeter: (2 * (w + h)).toFixed(6),
      diagonal: Math.sqrt(w * w + h * h).toFixed(6),
    });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Rectangle Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate area, perimeter, and diagonal of a rectangle.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Width</label>
            <input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Height</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Calculate</button>
        {result && (
          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Area</span><span className="font-mono text-green-400">{result.area}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Perimeter</span><span className="font-mono text-green-400">{result.perimeter}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Diagonal</span><span className="font-mono text-blue-400">{result.diagonal}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
