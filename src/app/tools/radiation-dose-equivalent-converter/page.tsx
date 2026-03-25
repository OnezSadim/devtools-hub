"use client";
import { useState } from "react";

export default function RadiationDoseEquivalentConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Sievert (Sv)");
  const [to, setTo] = useState("Millisievert (mSv)");
  const [result, setResult] = useState<number | null>(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let toBase = 0;
    switch (from) {
      case "Sievert (Sv)": toBase = v * 1.0; break;
      case "Millisievert (mSv)": toBase = v * 0.001; break;
      case "Microsievert (μSv)": toBase = v * 1e-06; break;
      case "Rem (rem)": toBase = v * 0.01; break;
      case "Millirem (mrem)": toBase = v * 1e-05; break;
      case "Microrem (μrem)": toBase = v * 1e-08; break;
      case "Joule/kilogram (J/kg)": toBase = v * 1.0; break;
    }
    let result = 0;
    switch (to) {
FROM_      case "Sievert (Sv)": toBase = v * 1.0; break;
      case "Millisievert (mSv)": toBase = v * 0.001; break;
      case "Microsievert (μSv)": toBase = v * 1e-06; break;
      case "Rem (rem)": toBase = v * 0.01; break;
      case "Millirem (mrem)": toBase = v * 1e-05; break;
      case "Microrem (μrem)": toBase = v * 1e-08; break;
      case "Joule/kilogram (J/kg)": toBase = v * 1.0; break;
    }
    setResult(result);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Radiation Dose Equivalent Converter</h1>
        <p className="text-gray-400 mb-6">Convert between dose equivalent units: sievert, rem, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded px-4 py-2 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Sievert (Sv)">Sievert (Sv)</option>
          <option value="Millisievert (mSv)">Millisievert (mSv)</option>
          <option value="Microsievert (μSv)">Microsievert (μSv)</option>
          <option value="Rem (rem)">Rem (rem)</option>
          <option value="Millirem (mrem)">Millirem (mrem)</option>
          <option value="Microrem (μrem)">Microrem (μrem)</option>
          <option value="Joule/kilogram (J/kg)">Joule/kilogram (J/kg)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Sievert (Sv)">Sievert (Sv)</option>
          <option value="Millisievert (mSv)">Millisievert (mSv)</option>
          <option value="Microsievert (μSv)">Microsievert (μSv)</option>
          <option value="Rem (rem)">Rem (rem)</option>
          <option value="Millirem (mrem)">Millirem (mrem)</option>
          <option value="Microrem (μrem)">Microrem (μrem)</option>
          <option value="Joule/kilogram (J/kg)">Joule/kilogram (J/kg)</option>
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-xl font-bold text-green-400">
              {value} {from} = {result.toExponential ? result.toPrecision(6) : result} {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
