"use client";
import { useState } from "react";
export default function LineSorter() {
  const [text, setText] = useState("");
  const [order, setOrder] = useState("asc");
  const [numeric, setNumeric] = useState(false);
  const sorted = text.split("\n").sort((a, b) => {
    if (numeric) {
      const na = parseFloat(a) || 0, nb = parseFloat(b) || 0;
      return order === "asc" ? na - nb : nb - na;
    }
    return order === "asc" ? a.localeCompare(b) : b.localeCompare(a);
  }).join("\n");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Line Sorter</h1>
      <p className="text-gray-400 mb-6">Sort lines of text alphabetically or numerically.</p>
      <div className="flex gap-4 mb-4">
        <select className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white" value={order} onChange={e => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={numeric} onChange={e => setNumeric(e.target.checked)} className="w-4 h-4" />
          <span>Numeric sort</span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-400 mb-2">Input</div>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none" placeholder="One item per line..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2">Sorted Output</div>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-green-400 resize-none" readOnly value={sorted} />
        </div>
      </div>
    </div>
  );
}
