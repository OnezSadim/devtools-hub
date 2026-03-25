
"use client";
import { useState } from "react";
export default function RefractiveIndexCalculator() {
  const [n1, setN1] = useState("1");
  const [n2, setN2] = useState("1.5");
  const [angle1, setAngle1] = useState("30");
  const [result, setResult] = useState("");
  const calculate = () => {
    const n1v = parseFloat(n1), n2v = parseFloat(n2), a1 = parseFloat(angle1);
    if (isNaN(n1v)||isNaN(n2v)||isNaN(a1)) { setResult("Enter valid numbers"); return; }
    const sinA2 = (n1v * Math.sin(a1 * Math.PI/180)) / n2v;
    if (Math.abs(sinA2) > 1) { setResult("Total internal reflection — no refracted ray"); return; }
    const a2 = Math.asin(sinA2) * 180 / Math.PI;
    setResult("Angle of refraction: " + a2.toFixed(4) + "°
Critical angle: " + (n1v < n2v ? "N/A (going denser)" : (Math.asin(n2v/n1v)*180/Math.PI).toFixed(4)+"°"));
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Refractive Index Calculator</h1>
        <p className="text-gray-400 mb-6">Apply Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {[["n₁ (medium 1)",n1,setN1],["n₂ (medium 2)",n2,setN2],["Angle of incidence (°)",angle1,setAngle1]].map(([lbl,val,setter])=>(
            <div key={lbl}>
              <label className="block text-sm text-gray-400 mb-1">{lbl}</label>
              <input type="number" value={val} onChange={e=>setter(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Calculate</button>
          {result && <pre className="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-medium text-gray-300 mb-2">Common Refractive Indices</p>
          {[["Vacuum","1.000"],["Air","1.0003"],["Water","1.333"],["Glass","1.5"],["Diamond","2.417"]].map(([m,n])=>(
            <div key={m} className="flex justify-between py-1 border-b border-gray-800"><span>{m}</span><span className="text-white">{n}</span></div>
          ))}
        </div>
      </div>
    </main>
  );
}
