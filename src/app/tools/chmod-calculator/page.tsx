"use client";
import { useState } from "react";
export default function ChmodCalculator() {
  const [perms, setPerms] = useState({or:false,ow:false,ox:false,gr:false,gw:false,gx:false,or2:false,ow2:false,ox2:false});
  const keys = ["or","ow","ox","gr","gw","gx","or2","ow2","ox2"] as const;
  type PermKey = typeof keys[number];
  const toggle = (k: PermKey) => setPerms(p => ({...p, [k]: !p[k]}));
  const toOctal = () => {
    const o = (perms.or?4:0)+(perms.ow?2:0)+(perms.ox?1:0);
    const g = (perms.gr?4:0)+(perms.gw?2:0)+(perms.gx?1:0);
    const w = (perms.or2?4:0)+(perms.ow2?2:0)+(perms.ox2?1:0);
    return `${o}${g}${w}`;
  };
  const toSymbolic = () => {
    const s = (r:boolean,w:boolean,x:boolean) => `${r?"r":"-"}${w?"w":"-"}${x?"x":"-"}`;
    return s(perms.or,perms.ow,perms.ox)+s(perms.gr,perms.gw,perms.gx)+s(perms.or2,perms.ow2,perms.ox2);
  };
  const Box = ({label, checked, onClick}: {label:string,checked:boolean,onClick:()=>void}) => (
    <button onClick={onClick} className={`w-12 h-12 rounded border-2 text-sm font-bold transition-colors ${checked?"bg-blue-600 border-blue-500 text-white":"bg-gray-800 border-gray-600 text-gray-400"}`}>{label}</button>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Chmod Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate Unix file permissions</p>
        <div className="grid grid-cols-4 gap-3 mb-8">
          <div className="text-gray-400 text-sm pt-3">Owner</div>
          <Box label="r" checked={perms.or} onClick={()=>toggle("or")}/>
          <Box label="w" checked={perms.ow} onClick={()=>toggle("ow")}/>
          <Box label="x" checked={perms.ox} onClick={()=>toggle("ox")}/>
          <div className="text-gray-400 text-sm pt-3">Group</div>
          <Box label="r" checked={perms.gr} onClick={()=>toggle("gr")}/>
          <Box label="w" checked={perms.gw} onClick={()=>toggle("gw")}/>
          <Box label="x" checked={perms.gx} onClick={()=>toggle("gx")}/>
          <div className="text-gray-400 text-sm pt-3">Others</div>
          <Box label="r" checked={perms.or2} onClick={()=>toggle("or2")}/>
          <Box label="w" checked={perms.ow2} onClick={()=>toggle("ow2")}/>
          <Box label="x" checked={perms.ox2} onClick={()=>toggle("ox2")}/>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-6 space-y-4">
          <div className="flex justify-between"><span className="text-gray-400">Octal</span><span className="font-mono text-2xl text-blue-400">{toOctal()}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Symbolic</span><span className="font-mono text-xl">{toSymbolic()}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Command</span><span className="font-mono text-green-400">chmod {toOctal()} file</span></div>
        </div>
      </div>
    </main>
  );
}