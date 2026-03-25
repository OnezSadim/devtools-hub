"use client";
import { useState } from "react";
export default function ProteinIntakeCalculator() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("maintain");
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState(null);
  const calculate = () => {
    let w = parseFloat(weight);
    if (!w) return;
    if (unit === "lbs") w = w * 0.453592;
    const m = {lose:1.2,maintain:1.0,build:1.6,athlete:2.0}[goal];
    const g = Math.round(w * m);
    setResult(`${g}g protein/day (~${Math.round(g/4)} protein calories)`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">Protein Intake Calculator</h1>
      <p className="text-gray-400 mb-6">Find your optimal daily protein intake for your fitness goal.</p>
      <div className="space-y-4">
        <div className="flex gap-2"><input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} className="flex-1 p-3 bg-gray-800 rounded-lg border border-gray-700" /><select value={unit} onChange={e => setUnit(e.target.value)} className="p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="kg">kg</option><option value="lbs">lbs</option></select></div>
        <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"><option value="lose">Lose weight</option><option value="maintain">Maintain</option><option value="build">Build muscle</option><option value="athlete">Athlete</option></select>
        <button onClick={calculate} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Calculate</button>
        {result && <div className="p-4 bg-gray-800 rounded-lg text-xl font-bold text-center text-green-400">{result}</div>}
      </div>
    </main>
  );
}