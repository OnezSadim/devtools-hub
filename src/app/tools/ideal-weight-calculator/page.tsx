"use client";
import { useState } from "react";
export default function IdealWeightCalculator() {
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [gender, setGender] = useState("male");
  const [results, setResults] = useState<any>(null);
  const calc = () => {
    const h = parseFloat(height);
    if (!h) return;
    let hCm = unit === "metric" ? h : h * 2.54;
    const hM = hCm / 100;
    const hIn = hCm / 2.54;
    const devine = gender === "male" ? 50 + 2.3 * (hIn - 60) : 45.5 + 2.3 * (hIn - 60);
    const robinson = gender === "male" ? 52 + 1.9 * (hIn - 60) : 49 + 1.7 * (hIn - 60);
    const miller = gender === "male" ? 56.2 + 1.41 * (hIn - 60) : 53.1 + 1.36 * (hIn - 60);
    const bmi = 22 * hM * hM;
    setResults({ devine: devine.toFixed(1), robinson: robinson.toFixed(1), miller: miller.toFixed(1), bmi: bmi.toFixed(1) });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ideal Weight Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate your ideal body weight using multiple formulas.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Unit System</label>
            <select value={unit} onChange={e => setUnit(e.target.value)} className="w-full bg-gray-800 rounded-lg p-2 text-white">
              <option value="metric">Metric (cm)</option>
              <option value="imperial">Imperial (inches)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-gray-800 rounded-lg p-2 text-white">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Height ({unit === "metric" ? "cm" : "inches"})</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder={unit === "metric" ? "175" : "69"} className="w-full bg-gray-800 rounded-lg p-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-3 font-semibold">Calculate</button>
          {results && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[["Devine Formula", results.devine], ["Robinson Formula", results.robinson], ["Miller Formula", results.miller], ["BMI-based (22)", results.bmi]].map(([label, val]) => (
                <div key={label} className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{val} kg</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}