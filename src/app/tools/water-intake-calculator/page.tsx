"use client";
import { useState } from "react";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("temperate");
  const [result, setResult] = useState<{liters: number, glasses: number} | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    let base = w * 0.033;
    if (activity === "light") base += 0.3;
    else if (activity === "moderate") base += 0.5;
    else if (activity === "heavy") base += 0.9;
    if (climate === "hot") base += 0.5;
    else if (climate === "cold") base -= 0.2;
    const liters = Math.round(base * 10) / 10;
    setResult({ liters, glasses: Math.round(liters / 0.25) });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Water Intake Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your daily hydration needs</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Body Weight (kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Activity Level</label>
            <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              <option value="sedentary">Sedentary</option>
              <option value="light">Light exercise</option>
              <option value="moderate">Moderate exercise</option>
              <option value="heavy">Heavy exercise</option>
            </select>
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Climate</label>
            <select value={climate} onChange={e => setClimate(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              <option value="cold">Cold</option>
              <option value="temperate">Temperate</option>
              <option value="hot">Hot/Humid</option>
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><div className="text-3xl font-bold text-blue-400">{result.liters}L</div><div className="text-sm text-gray-400">per day</div></div>
                <div><div className="text-3xl font-bold text-cyan-400">{result.glasses}</div><div className="text-sm text-gray-400">glasses (250ml)</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
