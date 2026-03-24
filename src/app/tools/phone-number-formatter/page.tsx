"use client";
import { useState } from "react";
export default function PhoneNumberFormatter() {
  const [input, setInput] = useState("");
  const digits = input.replace(/\D/g, "");
  const formats = [
    { label: "US (xxx) xxx-xxxx", fn: (d: string) => d.length >= 10 ? `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6,10)}` : d },
    { label: "International +x xxx xxx xxxx", fn: (d: string) => d.length >= 11 ? `+${d[0]} ${d.slice(1,4)} ${d.slice(4,7)} ${d.slice(7,11)}` : d },
    { label: "Dots xxx.xxx.xxxx", fn: (d: string) => d.length >= 10 ? `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,10)}` : d },
    { label: "Dashes xxx-xxx-xxxx", fn: (d: string) => d.length >= 10 ? `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6,10)}` : d },
  ];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Phone Number Formatter</h1>
      <p className="text-gray-400 mb-4">Format phone numbers in various styles.</p>
      <input className="w-full p-2 bg-gray-800 rounded text-white mb-4" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter phone number digits..." />
      {digits && (
        <div className="grid gap-3">
          {formats.map(f => (
            <div key={f.label} className="bg-gray-800 p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">{f.label}</div>
              <div className="text-white font-mono text-lg">{f.fn(digits)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}