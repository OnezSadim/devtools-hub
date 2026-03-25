"use client";
import { useState } from "react";
export default function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  let bf = NaN;
  const w = parseFloat(waist), n = parseFloat(neck), h = parseFloat(height), hi = parseFloat(hip);
  if (gender === "male" && w && n && h) {
    bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
  } else if (gender === "female" && w && n && h && hi) {
    bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
  }
  const category = isNaN(bf) ? "" : bf < 6 ? "Essential Fat" : bf < 14 ? "Athletes" : bf < 18 ? "Fitness" : bf < 25 ? "Average" : "Obese";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Body Fat Calculator</h1>
        <p className="text-gray-400 mb-6">Estimate body fat % using the U.S. Navy method.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            {["male","female"].map(g => <button key={g} onClick={() => setGender(g)} className={"flex-1 py-2 rounded-lg capitalize " + (gender===g ? "bg-blue-600" : "bg-gray-800")}>{g}</button>)}
          </div>
          {[["Height (cm)", height, setHeight],["Waist (cm)", waist, setWaist],["Neck (cm)", neck, setNeck]].map(([label, val, set]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e => (set as Function)(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          ))}
          {gender === "female" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Hip (cm)</label>
              <input type="number" value={hip} onChange={e => setHip(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          )}
          {!isNaN(bf) && (
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-5xl font-bold text-blue-400">{bf.toFixed(1)}%</div>
              <div className="text-gray-400 mt-2">{category}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}