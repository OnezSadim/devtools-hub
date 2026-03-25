"use client";
import { useState } from "react";

const categories = {
  Length: { m: 1, km: 0.001, cm: 100, mm: 1000, ft: 3.28084, inch: 39.3701, yd: 1.09361, mi: 0.000621371 },
  Weight: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274, t: 0.001, mg: 1e6 },
  Temperature: null,
  Volume: { L: 1, mL: 1000, m3: 0.001, gal: 0.264172, qt: 1.05669, fl_oz: 33.814 },
  Speed: { mps: 1, kph: 3.6, mph: 2.23694, knot: 1.94384 },
  Area: { m2: 1, km2: 1e-6, cm2: 1e4, ft2: 10.7639, acre: 0.000247105, ha: 1e-4 },
};

function convertTemp(val: number, from: string, to: string) {
  let c = from === "C" ? val : from === "F" ? (val-32)*5/9 : val-273.15;
  return to === "C" ? c : to === "F" ? c*9/5+32 : c+273.15;
}

export default function UnitConverterAdvanced() {
  const [cat, setCat] = useState("Length");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("ft");
  const [val, setVal] = useState("");
  const [res, setRes] = useState("");

  const units = cat === "Temperature" ? ["C","F","K"] : Object.keys(categories[cat as keyof typeof categories] || {});

  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) { setRes("Enter a number"); return; }
    if (cat === "Temperature") { setRes(convertTemp(n, from, to).toFixed(4)); return; }
    const tbl = categories[cat as keyof typeof categories] as Record<string,number>;
    setRes((n / tbl[from] * tbl[to]).toFixed(6));
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Advanced Unit Converter</h1>
      <p className="text-gray-400 mb-6">Convert between length, weight, temperature, volume, speed, and area units.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg">
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(categories).map(c => <button key={c} onClick={()=>{setCat(c);setFrom(Object.keys(c==="Temperature"?{C:1}:(categories[c as keyof typeof categories]||{}))[0]);setTo(Object.keys(c==="Temperature"?{C:1,F:2}:(categories[c as keyof typeof categories]||{}))[1]||"ft");}} className={`px-3 py-1 rounded text-sm ${cat===c?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{c}</button>)}
        </div>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="w-full bg-gray-800 rounded p-2 mb-3" />
        <div className="flex gap-2 mb-4">
          <select value={from} onChange={e=>setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-2">{units.map(u=><option key={u}>{u}</option>)}</select>
          <span className="py-2">=</span>
          <select value={to} onChange={e=>setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-2">{units.map(u=><option key={u}>{u}</option>)}</select>
        </div>
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded p-2 font-semibold mb-3">Convert</button>
        {res && <div className="bg-gray-800 rounded p-3 text-green-400 text-xl font-mono">{val} {from} = {res} {to}</div>}
      </div>
    </main>
  );
}