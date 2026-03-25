"use client";
import { useState } from "react";
export default function LensEquationCalculator() {
  const [f, setF] = useState("");
  const [do_, setDo] = useState("");
  const [di, setDi] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const fv = f ? parseFloat(f) : NaN;
    const dov = do_ ? parseFloat(do_) : NaN;
    const div = di ? parseFloat(di) : NaN;
    const known = [!isNaN(fv), !isNaN(dov), !isNaN(div)];
    const count = known.filter(Boolean).length;
    if (count < 2) { setResult("Enter at least 2 values"); return; }
    if (!isNaN(fv) && !isNaN(dov)) {
      const diCalc = 1 / (1/fv - 1/dov);
      const m = -diCalc / dov;
      setResult("Image distance dᵢ = " + diCalc.toFixed(4) + " cm
Magnification m = " + m.toFixed(4));
    } else if (!isNaN(fv) && !isNaN(div)) {
      const doCalc = 1 / (1/fv - 1/div);
      const m = -div / doCalc;
      setResult("Object distance dₒ = " + doCalc.toFixed(4) + " cm
Magnification m = " + m.toFixed(4));
    } else {
      const fCalc = 1 / (1/dov + 1/div);
      setResult("Focal length f = " + fCalc.toFixed(4) + " cm");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Lens Equation Calculator</h1>
        <p className="text-gray-400 mb-6">1/f = 1/dₒ + 1/dᵢ — Enter any two values.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div><label className="block text-sm text-gray-400 mb-1">Focal Length f (cm)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={f} onChange={e => setF(e.target.value)} placeholder="leave blank to solve" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Object Distance dₒ (cm)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={do_} onChange={e => setDo(e.target.value)} placeholder="leave blank to solve" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Image Distance dᵢ (cm)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={di} onChange={e => setDi(e.target.value)} placeholder="leave blank to solve" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-medium">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 font-mono whitespace-pre-line">{result}</div>}
        </div>
      </div>
    </div>
  );
}
