"use client";
import { useState } from "react";
export default function SeriesParallelResistanceCalculator() {
  const [mode, setMode] = useState("series");
  const [values, setValues] = useState("100
220
330");
  const [result, setResult] = useState("");
  const calculate = () => {
    const nums = values.split(/[
,\s]+/).map(Number).filter(n => !isNaN(n) && n > 0);
    if (nums.length === 0) { setResult("Enter at least one value"); return; }
    let total = 0;
    if (mode === "series") {
      total = nums.reduce((a, b) => a + b, 0);
    } else {
      total = 1 / nums.reduce((a, b) => a + 1/b, 0);
    }
    const fmt = (v: number) => v >= 1e6 ? (v/1e6).toFixed(3)+" MΩ" : v >= 1000 ? (v/1000).toFixed(3)+" kΩ" : v.toFixed(3)+" Ω";
    setResult("Total Resistance = " + fmt(total));
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Series & Parallel Resistance</h1>
        <p className="text-gray-400 mb-6">Calculate total resistance for multiple resistors</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <button onClick={()=>setMode("series")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="series" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700")}>Series</button>
            <button onClick={()=>setMode("parallel")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="parallel" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700")}>Parallel</button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Resistance values (Ω) — one per line or comma separated</label>
            <textarea value={values} onChange={e=>setValues(e.target.value)} rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-bold text-purple-400">{result}</div>}
        </div>
      </div>
    </div>
  );
}
