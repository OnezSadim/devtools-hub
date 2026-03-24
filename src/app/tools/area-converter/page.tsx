"use client";
import { useState } from "react";
export default function AreaConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("sqm");
  const toSqm: Record<string,number> = {sqm:1,sqkm:1e6,sqft:0.092903,sqyd:0.836127,sqmi:2589988.11,acre:4046.856,hectare:10000,sqcm:0.0001,sqin:0.00064516};
  const units = Object.keys(toSqm);
  const labels: Record<string,string> = {sqm:"m²",sqkm:"km²",sqft:"ft²",sqyd:"yd²",sqmi:"mi²",acre:"acre",hectare:"ha",sqcm:"cm²",sqin:"in²"};
  const sqm = (parseFloat(value)||0) * toSqm[from];
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Area Converter</h1>
      <p className="text-gray-400 mb-6">Convert between square meters, feet, acres, hectares, and more.</p>
      <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white">
        {units.map(u => <option key={u} value={u}>{labels[u]}</option>)}
      </select>
      <input value={value} onChange={e => setValue(e.target.value)} type="number" placeholder="Enter area..." className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      {value && <div className="grid grid-cols-2 gap-3">
        {units.filter(u => u !== from).map(u => (
          <div key={u} className="p-4 bg-gray-800 rounded text-center">
            <p className="text-gray-400 text-sm">{labels[u]}</p>
            <p className="text-green-400 text-xl font-bold">{(sqm/toSqm[u]).toFixed(6)}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}