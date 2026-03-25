"use client";
import { useState } from "react";

export default function CircleCalculator() {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("radius");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const val = parseFloat(input);
    if (isNaN(val) || val <= 0) { setResult(null); return; }
    let r = val;
    if (inputType === "diameter") r = val / 2;
    if (inputType === "circumference") r = val / (2 * Math.PI);
    if (inputType === "area") r = Math.sqrt(val / Math.PI);
    setResult({
      radius: r.toFixed(6),
      diameter: (2 * r).toFixed(6),
      circumference: (2 * Math.PI * r).toFixed(6),
      area: (Math.PI * r * r).toFixed(6),
    });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Circle Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate all circle properties from any one measurement.</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {["radius", "diameter", "circumference", "area"].map(t => (
            <button key={t} onClick={() => setInputType(t)} className={"px-3 py-1 rounded capitalize text-sm " + (inputType === t ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>{t}</button>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1 capitalize">{inputType}</label>
          <input type="number" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Calculate</button>
        {result && (
          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className="flex justify-between"><span className="text-gray-400 capitalize">{k}</span><span className="font-mono text-green-400">{v as string}</span></div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
