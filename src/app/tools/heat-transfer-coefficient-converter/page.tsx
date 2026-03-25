"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("W/(m²·K)");
  const [to, setTo] = useState("kW/(m²·K)");
  const [result, setResult] = useState<string | null>(null);

  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setResult("Enter a valid number"); return; }
    let toBase = 0;
    switch (from) {
      case "W/(m²·K)": toBase = v * 1.0; break;
      case "kW/(m²·K)": toBase = v * 1000.0; break;
      case "W/(cm²·K)": toBase = v * 10000.0; break;
      case "BTU/(h·ft²·°F)": toBase = v * 5.67826; break;
      case "BTU/(s·ft²·°F)": toBase = v * 20441.7; break;
      case "kcal/(h·m²·°C)": toBase = v * 1.163; break;
      case "cal/(s·cm²·°C)": toBase = v * 41840.0; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "W/(m²·K)": result = base / 1.0; break;
      case "kW/(m²·K)": result = base / 1000.0; break;
      case "W/(cm²·K)": result = base / 10000.0; break;
      case "BTU/(h·ft²·°F)": result = base / 5.67826; break;
      case "BTU/(s·ft²·°F)": result = base / 20441.7; break;
      case "kcal/(h·m²·°C)": result = base / 1.163; break;
      case "cal/(s·cm²·°C)": result = base / 41840.0; break;
      default: result = toBase;
    }
    setResult(result.toPrecision(6) + " " + to);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Heat Transfer Coefficient Converter</h1>
        <p className="text-gray-400 mb-6">Convert between heat transfer coefficient units for convection and conduction analysis.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="W/(m²·K)">W/(m²·K)</option>
          <option value="kW/(m²·K)">kW/(m²·K)</option>
          <option value="W/(cm²·K)">W/(cm²·K)</option>
          <option value="BTU/(h·ft²·°F)">BTU/(h·ft²·°F)</option>
          <option value="BTU/(s·ft²·°F)">BTU/(s·ft²·°F)</option>
          <option value="kcal/(h·m²·°C)">kcal/(h·m²·°C)</option>
          <option value="cal/(s·cm²·°C)">cal/(s·cm²·°C)</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mt-1">
          <option value="W/(m²·K)">W/(m²·K)</option>
          <option value="kW/(m²·K)">kW/(m²·K)</option>
          <option value="W/(cm²·K)">W/(cm²·K)</option>
          <option value="BTU/(h·ft²·°F)">BTU/(h·ft²·°F)</option>
          <option value="BTU/(s·ft²·°F)">BTU/(s·ft²·°F)</option>
          <option value="kcal/(h·m²·°C)">kcal/(h·m²·°C)</option>
          <option value="cal/(s·cm²·°C)">cal/(s·cm²·°C)</option>
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
