"use client";
import { useState } from "react";

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<{robinson: number, miller: number, devine: number, hamwi: number} | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    if (!h) return;
    const hIn = h / 2.54;
    const over5ft = Math.max(0, hIn - 60);
    let robinson, miller, devine, hamwi: number;
    if (gender === "male") {
      robinson = 52 + 1.9 * over5ft;
      miller = 56.2 + 1.41 * over5ft;
      devine = 50 + 2.3 * over5ft;
      hamwi = 48 + 2.7 * over5ft;
    } else {
      robinson = 49 + 1.7 * over5ft;
      miller = 53.1 + 1.36 * over5ft;
      devine = 45.5 + 2.3 * over5ft;
      hamwi = 45.5 + 2.2 * over5ft;
    }
    setResult({ robinson: Math.round(robinson*10)/10, miller: Math.round(miller*10)/10, devine: Math.round(devine*10)/10, hamwi: Math.round(hamwi*10)/10 });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ideal Weight Calculator</h1>
        <p className="text-gray-400 mb-6">Multiple formula comparison</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <button onClick={() => setGender("male")} className={"px-4 py-2 rounded " + (gender==="male" ? "bg-blue-600" : "bg-gray-700")}>Male</button>
            <button onClick={() => setGender("female")} className={"px-4 py-2 rounded " + (gender==="female" ? "bg-blue-600" : "bg-gray-700")}>Female</button>
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Height (cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              {[{label: "Robinson Formula", val: result.robinson},{label: "Miller Formula", val: result.miller},{label: "Devine Formula", val: result.devine},{label: "Hamwi Formula", val: result.hamwi}].map(r => (
                <div key={r.label} className="flex justify-between">
                  <span className="text-gray-400">{r.label}</span>
                  <span className="font-bold text-blue-400">{r.val} kg</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
