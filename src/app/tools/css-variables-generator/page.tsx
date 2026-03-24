"use client";
import { useState } from "react";
const presets = {
  "Default": [
    {name:"--color-primary",value:"#3b82f6"},
    {name:"--color-secondary",value:"#8b5cf6"},
    {name:"--color-bg",value:"#ffffff"},
    {name:"--color-text",value:"#111827"},
    {name:"--spacing-sm",value:"0.5rem"},
    {name:"--spacing-md",value:"1rem"},
    {name:"--spacing-lg",value:"2rem"},
    {name:"--radius",value:"0.375rem"},
  ],
};
export default function CSSVariablesGenerator() {
  const [vars, setVars] = useState(presets["Default"]);
  const addVar = () => setVars([...vars, {name:"--new-var",value:""}]);
  const update = (i: number, k: string, v: string) => setVars(vars.map((x,idx)=>idx===i?{...x,[k]:v}:x));
  const remove = (i: number) => setVars(vars.filter((_,idx)=>idx!==i));
  const output = ":root {
" + vars.filter(v=>v.name&&v.value).map(v=>"  " + v.name + ": " + v.value + ";").join("
") + "
}";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">CSS Variables Generator</h1>
      <p className="text-gray-400 mb-6">Build CSS custom properties for your design system</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-2 mb-3">
            {vars.map((v,i)=>(
              <div key={i} className="flex gap-2">
                <input value={v.name} onChange={e=>update(i,"name",e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 font-mono text-sm" placeholder="--var-name"/>
                <input value={v.value} onChange={e=>update(i,"value",e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 font-mono text-sm" placeholder="value"/>
                <button onClick={()=>remove(i)} className="text-red-400 hover:text-red-300 px-2">×</button>
              </div>
            ))}
          </div>
          <button onClick={addVar} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">+ Add Variable</button>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Generated CSS</label>
          <pre className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 h-64 overflow-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy</button>
        </div>
      </div>
    </main>
  );
}