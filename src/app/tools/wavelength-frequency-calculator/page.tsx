"use client";
import { useState } from "react";

export default function WavelengthFrequencyCalculator() {
  const [mode, setMode] = useState<"wToF" | "fToW">("wToF");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const C = 299792458;

  const calculate = () => {
    const val = parseFloat(input);
    if (isNaN(val) || val <= 0) { setResult("Enter a positive number"); return; }
    if (mode === "wToF") {
      const freq = C / val;
      setResult(`Frequency: ${freq.toExponential(4)} Hz`);
    } else {
      const wave = C / val;
      setResult(`Wavelength: ${wave.toExponential(4)} m`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Wavelength &amp; Frequency Calculator</h1>
        <p className="text-gray-400 mb-6">Convert between wavelength and frequency using c = λf</p>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode("wToF")} className={`px-4 py-2 rounded ${mode==="wToF"?"bg-blue-600":"bg-gray-800"}`}>λ → f</button>
          <button onClick={() => setMode("fToW")} className={`px-4 py-2 rounded ${mode==="fToW"?"bg-blue-600":"bg-gray-800"}`}>f → λ</button>
        </div>
        <label className="block text-sm text-gray-400 mb-1">{mode==="wToF"?"Wavelength (m)":"Frequency (Hz)"}</label>
        <input value={input} onChange={e=>setInput(e.target.value)} className="w-full bg-gray-800 rounded p-3 mb-4" placeholder="e.g. 500e-9" />
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        <div className="mt-6 text-sm text-gray-500">Speed of light c = 299,792,458 m/s</div>
      </div>
    </main>
  );
}
