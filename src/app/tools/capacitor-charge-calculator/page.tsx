"use client";
import { useState } from "react";
export default function CapacitorChargeCalculator() {
  const [solve, setSolve] = useState("charge");
  const [q, setQ] = useState("");
  const [c, setC] = useState("");
  const [v, setV] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const Q = parseFloat(q), C = parseFloat(c), V = parseFloat(v);
    if (solve === "charge" && !isNaN(C) && !isNaN(V)) setResult("Charge = " + (C * V).toFixed(6) + " C");
    else if (solve === "capacitance" && !isNaN(Q) && !isNaN(V) && V !== 0) setResult("Capacitance = " + (Q / V).toFixed(6) + " F");
    else if (solve === "voltage" && !isNaN(Q) && !isNaN(C) && C !== 0) setResult("Voltage = " + (Q / C).toFixed(6) + " V");
    else setResult("Enter valid inputs");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Capacitor Charge Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate Q, C, or V using Q = C × V</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Solve for</label>
            <select value={solve} onChange={e => setSolve(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
              <option value="charge">Charge (Q)</option>
              <option value="capacitance">Capacitance (C)</option>
              <option value="voltage">Voltage (V)</option>
            </select>
          </div>
          {solve !== "charge" && <div><label className="block text-sm text-gray-400 mb-1">Charge (C)</label><input type="number" value={q} onChange={e => setQ(e.target.value)} placeholder="Coulombs" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          {solve !== "capacitance" && <div><label className="block text-sm text-gray-400 mb-1">Capacitance (F)</label><input type="number" value={c} onChange={e => setC(e.target.value)} placeholder="Farads" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          {solve !== "voltage" && <div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} placeholder="Volts" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-bold text-green-400">{result}</div>}
        </div>
      </div>
    </div>
  );
}
