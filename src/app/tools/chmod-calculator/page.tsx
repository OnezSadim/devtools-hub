"use client";
import { useState } from "react";
export default function ChmodCalculator() {
  const [perms, setPerms] = useState({or:false,ow:false,ox:false,gr:false,gw:false,gx:false,wr:false,ww:false,wx:false});
  const toggle = (k: keyof typeof perms) => setPerms(p=>({...p,[k]:!p[k]}));
  const toOctal = (r:boolean,w:boolean,x:boolean) => (r?4:0)+(w?2:0)+(x?1:0);
  const octal = `${toOctal(perms.or,perms.ow,perms.ox)}${toOctal(perms.gr,perms.gw,perms.gx)}${toOctal(perms.wr,perms.ww,perms.wx)}`;
  const symbolic = `${perms.or?"r":"-"}${perms.ow?"w":"-"}${perms.ox?"x":"-"}${perms.gr?"r":"-"}${perms.gw?"w":"-"}${perms.gx?"x":"-"}${perms.wr?"r":"-"}${perms.ww?"w":"-"}${perms.wx?"x":"-"}`;
  const Row = ({label,r,w,x}:{label:string,r:keyof typeof perms,w:keyof typeof perms,x:keyof typeof perms}) => (
    <tr className="border-b border-gray-700">
      <td className="py-3 pr-6 text-gray-300 font-semibold">{label}</td>
      {([r,w,x] as const).map(k=>(
        <td key={k} className="py-3 pr-6">
          <input type="checkbox" checked={perms[k]} onChange={()=>toggle(k)} className="w-5 h-5 cursor-pointer" />
        </td>
      ))}
      <td className="py-3 text-blue-400 font-mono">{toOctal(perms[r],perms[w],perms[x])}</td>
    </tr>
  );
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Chmod Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate Unix file permissions.</p>
      <table className="w-full mb-6">
        <thead><tr className="text-gray-400"><th className="text-left pb-3 pr-6">Who</th><th className="text-left pb-3 pr-6">Read</th><th className="text-left pb-3 pr-6">Write</th><th className="text-left pb-3 pr-6">Execute</th><th className="text-left pb-3">Octal</th></tr></thead>
        <tbody>
          <Row label="Owner" r="or" w="ow" x="ox" />
          <Row label="Group" r="gr" w="gw" x="gx" />
          <Row label="World" r="wr" w="ww" x="wx" />
        </tbody>
      </table>
      <div className="bg-gray-800 rounded p-4 flex gap-8">
        <div><div className="text-gray-400 text-sm mb-1">Octal</div><div className="text-green-400 font-mono text-2xl">{octal}</div></div>
        <div><div className="text-gray-400 text-sm mb-1">Symbolic</div><div className="text-blue-400 font-mono text-2xl">{symbolic}</div></div>
        <div><div className="text-gray-400 text-sm mb-1">Command</div><div className="text-yellow-400 font-mono text-lg">chmod {octal} file</div></div>
      </div>
    </div>
  );
}