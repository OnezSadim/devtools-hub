"use client";
import { useState } from "react";
export default function ChmodCalculator() {
  const [perms, setPerms] = useState({ur:true,uw:true,ux:false,gr:true,gw:false,gx:false,or:true,ow:false,ox:false});
  const toggle = (k) => setPerms(p=>({...p,[k]:!p[k]}));
  const toOctal = () => {
    const u=(perms.ur?4:0)+(perms.uw?2:0)+(perms.ux?1:0);
    const g=(perms.gr?4:0)+(perms.gw?2:0)+(perms.gx?1:0);
    const o=(perms.or?4:0)+(perms.ow?2:0)+(perms.ox?1:0);
    return `${u}${g}${o}`;
  };
  const toSymbolic = () => {
    const f=(r,w,x)=>(r?"r":"-")+(w?"w":"-")+(x?"x":"-");
    return `-${f(perms.ur,perms.uw,perms.ux)}${f(perms.gr,perms.gw,perms.gx)}${f(perms.or,perms.ow,perms.ox)}`;
  };
  const copy = (t) => navigator.clipboard.writeText(t);
  const rows = [["Owner","u"],["Group","g"],["Others","o"]];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">chmod Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate Unix file permission values</p>
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
          <table className="w-full">
            <thead><tr className="text-gray-400 text-sm border-b border-gray-800">
              <th className="text-left p-3">Entity</th>
              <th className="p-3">Read (4)</th><th className="p-3">Write (2)</th><th className="p-3">Execute (1)</th>
            </tr></thead>
            <tbody>{rows.map(([label,p])=>(
              <tr key={p} className="border-b border-gray-800">
                <td className="p-3 font-medium">{label}</td>
                {["r","w","x"].map(bit=>(
                  <td key={bit} className="p-3 text-center">
                    <input type="checkbox" checked={perms[p+bit]} onChange={()=>toggle(p+bit)} className="w-5 h-5 cursor-pointer" />
                  </td>
                ))}
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div className="space-y-3">
          {[["Octal",`chmod ${toOctal()} file`],["Symbolic",toSymbolic()]].map(([label,val])=>(
            <div key={label} className="bg-gray-900 rounded p-4 flex justify-between items-center">
              <div>
                <div className="text-gray-400 text-sm">{label}</div>
                <code className="font-mono text-green-400 text-lg">{val}</code>
              </div>
              <button onClick={()=>copy(val)} className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-sm">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}