"use client";
import { useState } from "react";
export default function FlexboxPlayground() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const [items, setItems] = useState(4);
  const css = `display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap}px;`;
  const opts: Record<string,string[]> = {
    "flex-direction":["row","row-reverse","column","column-reverse"],
    "justify-content":["flex-start","flex-end","center","space-between","space-around","space-evenly"],
    "align-items":["stretch","flex-start","flex-end","center","baseline"],
    "flex-wrap":["nowrap","wrap","wrap-reverse"]
  };
  const setters: Record<string,(v:string)=>void> = {"flex-direction":setDirection,"justify-content":setJustify,"align-items":setAlign,"flex-wrap":setWrap};
  const vals: Record<string,string> = {"flex-direction":direction,"justify-content":justify,"align-items":align,"flex-wrap":wrap};
  const colors = ["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#3b82f6","#ef4444","#14b8a6"];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Playground</h1>
        <p className="text-gray-400 mb-6">Visualize flexbox properties interactively</p>
        <div style={{display:"flex",flexDirection:direction as any,justifyContent:justify,alignItems:align,flexWrap:wrap as any,gap:`${gap}px`,minHeight:"200px"}} className="bg-gray-800 rounded-xl p-4 mb-6">
          {Array.from({length:items},(_,i)=><div key={i} style={{background:colors[i%colors.length]}} className="w-16 h-16 rounded-lg flex items-center justify-center font-bold text-white">{i+1}</div>)}
        </div>
        {Object.entries(opts).map(([prop,vals2])=>(
          <div key={prop} className="mb-4">
            <label className="text-sm text-gray-400 block mb-2">{prop}</label>
            <div className="flex flex-wrap gap-2">{vals2.map(v=><button key={v} onClick={()=>setters[prop](v)} className={`px-3 py-1 rounded text-sm ${vals[prop]===v?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{v}</button>)}</div>
          </div>
        ))}
        <div className="mb-4"><label className="text-sm text-gray-400 block mb-1">Items: {items}</label><input type="range" min={1} max={8} value={items} onChange={e=>setItems(+e.target.value)} className="w-full" /></div>
        <div className="mb-4"><label className="text-sm text-gray-400 block mb-1">Gap: {gap}px</label><input type="range" min={0} max={32} value={gap} onChange={e=>setGap(+e.target.value)} className="w-full" /></div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <pre className="font-mono text-sm whitespace-pre-wrap">{css}</pre>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 text-blue-400 text-sm">Copy CSS</button>
        </div>
      </div>
    </div>
  );
}