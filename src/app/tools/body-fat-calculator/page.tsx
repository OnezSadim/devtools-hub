"use client";
import { useState } from "react";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), n = parseFloat(neck), h = parseFloat(height);
    if (!w || !n || !h) return;
    let bf: number;
    if (gender === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      const hp = parseFloat(hip);
      if (!hp) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    setResult(Math.round(bf * 10) / 10);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Body Fat Calculator</h1>
        <p className="text-gray-400 mb-6">U.S. Navy Method — all measurements in cm</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <button onClick={() => setGender("male")} className={"px-4 py-2 rounded " + (gender==="male" ? "bg-blue-600" : "bg-gray-700")}>Male</button>
            <button onClick={() => setGender("female")} className={"px-4 py-2 rounded " + (gender==="female" ? "bg-blue-600" : "bg-gray-700")}>Female</button>
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Height (cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Waist (cm)</label><input type="number" value={waist} onChange={e => setWaist(e.target.value)} placeholder="85" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Neck (cm)</label><input type="number" value={neck} onChange={e => setNeck(e.target.value)} placeholder="38" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          {gender === "female" && <div><label className="block text-sm text-gray-400 mb-1">Hip (cm)</label><input type="number" value={hip} onChange={e => setHip(e.target.value)} placeholder="95" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
          {result !== null && (
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-blue-400">{result}%</div>
              <div className="text-sm text-gray-400 mt-2">
                {gender === "male" ? "Essential: 2-5% | Athletes: 6-13% | Fitness: 14-17% | Average: 18-24% | Obese: 25%+"
                : "Essential: 10-13% | Athletes: 14-20% | Fitness: 21-24% | Average: 25-31% | Obese: 32%+"}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
