"use client";
import { useState } from "react";
export default function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number|null>(null);
  const calc = () => {
    const w = parseFloat(weight), h = parseFloat(height);
    if (unit === "metric") setBmi(w / ((h/100)**2));
    else setBmi((703 * w) / (h**2));
  };
  const category = bmi ? bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese" : "";
  const color = bmi ? bmi < 18.5 ? "text-blue-400" : bmi < 25 ? "text-green-400" : bmi < 30 ? "text-yellow-400" : "text-red-400" : "";
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate your Body Mass Index.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setUnit("metric")} className={`flex-1 py-2 rounded ${unit==="metric"?"bg-blue-600":"bg-gray-700"}`}>Metric (kg/cm)</button>
        <button onClick={() => setUnit("imperial")} className={`flex-1 py-2 rounded ${unit==="imperial"?"bg-blue-600":"bg-gray-700"}`}>Imperial (lbs/in)</button>
      </div>
      <input value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit==="metric"?"Weight (kg)":"Weight (lbs)"} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-3 text-white" />
      <input value={height} onChange={e => setHeight(e.target.value)} placeholder={unit==="metric"?"Height (cm)":"Height (inches)"} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      <button onClick={calc} className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold mb-4">Calculate</button>
      {bmi && <div className="p-6 bg-gray-800 rounded text-center">
        <p className="text-5xl font-bold mb-2">{bmi.toFixed(1)}</p>
        <p className={`text-xl font-semibold ${color}`}>{category}</p>
        <div className="mt-4 text-sm text-gray-400">
          <p>Underweight: &lt;18.5 | Normal: 18.5-24.9 | Overweight: 25-29.9 | Obese: 30+</p>
        </div>
      </div>}
    </div>
  );
}