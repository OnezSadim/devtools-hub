"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("W/(m·K)");
  const [to, setTo] = useState("kW/(m·K)");
  const [result, setResult] = useState<string | null>(null);

  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setResult("Enter a valid number"); return; }
    let toBase = 0;
    switch (from) {
      case "W/(m·K)": toBase = v * 1.0; break;
      case "kW/(m·K)": toBase = v * 1000.0; break;
      case "W/(cm·K)": toBase = v * 100.0; break;
      case "BTU/(h·ft·°F)": toBase = v * 1.73073; break;
      case "BTU·in/(h·ft²·°F)": toBase = v * 0.14423; break;
      case "cal/(s·cm·°C)": toBase = v * 418.4; break;
      case "kcal/(h·m·°C)": toBase = v * 1.163; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "W/(m·K)": result = base / 1.0; break;
      case "kW/(m·K)": result = base / 1000.0; break;
      case "W/(cm·K)": result = base / 100.0; break;
      case "BTU/(h·ft·°F)": result = base / 1.73073; break;
      case "BTU·in/(h·ft²·°F)": result = base / 0.14423; break;
      case "cal/(s·cm·°C)": result = base / 418.4; break;
      case "kcal/(h·m·°C)": result = base / 1.163; break;
      default: result = toBase;
    }
    setResult(result.toPrecision(6) + " " + to);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Conductivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert between thermal conductivity units for heat transfer calculations.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="W/(m·K)">W/(m·K)</option>
          <option value="kW/(m·K)">kW/(m·K)</option>
          <option value="W/(cm·K)">W/(cm·K)</option>
          <option value="BTU/(h·ft·°F)">BTU/(h·ft·°F)</option>
          <option value="BTU·in/(h·ft²·°F)">BTU·in/(h·ft²·°F)</option>
          <option value="cal/(s·cm·°C)">cal/(s·cm·°C)</option>
          <option value="kcal/(h·m·°C)">kcal/(h·m·°C)</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="W/(m·K)">W/(m·K)</option>
          <option value="kW/(m·K)">kW/(m·K)</option>
          <option value="W/(cm·K)">W/(cm·K)</option>
          <option value="BTU/(h·ft·°F)">BTU/(h·ft·°F)</option>
          <option value="BTU·in/(h·ft²·°F)">BTU·in/(h·ft²·°F)</option>
          <option value="cal/(s·cm·°C)">cal/(s·cm·°C)</option>
          <option value="kcal/(h·m·°C)">kcal/(h·m·°C)</option>
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
