"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h) return;
    let bmi: number;
    if (unit === "metric") {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (703 * w) / (h * h);
    }
    setResult(Math.round(bmi * 10) / 10);
    if (bmi < 18.5) setCategory("Underweight");
    else if (bmi < 25) setCategory("Normal weight");
    else if (bmi < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your Body Mass Index</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4 mb-2">
            <button onClick={() => setUnit("metric")} className={"px-4 py-2 rounded " + (unit==="metric" ? "bg-blue-600" : "bg-gray-700")}>
              Metric (kg/cm)
            </button>
            <button onClick={() => setUnit("imperial")} className={"px-4 py-2 rounded " + (unit==="imperial" ? "bg-blue-600" : "bg-gray-700")}>
              Imperial (lb/in)
            </button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Height ({unit === "metric" ? "cm" : "inches"})</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder={unit === "metric" ? "175" : "69"} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
            Calculate BMI
          </button>
          {result !== null && (
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-blue-400">{result}</div>
              <div className="text-lg mt-1">{category}</div>
              <div className="text-sm text-gray-400 mt-2">
                Underweight: &lt;18.5 | Normal: 18.5-24.9 | Overweight: 25-29.9 | Obese: ≥30
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
