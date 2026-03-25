"use client";
import { useState } from "react";
export default function QuadraticSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");
  function solve() {
    const av = parseFloat(a), bv = parseFloat(b), cv = parseFloat(c);
    if (isNaN(av) || isNaN(bv) || isNaN(cv)) { setResult("Enter valid numbers"); return; }
    if (av === 0) { setResult("a cannot be 0"); return; }
    const disc = bv*bv - 4*av*cv;
    if (disc > 0) {
      const x1 = (-bv + Math.sqrt(disc))/(2*av);
      const x2 = (-bv - Math.sqrt(disc))/(2*av);
      setResult(`x₁ = ${x1.toFixed(6)}, x₂ = ${x2.toFixed(6)}`);
    } else if (disc === 0) {
      setResult(`x = ${(-bv/(2*av)).toFixed(6)} (double root)`);
    } else {
      const real = (-bv/(2*av)).toFixed(6);
      const imag = (Math.sqrt(-disc)/(2*av)).toFixed(6);
      setResult(`x = ${real} ± ${imag}i (complex roots)`);
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Quadratic Equation Solver</h1>
        <p className="text-gray-400 mb-6">Solve ax² + bx + c = 0</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[["a",a,setA],["b",b,setB],["c",c,setC]].map(([label,val,set])=>(
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" />
            </div>
          ))}
        </div>
        <button onClick={solve} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Solve</button>
        {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </div>
  );
}