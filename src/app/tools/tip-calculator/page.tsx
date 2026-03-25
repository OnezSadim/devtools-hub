"use client";
import { useState } from "react";
export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("18");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const b = parseFloat(bill);
    const t = parseFloat(tip) / 100;
    const p = parseInt(people);
    if (isNaN(b) || isNaN(t) || isNaN(p) || p < 1) { setResult("Please enter valid numbers."); return; }
    const tipAmount = b * t;
    const total = b + tipAmount;
    const perPerson = total / p;
    setResult(`Tip Amount: $${tipAmount.toFixed(2)}\nTotal Bill: $${total.toFixed(2)}\nPer Person: $${perPerson.toFixed(2)}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Tip Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate tip and split the bill among your group.</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Bill Amount ($)</label><input type="number" value={bill} onChange={e=>setBill(e.target.value)} placeholder="e.g. 85.00" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Tip Percentage (%)</label><select value={tip} onChange={e=>setTip(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"><option value="10">10%</option><option value="15">15%</option><option value="18">18%</option><option value="20">20%</option><option value="25">25%</option><option value="30">30%</option></select></div>
          <div><label className="block text-sm text-gray-400 mb-1">Number of People</label><input type="number" value={people} onChange={e=>setPeople(e.target.value)} min="1" placeholder="e.g. 4" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded p-4 whitespace-pre-line text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
