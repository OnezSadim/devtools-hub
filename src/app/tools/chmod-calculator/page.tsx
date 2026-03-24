"use client";
import { useState } from "react";
export default function ChmodCalculator() {
  const [perms, setPerms] = useState({ur:false,uw:false,ux:false,gr:false,gw:false,gx:false,or:false,ow:false,ox:false});
  const toggle = (k:string) => setPerms(p=>({...p,[k]:!p[k as keyof typeof p]}));
  const toOctet = (r:boolean,w:boolean,x:boolean) => (r?4:0)+(w?2:0)+(x?1:0);
  const octal = `${toOctet(perms.ur,perms.uw,perms.ux)}${toOctet(perms.gr,perms.gw,perms.gx)}${toOctet(perms.or,perms.ow,perms.ox)}`;
  const toSym = (r:boolean,w:boolean,x:boolean) => `${r?"r":"-"}${w?"w":"-"}${x?"x":"-"}`;
  const symbolic = `${toSym(perms.ur,perms.uw,perms.ux)}${toSym(perms.gr,perms.gw,perms.gx)}${toSym(perms.or,perms.ow,perms.ox)}`;
  const CB = ({k,label}:{k:string,label:string}) => (<label className="flex items-center gap-1 cursor-pointer text-sm"><input type="checkbox" checked={perms[k as keyof typeof perms]} onChange={()=>toggle(k)} className="w-4 h-4" />{label}</label>);
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Chmod Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate Unix file permissions (chmod) visually.</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded p-4"><p className="font-semibold mb-3">Owner</p><CB k="ur" label="Read" /><CB k="uw" label="Write" /><CB k="ux" label="Execute" /></div>
        <div className="bg-gray-800 rounded p-4"><p className="font-semibold mb-3">Group</p><CB k="gr" label="Read" /><CB k="gw" label="Write" /><CB k="gx" label="Execute" /></div>
        <div className="bg-gray-800 rounded p-4"><p className="font-semibold mb-3">Others</p><CB k="or" label="Read" /><CB k="ow" label="Write" /><CB k="ox" label="Execute" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded p-4 text-center"><p className="text-gray-400 text-sm mb-1">Octal</p><p className="text-3xl font-mono font-bold text-blue-400">{octal}</p><p className="text-gray-500 text-sm mt-1">chmod {octal}</p></div>
        <div className="bg-gray-900 rounded p-4 text-center"><p className="text-gray-400 text-sm mb-1">Symbolic</p><p className="text-3xl font-mono font-bold text-green-400">{symbolic}</p><p className="text-gray-500 text-sm mt-1">-{symbolic}</p></div>
      </div>
    </div>
  );
}
