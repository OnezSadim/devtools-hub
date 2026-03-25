"use client";
import { useState } from "react";
export default function WaveSpeedCalculator() {
  const [speed, setSpeed] = useState("");
  const [freq, setFreq] = useState("");
  const [wl, setWl] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const sv = speed ? parseFloat(speed) : NaN;
    const fv = freq ? parseFloat(freq) : NaN;
    const wv = wl ? parseFloat(wl) : NaN;
    if (!isNaN(sv) && !isNaN(fv)) {
      setResult("Wavelength λ = " + (sv/fv).toFixed(6) + " m");
    } else if (!isNaN(sv) && !isNaN(wv)) {
      setResult("Frequency f = " + (sv/wv).toFixed(4) + " Hz");
    } else if (!isNaN(fv) && !isNaN(wv)) {
      setResult("Wave speed v = " + (fv*wv).toFixed(4) + " m/s");
    } else {
      setResult("Enter at least 2 values");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Wave Speed Calculator</h1>
        <p className="text-gray-400 mb-6">v = f × λ — Enter any two values to find the third.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div><label className="block text-sm text-gray-400 mb-1">Wave Speed v (m/s)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={speed} onChange={e => setSpeed(e.target.value)} placeholder="leave blank to solve" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Frequency f (Hz)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={freq} onChange={e => setFreq(e.target.value)} placeholder="leave blank to solve" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Wavelength λ (m)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={wl} onChange={e => setWl(e.target.value)} placeholder="leave blank to solve" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-medium">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
