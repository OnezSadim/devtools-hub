"use client";
import { useState } from "react";

const factors: Record<string, number> = {
        "V_m": 1,
        "kV_m": 1000,
        "MV_m": 1000000.0,
        "V_cm": 100,
        "V_mm": 1000,
        "V_in": 39.3701,
        "V_ft": 3.28084
};

export default function ElectricFieldStrengthConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("V_m");
  const [to, setTo] = useState("kV_m");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "—";
    return ((num * factors[from]) / factors[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Field Strength Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric field strength units: V/m, kV/m, MV/m, V/cm, V/mm.</p>
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
          <option value="V_m">Volt per Meter (V/m)</option>
          <option value="kV_m">Kilovolt per Meter (kV/m)</option>
          <option value="MV_m">Megavolt per Meter (MV/m)</option>
          <option value="V_cm">Volt per Centimeter (V/cm)</option>
          <option value="V_mm">Volt per Millimeter (V/mm)</option>
          <option value="V_in">Volt per Inch (V/in)</option>
          <option value="V_ft">Volt per Foot (V/ft)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="V_m">Volt per Meter (V/m)</option>
          <option value="kV_m">Kilovolt per Meter (kV/m)</option>
          <option value="MV_m">Megavolt per Meter (MV/m)</option>
          <option value="V_cm">Volt per Centimeter (V/cm)</option>
          <option value="V_mm">Volt per Millimeter (V/mm)</option>
          <option value="V_in">Volt per Inch (V/in)</option>
          <option value="V_ft">Volt per Foot (V/ft)</option>
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
