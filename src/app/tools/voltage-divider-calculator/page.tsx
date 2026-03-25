"use client";
import { useState } from "react";
export default function VoltageDividerCalculator() {
  const [vin, setVin] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const v = parseFloat(vin), a = parseFloat(r1), b = parseFloat(r2);
    if (isNaN(v) || isNaN(a) || isNaN(b) || (a + b) === 0) { setResult("Invalid inputs"); return; }
    const vout = v * b / (a + b);
    const cur = v / (a + b);
    setResult("Vout = " + vout.toFixed(4) + " V | Current = " + (cur * 1000).toFixed(4) + " mA");
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Voltage Divider Calculator</h1>
      <p className="text-gray-400 mb-4">Vout = Vin × R2 / (R1 + R2)</p>
      {[["Input Voltage (V)", vin, setVin, "Volts"],["R1 (Ω)", r1, setR1, "Ohms"],["R2 (Ω)", r2, setR2, "Ohms"]].map(([lbl, val, set, ph]) => (
        <div key={lbl} className="mb-4"><label className="block text-sm mb-1">{lbl}</label><input type="number" value={val} onChange={e => set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder={ph} /></div>
      ))}
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate</button>
      {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-green-400">{result}</div>}
    </div>
  );
}
