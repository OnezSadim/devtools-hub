"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("C");
  const toCelsius = (v: number, unit: string) => {
    if (unit === "C") return v;
    if (unit === "F") return (v - 32) * 5/9;
    if (unit === "K") return v - 273.15;
    if (unit === "R") return (v - 491.67) * 5/9;
    return v;
  };
  const fromCelsius = (c: number, unit: string) => {
    if (unit === "C") return c;
    if (unit === "F") return c * 9/5 + 32;
    if (unit === "K") return c + 273.15;
    if (unit === "R") return (c + 273.15) * 9/5;
    return c;
  };
  const units = ["C","F","K","R"];
  const names: Record<string,string> = {C:"Celsius",F:"Fahrenheit",K:"Kelvin",R:"Rankine"};
  const c = toCelsius(parseFloat(value)||0, from);
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Celsius, Fahrenheit, Kelvin, and Rankine.</p>
      <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white">
        {units.map(u => <option key={u} value={u}>{names[u]}</option>)}
      </select>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter temperature..." type="number" className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      {value && <div className="grid grid-cols-2 gap-3">
        {units.filter(u => u !== from).map(u => (
          <div key={u} className="p-4 bg-gray-800 rounded text-center">
            <p className="text-gray-400 text-sm">{names[u]}</p>
            <p className="text-green-400 text-2xl font-bold">{fromCelsius(c, u).toFixed(2)}°{u}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}