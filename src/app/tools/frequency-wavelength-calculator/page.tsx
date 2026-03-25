"use client";
import { useState } from "react";
export default function FrequencyWavelengthCalculator() {
  const C = 299792458;
  const [mode, setMode] = useState<"ftow"|"wtof">("ftow");
  const [input, setInput] = useState("");
  const [unit, setUnit] = useState("Hz");
  const [result, setResult] = useState<string | null>(null);
  const unitMul: Record<string,number> = { Hz:1, kHz:1e3, MHz:1e6, GHz:1e9, THz:1e12 };
  const wlUnits: Record<string,number> = { m:1, cm:0.01, mm:0.001, um:1e-6, nm:1e-9 };
  const [wlUnit, setWlUnit] = useState("m");
  const calc = () => {
    const v = parseFloat(input);
    if (isNaN(v) || v <= 0) { setResult("Invalid input"); return; }
    if (mode === "ftow") {
      const fHz = v * (unitMul[unit] || 1);
      const lambda = C / fHz;
      setResult(lambda.toExponential(4) + " m");
    } else {
      const lm = v * (wlUnits[wlUnit] || 1);
      const f = C / lm;
      setResult(f.toExponential(4) + " Hz");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequency & Wavelength Calculator</h1>
        <p className="text-gray-400 mb-8">Convert between frequency and wavelength (EM waves, c = 299,792,458 m/s)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            <button onClick={()=>setMode("ftow")} className={"flex-1 py-2 rounded font-semibold " + (mode==="ftow"?"bg-blue-600":"bg-gray-800")}>Frequency → Wavelength</button>
            <button onClick={()=>setMode("wtof")} className={"flex-1 py-2 rounded font-semibold " + (mode==="wtof"?"bg-blue-600":"bg-gray-800")}>Wavelength → Frequency</button>
          </div>
          <div className="flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter value" className="flex-1 bg-gray-800 rounded px-3 py-2 text-white" />
            {mode==="ftow" ? (
              <select value={unit} onChange={e=>setUnit(e.target.value)} className="bg-gray-800 rounded px-3 py-2">
                {Object.keys(unitMul).map(u=><option key={u}>{u}</option>)}
              </select>
            ) : (
              <select value={wlUnit} onChange={e=>setWlUnit(e.target.value)} className="bg-gray-800 rounded px-3 py-2">
                {Object.keys(wlUnits).map(u=><option key={u}>{u}</option>)}
              </select>
            )}
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 font-semibold">Convert</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-2xl font-bold text-blue-400">{result}</div>
          )}
        </div>
      </div>
    </div>
  );
}
