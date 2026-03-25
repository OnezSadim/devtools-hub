"use client";
import { useState } from "react";
export default function QuadraticFormulaSolver() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  function solve() {
    const av = parseFloat(a), bv = parseFloat(b), cv = parseFloat(c);
    if (isNaN(av) || isNaN(bv) || isNaN(cv) || av === 0) { setResult({error:"a cannot be 0"}); return; }
    const disc = bv*bv - 4*av*cv;
    if (disc > 0) {
      const x1 = (-bv + Math.sqrt(disc)) / (2*av);
      const x2 = (-bv - Math.sqrt(disc)) / (2*av);
      setResult({ type: "two_real", x1, x2, disc, vertex: { x: -bv/(2*av), y: cv - bv*bv/(4*av) } });
    } else if (disc === 0) {
      const x1 = -bv / (2*av);
      setResult({ type: "one_real", x1, disc, vertex: { x: x1, y: 0 } });
    } else {
      const real = -bv/(2*av);
      const imag = Math.sqrt(-disc)/(2*av);
      setResult({ type: "complex", real, imag, disc, vertex: { x: real, y: cv - bv*bv/(4*av) } });
    }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Quadratic Formula Solver</h1>
        <p className="text-gray-400 mb-2">Solve ax² + bx + c = 0</p>
        <div className="bg-gray-800 rounded p-3 text-center text-lg font-mono mb-6">x = (−b ± √(b²−4ac)) / 2a</div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div><label className="block text-sm text-gray-400 mb-1">a</label><input type="number" value={a} onChange={e=>setA(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" placeholder="1" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">b</label><input type="number" value={b} onChange={e=>setB(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" placeholder="-5" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">c</label><input type="number" value={c} onChange={e=>setC(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" placeholder="6" /></div>
        </div>
        <button onClick={solve} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Solve</button>
        {result && (
          <div className="mt-6 bg-gray-800 rounded p-4">
            {result.error ? <p className="text-red-400">{result.error}</p> : (
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-400">Discriminant (b²−4ac)</span><span>{result.disc}</span></div>
                {result.type==="two_real" && (<><div className="flex justify-between"><span className="text-gray-400">x₁</span><span className="text-green-400 font-mono">{result.x1.toFixed(6)}</span></div><div className="flex justify-between"><span className="text-gray-400">x₂</span><span className="text-green-400 font-mono">{result.x2.toFixed(6)}</span></div></>)}
                {result.type==="one_real" && <div className="flex justify-between"><span className="text-gray-400">x (double root)</span><span className="text-yellow-400 font-mono">{result.x1.toFixed(6)}</span></div>}
                {result.type==="complex" && (<><div className="flex justify-between"><span className="text-gray-400">x₁</span><span className="text-purple-400 font-mono">{result.real.toFixed(4)} + {result.imag.toFixed(4)}i</span></div><div className="flex justify-between"><span className="text-gray-400">x₂</span><span className="text-purple-400 font-mono">{result.real.toFixed(4)} − {result.imag.toFixed(4)}i</span></div></>)}
                <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Vertex</span><span className="font-mono">({result.vertex.x.toFixed(4)}, {result.vertex.y.toFixed(4)})</span></div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
