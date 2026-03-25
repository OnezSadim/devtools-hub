"use client";
import { useState } from "react";
export default function ElectricalPowerCalculator() {
  const [formula, setFormula] = useState("vi");
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const V = parseFloat(v), I = parseFloat(i), R = parseFloat(r);
    if (formula === "vi" && !isNaN(V) && !isNaN(I)) setResult("Power = " + (V * I).toFixed(4) + " W");
    else if (formula === "i2r" && !isNaN(I) && !isNaN(R)) setResult("Power = " + (I * I * R).toFixed(4) + " W");
    else if (formula === "v2r" && !isNaN(V) && !isNaN(R) && R !== 0) setResult("Power = " + (V * V / R).toFixed(4) + " W");
    else setResult("Enter valid inputs");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electrical Power Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate power using P=VI, P=I²R, or P=V²/R</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Formula</label>
            <select value={formula} onChange={e => setFormula(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
              <option value="vi">P = V × I</option>
              <option value="i2r">P = I² × R</option>
              <option value="v2r">P = V² / R</option>
            </select>
          </div>
          {(formula === "vi" || formula === "v2r") && <div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} placeholder="Volts" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          {(formula === "vi" || formula === "i2r") && <div><label className="block text-sm text-gray-400 mb-1">Current (A)</label><input type="number" value={i} onChange={e => setI(e.target.value)} placeholder="Amps" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          {(formula === "i2r" || formula === "v2r") && <div><label className="block text-sm text-gray-400 mb-1">Resistance (Ω)</label><input type="number" value={r} onChange={e => setR(e.target.value)} placeholder="Ohms" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" /></div>}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-bold text-yellow-400">{result}</div>}
        </div>
      </div>
    </div>
  );
}
