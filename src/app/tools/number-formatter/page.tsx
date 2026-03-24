"use client";
import { useState } from "react";
export default function NumberFormatter() {
  const [num, setNum] = useState("");
  const n = Number(num.replace(/,/g, ""));
  const valid = !isNaN(n) && num.trim() !== "";
  const fmt = (n, locale, opts={}) => { try { return new Intl.NumberFormat(locale, opts).format(n); } catch(e) { return "-"; } };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Formatter</h1>
        <p className="text-gray-400 mb-6">Format numbers for different locales and styles.</p>
        <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-2xl font-mono mb-6 focus:outline-none focus:border-blue-500" placeholder="Enter a number..." value={num} onChange={e=>setNum(e.target.value)} />
        {valid && (
          <div className="space-y-2">
            {[
              {label:"US (1,234,567.89)",val:fmt(n,"en-US")},
              {label:"EU (1.234.567,89)",val:fmt(n,"de-DE")},
              {label:"Indian (12,34,567)",val:fmt(n,"en-IN")},
              {label:"Scientific",val:n.toExponential()},
              {label:"USD Currency",val:fmt(n,"en-US",{style:"currency",currency:"USD"})},
              {label:"EUR Currency",val:fmt(n,"de-DE",{style:"currency",currency:"EUR"})},
              {label:"Percentage",val:fmt(n/100,"en-US",{style:"percent",maximumFractionDigits:2})},
              {label:"Hex",val:"0x"+Math.round(n).toString(16).toUpperCase()},
              {label:"Binary",val:Math.round(n).toString(2)},
              {label:"Octal",val:"0o"+Math.round(n).toString(8)},
            ].map(({label,val}) => (
              <div key={label} className="flex justify-between items-center bg-gray-900 border border-gray-700 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-400">{label}</span>
                <span className="font-mono font-semibold">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}