"use client";
import { useState } from "react";
export default function UnixPermissions() {
  const [octal, setOctal] = useState("755");
  const parse = (o: string) => {
    const n = parseInt(o, 8);
    if (isNaN(n)) return null;
    const bits = (num: number) => ({
      r: !!(num & 4), w: !!(num & 2), x: !!(num & 1)
    });
    const dig = o.padStart(3, "0").split("").map(Number);
    return { owner: bits(dig[0]), group: bits(dig[1]), others: bits(dig[2]) };
  };
  const info = parse(octal);
  const examples: Record<string,string> = {
    "777":"Read/write/execute for everyone — insecure!",
    "755":"Standard for executables: owner full, others read+exec",
    "644":"Standard for files: owner full, others read-only",
    "600":"Private files: owner only (e.g. SSH keys)",
    "700":"Private executables: owner only",
    "644":"Public read, owner write (web files)",
  };
  const Block = ({label, r, w, x}: {label:string,r:boolean,w:boolean,x:boolean}) => (
    <div className="bg-gray-900 border border-gray-700 rounded p-4">
      <div className="text-gray-400 text-sm mb-3">{label}</div>
      <div className="flex gap-3">
        {[{l:"r",v:r},{l:"w",v:w},{l:"x",v:x}].map(({l,v}) => (
          <span key={l} className={`w-8 h-8 flex items-center justify-center rounded font-mono font-bold ${v?"bg-green-700 text-green-200":"bg-gray-800 text-gray-600"}`}>{v?l:"-"}</span>
        ))}
      </div>
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Unix Permissions</h1>
        <p className="text-gray-400 mb-6">Understand Unix file permission modes</p>
        <input value={octal} onChange={e=>setOctal(e.target.value)} placeholder="755" maxLength={3} className="w-32 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-2xl text-center mb-6"/>
        {info ? (
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Block label="Owner" {...info.owner}/>
            <Block label="Group" {...info.group}/>
            <Block label="Others" {...info.others}/>
          </div>
        ) : <p className="text-red-400 mb-6">Invalid octal</p>}
        <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-700 text-gray-400 text-sm">Common permissions</div>
          {Object.entries(examples).map(([k,v]) => (
            <button key={k} onClick={()=>setOctal(k)} className="w-full flex items-center gap-4 px-4 py-3 border-b border-gray-800 last:border-0 hover:bg-gray-800 text-left">
              <span className="font-mono text-blue-400 w-8">{k}</span>
              <span className="text-gray-300 text-sm">{v}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}