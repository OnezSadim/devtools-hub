"use client";
import { useState } from "react";
export default function WaistToHipRatioCalculator() {
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const w = parseFloat(waist), h = parseFloat(hip);
    if (!w || !h || h === 0) { setResult("Enter valid measurements."); return; }
    const ratio = w / h;
    let risk = "";
    if (gender === "male") risk = ratio < 0.9 ? "Low risk" : ratio < 1.0 ? "Moderate risk" : "High risk";
    else risk = ratio < 0.8 ? "Low risk" : ratio < 0.85 ? "Moderate risk" : "High risk";
    setResult(`WHR: ${ratio.toFixed(2)} — ${risk}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">Waist-to-Hip Ratio Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate your WHR and assess cardiovascular health risk.</p>
      <div className="space-y-4">
        <select value={gender} onChange={e => setGender(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="male">Male</option><option value="female">Female</option></select>
        <input type="number" placeholder="Waist (cm)" value={waist} onChange={e => setWaist(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
        <input type="number" placeholder="Hip (cm)" value={hip} onChange={e => setHip(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
        <button onClick={calculate} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Calculate</button>
        {result && <div className="p-4 bg-gray-800 rounded-lg text-xl font-bold text-center text-green-400">{result}</div>}
      </div>
    </main>
  );
}