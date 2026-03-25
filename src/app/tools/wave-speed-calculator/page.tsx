"use client";
import { useState } from "react";
export default function WaveSpeedCalculator() {
  const [freq, setFreq] = useState("");
  const [wl, setWl] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const f = parseFloat(freq), w = parseFloat(wl);
    if (!isNaN(f) && !isNaN(w) && f > 0 && w > 0) {
      setResult("Wave Speed: " + (f * w).toFixed(4) + " m/s");
    } else setResult("Enter valid positive values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Wave Speed Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate wave speed: v = f × λ</p>
      <label className="block mb-2 text-gray-300">Frequency (Hz)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={freq} onChange={e=>setFreq(e.target.value)} placeholder="e.g. 440" />
      <label className="block mb-2 text-gray-300">Wavelength (m)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={wl} onChange={e=>setWl(e.target.value)} placeholder="e.g. 0.773" />
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold" onClick={calc}>Calculate</button>
      {result && <div className="mt-6 p-4 bg-gray-800 rounded text-green-400 font-mono">{result}</div>}
    </main>
  );
}
