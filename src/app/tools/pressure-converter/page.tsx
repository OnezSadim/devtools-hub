"use client";
import { useState } from "react";
export default function PressureConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("pa");
  const toPa: Record<string,number> = {pa:1,kpa:1000,mpa:1e6,bar:100000,mbar:100,atm:101325,psi:6894.76,mmhg:133.322,inhg:3386.39,torr:133.322};
  const units = Object.keys(toPa);
  const labels: Record<string,string> = {pa:"Pa",kpa:"kPa",mpa:"MPa",bar:"bar",mbar:"mbar",atm:"atm",psi:"psi",mmhg:"mmHg",inhg:"inHg",torr:"Torr"};
  const pa = (parseFloat(value)||0) * toPa[from];
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Pressure Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Pascal, bar, atm, psi, and more.</p>
      <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white">
        {units.map(u => <option key={u} value={u}>{labels[u]}</option>)}
      </select>
      <input value={value} onChange={e => setValue(e.target.value)} type="number" placeholder="Enter pressure..." className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      {value && <div className="grid grid-cols-2 gap-3">
        {units.filter(u => u !== from).map(u => (
          <div key={u} className="p-4 bg-gray-800 rounded text-center">
            <p className="text-gray-400 text-sm">{labels[u]}</p>
            <p className="text-green-400 text-xl font-bold">{(pa/toPa[u]).toFixed(6)}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}