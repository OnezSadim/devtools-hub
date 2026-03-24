"use client";
import { useState } from "react";
export default function FontSizeConverter() {
  const [base, setBase] = useState(16);
  const [px, setPx] = useState(16);
  const rem = px / base;
  const em = px / base;
  const pt = px * 0.75;
  const sizes = [10,12,14,16,18,20,24,28,32,36,48,64,72,96];
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Font Size Converter</h1>
      <p className="text-gray-400 mb-6">Convert between px, rem, em, and pt units.</p>
      <div className="bg-gray-800 rounded p-4 mb-6">
        <label className="block text-sm mb-1">Base font size: {base}px</label>
        <input type="range" min={10} max={24} value={base} onChange={e=>setBase(+e.target.value)} className="w-full mb-4" />
        <label className="block text-sm mb-1">Pixel value</label>
        <input type="number" value={px} onChange={e=>setPx(+e.target.value)} className="w-full bg-gray-700 rounded p-2" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[{label:"rem",val:rem.toFixed(4)},{label:"em",val:em.toFixed(4)},{label:"pt",val:pt.toFixed(2)}].map(({label,val})=>(
          <div key={label} className="bg-gray-800 rounded p-4 text-center"><p className="text-sm text-gray-400">{label}</p><p className="text-xl font-bold">{val}</p></div>
        ))}
      </div>
      <table className="w-full text-sm">
        <thead><tr className="text-gray-400 border-b border-gray-700">{["px","rem","em","pt"].map(h=><th key={h} className="py-2 text-left">{h}</th>)}</tr></thead>
        <tbody>{sizes.map(s=><tr key={s} className="border-b border-gray-800"><td className="py-1">{s}</td><td>{(s/base).toFixed(4)}</td><td>{(s/base).toFixed(4)}</td><td>{(s*0.75).toFixed(2)}</td></tr>)}</tbody>
      </table>
    </div>
  );
}