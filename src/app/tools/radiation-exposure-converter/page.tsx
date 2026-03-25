"use client";
import { useState } from "react";

export default function RadiationExposureConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Coulomb/kilogram (C/kg)");
  const [to, setTo] = useState("Millicoulomb/kilogram (mC/kg)");
  const [result, setResult] = useState<number | null>(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let toBase = 0;
    switch (from) {
      case "Coulomb/kilogram (C/kg)": toBase = v * 1.0; break;
      case "Millicoulomb/kilogram (mC/kg)": toBase = v * 0.001; break;
      case "Microcoulomb/kilogram (μC/kg)": toBase = v * 1e-06; break;
      case "Roentgen (R)": toBase = v * 0.000258; break;
      case "Milliroentgen (mR)": toBase = v * 2.58e-07; break;
      case "Microroentgen (μR)": toBase = v * 2.58e-10; break;
      case "Tissue roentgen (TR)": toBase = v * 0.000258; break;
    }
    let result = 0;
    switch (to) {
FROM_      case "Coulomb/kilogram (C/kg)": toBase = v * 1.0; break;
      case "Millicoulomb/kilogram (mC/kg)": toBase = v * 0.001; break;
      case "Microcoulomb/kilogram (μC/kg)": toBase = v * 1e-06; break;
      case "Roentgen (R)": toBase = v * 0.000258; break;
      case "Milliroentgen (mR)": toBase = v * 2.58e-07; break;
      case "Microroentgen (μR)": toBase = v * 2.58e-10; break;
      case "Tissue roentgen (TR)": toBase = v * 0.000258; break;
    }
    setResult(result);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Radiation Exposure Converter</h1>
        <p className="text-gray-400 mb-6">Convert between radiation exposure units: coulomb/kg, roentgen, and more.</p>
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
          <option value="Coulomb/kilogram (C/kg)">Coulomb/kilogram (C/kg)</option>
          <option value="Millicoulomb/kilogram (mC/kg)">Millicoulomb/kilogram (mC/kg)</option>
          <option value="Microcoulomb/kilogram (μC/kg)">Microcoulomb/kilogram (μC/kg)</option>
          <option value="Roentgen (R)">Roentgen (R)</option>
          <option value="Milliroentgen (mR)">Milliroentgen (mR)</option>
          <option value="Microroentgen (μR)">Microroentgen (μR)</option>
          <option value="Tissue roentgen (TR)">Tissue roentgen (TR)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Coulomb/kilogram (C/kg)">Coulomb/kilogram (C/kg)</option>
          <option value="Millicoulomb/kilogram (mC/kg)">Millicoulomb/kilogram (mC/kg)</option>
          <option value="Microcoulomb/kilogram (μC/kg)">Microcoulomb/kilogram (μC/kg)</option>
          <option value="Roentgen (R)">Roentgen (R)</option>
          <option value="Milliroentgen (mR)">Milliroentgen (mR)</option>
          <option value="Microroentgen (μR)">Microroentgen (μR)</option>
          <option value="Tissue roentgen (TR)">Tissue roentgen (TR)</option>
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
