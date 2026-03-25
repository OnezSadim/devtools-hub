"use client";
import { useState } from "react";

export default function HeatTransferCalculator() {
  const [mode, setMode] = useState("conduction");
  const [vals, setVals] = useState({ k: "", A: "", dT: "", d: "", h: "", T1: "", T2: "", e: "", sigma: "5.67e-8" });
  const [result, setResult] = useState("");

  const set = (k: string, v: string) => setVals(p => ({ ...p, [k]: v }));

  const calc = () => {
    try {
      if (mode === "conduction") {
        const Q = parseFloat(vals.k) * parseFloat(vals.A) * parseFloat(vals.dT) / parseFloat(vals.d);
        setResult(`Heat Flow (Q) = ${Q.toFixed(4)} W`);
      } else if (mode === "convection") {
        const Q = parseFloat(vals.h) * parseFloat(vals.A) * (parseFloat(vals.T1) - parseFloat(vals.T2));
        setResult(`Heat Flow (Q) = ${Q.toFixed(4)} W`);
      } else {
        const Q = parseFloat(vals.e) * parseFloat(vals.sigma) * parseFloat(vals.A) * (Math.pow(parseFloat(vals.T1),4) - Math.pow(parseFloat(vals.T2),4));
        setResult(`Radiated Power (Q) = ${Q.toFixed(4)} W`);
      }
    } catch { setResult("Invalid input"); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Heat Transfer Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate heat transfer via conduction, convection, or radiation.</p>
        <div className="flex gap-2 mb-6">
          {["conduction","convection","radiation"].map(m => (
            <button key={m} onClick={() => { setMode(m); setResult(""); }}
              className={"px-4 py-2 rounded capitalize " + (mode===m ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700")}>{m}</button>
          ))}
        </div>
        <div className="space-y-3">
          {mode === "conduction" && (<>
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Thermal conductivity k (W/m·K)" value={vals.k} onChange={e=>set("k",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Area A (m²)" value={vals.A} onChange={e=>set("A",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Temperature difference ΔT (K)" value={vals.dT} onChange={e=>set("dT",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Thickness d (m)" value={vals.d} onChange={e=>set("d",e.target.value)} />
          </>)}
          {mode === "convection" && (<>
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Heat transfer coeff h (W/m²·K)" value={vals.h} onChange={e=>set("h",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Area A (m²)" value={vals.A} onChange={e=>set("A",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Surface temp T1 (K)" value={vals.T1} onChange={e=>set("T1",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Fluid temp T2 (K)" value={vals.T2} onChange={e=>set("T2",e.target.value)} />
          </>)}
          {mode === "radiation" && (<>
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Emissivity ε (0-1)" value={vals.e} onChange={e=>set("e",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Area A (m²)" value={vals.A} onChange={e=>set("A",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Body temp T1 (K)" value={vals.T1} onChange={e=>set("T1",e.target.value)} />
            <input className="w-full bg-gray-800 p-3 rounded" placeholder="Ambient temp T2 (K)" value={vals.T2} onChange={e=>set("T2",e.target.value)} />
          </>)}
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 p-4 rounded text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
