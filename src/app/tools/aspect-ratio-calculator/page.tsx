"use client";
import { useState } from "react";

export default function AspectRatioCalculator() {
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [ratioW, setRatioW] = useState("");
  const [ratioH, setRatioH] = useState("");
  const [newW, setNewW] = useState("");
  const [newH, setNewH] = useState("");

  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

  const calcRatio = () => {
    const width = parseFloat(w), height = parseFloat(h);
    if (!width || !height) return;
    const d = gcd(Math.round(width), Math.round(height));
    setRatioW(String(Math.round(width/d)));
    setRatioH(String(Math.round(height/d)));
  };

  const scaleFromWidth = () => {
    if (!newW || !w || !h) return;
    setNewH(String((parseFloat(newW) * parseFloat(h) / parseFloat(w)).toFixed(2)));
  };

  const scaleFromHeight = () => {
    if (!newH || !w || !h) return;
    setNewW(String((parseFloat(newH) * parseFloat(w) / parseFloat(h)).toFixed(2)));
  };

  const commonRatios = ["16:9","4:3","1:1","21:9","3:2","9:16"];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate and scale aspect ratios for images and video</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Find Ratio</h3>
            <div className="flex gap-3 mb-3">
              <input value={w} onChange={e => setW(e.target.value)} placeholder="Width" className="flex-1 bg-gray-800 rounded-lg px-3 py-2" />
              <input value={h} onChange={e => setH(e.target.value)} placeholder="Height" className="flex-1 bg-gray-800 rounded-lg px-3 py-2" />
              <button onClick={calcRatio} className="bg-blue-600 hover:bg-blue-700 px-4 rounded-lg">Calc</button>
            </div>
            {ratioW && <div className="bg-gray-800 rounded-lg p-3 text-center text-xl font-bold">{ratioW}:{ratioH}</div>}
          </div>
          <div>
            <h3 className="font-semibold mb-3">Scale Dimensions</h3>
            <div className="flex gap-3">
              <input value={newW} onChange={e => setNewW(e.target.value)} onBlur={scaleFromWidth} placeholder="New Width" className="flex-1 bg-gray-800 rounded-lg px-3 py-2" />
              <span className="flex items-center text-gray-500">×</span>
              <input value={newH} onChange={e => setNewH(e.target.value)} onBlur={scaleFromHeight} placeholder="New Height" className="flex-1 bg-gray-800 rounded-lg px-3 py-2" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Common Ratios</h3>
            <div className="grid grid-cols-3 gap-2">
              {commonRatios.map(r => {
                const [rw,rh] = r.split(":").map(Number);
                return (
                  <button key={r} onClick={() => { setW(String(rw*100)); setH(String(rh*100)); setRatioW(String(rw)); setRatioH(String(rh)); }}
                    className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2 text-sm font-mono">{r}</button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
