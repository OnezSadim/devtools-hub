"use client";
import { useState } from "react";

const factors: Record<string, number> = {
  "m3/s": 1.0,
  "m3/min": 0.016667,
  "m3/h": 0.000278,
  "L/s": 0.001,
  "L/min": 1.67e-05,
  "L/h": 2.778e-07,
  "mL/s": 1e-06,
  "ft3/s": 0.028317,
  "ft3/min": 0.000472,
  "gal/min": 6.31e-05,
  "gal/h": 1.0515e-06
};

export default function FlowRateConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("m3/s");
  const [to, setTo] = useState("m3/min");
  const result = val !== "" ? (parseFloat(val) * factors[from] / factors[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flow Rate Converter</h1>
        <p className="text-gray-400 mb-6">Convert between volumetric flow rate units: m³/s, L/min, GPM, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="m3/s">m3/s</option>
          <option value="m3/min">m3/min</option>
          <option value="m3/h">m3/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="ft3/s">ft3/s</option>
          <option value="ft3/min">ft3/min</option>
          <option value="gal/min">gal/min</option>
          <option value="gal/h">gal/h</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="m3/s">m3/s</option>
          <option value="m3/min">m3/min</option>
          <option value="m3/h">m3/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="ft3/s">ft3/s</option>
          <option value="ft3/min">ft3/min</option>
          <option value="gal/min">gal/min</option>
          <option value="gal/h">gal/h</option>
              </select>
            </div>
          </div>
          {result !== "" && <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-2xl font-mono text-center">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
