"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val);
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Temperature Converter</h1>
      <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 mb-4" placeholder="Enter temperature" value={val} onChange={e=>setVal(e.target.value)} />
      {!isNaN(n) && (
        <div className="space-y-2">
          <div className="p-3 bg-gray-800 rounded text-white">Celsius: {val} C</div>
          <div className="p-3 bg-gray-800 rounded text-white">Fahrenheit: {(n*9/5+32).toFixed(2)} F</div>
          <div className="p-3 bg-gray-800 rounded text-white">Kelvin: {(n+273.15).toFixed(2)} K</div>
          <div className="p-3 bg-gray-800 rounded text-white">Rankine: {((n+273.15)*9/5).toFixed(2)} R</div>
        </div>
      )}
    </div>
  );
}