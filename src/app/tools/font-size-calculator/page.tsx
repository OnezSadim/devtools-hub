"use client";
import { useState } from "react";
export default function FontSizeCalculator() {
  const [base, setBase] = useState(16);
  const [scale, setScale] = useState(1.25);
  const scales = [{name:"Minor Second",v:1.067},{name:"Major Second",v:1.125},{name:"Minor Third",v:1.2},{name:"Major Third",v:1.25},{name:"Perfect Fourth",v:1.333},{name:"Augmented Fourth",v:1.414},{name:"Perfect Fifth",v:1.5},{name:"Golden Ratio",v:1.618}];
  const steps = [-2,-1,0,1,2,3,4,5,6];
  const size = (step: number) => (base * Math.pow(scale, step));
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Font Size Calculator</h1>
      <p className="text-gray-400 mb-6">Generate a modular type scale for your design system.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-8">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Base size: {base}px</label>
          <input type="range" min={10} max={24} value={base} onChange={e=>setBase(+e.target.value)} className="w-full" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Scale</label>
          <select value={scale} onChange={e=>setScale(+e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
            {scales.map(s=><option key={s.v} value={s.v}>{s.name} ({s.v})</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-3 max-w-2xl">
        {steps.map(step=>{
          const px = size(step);
          const rem = px/base;
          const label = step===0?"base":step>0?"+"+step:String(step);
          return (
            <div key={step} className="flex items-center gap-4 p-3 bg-gray-800 rounded">
              <div className="w-12 text-center"><span className={"text-xs font-mono "+(step===0?"text-blue-400":"text-gray-400")}>{label}</span></div>
              <div style={{fontSize:Math.min(px,48)}} className="text-white flex-1 overflow-hidden whitespace-nowrap">The quick brown fox</div>
              <div className="text-right text-xs font-mono text-gray-400 w-32">
                <div>{px.toFixed(1)}px</div>
                <div>{rem.toFixed(3)}rem</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}