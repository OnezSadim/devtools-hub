"use client";
import { useState } from "react";

export default function KinematicViscosityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m2_s");
  const [to, setTo] = useState("cm2_s");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "m2_s": toBase = v * 1; break;
      case "cm2_s": toBase = v * 0.0001; break;
      case "mm2_s": toBase = v * 1e-06; break;
      case "st": toBase = v * 0.0001; break;
      case "cst": toBase = v * 1e-06; break;
      case "ft2_s": toBase = v * 0.092903; break;
      case "ft2_h": toBase = v * 2.580638888888889e-05; break;
      case "in2_s": toBase = v * 0.00064516; break;
      case "m2_h": toBase = v * 0.0002777777777777778; break;
      default: toBase = v;
    }
    let baseVal = toBase;
    let result = 0;
    switch (to) {
FROM_      case "m2_s": toBase = v * 1; break;
      case "cm2_s": toBase = v * 0.0001; break;
      case "mm2_s": toBase = v * 1e-06; break;
      case "st": toBase = v * 0.0001; break;
      case "cst": toBase = v * 1e-06; break;
      case "ft2_s": toBase = v * 0.092903; break;
      case "ft2_h": toBase = v * 2.580638888888889e-05; break;
      case "in2_s": toBase = v * 0.00064516; break;
      case "m2_h": toBase = v * 0.0002777777777777778; break;
      default: result = baseVal;
    }
    return result.toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Kinematic Viscosity Converter</h1>
        <p className="text-gray-400 mb-8">Convert between kinematic viscosity units</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="m2_s">m²/s</option>
              <option value="cm2_s">cm²/s (St)</option>
              <option value="mm2_s">mm²/s (cSt)</option>
              <option value="st">Stokes (St)</option>
              <option value="cst">Centistokes (cSt)</option>
              <option value="ft2_s">ft²/s</option>
              <option value="ft2_h">ft²/h</option>
              <option value="in2_s">in²/s</option>
              <option value="m2_h">m²/h</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="m2_s">m²/s</option>
              <option value="cm2_s">cm²/s (St)</option>
              <option value="mm2_s">mm²/s (cSt)</option>
              <option value="st">Stokes (St)</option>
              <option value="cst">Centistokes (cSt)</option>
              <option value="ft2_s">ft²/s</option>
              <option value="ft2_h">ft²/h</option>
              <option value="in2_s">in²/s</option>
              <option value="m2_h">m²/h</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-4 text-2xl font-mono text-blue-400">
            {convert()} <span className="text-sm text-gray-400">{to}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
