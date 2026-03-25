"use client";
import { useState } from "react";
export default function NetWorthTracker() {
  const [assets, setAssets] = useState([{name:"",value:""}]);
  const [liabilities, setLiabilities] = useState([{name:"",value:""}]);
  const totalAssets = assets.reduce((s,a)=>s+(parseFloat(a.value)||0),0);
  const totalLiab = liabilities.reduce((s,a)=>s+(parseFloat(a.value)||0),0);
  const netWorth = totalAssets - totalLiab;
  const add = (setter:any) => setter((p:any)=>[...p,{name:"",value:""}]);
  const upd = (setter:any,i:number,k:string,v:string) => setter((p:any)=>p.map((x:any,j:number)=>j===i?{...x,[k]:v}:x));
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Net Worth Tracker</h1>
      {[{label:"Assets",items:assets,setter:setAssets},{label:"Liabilities",items:liabilities,setter:setLiabilities}].map(({label,items,setter})=>(
        <div key={label}>
          <h2 className="text-lg font-semibold mb-2">{label}</h2>
          {items.map((item,i)=>(
            <div key={i} className="flex gap-2 mb-2">
              <input placeholder="Name" value={item.name} onChange={e=>upd(setter,i,"name",e.target.value)} className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"/>
              <input placeholder="$" type="number" value={item.value} onChange={e=>upd(setter,i,"value",e.target.value)} className="w-32 p-2 rounded bg-gray-800 border border-gray-700"/>
            </div>
          ))}
          <button onClick={()=>add(setter)} className="text-sm text-blue-400 hover:text-blue-300">+ Add {label.slice(0,-1)}</button>
        </div>
      ))}
      <div className="bg-gray-800 rounded p-4 grid grid-cols-3 gap-4 text-center">
        <div><div className="text-sm text-gray-400">Total Assets</div><div className="text-green-400 font-bold">${totalAssets.toLocaleString()}</div></div>
        <div><div className="text-sm text-gray-400">Total Liabilities</div><div className="text-red-400 font-bold">${totalLiab.toLocaleString()}</div></div>
        <div><div className="text-sm text-gray-400">Net Worth</div><div className={"font-bold text-xl "+(netWorth>=0?"text-green-400":"text-red-400")}>${netWorth.toLocaleString()}</div></div>
      </div>
    </div>
  );
}