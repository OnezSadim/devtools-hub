"use client";
import { useState } from "react";
export default function SpeedConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("kph");
  const toMps: Record<string,number> = {kph:1/3.6, mph:0.44704, mps:1, knot:0.514444, fps:0.3048, mach:340.29};
  const units = Object.keys(toMps);
  const labels: Record<string,string> = {kph:"km/h",mph:"mph",mps:"m/s",knot:"knots",fps:"ft/s",mach:"Mach"};
  const mps = (parseFloat(value)||0) * toMps[from];
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Speed Converter</h1>
      <p className="text-gray-400 mb-6">Convert between km/h, mph, m/s, knots, and more.</p>
      <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white">
        {units.map(u => <option key={u} value={u}>{labels[u]}</option>)}
      </select>
      <input value={value} onChange={e => setValue(e.target.value)} type="number" placeholder="Enter speed..." className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      {value && <div className="grid grid-cols-2 gap-3">
        {units.filter(u => u !== from).map(u => (
          <div key={u} className="p-4 bg-gray-800 rounded text-center">
            <p className="text-gray-400 text-sm">{labels[u]}</p>
            <p className="text-green-400 text-xl font-bold">{(mps/toMps[u]).toFixed(4)}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}