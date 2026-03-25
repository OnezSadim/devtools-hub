"use client";
import { useState } from "react";
export default function ForceCalculator() {
  const [mode, setMode] = useState("force");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const a = parseFloat(val1), b = parseFloat(val2);
    if (isNaN(a) || isNaN(b)) { setResult("Enter valid numbers"); return; }
    if (mode === "force") setResult("Force: " + (a * b).toFixed(4) + " N");
    else if (mode === "mass") { if (b === 0) { setResult("Acceleration cannot be zero"); return; } setResult("Mass: " + (a / b).toFixed(4) + " kg"); }
    else { if (b === 0) { setResult("Mass cannot be zero"); return; } setResult("Acceleration: " + (a / b).toFixed(4) + " m/s²"); }
  };
  const modes = [
    { id: "force", label: "Force", l1: "Mass (kg)", l2: "Acceleration (m/s²)" },
    { id: "mass", label: "Mass", l1: "Force (N)", l2: "Acceleration (m/s²)" },
    { id: "accel", label: "Acceleration", l1: "Force (N)", l2: "Mass (kg)" },
  ];
  const cur = modes.find(m => m.id === mode)!;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Force Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate force, mass, or acceleration (F = ma)</p>
        <div className="flex gap-2 mb-6">
          {modes.map(m => (
            <button key={m.id} onClick={() => { setMode(m.id); setResult(null); setVal1(""); setVal2(""); }}
              className={"px-3 py-1 rounded text-sm " + (mode === m.id ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700")}>
              {m.label}
            </button>
          ))}
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">{cur.l1}</label>
            <input type="number" value={val1} onChange={e => setVal1(e.target.value)}
              className="w-full bg-gray-800 rounded px-3 py-2" placeholder="0" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{cur.l2}</label>
            <input type="number" value={val2} onChange={e => setVal2(e.target.value)}
              className="w-full bg-gray-800 rounded px-3 py-2" placeholder="0" />
          </div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-center text-xl font-bold text-blue-400">{result}</div>}
      </div>
    </main>
  );
}
