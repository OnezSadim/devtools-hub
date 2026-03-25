"use client";
import { useState } from "react";
export default function MagnificationCalculator() {
  const [di, setDi] = useState("");
  const [do_, setDo] = useState("");
  const [hi, setHi] = useState("");
  const [ho, setHo] = useState("");
  const [result, setResult] = useState("");
  function calc() {
    const div = parseFloat(di), dov = parseFloat(do_);
    const hiv = parseFloat(hi), hov = parseFloat(ho);
    if (!isNaN(div) && !isNaN(dov)) {
      const m = -div/dov;
      setResult("Magnification m = " + m.toFixed(4) + (m < 0 ? " (inverted)" : " (upright)"));
    } else if (!isNaN(hiv) && !isNaN(hov)) {
      const m = hiv/hov;
      setResult("Magnification m = " + m.toFixed(4) + (m < 0 ? " (inverted)" : " (upright)"));
    } else {
      setResult("Enter di & do, or hi & ho.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnification Calculator</h1>
        <p className="text-gray-400 mb-6">m = -di/do = hi/ho</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <p className="text-gray-500 text-sm">Method 1: distances</p>
          {[{label:"Image Distance di (m)",val:di,set:setDi},{label:"Object Distance do (m)",val:do_,set:setDo}].map(({label,val,set})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}</label><input value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          ))}
          <p className="text-gray-500 text-sm">Method 2: image/object heights</p>
          {[{label:"Image Height hi (m)",val:hi,set:setHi},{label:"Object Height ho (m)",val:ho,set:setHo}].map(({label,val,set})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}</label><input value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          ))}
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
