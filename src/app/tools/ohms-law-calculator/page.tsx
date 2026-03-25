"use client";
import { useState } from "react";
export default function OhmsLaw() {
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const vn = parseFloat(v), inn = parseFloat(i), rn = parseFloat(r);
    if (!isNaN(vn) && !isNaN(inn) && isNaN(rn)) setResult("R = " + (vn/inn).toFixed(4) + " Ω");
    else if (!isNaN(vn) && isNaN(inn) && !isNaN(rn)) setResult("I = " + (vn/rn).toFixed(4) + " A");
    else if (isNaN(vn) && !isNaN(inn) && !isNaN(rn)) setResult("V = " + (inn*rn).toFixed(4) + " V");
    else setResult("Enter exactly two values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ohm&#39;s Law Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate V, I, or R — enter any two values.</p>
        <div className="space-y-4">
          {[["Voltage (V)",v,setV],["Current (A)",i,setI],["Resistance (Ω)",r,setR]].map(([label,val,setter]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e=>(setter as Function)(e.target.value)} placeholder="Leave blank to solve" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}
