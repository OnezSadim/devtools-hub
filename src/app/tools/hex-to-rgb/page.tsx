"use client";
import { useState } from "react";

export default function HexToRgb() {
  const [hex, setHex] = useState("#3b82f6");
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);

  function fromHex(val) {
    setHex(val);
    const clean = val.replace("#", "");
    if (clean.length === 6) {
      setR(parseInt(clean.slice(0,2), 16));
      setG(parseInt(clean.slice(2,4), 16));
      setB(parseInt(clean.slice(4,6), 16));
    }
  }

  function fromRgb(rv, gv, bv) {
    setR(rv); setG(gv); setB(bv);
    const toHex = n => n.toString(16).padStart(2, "0");
    setHex("#" + toHex(rv) + toHex(gv) + toHex(bv));
  }

  const hsl = () => {
    const rn = r/255, gn = g/255, bn = b/255;
    const max = Math.max(rn,gn,bn), min = Math.min(rn,gn,bn);
    const l = (max+min)/2;
    if (max === min) return `hsl(0, 0%, ${Math.round(l*100)}%)`;
    const d = max - min;
    const s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    let h = max === rn ? (gn-bn)/d + (gn < bn ? 6 : 0) : max === gn ? (bn-rn)/d + 2 : (rn-gn)/d + 4;
    return `hsl(${Math.round(h*60)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Hex to RGB Converter</h1>
        <p className="text-gray-400 mb-6">Convert colors between HEX, RGB, and HSL</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-xl border border-gray-700" style={{backgroundColor: hex}} />
            <div>
              <p className="text-2xl font-mono font-bold">{hex.toUpperCase()}</p>
              <p className="text-gray-400 font-mono">rgb({r}, {g}, {b})</p>
              <p className="text-gray-400 font-mono">{hsl()}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">HEX</label>
            <div className="flex gap-2">
              <input type="color" value={hex} onChange={e => fromHex(e.target.value)} className="w-12 h-10 rounded cursor-pointer bg-gray-800 border border-gray-700" />
              <input className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 font-mono text-green-400 focus:outline-none" value={hex} onChange={e => fromHex(e.target.value)} />
            </div>
          </div>
          {[["R", r, v => fromRgb(v, g, b)], ["G", g, v => fromRgb(r, v, b)], ["B", b, v => fromRgb(r, g, v)]].map(([label, val, handler]) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label} (0-255)</label>
              <div className="flex gap-3 items-center">
                <input type="range" min={0} max={255} value={val} onChange={e => handler(parseInt(e.target.value))} className="flex-1" />
                <input type="number" min={0} max={255} value={val} onChange={e => handler(parseInt(e.target.value)||0)} className="w-20 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-center font-mono text-green-400 focus:outline-none" />
              </div>
            </div>
          ))}
          <button onClick={() => navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`)} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Copy RGB</button>
        </div>
      </div>
    </div>
  );
}
