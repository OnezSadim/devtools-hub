"use client";
import { useState } from "react";
export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState(null);
  const calculate = () => {
    let w = parseFloat(weight);
    if (!w) { setResult("Enter your weight."); return; }
    if (unit === "lbs") w = w * 0.453592;
    let base = w * 0.033;
    if (activity === "light") base *= 1.1;
    else if (activity === "active") base *= 1.4;
    else if (activity === "very_active") base *= 1.6;
    setResult(`${base.toFixed(1)} liters/day (${(base*4.227).toFixed(0)} cups)`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">Water Intake Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate your recommended daily water intake.</p>
      <div className="space-y-4">
        <div className="flex gap-2"><input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} className="flex-1 p-3 bg-gray-800 rounded-lg border border-gray-700" /><select value={unit} onChange={e => setUnit(e.target.value)} className="p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="kg">kg</option><option value="lbs">lbs</option></select></div>
        <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="sedentary">Sedentary</option><option value="light">Light activity</option><option value="moderate">Moderate</option><option value="active">Active</option><option value="very_active">Very active</option></select>
        <button onClick={calculate} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Calculate</button>
        {result && <div className="p-4 bg-gray-800 rounded-lg text-xl font-bold text-center text-blue-400">{result}</div>}
      </div>
    </main>
  );
}