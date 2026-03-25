"use client";
import { useState } from "react";
export default function CapacitorChargeCalculator() {
  const [solve, setSolve] = useState("charge");
  const [q, setQ] = useState("");
  const [c, setC] = useState("");
  const [v, setV] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const qn = parseFloat(q), cn = parseFloat(c), vn = parseFloat(v);
    if (solve === "charge" && !isNaN(cn) && !isNaN(vn)) setResult("Q = " + (cn * vn).toExponential(4) + " C");
    else if (solve === "capacitance" && !isNaN(qn) && !isNaN(vn) && vn !== 0) setResult("C = " + (qn / vn).toExponential(4) + " F");
    else if (solve === "voltage" && !isNaN(qn) && !isNaN(cn) && cn !== 0) setResult("V = " + (qn / cn).toFixed(4) + " V");
    else setResult("Invalid inputs");
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Capacitor Charge Calculator</h1>
      <p className="text-gray-400 mb-4">Q = C × V</p>
      <div className="mb-4"><label className="block text-sm mb-1">Solve for</label>
        <select value={solve} onChange={e => setSolve(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2">
          <option value="charge">Charge (Q)</option>
          <option value="capacitance">Capacitance (C)</option>
          <option value="voltage">Voltage (V)</option>
        </select>
      </div>
      {solve !== "charge" && <div className="mb-4"><label className="block text-sm mb-1">Charge (C)</label><input type="number" value={q} onChange={e => setQ(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Coulombs" /></div>}
      {solve !== "capacitance" && <div className="mb-4"><label className="block text-sm mb-1">Capacitance (F)</label><input type="number" value={c} onChange={e => setC(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Farads" /></div>}
      {solve !== "voltage" && <div className="mb-4"><label className="block text-sm mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Volts" /></div>}
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate</button>
      {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-green-400">{result}</div>}
    </div>
  );
}
