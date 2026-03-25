"use client";
import { useState } from "react";
export default function WavelengthFrequencyCalculator() {
  const [wavelength, setWavelength] = useState("");
  const [frequency, setFrequency] = useState("");
  const [speed, setSpeed] = useState("299792458");
  const [result, setResult] = useState("");
  function calc() {
    const c = parseFloat(speed);
    const lam = parseFloat(wavelength);
    const freq = parseFloat(frequency);
    if (!isNaN(lam) && isNaN(freq)) {
      const f = c / lam;
      setResult("Frequency: " + f.toExponential(4) + " Hz");
    } else if (isNaN(lam) && !isNaN(freq)) {
      const l = c / freq;
      setResult("Wavelength: " + l.toExponential(4) + " m");
    } else {
      setResult("Enter exactly one of wavelength or frequency.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Wavelength-Frequency Calculator</h1>
        <p className="text-gray-400 mb-6">c = λ × f — enter one to solve for the other</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Wave Speed (m/s)</label>
            <input value={speed} onChange={e=>setSpeed(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Wavelength λ (m)</label>
            <input value={wavelength} onChange={e=>setWavelength(e.target.value)} placeholder="leave blank to solve" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Frequency f (Hz)</label>
            <input value={frequency} onChange={e=>setFrequency(e.target.value)} placeholder="leave blank to solve" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
