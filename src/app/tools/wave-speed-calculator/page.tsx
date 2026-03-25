"use client";
import { useState } from "react";
export default function WaveSpeedCalculator() {
  const [freq, setFreq] = useState("");
  const [wl, setWl] = useState("");
  const [period, setPeriod] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const f = parseFloat(freq);
    const lambda = parseFloat(wl);
    if (!isNaN(f) && !isNaN(lambda) && f > 0 && lambda > 0) {
      const v = f * lambda;
      const T = 1 / f;
      setPeriod(T.toFixed(6));
      setResult(v.toFixed(4));
    } else setResult("Invalid input");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Wave Speed Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate wave speed using v = f × λ</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Frequency (Hz)</label>
            <input value={freq} onChange={e=>setFreq(e.target.value)} placeholder="e.g. 440" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Wavelength (m)</label>
            <input value={wl} onChange={e=>setWl(e.target.value)} placeholder="e.g. 0.773" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 font-semibold">Calculate</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 space-y-2">
              <div className="text-2xl font-bold text-blue-400">Wave Speed: {result} m/s</div>
              {period && <div className="text-gray-300">Period: {period} s</div>}
            </div>
          )}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-semibold text-gray-300 mb-2">Formula</p>
          <p>v = f × λ</p>
          <p className="mt-1">Where v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m)</p>
        </div>
      </div>
    </div>
  );
}
