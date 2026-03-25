"use client";
import { useState } from "react";
export default function NetWorthCalculator() {
  const [cash, setCash] = useState("");
  const [investments, setInvestments] = useState("");
  const [realEstate, setRealEstate] = useState("");
  const [otherAssets, setOtherAssets] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [loans, setLoans] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [otherDebt, setOtherDebt] = useState("");
  const totalAssets = [cash,investments,realEstate,otherAssets].reduce((s,v)=>s+(parseFloat(v)||0),0);
  const totalLiabilities = [mortgage,loans,creditCard,otherDebt].reduce((s,v)=>s+(parseFloat(v)||0),0);
  const netWorth = totalAssets - totalLiabilities;
  const field = (label,val,set) => (<div><label className="block text-sm text-gray-400 mb-1">{label} ($)</label><input type="number" value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="0"/></div>);
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-md mx-auto"><h1 className="text-3xl font-bold mb-2">Net Worth Calculator</h1><p className="text-gray-400 mb-6">Assets minus liabilities</p><div className="space-y-6"><div><h2 className="text-lg font-semibold text-green-400 mb-3">Assets</h2><div className="space-y-3">{field("Cash & Savings",cash,setCash)}{field("Investments & Retirement",investments,setInvestments)}{field("Real Estate Value",realEstate,setRealEstate)}{field("Other Assets",otherAssets,setOtherAssets)}</div></div><div><h2 className="text-lg font-semibold text-red-400 mb-3">Liabilities</h2><div className="space-y-3">{field("Mortgage Balance",mortgage,setMortgage)}{field("Auto & Student Loans",loans,setLoans)}{field("Credit Card Debt",creditCard,setCreditCard)}{field("Other Debt",otherDebt,setOtherDebt)}</div></div><div className="bg-gray-800 rounded-lg p-4 space-y-2"><div className="flex justify-between"><span className="text-gray-400">Total Assets</span><span className="text-green-400">${totalAssets.toLocaleString()}</span></div><div className="flex justify-between"><span className="text-gray-400">Total Liabilities</span><span className="text-red-400">${totalLiabilities.toLocaleString()}</span></div><div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Net Worth</span><span className={"font-bold text-xl " + (netWorth>=0?"text-blue-400":"text-red-400")}>${netWorth.toLocaleString()}</span></div></div></div></div></div>);
}
