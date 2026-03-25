"use client";
import { useState } from "react";
export default function AccelerationCalculator() {
  const [vi, setVi] = useState("");
  const [vf, setVf] = useState("");
  const [t, setT] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const viN = parseFloat(vi), vfN = parseFloat(vf), tN = parseFloat(t);
    if (isNaN(viN) || isNaN(vfN) || isNaN(tN) || tN === 0) { setResult("Enter valid numbers (t ≠ 0)"); return; }
    const a = (vfN - viN) / tN;
    setResult("Acceleration: " + a.toFixed(4) + " m/s²");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Acceleration Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate acceleration using a = (vf - vi) / t</p>
        <div className="space-y-4 mb-6">
          {[{label:"Initial Velocity (m/s)",val:vi,set:setVi},{label:"Final Velocity (m/s)",val:vf,set:setVf},{label:"Time (s)",val:t,set:setT}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input type="number" value={val} onChange={e => set(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2" placeholder="0" />
            </div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-center text-xl font-bold text-blue-400">{result}</div>}
      </div>
    </main>
  );
}
