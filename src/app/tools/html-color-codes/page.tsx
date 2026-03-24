"use client";
import { useState } from "react";
const namedColors = [
  {name:"Red",hex:"#FF0000",rgb:"255,0,0"},{name:"Green",hex:"#008000",rgb:"0,128,0"},{name:"Blue",hex:"#0000FF",rgb:"0,0,255"},
  {name:"Yellow",hex:"#FFFF00",rgb:"255,255,0"},{name:"Orange",hex:"#FFA500",rgb:"255,165,0"},{name:"Purple",hex:"#800080",rgb:"128,0,128"},
  {name:"Pink",hex:"#FFC0CB",rgb:"255,192,203"},{name:"Cyan",hex:"#00FFFF",rgb:"0,255,255"},{name:"Magenta",hex:"#FF00FF",rgb:"255,0,255"},
  {name:"White",hex:"#FFFFFF",rgb:"255,255,255"},{name:"Black",hex:"#000000",rgb:"0,0,0"},{name:"Gray",hex:"#808080",rgb:"128,128,128"},
  {name:"Silver",hex:"#C0C0C0",rgb:"192,192,192"},{name:"Maroon",hex:"#800000",rgb:"128,0,0"},{name:"Olive",hex:"#808000",rgb:"128,128,0"},
  {name:"Navy",hex:"#000080",rgb:"0,0,128"},{name:"Teal",hex:"#008080",rgb:"0,128,128"},{name:"Lime",hex:"#00FF00",rgb:"0,255,0"},
  {name:"Aqua",hex:"#00FFFF",rgb:"0,255,255"},{name:"Fuchsia",hex:"#FF00FF",rgb:"255,0,255"},{name:"Coral",hex:"#FF7F50",rgb:"255,127,80"},
  {name:"Salmon",hex:"#FA8072",rgb:"250,128,114"},{name:"Gold",hex:"#FFD700",rgb:"255,215,0"},{name:"Indigo",hex:"#4B0082",rgb:"75,0,130"},
];
export default function HtmlColorCodes() {
  const [search, setSearch] = useState("");
  const [picked, setPicked] = useState("#3B82F6");
  const hexToRgb = (hex:string) => { const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16); return `rgb(${r},${g},${b})`; };
  const filtered = namedColors.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())||c.hex.includes(search.toUpperCase()));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">HTML Color Codes</h1>
      <p className="text-gray-400 mb-6">Color picker and HTML color code reference</p>
      <div className="max-w-2xl space-y-6">
        <div className="bg-gray-800 rounded p-4">
          <h2 className="font-semibold mb-3">Color Picker</h2>
          <div className="flex items-center gap-4">
            <input type="color" value={picked} onChange={e=>setPicked(e.target.value)} className="h-12 w-24 rounded cursor-pointer bg-transparent border-0" />
            <div>
              <p className="font-mono text-lg">{picked.toUpperCase()}</p>
              <p className="text-gray-400 text-sm">{hexToRgb(picked)}</p>
            </div>
            <button onClick={()=>navigator.clipboard.writeText(picked.toUpperCase())} className="ml-auto bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">Copy HEX</button>
            <button onClick={()=>navigator.clipboard.writeText(hexToRgb(picked))} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">Copy RGB</button>
          </div>
        </div>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search colors..." className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" />
        <div className="grid grid-cols-2 gap-2">
          {filtered.map(c=>(
            <div key={c.name} className="flex items-center gap-3 bg-gray-800 rounded p-2 cursor-pointer hover:bg-gray-700" onClick={()=>navigator.clipboard.writeText(c.hex)}>
              <div className="w-8 h-8 rounded border border-gray-600 flex-shrink-0" style={{backgroundColor:c.hex}} />
              <div><p className="text-sm font-semibold">{c.name}</p><p className="text-xs text-gray-400 font-mono">{c.hex}</p></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}