"use client";
import { useState } from "react";
export default function MacroCalculator() {
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState("balanced");
  const [result, setResult] = useState(null);
  const presets = {balanced:[0.3,0.4,0.3],high_protein:[0.4,0.35,0.25],low_carb:[0.35,0.2,0.45],keto:[0.25,0.05,0.7]};
  const calculate = () => {
    const cal = parseFloat(calories);
    if (!cal) return;
    const [p,c,f] = presets[goal];
    setResult({protein:Math.round(cal*p/4),carbs:Math.round(cal*c/4),fat:Math.round(cal*f/9)});
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">Macro Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate daily protein, carbs, and fat targets from your calorie goal.</p>
      <div className="space-y-4">
        <input type="number" placeholder="Daily calories" value={calories} onChange={e => setCalories(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
        <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="balanced">Balanced (30/40/30)</option><option value="high_protein">High Protein (40/35/25)</option><option value="low_carb">Low Carb (35/20/45)</option><option value="keto">Keto (25/5/70)</option></select>
        <button onClick={calculate} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Calculate Macros</button>
        {result && <div className="p-4 bg-gray-800 rounded-lg space-y-3"><div className="flex justify-between"><span className="text-gray-400">Protein</span><span className="text-green-400 font-bold">{result.protein}g</span></div><div className="flex justify-between"><span className="text-gray-400">Carbohydrates</span><span className="text-yellow-400 font-bold">{result.carbs}g</span></div><div className="flex justify-between"><span className="text-gray-400">Fat</span><span className="text-blue-400 font-bold">{result.fat}g</span></div></div>}
      </div>
    </main>
  );
}