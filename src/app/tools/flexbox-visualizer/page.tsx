"use client";
import { useState } from "react";
export default function FlexboxVisualizer() {
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
  const colors = ["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#3b82f6"];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Visualizer</h1>
        <p className="text-gray-400 mb-6">Visually learn and generate CSS flexbox layouts.</p>
        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl mb-6" style={{height:"200px",display:"flex",flexDirection:direction as any,justifyContent:justify,alignItems:align,flexWrap:wrap as any,gap:`${gap}px`,padding:"16px"}}>
          {Array.from({length:items},(_,i)=>(<div key={i} className="rounded flex items-center justify-center text-white font-bold text-sm" style={{background:colors[i%colors.length],minWidth:"50px",minHeight:"40px",padding:"8px"}}>{i+1}</div>))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[{label:"Direction",val:direction,set:setDirection,opts:["row","row-reverse","column","column-reverse"]},{label:"Justify Content",val:justify,set:setJustify,opts:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},{label:"Align Items",val:align,set:setAlign,opts:["stretch","flex-start","flex-end","center","baseline"]},{label:"Flex Wrap",val:wrap,set:setWrap,opts:["nowrap","wrap","wrap-reverse"]}].map(({label,val,set,opts})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}</label><select value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white">{opts.map(o=>(<option key={o} value={o}>{o}</option>))}</select></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Gap: {gap}px</label><input type="range" min="0" max="32" value={gap} onChange={e=>setGap(Number(e.target.value))} className="w-full" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Items: {items}</label><input type="range" min="1" max="6" value={items} onChange={e=>setItems(Number(e.target.value))} className="w-full" /></div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <pre className="text-green-400 text-sm">{css}</pre>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 text-xs text-blue-400 hover:text-blue-300">Copy</button>
        </div>
      </div>
    </main>
  );
}