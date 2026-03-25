
"use client";
import { useState } from "react";
export default function LightSpeedCalculator() {
  const [mode, setMode] = useState("distance");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const C = 299792458; // m/s
  const calculate = () => {
    const v = parseFloat(value);
    if (isNaN(v) || v <= 0) { setResult("Enter a valid positive number"); return; }
    if (mode === "distance") {
      const d = v * C;
      setResult("Distance: " + d.toExponential(4) + " meters (" + (d/9.461e15).toExponential(4) + " light-years)");
    } else {
      const t = v / C;
      setResult("Time: " + t.toExponential(4) + " seconds");
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Light Speed Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate distance or time using the speed of light (c = 299,792,458 m/s)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            <button onClick={() => setMode("distance")} className={"px-4 py-2 rounded-lg font-medium " + (mode==="distance" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>Time → Distance</button>
            <button onClick={() => setMode("time")} className={"px-4 py-2 rounded-lg font-medium " + (mode==="time" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>Distance → Time</button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="distance" ? "Time (seconds)" : "Distance (meters)"}</label>
            <input type="number" value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm">{result}</div>}
        </div>
      </div>
    </main>
  );
}
