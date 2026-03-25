"use client";
import { useState } from "react";
export default function StandingWavesCalculator() {
  const [length, setLength] = useState("");
  const [speed, setSpeed] = useState("");
  const [n, setN] = useState("1");
  const [openClosed, setOpenClosed] = useState("open");
  const [result, setResult] = useState("");
  const calc = () => {
    const L = parseFloat(length), v = parseFloat(speed), nv = parseInt(n);
    if (!isNaN(L) && !isNaN(v) && !isNaN(nv) && L > 0 && v > 0 && nv > 0) {
      let f;
      if (openClosed === "open") {
        f = (nv * v) / (2 * L);
      } else {
        f = ((2 * nv - 1) * v) / (4 * L);
      }
      setResult("Harmonic " + nv + " frequency: " + f.toFixed(4) + " Hz");
    } else setResult("Enter valid positive values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Standing Waves Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate harmonics for open or closed tubes/strings</p>
      <label className="block mb-2 text-gray-300">Length (m)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={length} onChange={e=>setLength(e.target.value)} placeholder="e.g. 0.5" />
      <label className="block mb-2 text-gray-300">Wave Speed (m/s)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={speed} onChange={e=>setSpeed(e.target.value)} placeholder="e.g. 343" />
      <label className="block mb-2 text-gray-300">Harmonic Number (n)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={n} onChange={e=>setN(e.target.value)} placeholder="e.g. 1" />
      <label className="block mb-2 text-gray-300">Type</label>
      <select className="w-full bg-gray-800 rounded p-2 mb-4" value={openClosed} onChange={e=>setOpenClosed(e.target.value)}>
        <option value="open">Open (both ends open)</option>
        <option value="closed">Closed (one end closed)</option>
      </select>
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold" onClick={calc}>Calculate</button>
      {result && <div className="mt-6 p-4 bg-gray-800 rounded text-green-400 font-mono">{result}</div>}
    </main>
  );
}
