"use client";
import { useState } from "react";
export default function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = useState("");
  const [bedtimes, setBedtimes] = useState([]);
  const calculate = () => {
    if (!wakeTime) return;
    const [h, m] = wakeTime.split(":").map(Number);
    const wakeMinutes = h * 60 + m;
    const times = [6,5,4,3].map(c => {
      let bed = wakeMinutes - (c * 90 + 15);
      if (bed < 0) bed += 1440;
      const bh = Math.floor(bed / 60) % 24;
      const bm = bed % 60;
      return `${String(bh).padStart(2,"0")}:${String(bm).padStart(2,"0")} (${c} cycles, ${c*1.5}h sleep)`;
    });
    setBedtimes(times);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">Sleep Cycle Calculator</h1>
      <p className="text-gray-400 mb-6">Find the best bedtime to wake up refreshed. Each sleep cycle is 90 minutes.</p>
      <div className="space-y-4">
        <label className="text-gray-300">Wake-up time:</label>
        <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700" />
        <button onClick={calculate} className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">Calculate Bedtimes</button>
        {bedtimes.length > 0 && <div className="p-4 bg-gray-800 rounded-lg space-y-2">{bedtimes.map((t,i) => <div key={i} className="text-green-400 font-bold text-lg">{t}</div>)}</div>}
      </div>
    </main>
  );
}