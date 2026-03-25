"use client";
import { useState } from "react";
export default function GravitationalForceCalculator() {
  const G = 6.674e-11;
  const [m1, setM1] = useState("5.972e24");
  const [m2, setM2] = useState("7.342e22");
  const [r, setR] = useState("3.844e8");
  const force = () => {
    const M1=parseFloat(m1), M2=parseFloat(m2), R=parseFloat(r);
    if(!M1||!M2||!R) return null;
    return G*M1*M2/(R*R);
  };
  const f = force();
  const presets = [
    {name:"Earth-Moon", m1:"5.972e24", m2:"7.342e22", r:"3.844e8"},
    {name:"Earth-Sun", m1:"5.972e24", m2:"1.989e30", r:"1.496e11"},
    {name:"Two people 1m apart", m1:"70", m2:"70", r:"1"},
  ];
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Gravitational Force Calculator</h1><p className="text-gray-400 mb-2">Calculate gravitational attraction using Newton's law of universal gravitation.</p>
    <div className="bg-gray-800 rounded-lg p-3 mb-6 font-mono text-center text-yellow-300">F = G × m₁ × m₂ / r² &nbsp;|&nbsp; G = 6.674×10⁻¹¹ N·m²/kg²</div>
    <div className="flex gap-2 mb-4 flex-wrap">{presets.map(p=>(<button key={p.name} onClick={()=>{setM1(p.m1);setM2(p.m2);setR(p.r);}} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">{p.name}</button>))}</div>
    <div className="space-y-4 mb-6">
      <div><label className="block text-sm text-gray-400 mb-1">Mass 1 (kg)</label><input type="text" value={m1} onChange={e=>setM1(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono"/></div>
      <div><label className="block text-sm text-gray-400 mb-1">Mass 2 (kg)</label><input type="text" value={m2} onChange={e=>setM2(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono"/></div>
      <div><label className="block text-sm text-gray-400 mb-1">Distance between centers (m)</label><input type="text" value={r} onChange={e=>setR(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono"/></div>
    </div>
    {f && <div className="bg-gray-800 rounded-lg p-4"><p className="text-sm text-gray-400 mb-1">Gravitational Force:</p><p className="font-mono text-2xl text-green-400">{f.toExponential(4)} N</p><p className="text-sm text-gray-500 mt-2">{f.toFixed(2)} newtons</p></div>}
  </div></div>);
}