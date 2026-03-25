"use client";
import { useState } from "react";

const formulas = [
  { name: "Kinetic Energy", desc: "KE = ½mv²", fields: [{k:"m",label:"Mass (kg)"},{k:"v",label:"Velocity (m/s)"}], calc: (v:Record<string,number>)=>0.5*v.m*v.v**2, unit:"J" },
  { name: "Force (F=ma)", desc: "F = ma", fields: [{k:"m",label:"Mass (kg)"},{k:"a",label:"Acceleration (m/s²)"}], calc: (v:Record<string,number>)=>v.m*v.a, unit:"N" },
  { name: "Gravitational PE", desc: "PE = mgh", fields: [{k:"m",label:"Mass (kg)"},{k:"g",label:"g (m/s²)",default:"9.81"},{k:"h",label:"Height (m)"}], calc: (v:Record<string,number>)=>v.m*v.g*v.h, unit:"J" },
  { name: "Ohm's Law (V)", desc: "V = IR", fields: [{k:"I",label:"Current (A)"},{k:"R",label:"Resistance (Ω)"}], calc: (v:Record<string,number>)=>v.I*v.R, unit:"V" },
  { name: "Power", desc: "P = IV", fields: [{k:"I",label:"Current (A)"},{k:"V",label:"Voltage (V)"}], calc: (v:Record<string,number>)=>v.I*v.V, unit:"W" },
  { name: "Projectile Range", desc: "R = v²sin(2θ)/g", fields: [{k:"v",label:"Speed (m/s)"},{k:"theta",label:"Angle (°)"},{k:"g",label:"g (m/s²)",default:"9.81"}], calc: (v:Record<string,number>)=>v.v**2*Math.sin(2*v.theta*Math.PI/180)/v.g, unit:"m" },
];

export default function PhysicsCalculator() {
  const [fi, setFi] = useState(0);
  const formula = formulas[fi];
  const [vals, setVals] = useState<Record<string,string>>({});
  const [res, setRes] = useState("");

  function calc() {
    const v: Record<string,number> = {};
    for (const f of formula.fields) {
      const val = vals[f.k] || (f as any).default || "";
      const n = parseFloat(val);
      if (isNaN(n)) { setRes("Fill all fields"); return; }
      v[f.k] = n;
    }
    setRes(formula.calc(v).toFixed(4) + " " + formula.unit);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Physics Calculator</h1>
      <p className="text-gray-400 mb-6">Common physics formulas: kinematics, energy, electricity.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg">
        <div className="flex flex-wrap gap-2 mb-4">
          {formulas.map((f,i)=><button key={i} onClick={()=>{setFi(i);setVals({});setRes("");}} className={`px-3 py-1 rounded text-sm ${fi===i?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{f.name}</button>)}
        </div>
        <div className="text-blue-300 font-mono mb-4">{formula.desc}</div>
        {formula.fields.map(f=>(
          <div key={f.k} className="mb-3">
            <label className="text-sm text-gray-400 block mb-1">{f.label}</label>
            <input type="number" placeholder={(f as any).default||""} value={vals[f.k]||""} onChange={e=>setVals({...vals,[f.k]:e.target.value})} className="w-full bg-gray-800 rounded p-2" />
          </div>
        ))}
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded p-2 font-semibold mb-3">Calculate</button>
        {res && <div className="bg-gray-800 rounded p-3 text-green-400 text-xl font-mono">Result: {res}</div>}
      </div>
    </main>
  );
}