"use client";
import { useState } from "react";
export default function LengthUnitConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("meter");
  const toM: Record<string,number> = { meter:1, kilometer:1000, centimeter:0.01, millimeter:0.001, mile:1609.34, yard:0.9144, foot:0.3048, inch:0.0254, "nautical mile":1852 };
  const units = Object.keys(toM);
  const n = parseFloat(val);
  const inMeters = isNaN(n) ? null : n * toM[from];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Length Unit Converter</h1>
      <p className="text-gray-400 mb-4">Convert between meters, feet, miles, and more.</p>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 bg-gray-800 rounded text-white" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value..." />
        <select className="p-2 bg-gray-800 rounded text-white" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u} value={u}>{u}</option>)}</select>
      </div>
      {inMeters !== null && (
        <div className="grid grid-cols-2 gap-3">
          {units.map(u => (
            <div key={u} className="bg-gray-800 p-4 rounded">
              <div className="text-gray-400 text-sm capitalize">{u}</div>
              <div className="text-white font-mono">{(inMeters / toM[u]).toFixed(6)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}