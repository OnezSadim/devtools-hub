"use client";
import { useState } from "react";

export default function ProbabilityCalculator() {
  const [pA, setPA] = useState("");
  const [pB, setPB] = useState("");
  const [pAB, setPAB] = useState("");
  const [results, setResults] = useState<Record<string,string>|null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const a=Number(pA), b=Number(pB), ab=pAB?Number(pAB):NaN;
    if(isNaN(a)||a<0||a>1||isNaN(b)||b<0||b>1){setError("P(A) and P(B) must be between 0 and 1.");return;}
    const union = isNaN(ab)?a+b-a*b:a+b-ab;
    const condAB = isNaN(ab)?a:ab/b;
    const condBA = isNaN(ab)?b:ab/a;
    setResults({
      "P(A)": a.toFixed(4),
      "P(B)": b.toFixed(4),
      "P(A∩B) — Intersection": isNaN(ab)?(a*b).toFixed(4)+" (if independent)":ab.toFixed(4),
      "P(A∪B) — Union": union.toFixed(4),
      "P(A|B) — A given B": (b>0?condAB:0).toFixed(4),
      "P(B|A) — B given A": (a>0?condBA:0).toFixed(4),
      "P(not A)": (1-a).toFixed(4),
      "P(not B)": (1-b).toFixed(4),
    });
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Probability Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate union, intersection, and conditional probabilities.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[{label:"P(A)",val:pA,set:setPA,ph:"0.3"},{label:"P(B)",val:pB,set:setPB,ph:"0.5"},{label:"P(A∩B) — optional",val:pAB,set:setPAB,ph:"0.15"}].map(f=>(
              <div key={f.label}>
                <label className="block text-xs text-gray-400 mb-1">{f.label}</label>
                <input type="number" step="0.01" min="0" max="1" className="w-full bg-gray-800 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} />
              </div>
            ))}
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate} className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg font-medium">Calculate</button>
          {results && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {Object.entries(results).map(([k,v])=>(
                <div key={k} className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400">{k}</div>
                  <div className="text-lg font-bold text-pink-400">{v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
