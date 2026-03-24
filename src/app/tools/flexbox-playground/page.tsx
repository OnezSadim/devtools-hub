"use client";
import { useState } from "react";

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const [items, setItems] = useState(4);
  const css = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap}px;
}`;
  const Sel = ({label,val,set,opts}:{label:string,val:string,set:(s:string)=>void,opts:string[]}) => (
    <div className="mb-4">
      <label className="block text-sm text-gray-400 mb-1">{label}</label>
      <select value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
        {opts.map(o=><option key={o}>{o}</option>)}
      </select>
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Playground</h1>
        <p className="text-gray-400 mb-8">Visually explore CSS flexbox properties.</p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <Sel label="flex-direction" val={direction} set={setDirection} opts={["row","row-reverse","column","column-reverse"]} />
            <Sel label="justify-content" val={justify} set={setJustify} opts={["flex-start","flex-end","center","space-between","space-around","space-evenly"]} />
            <Sel label="align-items" val={align} set={setAlign} opts={["stretch","flex-start","flex-end","center","baseline"]} />
            <Sel label="flex-wrap" val={wrap} set={setWrap} opts={["nowrap","wrap","wrap-reverse"]} />
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">gap</span><span className="font-mono">{gap}px</span></div>
              <input type="range" min={0} max={40} value={gap} onChange={e=>setGap(Number(e.target.value))} className="w-full" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Items</span><span className="font-mono">{items}</span></div>
              <input type="range" min={1} max={10} value={items} onChange={e=>setItems(Number(e.target.value))} className="w-full" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-gray-800 rounded-xl h-64 p-4 mb-4" style={{display:"flex",flexDirection:direction as any,justifyContent:justify,alignItems:align,flexWrap:wrap as any,gap:`${gap}px`}}>
              {Array.from({length:items}).map((_,i)=>(
                <div key={i} className="bg-blue-600 rounded flex items-center justify-center text-sm font-bold" style={{minWidth:"40px",minHeight:"40px",padding:"8px"}}>{i+1}</div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">CSS</span>
                <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
              </div>
              <pre className="text-sm text-green-400 whitespace-pre-wrap">{css}</pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}