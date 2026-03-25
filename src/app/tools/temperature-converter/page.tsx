"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [value, setValue] = useState("100");
  const [from, setFrom] = useState("celsius");
  const n = parseFloat(value)||0;
  const toCelsius = (v:number,u:string) => u==="celsius"?v:u==="fahrenheit"?(v-32)*5/9:v-273.15;
  const fromCelsius = (c:number,u:string) => u==="celsius"?c:u==="fahrenheit"?c*9/5+32:c+273.15;
  const c = toCelsius(n, from);
  const units = ["celsius","fahrenheit","kelvin"];
  const symbols: Record<string,string> = {celsius:"°C",fahrenheit:"°F",kelvin:"K"};
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Celsius, Fahrenheit, and Kelvin</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex gap-4 mb-6">
            <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-xl" />
            <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3">
              {units.map(u=><option key={u} value={u}>{symbols[u]} {u}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {units.map(u=>(
              <div key={u} className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{fromCelsius(c,u).toFixed(2)}</div>
                <div className="text-gray-400 text-sm mt-1">{symbols[u]} {u}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="font-medium mb-4 text-gray-300">Reference Points</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[["Water freezes","0°C","32°F","273K"],["Body temp","37°C","98.6°F","310K"],["Water boils","100°C","212°F","373K"],["Absolute zero","-273°C","-459°F","0K"]].map(([l,c,f,k])=>(
              <div key={l} className="bg-gray-800 rounded p-3">
                <div className="text-gray-400">{l}</div>
                <div>{c} / {f} / {k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
