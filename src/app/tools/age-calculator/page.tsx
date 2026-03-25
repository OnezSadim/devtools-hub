"use client";
import { useState } from "react";
export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [to, setTo] = useState(new Date().toISOString().split("T")[0]);
  const [result, setResult] = useState(null);
  function calculate() {
    const d=new Date(dob),t=new Date(to);
    if(isNaN(d)||isNaN(t)){setResult({error:"Invalid date"});return;}
    let y=t.getFullYear()-d.getFullYear(),m=t.getMonth()-d.getMonth(),day=t.getDate()-d.getDate();
    if(day<0){m--;day+=new Date(t.getFullYear(),t.getMonth(),0).getDate();}
    if(m<0){y--;m+=12;}
    const totalDays=Math.floor((t-d)/86400000);
    const totalMonths=y*12+m;
    const nextBday=new Date(t.getFullYear(),d.getMonth(),d.getDate());
    if(nextBday<=t) nextBday.setFullYear(t.getFullYear()+1);
    const daysToNext=Math.floor((nextBday-t)/86400000);
    setResult({"Age":`${y} years, ${m} months, ${day} days`,"Total days":totalDays,"Total months":totalMonths,"Total weeks":Math.floor(totalDays/7),"Next birthday in":`${daysToNext} days`});
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Age Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate exact age and time between dates</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="block text-sm text-gray-400 mb-1">Date of Birth</label><input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Calculate to</label><input type="date" value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Calculate Age</button>
        {result&&!result.error&&(
          <div className="bg-gray-800 rounded p-4 space-y-2">
            {Object.entries(result).map(([k,v])=>(
              <div key={k} className="flex justify-between"><span className="text-gray-400">{k}</span><span className="text-green-400 font-mono">{v}</span></div>
            ))}
          </div>
        )}
        {result&&result.error&&<div className="bg-red-900/30 text-red-400 rounded p-3">{result.error}</div>}
      </div>
    </div>
  );
}