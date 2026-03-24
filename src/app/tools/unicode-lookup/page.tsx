"use client";
import { useState } from "react";
export default function UnicodeLookup() {
  const [input, setInput] = useState("");
  const chars = Array.from(input).map(c => ({ char: c, code: c.codePointAt(0)?.toString(16).toUpperCase().padStart(4,"0"), decimal: c.codePointAt(0), name: `U+${c.codePointAt(0)?.toString(16).toUpperCase().padStart(4,"0")}` }));
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Unicode Lookup</h1>
      <p className="text-gray-400 mb-4">Inspect Unicode code points for any text.</p>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type or paste text..." className="w-full bg-gray-800 text-white p-3 rounded text-lg mb-4" />
      {chars.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-gray-400 border-b border-gray-700">{["Char","Code Point","Decimal","Hex"].map(h=><th key={h} className="text-left py-2 pr-4">{h}</th>)}</tr></thead>
            <tbody>{chars.map((c,i)=>(
              <tr key={i} className="border-b border-gray-800">
                <td className="py-2 pr-4 text-2xl">{c.char}</td>
                <td className="py-2 pr-4 text-blue-400 font-mono">{c.name}</td>
                <td className="py-2 pr-4 text-gray-300 font-mono">{c.decimal}</td>
                <td className="py-2 pr-4 text-green-400 font-mono">{c.code}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}