"use client";
import { useState } from "react";

export default function PythagoreanCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    setError(""); setResult("");
    const av = parseFloat(a), bv = parseFloat(b), cv = parseFloat(c);
    const hasA = !isNaN(av) && av > 0;
    const hasB = !isNaN(bv) && bv > 0;
    const hasC = !isNaN(cv) && cv > 0;
    if (hasA && hasB && !hasC) {
      setResult("c = " + Math.sqrt(av * av + bv * bv).toFixed(6));
    } else if (hasA && hasC && !hasB) {
      if (cv <= av) { setError("Hypotenuse c must be greater than leg a."); return; }
      setResult("b = " + Math.sqrt(cv * cv - av * av).toFixed(6));
    } else if (hasB && hasC && !hasA) {
      if (cv <= bv) { setError("Hypotenuse c must be greater than leg b."); return; }
      setResult("a = " + Math.sqrt(cv * cv - bv * bv).toFixed(6));
    } else {
      setError("Enter exactly two values (leave one blank to solve for it). c is the hypotenuse.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pythagorean Theorem Calculator</h1>
        <p className="text-gray-400 mb-2">Solve for any side of a right triangle using a² + b² = c²</p>
        <p className="text-gray-500 text-sm mb-6">Leave one field blank to solve for it. <strong className="text-gray-400">c</strong> is always the hypotenuse.</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[["Leg a", a, setA], ["Leg b", b, setB], ["Hypotenuse c", c, setC]].map(([label, val, setter]: any) => (
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input type="number" value={val} onChange={e => setter(e.target.value)} placeholder="?" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
            </div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Solve</button>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {result && (
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-green-400 font-mono text-xl text-center">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
