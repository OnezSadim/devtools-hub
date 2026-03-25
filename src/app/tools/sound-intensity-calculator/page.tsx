"use client";
import { useState } from "react";
export default function SoundIntensityCalculator() {
  const [intensity, setIntensity] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const I = parseFloat(intensity);
    if (!isNaN(I) && I > 0) {
      const I0 = 1e-12;
      const dB = 10 * Math.log10(I / I0);
      setResult("Sound Level: " + dB.toFixed(2) + " dB");
    } else setResult("Enter a valid positive intensity.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Sound Intensity Calculator</h1>
      <p className="text-gray-400 mb-6">L = 10 × log₁₀(I / I₀), I₀ = 10⁻¹² W/m²</p>
      <label className="block mb-2 text-gray-300">Intensity (W/m²)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={intensity} onChange={e=>setIntensity(e.target.value)} placeholder="e.g. 1e-6" />
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold" onClick={calc}>Calculate</button>
      {result && <div className="mt-6 p-4 bg-gray-800 rounded text-green-400 font-mono">{result}</div>}
    </main>
  );
}
