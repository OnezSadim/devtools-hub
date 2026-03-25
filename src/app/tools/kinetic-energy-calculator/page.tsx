"use client";
import { useState } from "react";
export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState("1000");
  const [velocity, setVelocity] = useState("27.78");
  const [unit, setUnit] = useState("ms");
  const getV = () => { const v=parseFloat(velocity); return unit==="kmh" ? v/3.6 : unit==="mph" ? v*0.44704 : v; };
  const ke = () => { const m=parseFloat(mass), v=getV(); return m&&v ? 0.5*m*v*v : null; };
  const energy = ke();
  const presets = [
    {name:"Car at 100km/h", mass:"1500", velocity:"100", unit:"kmh"},
    {name:"Baseball pitch", mass:"0.145", velocity:"42", unit:"ms"},
    {name:"Person walking", mass:"70", velocity:"1.4", unit:"ms"},
  ];
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Kinetic Energy Calculator</h1><p className="text-gray-400 mb-2">Calculate kinetic energy from mass and velocity. Supports m/s, km/h, and mph.</p>
    <div className="bg-gray-800 rounded-lg p-3 mb-6 font-mono text-center text-yellow-300">KE = ½ × m × v²</div>
    <div className="flex gap-2 mb-4 flex-wrap">{presets.map(p=>(<button key={p.name} onClick={()=>{setMass(p.mass);setVelocity(p.velocity);setUnit(p.unit);}} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">{p.name}</button>))}</div>
    <div className="space-y-4 mb-6">
      <div><label className="block text-sm text-gray-400 mb-1">Mass (kg)</label><input type="number" value={mass} onChange={e=>setMass(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
      <div className="flex gap-2">
        <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Velocity</label><input type="number" value={velocity} onChange={e=>setVelocity(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
        <div><label className="block text-sm text-gray-400 mb-1">Unit</label><select value={unit} onChange={e=>setUnit(e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
          <option value="ms">m/s</option><option value="kmh">km/h</option><option value="mph">mph</option></select></div></div>
    </div>
    {energy!==null && <div className="bg-gray-800 rounded-lg p-4 space-y-2">
      <p className="text-sm text-gray-400">Kinetic Energy:</p>
      <p className="font-mono text-2xl text-green-400">{energy.toExponential(4)} J</p>
      <p className="text-sm text-gray-500">{(energy/1000).toFixed(4)} kJ &nbsp;|&nbsp; {(energy/1e6).toFixed(6)} MJ</p>
      <p className="text-sm text-gray-500">Velocity in m/s: {getV().toFixed(4)}</p>
    </div>}
  </div></div>);
}