"use client";
import { useState } from "react";

const PERMS = ["Read", "Write", "Execute"];
const ROLES = ["Owner", "Group", "Others"];

export default function ChmodCalculator() {
  const [bits, setBits] = useState([true,true,false, true,false,false, true,false,false]);

  const toggle = (i: number) => { const b=[...bits]; b[i]=!b[i]; setBits(b); };
  const octal = ROLES.map((_,r) => bits.slice(r*3,r*3+3).reduce((s,b,i)=>s+(b?[4,2,1][i]:0),0)).join("");
  const symbolic = "" + ROLES.map((_,r) => {
    const p = bits.slice(r*3, r*3+3);
    return (p[0]?"r":"-") + (p[1]?"w":"-") + (p[2]?"x":"-");
  }).join("");

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Chmod Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate Unix file permission values interactively.</p>
      <div className="bg-gray-800 border border-gray-700 rounded p-6 mb-6">
        <table className="w-full">
          <thead><tr><th className="text-left pb-3"></th>{PERMS.map(p=><th key={p} className="pb-3 text-center">{p}</th>)}</tr></thead>
          <tbody>{ROLES.map((role,r)=>(
            <tr key={role}><td className="py-2 font-medium">{role}</td>
              {PERMS.map((_, p)=>(
                <td key={p} className="text-center"><input type="checkbox" checked={bits[r*3+p]} onChange={()=>toggle(r*3+p)} className="w-5 h-5 accent-blue-600" /></td>
              ))}
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 border border-gray-700 rounded p-4 text-center">
          <div className="text-gray-400 text-sm mb-1">Octal</div>
          <div className="text-4xl font-mono font-bold text-blue-400">{octal}</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4 text-center">
          <div className="text-gray-400 text-sm mb-1">Symbolic</div>
          <div className="text-2xl font-mono font-bold text-green-400">{symbolic}</div>
        </div>
      </div>
      <div className="mt-4 bg-gray-800 border border-gray-700 rounded p-4">
        <div className="text-gray-400 text-sm mb-1">Command</div>
        <code className="text-lg">chmod {octal} filename</code>
      </div>
    </div>
  );
}
