"use client";
import { useState } from "react";
export default function StringPaddingTool() {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(20);
  const [char, setChar] = useState(" ");
  const [align, setAlign] = useState("left");
  const pad = (s: string) => {
    const padChar = char || " ";
    if (s.length >= width) return s;
    const total = width - s.length;
    if (align === "left") return s + padChar.repeat(total);
    if (align === "right") return padChar.repeat(total) + s;
    const half = Math.floor(total / 2);
    return padChar.repeat(half) + s + padChar.repeat(total - half);
  };
  const lines = text.split("\n").map(pad);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">String Padding Tool</h1>
      <p className="text-gray-400 mb-6">Pad strings to a fixed width with a custom character.</p>
      <div className="flex gap-4 mb-4 flex-wrap">
        <div><label className="text-sm text-gray-400">Width</label><input type="number" min={1} max={200} className="block bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-24" value={width} onChange={e=>setWidth(Number(e.target.value))} /></div>
        <div><label className="text-sm text-gray-400">Pad char</label><input maxLength={1} className="block bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-16" value={char} onChange={e=>setChar(e.target.value)} /></div>
        <div><label className="text-sm text-gray-400">Alignment</label>
          <select className="block bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white" value={align} onChange={e=>setAlign(e.target.value)}>
            <option value="left">Left</option><option value="right">Right</option><option value="center">Center</option>
          </select></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-400 mb-1">Input (one per line)</div>
          <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none font-mono" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter strings..." />
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-1">Padded Output</div>
          <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-green-400 resize-none font-mono" readOnly value={lines.join("\n")} />
        </div>
      </div>
    </div>
  );
}
