
"use client";
import { useState } from "react";
export default function PhotonEnergyCalculator() {
  const [mode, setMode] = useState("wavelength");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const H = 6.62607015e-34;
  const C = 2.99792458e8;
  const EV = 1.602176634e-19;
  const calculate = () => {
    const v = parseFloat(value);
    if (isNaN(v)||v<=0) { setResult("Enter a valid positive number"); return; }
    let E = 0;
    if (mode==="wavelength") {
      E = H * C / (v * 1e-9);
    } else {
      E = H * v;
    }
    setResult("Energy: " + E.toExponential(4) + " J
       = " + (E/EV).toFixed(4) + " eV
       = " + (E*1e3/EV).toFixed(2) + " meV");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Photon Energy Calculator</h1>
        <p className="text-gray-400 mb-6">E = hf = hc/λ — Calculate energy of a single photon</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            <button onClick={()=>setMode("wavelength")} className={"px-4 py-2 rounded-lg font-medium " + (mode==="wavelength" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>Wavelength (nm)</button>
            <button onClick={()=>setMode("frequency")} className={"px-4 py-2 rounded-lg font-medium " + (mode==="frequency" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>Frequency (Hz)</button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="wavelength" ? "Wavelength (nm)" : "Frequency (Hz)"}</label>
            <input type="number" value={value} onChange={e=>setValue(e.target.value)} placeholder={mode==="wavelength" ? "e.g. 550" : "e.g. 5.45e14"} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Calculate</button>
          {result && <pre className="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-medium text-gray-300 mb-2">Visible Light Spectrum</p>
          {[["Violet","380-450"],["Blue","450-495"],["Green","495-570"],["Yellow","570-590"],["Orange","590-620"],["Red","620-750"]].map(([c,r])=>(
            <div key={c} className="flex justify-between py-1 border-b border-gray-800"><span>{c}</span><span className="text-white">{r} nm</span></div>
          ))}
        </div>
      </div>
    </main>
  );
}
