"use client";
import { useState } from "react";
export default function BudgetCalculator() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([{ name: "", amount: "" }]);
  const totalExp = expenses.reduce((s,e)=>s+(parseFloat(e.amount)||0),0);
  const remaining = (parseFloat(income)||0) - totalExp;
  const addRow = () => setExpenses([...expenses, { name: "", amount: "" }]);
  const updateRow = (i,field,val) => { const r=[...expenses]; r[i][field]=val; setExpenses(r); };
  const removeRow = (i) => setExpenses(expenses.filter((_,idx)=>idx!==i));
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Budget Calculator</h1>
        <p className="text-gray-400 mb-6">Track your income and expenses to see your remaining budget.</p>
        <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Monthly Income ($)</label>
          <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={income} onChange={e=>setIncome(e.target.value)} placeholder="3000" /></div>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2"><span className="text-sm text-gray-400">Expenses</span>
            <button onClick={addRow} className="text-blue-400 hover:text-blue-300 text-sm">+ Add</button></div>
          <div className="space-y-2">
            {expenses.map((e,i)=>(
              <div key={i} className="flex gap-2">
                <input className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" placeholder="Category" value={e.name} onChange={ev=>updateRow(i,"name",ev.target.value)} />
                <input className="w-28 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" type="number" placeholder="Amount" value={e.amount} onChange={ev=>updateRow(i,"amount",ev.target.value)} />
                <button onClick={()=>removeRow(i)} className="text-red-400 hover:text-red-300 px-2">x</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Total Income</span><span className="font-bold text-green-400">${parseFloat(income||0).toFixed(2)}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Expenses</span><span className="font-bold text-red-400">${totalExp.toFixed(2)}</span></div>
          <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Remaining</span>
            <span className={"font-bold text-xl " + (remaining>=0?"text-green-400":"text-red-400")}>${remaining.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}
