"use client";
import { useState } from "react";
const shortcuts = [
  {app:"VS Code",key:"Ctrl+Shift+P",mac:"Cmd+Shift+P",desc:"Command palette"},
  {app:"VS Code",key:"Ctrl+P",mac:"Cmd+P",desc:"Quick open file"},
  {app:"VS Code",key:"Ctrl+`",mac:"Ctrl+`",desc:"Toggle terminal"},
  {app:"VS Code",key:"Ctrl+/",mac:"Cmd+/",desc:"Toggle comment"},
  {app:"VS Code",key:"Alt+Up/Down",mac:"Option+Up/Down",desc:"Move line up/down"},
  {app:"VS Code",key:"Ctrl+D",mac:"Cmd+D",desc:"Select next occurrence"},
  {app:"VS Code",key:"Ctrl+Shift+K",mac:"Cmd+Shift+K",desc:"Delete line"},
  {app:"Chrome",key:"Ctrl+Shift+I",mac:"Cmd+Option+I",desc:"DevTools"},
  {app:"Chrome",key:"Ctrl+L",mac:"Cmd+L",desc:"Focus address bar"},
  {app:"Chrome",key:"Ctrl+Tab",mac:"Ctrl+Tab",desc:"Next tab"},
  {app:"Chrome",key:"Ctrl+W",mac:"Cmd+W",desc:"Close tab"},
  {app:"Chrome",key:"Ctrl+Shift+T",mac:"Cmd+Shift+T",desc:"Reopen closed tab"},
  {app:"Windows",key:"Win+D",mac:"Cmd+M",desc:"Show/hide desktop"},
  {app:"Windows",key:"Win+L",mac:"Ctrl+Cmd+Q",desc:"Lock screen"},
  {app:"Windows",key:"Alt+Tab",mac:"Cmd+Tab",desc:"Switch windows"},
  {app:"Windows",key:"Win+V",mac:"Cmd+Shift+V",desc:"Clipboard history"},
  {app:"Terminal",key:"Ctrl+C",mac:"Ctrl+C",desc:"Cancel/interrupt process"},
  {app:"Terminal",key:"Ctrl+Z",mac:"Ctrl+Z",desc:"Suspend process"},
  {app:"Terminal",key:"Ctrl+R",mac:"Ctrl+R",desc:"Reverse history search"},
  {app:"Terminal",key:"Ctrl+L",mac:"Ctrl+L",desc:"Clear screen"},
];
const apps = [...new Set(shortcuts.map(s=>s.app))];
export default function KeyboardShortcuts() {
  const [app, setApp] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = shortcuts.filter(s=>(app==="All"||s.app===app)&&(s.desc.toLowerCase().includes(search.toLowerCase())||s.key.toLowerCase().includes(search.toLowerCase())));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Keyboard Shortcuts</h1>
      <p className="text-gray-400 mb-6">Essential keyboard shortcuts for developers</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["All",...apps].map(a=><button key={a} onClick={()=>setApp(a)} className={`px-3 py-1 rounded text-sm ${app===a?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{a}</button>)}
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search shortcuts..." className="w-full max-w-md bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-4" />
      <div className="space-y-2 max-w-2xl">
        {filtered.map((s,i)=>(
          <div key={i} className="flex items-center gap-4 bg-gray-800 rounded p-3">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded min-w-fit">{s.app}</span>
            <div className="flex-1">
              <p className="text-sm">{s.desc}</p>
            </div>
            <div className="text-right">
              <code className="text-yellow-400 font-mono text-xs block">{s.key}</code>
              <code className="text-blue-400 font-mono text-xs block">{s.mac}</code>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}