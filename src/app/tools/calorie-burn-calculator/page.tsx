"use client";
import { useState } from "react";
const activities: Record<string,number> = { "Running (6 mph)": 9.8, "Walking (3 mph)": 3.8, "Cycling (moderate)": 7.5, "Swimming": 8.3, "Jump Rope": 11.4, "Yoga": 3.0, "Weight Training": 5.0, "HIIT": 12.0, "Basketball": 6.5, "Soccer": 8.0 };
export default function CalorieBurnCalculator() {
  const [weight, setWeight] = useState("70");
  const [minutes, setMinutes] = useState("30");
  const [activity, setActivity] = useState("Running (6 mph)");
  const met = activities[activity] || 6;
  const calories = Math.round(parseFloat(weight||"0") * met * parseFloat(minutes||"0") / 60);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Calorie Burn Calculator</h1>
      <p className="text-gray-400 mb-6">Estimate calories burned during exercise</p>
      <div className="max-w-lg space-y-4">
        <div><label className="text-gray-400 text-sm">Body Weight (kg)</label><input value={weight} onChange={e=>setWeight(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1" /></div>
        <div><label className="text-gray-400 text-sm">Duration (minutes)</label><input value={minutes} onChange={e=>setMinutes(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1" /></div>
        <div><label className="text-gray-400 text-sm">Activity</label><select value={activity} onChange={e=>setActivity(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1">{Object.keys(activities).map(a=><option key={a}>{a}</option>)}</select></div>
        <div className="bg-gray-800 rounded p-6 text-center"><div className="text-gray-400 mb-1">Estimated Calories Burned</div><div className="text-5xl font-bold text-orange-400">{calories}</div><div className="text-gray-400 mt-1">kcal</div></div>
      </div>
    </main>
  );
}