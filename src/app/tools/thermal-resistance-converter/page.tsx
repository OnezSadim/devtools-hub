"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("K/W");
  const [to, setTo] = useState("°C/W");
  const [result, setResult] = useState<string | null>(null);

  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setResult("Enter a valid number"); return; }
    let toBase = 0;
    switch (from) {
      case "K/W": toBase = v * 1.0; break;
      case "°C/W": toBase = v * 1.0; break;
      case "K·m²/W": toBase = v * 0.001; break;
      case "°F·h/BTU": toBase = v * 1.8956; break;
      case "°F·h·ft²/BTU": toBase = v * 0.17611; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "K/W": result = base / 1.0; break;
      case "°C/W": result = base / 1.0; break;
      case "K·m²/W": result = base / 0.001; break;
      case "°F·h/BTU": result = base / 1.8956; break;
      case "°F·h·ft²/BTU": result = base / 0.17611; break;
      default: result = toBase;
    }
    setResult(result.toPrecision(6) + " " + to);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Resistance Converter</h1>
        <p className="text-gray-400 mb-6">Convert between thermal resistance units used in heat transfer engineering.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="K/W">K/W</option>
          <option value="°C/W">°C/W</option>
          <option value="K·m²/W">K·m²/W</option>
          <option value="°F·h/BTU">°F·h/BTU</option>
          <option value="°F·h·ft²/BTU">°F·h·ft²/BTU</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="K/W">K/W</option>
          <option value="°C/W">°C/W</option>
          <option value="K·m²/W">K·m²/W</option>
          <option value="°F·h/BTU">°F·h/BTU</option>
          <option value="°F·h·ft²/BTU">°F·h·ft²/BTU</option>
              </select>
            </div>
          </div>
          <button onClick={convert}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 font-semibold">
            Convert
          </button>
          {result && <div className="bg-gray-800 rounded-lg px-4 py-3 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
