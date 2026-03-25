"use client";
import { useState } from "react";
export default function HexConverter() {
  const [hex, setHex] = useState("");
  const [dec, setDec] = useState("");
  const [bin, setBin] = useState("");
  const [rgb, setRgb] = useState("");
  const [color, setColor] = useState("#3b82f6");
  function fromHex(v) {
    setHex(v);
    const h = v.replace(/^#/,"").trim();
    if (!/^[0-9a-fA-F]+$/.test(h)) { setDec(""); setBin(""); setRgb(""); return; }
    const n = parseInt(h, 16);
    setDec(n.toString(10));
    setBin(n.toString(2));
    if (h.length === 6) {
      const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
      setRgb("rgb("+r+", "+g+", "+b+")");
      setColor("#"+h.toLowerCase());
    } else setRgb("");
  }
  function fromDec(v) {
    setDec(v);
    const n = parseInt(v);
    if (isNaN(n) || n < 0) { setHex(""); setBin(""); setRgb(""); return; }
    setHex(n.toString(16).toUpperCase());
    setBin(n.toString(2));
    setRgb("");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Hex Converter</h1>
        <p className="text-gray-400 mb-6">Convert between hexadecimal, decimal, binary, and RGB colors.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Hexadecimal</label>
            <input value={hex} onChange={e=>fromHex(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" placeholder="FF or #3b82f6" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Decimal</label>
            <input value={dec} onChange={e=>fromDec(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" placeholder="255" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Binary</label>
            <input value={bin} readOnly className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-gray-400" />
          </div>
          {rgb && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">RGB Color</label>
              <div className="flex gap-2 items-center">
                <input value={rgb} readOnly className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono text-gray-400" />
                <div className="w-12 h-10 rounded border border-gray-600" style={{backgroundColor:color}} />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-400 mb-2">Color Picker → Hex</label>
          <input type="color" value={color} onChange={e=>{setColor(e.target.value);fromHex(e.target.value.slice(1));}} className="w-full h-12 rounded cursor-pointer bg-transparent" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {[["FF","255"],["1A","26"],["7F","127"],["100","256"]].map(([h,d])=>(
            <button key={h} onClick={()=>fromHex(h)} className="bg-gray-800 hover:bg-gray-700 rounded px-3 py-2 text-left font-mono"><span className="text-blue-400">{h}</span> = {d}</button>
          ))}
        </div>
      </div>
    </main>
  );
}
