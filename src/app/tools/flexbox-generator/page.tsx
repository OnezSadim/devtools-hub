"use client";
import { useState } from "react";

export default function FlexboxGenerator() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");
  const [gap, setGap] = useState(8);
  const [count, setCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const css = `display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap}px;`;
  const copy = () => { navigator.clipboard.writeText(css); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const select = (label, val, setter, opts) => (
    <div key={label}>
      <label className="block text-sm text-gray-300 mb-1">{label}</label>
      <select value={val} onChange={e => setter(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none">
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Generator</h1>
        <p className="text-gray-400 mb-6">Visually build CSS flexbox layouts</p>
        <div className="bg-gray-800 rounded-xl p-4 mb-6 min-h-40" style={{display:"flex",flexDirection:direction,justifyContent:justify,alignItems:align,flexWrap:wrap,gap:`${gap}px`}}>
          {Array.from({length:count}).map((_,i) => (
            <div key={i} className="bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold" style={{width:60,height:60,minWidth:60,minHeight:60}}>{i+1}</div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {select("flex-direction", direction, setDirection, ["row","row-reverse","column","column-reverse"])}
            {select("justify-content", justify, setJustify, ["flex-start","flex-end","center","space-between","space-around","space-evenly"])}
            {select("align-items", align, setAlign, ["stretch","flex-start","flex-end","center","baseline"])}
            {select("flex-wrap", wrap, setWrap, ["nowrap","wrap","wrap-reverse"])}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-300 mb-1">Gap: {gap}px</label><input type="range" min={0} max={40} value={gap} onChange={e => setGap(parseInt(e.target.value))} className="w-full" /></div>
            <div><label className="block text-sm text-gray-300 mb-1">Items: {count}</label><input type="range" min={1} max={12} value={count} onChange={e => setCount(parseInt(e.target.value))} className="w-full" /></div>
          </div>
          <pre className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">{css}</pre>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
