
"use client";
import { useState } from "react";
export default function ChmodCalculator() {
  const [perms, setPerms] = useState({owner:{r:true,w:true,x:false},group:{r:true,w:false,x:false},other:{r:true,w:false,x:false}});
  const toOctal = (p: {r:boolean,w:boolean,x:boolean}) => (p.r?4:0)+(p.w?2:0)+(p.x?1:0);
  const ownerOct = toOctal(perms.owner), groupOct = toOctal(perms.group), otherOct = toOctal(perms.other);
  const octal = `${ownerOct}${groupOct}${otherOct}`;
  const symbolic = (p:{r:boolean,w:boolean,x:boolean}) => `${p.r?"r":"-"}${p.w?"w":"-"}${p.x?"x":"-"}`;
  const sym = `-${symbolic(perms.owner)}${symbolic(perms.group)}${symbolic(perms.other)}`;
  const toggle = (who: "owner"|"group"|"other", bit: "r"|"w"|"x") => setPerms(p => ({...p, [who]: {...p[who], [bit]: !p[who][bit]}}));
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Chmod Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate Unix file permission values</p>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="text-gray-500 text-sm"></div>
            {["Read","Write","Execute"].map(l=><div key={l} className="text-gray-400 text-sm font-medium">{l}</div>)}
            {(["owner","group","other"] as const).map(who=>(
              <>
                <div key={who} className="text-right text-gray-300 font-medium capitalize self-center">{who}</div>
                {(["r","w","x"] as const).map(bit=>(
                  <div key={bit} className="flex justify-center">
                    <button onClick={()=>toggle(who,bit)} className={`w-12 h-12 rounded-lg text-lg font-bold border-2 transition-colors ${perms[who][bit]?"bg-blue-600 border-blue-400 text-white":"bg-gray-800 border-gray-600 text-gray-500"}`}>{bit}</button>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {(["owner","group","other"] as const).map(who=>(
            <div key={who} className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
              <div className="text-3xl font-bold text-blue-400">{toOctal(perms[who])}</div>
              <div className="text-xs text-gray-500 capitalize">{who}</div>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-mono font-bold text-green-400">chmod {octal}</p>
            <p className="text-gray-400 font-mono text-sm mt-1">{sym}</p>
          </div>
          <button onClick={()=>navigator.clipboard.writeText(`chmod ${octal}`)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">Copy</button>
        </div>
      </div>
    </div>
  );
}
