"use client";
import { useState } from "react";

export default function IdealGasLawCalculator() {
  const [solve, setSolve] = useState("P");
  const [P, setP] = useState("");
  const [V, setV] = useState("");
  const [n, setN] = useState("");
  const [T, setT] = useState("");
  const [result, setResult] = useState("");
  const R = 8.314;

  const calc = () => {
    try {
      if (solve === "P") setResult(`P = ${(parseFloat(n)*R*parseFloat(T)/parseFloat(V)).toFixed(4)} Pa`);
      else if (solve === "V") setResult(`V = ${(parseFloat(n)*R*parseFloat(T)/parseFloat(P)).toFixed(6)} m³`);
      else if (solve === "n") setResult(`n = ${(parseFloat(P)*parseFloat(V)/(R*parseFloat(T))).toFixed(6)} mol`);
      else setResult(`T = ${(parseFloat(P)*parseFloat(V)/(parseFloat(n)*R)).toFixed(4)} K`);
    } catch { setResult("Invalid input"); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ideal Gas Law Calculator</h1>
        <p className="text-gray-400 mb-6">PV = nRT — solve for any variable. R = 8.314 J/(mol·K)</p>
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Solve for:</label>
          <div className="flex gap-2 mt-1">
            {["P","V","n","T"].map(v => (
              <button key={v} onClick={() => { setSolve(v); setResult(""); }}
                className={"px-4 py-2 rounded font-mono " + (solve===v ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700")}>{v}</button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {solve !== "P" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Pressure P (Pa)" value={P} onChange={e=>setP(e.target.value)} />}
          {solve !== "V" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Volume V (m³)" value={V} onChange={e=>setV(e.target.value)} />}
          {solve !== "n" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Moles n (mol)" value={n} onChange={e=>setN(e.target.value)} />}
          {solve !== "T" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Temperature T (K)" value={T} onChange={e=>setT(e.target.value)} />}
          <button onClick={calc} className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 p-4 rounded text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
