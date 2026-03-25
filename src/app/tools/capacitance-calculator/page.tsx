"use client";
import { useState } from "react";
export default function CapacitanceCalc() {
  const [c, setC] = useState("");
  const [q, setQ] = useState("");
  const [v, setV] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const cn = parseFloat(c), qn = parseFloat(q), vn = parseFloat(v);
    if (!isNaN(cn) && !isNaN(vn) && isNaN(qn)) setResult("Q = " + (cn*vn).toExponential(4) + " C");
    else if (!isNaN(qn) && !isNaN(vn) && isNaN(cn)) setResult("C = " + (qn/vn).toExponential(4) + " F");
    else if (!isNaN(cn) && !isNaN(qn) && isNaN(vn)) setResult("V = " + (qn/cn).toFixed(4) + " V");
    else setResult("Enter exactly two values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Capacitance Calculator</h1>
        <p className="text-gray-400 mb-6">Q = C × V — solve for any variable.</p>
        <div className="space-y-4">
          {[["Capacitance (F)",c,setC],["Charge (C)",q,setQ],["Voltage (V)",v,setV]].map(([label,val,setter]) => (
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
