"use client";
import { useState } from "react";
export default function VolumeConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("liter");
  const toLiter: Record<string,number> = {liter:1,ml:0.001,cubicm:1000,cubicft:28.3168,cubicinch:0.016387,gallon:3.78541,quart:0.946353,pint:0.473176,cup:0.236588,floz:0.0295735,tbsp:0.0147868,tsp:0.00492892};
  const units = Object.keys(toLiter);
  const labels: Record<string,string> = {liter:"Liter",ml:"mL",cubicm:"m³",cubicft:"ft³",cubicinch:"in³",gallon:"Gallon",quart:"Quart",pint:"Pint",cup:"Cup",floz:"fl oz",tbsp:"Tbsp",tsp:"Tsp"};
  const liters = (parseFloat(value)||0) * toLiter[from];
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Volume Converter</h1>
      <p className="text-gray-400 mb-6">Convert between liters, gallons, cups, and more.</p>
      <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white">
        {units.map(u => <option key={u} value={u}>{labels[u]}</option>)}
      </select>
      <input value={value} onChange={e => setValue(e.target.value)} type="number" placeholder="Enter volume..." className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      {value && <div className="grid grid-cols-2 gap-3">
        {units.filter(u => u !== from).map(u => (
          <div key={u} className="p-4 bg-gray-800 rounded text-center">
            <p className="text-gray-400 text-sm">{labels[u]}</p>
            <p className="text-green-400 text-xl font-bold">{(liters/toLiter[u]).toFixed(6)}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}