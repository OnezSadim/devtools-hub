"use client";
import { useState } from "react";

export default function AspectRatioCalculator() {
  const [w, setW] = useState(1920);
  const [h, setH] = useState(1080);

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  const d = gcd(w, h);
  const ratioW = w / d, ratioH = h / d;
  const common = [["16:9",16,9],["4:3",4,3],["21:9",21,9],["1:1",1,1],["3:2",3,2],["2:1",2,1],["9:16",9,16],["4:5",4,5]];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate and convert aspect ratios for any dimensions</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Width (px)</label>
              <input type="number" value={w} onChange={e => setW(parseInt(e.target.value)||1)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Height (px)</label>
              <input type="number" value={h} onChange={e => setH(parseInt(e.target.value)||1)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 text-center">
            <p className="text-5xl font-bold text-blue-400">{ratioW}:{ratioH}</p>
            <p className="text-gray-400 mt-2">Aspect Ratio</p>
            <p className="text-gray-500 text-sm mt-1">{(w/h).toFixed(4)} : 1</p>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-3">Find height for given width:</label>
            <div className="grid grid-cols-2 gap-3">
              {[640,800,1024,1280,1366,1440,1920,2560].map(pw => (
                <div key={pw} className="bg-gray-800 rounded-lg px-4 py-3 flex justify-between">
                  <span className="text-gray-400">{pw}px</span>
                  <span className="font-mono text-green-400">{Math.round(pw * h / w)}px</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-300 mb-2">Common ratios:</p>
            <div className="flex flex-wrap gap-2">
              {common.map(([label, rw, rh]) => (
                <button key={label} onClick={() => { setW(rw * 160); setH(rh * 160); }} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm">{label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
