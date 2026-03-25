"use client";
import { useState } from "react";

const units: [string, string, number][] = [["pas", "Pascal-second (Pa·s)", 1], ["mpas", "Millipascal-second (mPa·s)", 0.001], ["cp", "Centipoise (cP)", 0.001], ["p", "Poise (P)", 0.1], ["p_dyn", "dyn·s/cm²", 0.1]];

export default function ViscosityConverterPage() {
  const [from, setFrom] = useState(units[0][0]);
  const [to, setTo] = useState("mpas");
  const [val, setVal] = useState("");
  const toBase = (v: number, u: string) => { const f = units.find(x => x[0]===u); return f ? v * f[2] : v; };
  const fromBase = (v: number, u: string) => { const f = units.find(x => x[0]===u); return f ? v / f[2] : v; };
  const result = val !== "" && !isNaN(Number(val)) ? fromBase(toBase(Number(val), from), to).toPrecision(6) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Viscosity Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Pa·s, mPa·s, cP, P, St, cSt and more.</p>
        <div className="space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-gray-400 text-sm">From</label><select value={from} onChange={e=>setFrom(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2">{units.map(u=><option key={u[0]} value={u[0]}>{u[1]}</option>)}</select></div>
            <div><label className="text-gray-400 text-sm">To</label><select value={to} onChange={e=>setTo(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2">{units.map(u=><option key={u[0]} value={u[0]}>{u[1]}</option>)}</select></div>
          </div>
          {result && <div className="bg-gray-800 rounded p-4 text-center"><span className="text-2xl font-mono text-green-400">{result}</span><span className="text-gray-400 ml-2">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}
