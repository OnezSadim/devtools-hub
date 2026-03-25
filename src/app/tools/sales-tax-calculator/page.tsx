"use client";
import { useState } from "react";
export default function SalesTaxCalculator() {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const tax = parseFloat(price) * parseFloat(rate) / 100;
  const total = parseFloat(price) + tax;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sales Tax Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate sales tax and total price instantly.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="100.00" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Tax Rate (%)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="8.5" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          {price && rate && !isNaN(tax) && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex justify-between"><span className="text-gray-400">Pre-tax price</span><span>${parseFloat(price).toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Sales tax ({rate}%)</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg font-bold text-green-400"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}