"use client";
import { useState } from "react";

export default function DynamicViscosityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("pa_s");
  const [to, setTo] = useState("mpa_s");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "pa_s": toBase = v * 1; break;
      case "mpa_s": toBase = v * 0.001; break;
      case "cp": toBase = v * 0.001; break;
      case "p": toBase = v * 0.1; break;
      case "dyne_cm2": toBase = v * 0.1; break;
      case "kg_ms": toBase = v * 1; break;
      case "g_cms": toBase = v * 0.1; break;
      case "lbf_s_ft2": toBase = v * 47.880259; break;
      case "lb_fts": toBase = v * 1.488164; break;
      default: toBase = v;
    }
    let baseVal = toBase;
    let result = 0;
    switch (to) {
FROM_      case "pa_s": toBase = v * 1; break;
      case "mpa_s": toBase = v * 0.001; break;
      case "cp": toBase = v * 0.001; break;
      case "p": toBase = v * 0.1; break;
      case "dyne_cm2": toBase = v * 0.1; break;
      case "kg_ms": toBase = v * 1; break;
      case "g_cms": toBase = v * 0.1; break;
      case "lbf_s_ft2": toBase = v * 47.880259; break;
      case "lb_fts": toBase = v * 1.488164; break;
      default: result = baseVal;
    }
    return result.toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dynamic Viscosity Converter</h1>
        <p className="text-gray-400 mb-8">Convert between dynamic viscosity units</p>
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
              <option value="pa_s">Pascal·second (Pa·s)</option>
              <option value="mpa_s">Millipascal·second (mPa·s)</option>
              <option value="cp">Centipoise (cP)</option>
              <option value="p">Poise (P)</option>
              <option value="dyne_cm2">Dyne·s/cm²</option>
              <option value="kg_ms">kg/(m·s)</option>
              <option value="g_cms">g/(cm·s)</option>
              <option value="lbf_s_ft2">lbf·s/ft²</option>
              <option value="lb_fts">lb/(ft·s)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="pa_s">Pascal·second (Pa·s)</option>
              <option value="mpa_s">Millipascal·second (mPa·s)</option>
              <option value="cp">Centipoise (cP)</option>
              <option value="p">Poise (P)</option>
              <option value="dyne_cm2">Dyne·s/cm²</option>
              <option value="kg_ms">kg/(m·s)</option>
              <option value="g_cms">g/(cm·s)</option>
              <option value="lbf_s_ft2">lbf·s/ft²</option>
              <option value="lb_fts">lb/(ft·s)</option>
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
