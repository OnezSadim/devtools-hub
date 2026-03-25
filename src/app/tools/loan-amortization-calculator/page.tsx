"use client";
import { useState } from "react";
export default function LoanAmortizationCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [schedule, setSchedule] = useState<any[]>([]);
  function calc() {
    const p=parseFloat(amount), r=parseFloat(rate)/100/12, n=parseFloat(years)*12;
    if (!p||!r||!n) return;
    const m = p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    let bal=p; const rows=[];
    for(let i=1;i<=Math.min(n,360);i++) {
      const int=bal*r, prin=m-int;
      bal-=prin;
      rows.push({month:i,payment:m,principal:prin,interest:int,balance:Math.max(0,bal)});
    }
    setSchedule(rows);
  }
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Loan Amortization Calculator</h1>
      <div className="flex gap-3 flex-wrap">
        {[["Loan Amount ($)",amount,setAmount],["Annual Rate (%)",rate,setRate],["Term (years)",years,setYears]].map(([l,v,s]:any)=>(
          <div key={l}><label className="block text-sm mb-1">{l}</label>
          <input type="number" value={v} onChange={e=>s(e.target.value)} className="p-2 rounded bg-gray-800 border border-gray-700"/></div>
        ))}
        <div className="flex items-end"><button onClick={calc} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Calculate</button></div>
      </div>
      {schedule.length>0 && <div className="overflow-auto max-h-96">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 sticky top-0"><tr>{["Month","Payment","Principal","Interest","Balance"].map(h=><th key={h} className="p-2 text-left">{h}</th>)}</tr></thead>
          <tbody>{schedule.map(r=>(
            <tr key={r.month} className="border-t border-gray-800 hover:bg-gray-800">
              <td className="p-2">{r.month}</td>
              <td className="p-2">${r.payment.toFixed(2)}</td>
              <td className="p-2 text-blue-400">${r.principal.toFixed(2)}</td>
              <td className="p-2 text-red-400">${r.interest.toFixed(2)}</td>
              <td className="p-2">${r.balance.toFixed(2)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>}
    </div>
  );
}