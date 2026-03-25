"use client";
import { useState } from "react";

export default function LensEquationCalculator() {
  const [solve, setSolve] = useState<"f"|"do"|"di">("f");
  const [f, setF] = useState("");
  const [dObj, setDObj] = useState("");
  const [dImg, setDImg] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const fv = parseFloat(f), dov = parseFloat(dObj), div2 = parseFloat(dImg);
    if (solve === "f") {
      if (isNaN(dov)||isNaN(div2)) { setResult("Enter object and image distance"); return; }
      const fCalc = 1/(1/dov + 1/div2);
      setResult(`Focal length f = ${fCalc.toFixed(4)} cm`);
    } else if (solve === "di") {
      if (isNaN(fv)||isNaN(dov)) { setResult("Enter f and object distance"); return; }
      const diCalc = 1/(1/fv - 1/dov);
      setResult(`Image distance dᵢ = ${diCalc.toFixed(4)} cm`);
    } else {
      if (isNaN(fv)||isNaN(div2)) { setResult("Enter f and image distance"); return; }
      const doCalc = 1/(1/fv - 1/div2);
      setResult(`Object distance dₒ = ${doCalc.toFixed(4)} cm`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thin Lens Equation</h1>
        <p className="text-gray-400 mb-6">1/f = 1/dₒ + 1/dᵢ</p>
        <div className="flex gap-2 mb-6">
          {(["f","Solve f"],["di","Solve dᵢ"],["do","Solve dₒ"]) .map(([v,l])=>(
            <button key={v} onClick={()=>setSolve(v as "f"|"do"|"di")} className={`px-3 py-2 rounded text-sm ${solve===v?"bg-blue-600":"bg-gray-800"}`}>{l}</button>
          ))}
        </div>
        {solve!=="f"&&<div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Focal length f (cm)</label><input value={f} onChange={e=>setF(e.target.value)} className="w-full bg-gray-800 rounded p-3" /></div>}
        {solve!=="do"&&<div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Object distance dₒ (cm)</label><input value={dObj} onChange={e=>setDObj(e.target.value)} className="w-full bg-gray-800 rounded p-3" /></div>}
        {solve!=="di"&&<div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Image distance dᵢ (cm)</label><input value={dImg} onChange={e=>setDImg(e.target.value)} className="w-full bg-gray-800 rounded p-3" /></div>}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
