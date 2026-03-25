"use client";
import { useState } from "react";

const factors: Record<string, number> = {
        "m3_mol": 1,
        "L_mol": 0.001,
        "cm3_mol": 1e-06,
        "ft3_mol": 0.0283168,
        "in3_mol": 1.6387e-05,
        "mL_mol": 1e-06
};

export default function MolarVolumeConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m3_mol");
  const [to, setTo] = useState("L_mol");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "—";
    return ((num * factors[from]) / factors[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Molar Volume Converter</h1>
        <p className="text-gray-400 mb-8">Convert between molar volume units: m³/mol, L/mol, cm³/mol, ft³/mol.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="m3_mol">Cubic Meter per Mole (m³/mol)</option>
          <option value="L_mol">Liter per Mole (L/mol)</option>
          <option value="cm3_mol">Cubic Centimeter per Mole (cm³/mol)</option>
          <option value="ft3_mol">Cubic Foot per Mole (ft³/mol)</option>
          <option value="in3_mol">Cubic Inch per Mole (in³/mol)</option>
          <option value="mL_mol">Milliliter per Mole (mL/mol)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="m3_mol">Cubic Meter per Mole (m³/mol)</option>
          <option value="L_mol">Liter per Mole (L/mol)</option>
          <option value="cm3_mol">Cubic Centimeter per Mole (cm³/mol)</option>
          <option value="ft3_mol">Cubic Foot per Mole (ft³/mol)</option>
          <option value="in3_mol">Cubic Inch per Mole (in³/mol)</option>
          <option value="mL_mol">Milliliter per Mole (mL/mol)</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-3 text-2xl font-mono">
            {value ? convert() : <span className="text-gray-500">Result</span>}
          </div>
        </div>
      </div>
    </main>
  );
}
