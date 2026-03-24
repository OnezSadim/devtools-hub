"use client";
import { useState } from "react";
export default function AsciiTable() {
  const [filter, setFilter] = useState("");
  const chars = Array.from({length: 128}, (_, i) => ({
    dec: i, hex: i.toString(16).toUpperCase().padStart(2,'0'),
    oct: i.toString(8).padStart(3,'0'),
    char: i >= 32 && i < 127 ? String.fromCharCode(i) : (i === 0 ? "NUL" : i === 9 ? "TAB" : i === 10 ? "LF" : i === 13 ? "CR" : i === 27 ? "ESC" : i === 32 ? "SPC" : i === 127 ? "DEL" : `^${String.fromCharCode(i+64)}`),
    printable: i >= 32 && i < 127
  }));
  const filtered = filter ? chars.filter(c => c.dec.toString().includes(filter) || c.hex.includes(filter.toUpperCase()) || c.char.toLowerCase().includes(filter.toLowerCase())) : chars;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ASCII Table</h1>
        <p className="text-gray-400 mb-4">Complete ASCII character reference with decimal, hex, and octal</p>
        <input value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Filter by char, decimal, or hex..." className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mb-4" />
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-gray-400 border-b border-gray-800">{["Dec","Hex","Oct","Char"].map(h=><th key={h} className="text-left py-2 px-3">{h}</th>)}</tr></thead>
            <tbody>{filtered.map(c=>(
              <tr key={c.dec} className={`border-b border-gray-900 hover:bg-gray-900 ${c.printable?"":"text-gray-500"}`}>
                <td className="py-1 px-3 font-mono">{c.dec}</td>
                <td className="py-1 px-3 font-mono">{c.hex}</td>
                <td className="py-1 px-3 font-mono">{c.oct}</td>
                <td className="py-1 px-3 font-mono text-yellow-400">{c.char}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}