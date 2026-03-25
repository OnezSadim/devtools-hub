"use client";
import { useState } from "react";
export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState("");
  const [filing, setFiling] = useState("single");
  const [result, setResult] = useState<any>(null);
  const brackets2024: Record<string, [number,number,number][]> = {
    single: [[10275,0,0.10],[41775,1027.5,0.12],[89075,4807.5,0.22],[170050,15213.5,0.24],[215950,34647.5,0.32],[539900,49335.5,0.35],[Infinity,162718,0.37]],
    married: [[20550,0,0.10],[83550,2055,0.12],[178150,9615,0.22],[340100,30427,0.24],[431900,69295,0.32],[647850,98671,0.35],[Infinity,174253.5,0.37]]
  };
  const calculate = () => {
    const inc = parseFloat(income);
    if (isNaN(inc) || inc <= 0) return;
    const std = filing === "single" ? 13850 : 27700;
    const taxable = Math.max(0, inc - std);
    const bs = brackets2024[filing];
    let tax = 0;
    for (let i = 0; i < bs.length; i++) {
      if (taxable <= (i === 0 ? bs[0][0] : bs[i][0])) {
        const prev = i === 0 ? 0 : bs[i-1][0];
        tax = bs[i][1] + (taxable - prev) * bs[i][2];
        break;
      }
    }
    const effective = (tax / inc) * 100;
    setResult({ taxable, tax, effective, std });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Income Tax Calculator</h1>
        <p className="text-gray-400 mb-6">US federal income tax estimate (2024)</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Annual Income ($)</label><input type="number" value={income} onChange={e=>setIncome(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white" placeholder="75000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Filing Status</label><select value={filing} onChange={e=>setFiling(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white"><option value="single">Single</option><option value="married">Married Filing Jointly</option></select></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate Tax</button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Standard Deduction</span><span className="text-white">${result.std.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Taxable Income</span><span className="text-white">${result.taxable.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Federal Tax</span><span className="text-red-400 font-bold">${result.tax.toFixed(2)}</span></div>
            <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-white font-semibold">Effective Rate</span><span className="text-yellow-400 font-bold text-lg">{result.effective.toFixed(2)}%</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
