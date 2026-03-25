"use client";
import { useState } from "react";
export default function IncomeTaxEstimator() {
  const [income, setIncome] = useState("");
  const [status, setStatus] = useState("single");
  const [result, setResult] = useState(null);
  const brackets = {
    single: [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]],
    married: [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]],
  };
  function calculate() {
    const inc = parseFloat(income);
    if (isNaN(inc) || inc <= 0) return;
    const std = status === "single" ? 14600 : 29200;
    const taxable = Math.max(0, inc - std);
    let tax = 0, prev = 0;
    const details = [];
    for (const [limit, rate] of brackets[status] || brackets.single) {
      if (taxable <= prev) break;
      const chunk = Math.min(taxable, limit) - prev;
      const t = chunk * rate;
      details.push({ from: prev, to: Math.min(taxable, limit), rate, tax: t });
      tax += t;
      prev = limit;
      if (taxable <= limit) break;
    }
    setResult({ taxable, tax, effective: (tax/inc)*100, std, details });
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">US Income Tax Estimator</h1>
        <p className="text-gray-400 mb-6">Estimate 2024 federal income tax using standard deduction.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Gross Annual Income ($)</label>
            <input type="number" value={income} onChange={e=>setIncome(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="75000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Filing Status</label>
            <select value={status} onChange={e=>setStatus(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
            </select>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Estimate Tax</button>
        </div>
        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-gray-800 rounded p-4 space-y-2">
              <div className="flex justify-between"><span className="text-gray-400">Standard Deduction</span><span>${result.std.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Taxable Income</span><span>${result.taxable.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Effective Rate</span><span>{result.effective.toFixed(1)}%</span></div>
              <div className="flex justify-between border-t border-gray-700 pt-2"><span className="font-semibold">Total Tax</span><span className="text-red-400 font-bold">${result.tax.toFixed(2)}</span></div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <h3 className="font-semibold mb-2">Bracket Breakdown</h3>
              {result.details.map((d,i)=>(
                <div key={i} className="flex justify-between text-sm py-1 border-b border-gray-700">
                  <span className="text-gray-400">{d.rate*100}% bracket</span>
                  <span>${d.tax.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
