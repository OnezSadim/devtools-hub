"use client";
import { useState } from "react";
export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const m = parseFloat(mass), v = parseFloat(velocity);
    if (isNaN(m) || isNaN(v)) { setResult("Enter valid numbers"); return; }
    const ke = 0.5 * m * v * v;
    setResult("KE = " + ke.toFixed(4) + " J");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Kinetic Energy Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate kinetic energy: KE = ½mv²</p>
        <div className="space-y-4 mb-6">
          {[{label:"Mass (kg)",val:mass,set:setMass},{label:"Velocity (m/s)",val:velocity,set:setVelocity}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input type="number" value={val} onChange={e => set(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2" placeholder="0" />
            </div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && (
          <div className="mt-4 p-4 bg-gray-800 rounded">
            <div className="text-center text-xl font-bold text-blue-400 mb-2">{result}</div>
            <div className="text-sm text-gray-400 text-center">Formula: KE = ½ × {mass || "m"} × ({velocity || "v"})²</div>
          </div>
        )}
      </div>
    </main>
  );
}
