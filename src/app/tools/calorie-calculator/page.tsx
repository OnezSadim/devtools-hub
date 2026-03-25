"use client";
import { useState } from "react";

export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [result, setResult] = useState<{bmr: number, tdee: number} | null>(null);

  const activityLevels = [
    { value: "1.2", label: "Sedentary (little/no exercise)" },
    { value: "1.375", label: "Light (1-3 days/week)" },
    { value: "1.55", label: "Moderate (3-5 days/week)" },
    { value: "1.725", label: "Active (6-7 days/week)" },
    { value: "1.9", label: "Very Active (hard exercise)" },
  ];

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height), act = parseFloat(activity);
    if (!a || !w || !h) return;
    let bmr: number;
    if (gender === "male") bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    else bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    setResult({ bmr: Math.round(bmr), tdee: Math.round(bmr * act) });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Calorie Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your daily calorie needs (Mifflin-St Jeor)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <button onClick={() => setGender("male")} className={"px-4 py-2 rounded " + (gender==="male" ? "bg-blue-600" : "bg-gray-700")}>Male</button>
            <button onClick={() => setGender("female")} className={"px-4 py-2 rounded " + (gender==="female" ? "bg-blue-600" : "bg-gray-700")}>Female</button>
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Age (years)</label><input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="30" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Weight (kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Height (cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Activity Level</label>
            <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              {activityLevels.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex justify-between"><span className="text-gray-400">BMR (Base Metabolic Rate)</span><span className="font-bold text-blue-400">{result.bmr} kcal/day</span></div>
              <div className="flex justify-between"><span className="text-gray-400">TDEE (Total Daily Energy)</span><span className="font-bold text-green-400">{result.tdee} kcal/day</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Weight Loss (-500 kcal)</span><span className="font-bold text-yellow-400">{result.tdee - 500} kcal/day</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Weight Gain (+500 kcal)</span><span className="font-bold text-orange-400">{result.tdee + 500} kcal/day</span></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
