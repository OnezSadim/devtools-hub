"use client";
import { useState } from "react";

const factors: Record<string, number> = {
        "mol_L": 1,
        "mmol_L": 0.001,
        "umol_L": 1e-06,
        "nmol_L": 1e-09,
        "mol_m3": 0.001,
        "mol_cm3": 1000,
        "pmol_L": 1e-12
};

export default function MolarConcentrationConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("mol_L");
  const [to, setTo] = useState("mmol_L");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "—";
    return ((num * factors[from]) / factors[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Molar Concentration Converter</h1>
        <p className="text-gray-400 mb-8">Convert between molar concentration units: mol/L, mmol/L, µmol/L, mol/m³.</p>
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
          <option value="mol_L">Mole per Liter (mol/L)</option>
          <option value="mmol_L">Millimole per Liter (mmol/L)</option>
          <option value="umol_L">Micromole per Liter (µmol/L)</option>
          <option value="nmol_L">Nanomole per Liter (nmol/L)</option>
          <option value="mol_m3">Mole per Cubic Meter (mol/m³)</option>
          <option value="mol_cm3">Mole per Cubic Centimeter (mol/cm³)</option>
          <option value="pmol_L">Picomole per Liter (pmol/L)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="mol_L">Mole per Liter (mol/L)</option>
          <option value="mmol_L">Millimole per Liter (mmol/L)</option>
          <option value="umol_L">Micromole per Liter (µmol/L)</option>
          <option value="nmol_L">Nanomole per Liter (nmol/L)</option>
          <option value="mol_m3">Mole per Cubic Meter (mol/m³)</option>
          <option value="mol_cm3">Mole per Cubic Centimeter (mol/cm³)</option>
          <option value="pmol_L">Picomole per Liter (pmol/L)</option>
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
