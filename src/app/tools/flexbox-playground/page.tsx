"use client";
import { useState } from "react";
export default function FlexboxPlayground() {
  const [dir, setDir] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const items = [1,2,3,4,5];
  const colors = ["bg-indigo-500","bg-pink-500","bg-yellow-500","bg-green-500","bg-blue-500"];
  const css = `display: flex; flex-direction: ${dir}; justify-content: ${justify}; align-items: ${align}; flex-wrap: ${wrap}; gap: ${gap}px;`;
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Flexbox Playground</h1>
      <div className="bg-gray-700 rounded-xl p-4 min-h-32" style={{display:"flex",flexDirection:dir,justifyContent:justify,alignItems:align,flexWrap:wrap,gap:`${gap}px`}}>
        {items.map((n,i)=>(
          <div key={n} className={`${colors[i]} text-white rounded p-3 text-center font-bold`} style={{minWidth:"60px"}}>Box {n}</div>
        ))}
      </div>
      <div className="bg-gray-800 rounded-xl p-4 grid grid-cols-2 gap-4">
        {[["flex-direction",["row","row-reverse","column","column-reverse"],dir,setDir],["justify-content",["flex-start","flex-end","center","space-between","space-around","space-evenly"],justify,setJustify],["align-items",["flex-start","flex-end","center","stretch","baseline"],align,setAlign],["flex-wrap",["nowrap","wrap","wrap-reverse"],wrap,setWrap]].map(([label,opts,val,setter])=>(
          <label key={label} className="text-gray-300 text-sm">{label}:
            <select value={val} onChange={e=>setter(e.target.value)} className="mt-1 block w-full bg-gray-700 text-white rounded px-2 py-1">
              {opts.map(o=><option key={o} value={o}>{o}</option>)}
            </select>
          </label>
        ))}
        <label className="text-gray-300 text-sm">gap: {gap}px
          <input type="range" min="0" max="40" value={gap} onChange={e=>setGap(Number(e.target.value))} className="mt-1 block w-full" />
        </label>
      </div>
      <div className="bg-gray-900 rounded p-3">
        <code className="text-green-400 text-sm break-all">{css}</code>
      </div>
      <button onClick={()=>navigator.clipboard.writeText(css)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Copy CSS</button>
    </div>
  );
}
