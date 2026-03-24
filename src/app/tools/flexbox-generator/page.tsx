
"use client";
import { useState } from "react";
export default function FlexboxGenerator() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const [items, setItems] = useState(4);
  const css = `.flex-container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap}px;
}`;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Generator</h1>
        <p className="text-gray-400 mb-6">Visually configure CSS flexbox layouts</p>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            {[{label:"Flex Direction",val:direction,set:setDirection,opts:["row","row-reverse","column","column-reverse"]},{label:"Justify Content",val:justify,set:setJustify,opts:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},{label:"Align Items",val:align,set:setAlign,opts:["stretch","flex-start","flex-end","center","baseline"]},{label:"Flex Wrap",val:wrap,set:setWrap,opts:["nowrap","wrap","wrap-reverse"]}].map(({label,val,set,opts})=>(
              <div key={label}>
                <label className="block text-sm text-gray-400 mb-1">{label}</label>
                <select value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
                  {opts.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Gap: {gap}px</label>
              <input type="range" min={0} max={32} value={gap} onChange={e=>setGap(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Items: {items}</label>
              <input type="range" min={1} max={8} value={items} onChange={e=>setItems(+e.target.value)} className="w-full" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Preview</p>
            <div style={{display:"flex",flexDirection:direction as any,justifyContent:justify,alignItems:align,flexWrap:wrap as any,gap:`${gap}px`}} className="bg-gray-900 border border-gray-700 rounded p-3 h-48">
              {Array.from({length:items},(_,i)=>(
                <div key={i} className="bg-purple-600 rounded px-3 py-2 text-sm font-bold flex-shrink-0">{i+1}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded border border-gray-700 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Generated CSS</span>
            <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
          <pre className="text-green-400 text-sm font-mono whitespace-pre">{css}</pre>
        </div>
      </div>
    </div>
  );
}
