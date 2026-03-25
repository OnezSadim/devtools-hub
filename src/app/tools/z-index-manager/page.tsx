"use client";
import { useState } from "react";
export default function ZIndexManager() {
  const presets = [
    {name:"Dropdown",value:1000,use:"Dropdown menus, select elements"},
    {name:"Sticky",value:1020,use:"Sticky headers and sidebars"},
    {name:"Fixed",value:1030,use:"Fixed position elements"},
    {name:"Modal Backdrop",value:1040,use:"Modal overlay background"},
    {name:"Modal",value:1050,use:"Modal dialog windows"},
    {name:"Popover",value:1060,use:"Popovers and tooltips"},
    {name:"Toast",value:1070,use:"Toast notifications"},
    {name:"Tooltip",value:1080,use:"Tooltips on top of everything"},
    {name:"Max",value:2147483647,use:"Absolute top layer"},
  ];
  const [custom, setCustom] = useState("");
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Z-Index Reference</h1>
        <p className="text-gray-400 mb-6">Common z-index values and their use cases in CSS.</p>
        <div className="space-y-2 mb-6">
          {presets.map(({name,value,use})=>(
            <div key={name} className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded p-3">
              <div className="w-24 text-right font-mono text-yellow-400 text-sm font-bold">{value}</div>
              <div className="flex-1"><div className="font-medium text-sm">{name}</div><div className="text-gray-400 text-xs">{use}</div></div>
              <button onClick={()=>navigator.clipboard.writeText(String(value))} className="text-xs text-blue-400 hover:text-blue-300">Copy</button>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <p className="text-sm text-gray-400 mb-2">Custom z-index CSS</p>
          <input value={custom} onChange={e=>setCustom(e.target.value)} placeholder="Enter z-index value..." className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white mb-2" />
          {custom && <code className="block text-green-400 text-sm">z-index: {custom};</code>}
        </div>
      </div>
    </main>
  );
}