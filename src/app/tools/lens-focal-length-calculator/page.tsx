
"use client";
import { useState } from "react";
export default function LensFocalLengthCalculator() {
  const [mode, setMode] = useState("focal");
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const a = parseFloat(v1), b = parseFloat(v2);
    if (isNaN(a)||isNaN(b)||a===0||b===0) { setResult("Enter valid non-zero numbers"); return; }
    let res = "";
    if (mode==="focal") {
      const f = 1/(1/a + 1/b);
      res = "Focal length: " + f.toFixed(4) + " mm
Magnification: " + (-b/a).toFixed(4);
    } else if (mode==="object") {
      const do_ = 1/(1/a - 1/b);
      res = "Object distance: " + do_.toFixed(4) + " mm";
    } else {
      const di = 1/(1/a - 1/b);
      res = "Image distance: " + di.toFixed(4) + " mm";
    }
    setResult(res);
  };
  const labels = {focal:["Object distance (mm)","Image distance (mm)"],object:["Focal length (mm)","Image distance (mm)"],image:["Focal length (mm)","Object distance (mm)"]};
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Lens Focal Length Calculator</h1>
        <p className="text-gray-400 mb-6">Thin lens equation: 1/f = 1/do + 1/di</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2 flex-wrap">
            {["focal","object","image"].map(m=>(
              <button key={m} onClick={()=>setMode(m)} className={"px-4 py-2 rounded-lg font-medium capitalize " + (mode===m ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600")}>Find {m}</button>
            ))}
          </div>
          {labels[mode].map((lbl,i)=>(
            <div key={i}>
              <label className="block text-sm text-gray-400 mb-1">{lbl}</label>
              <input type="number" value={i===0?v1:v2} onChange={e=>i===0?setV1(e.target.value):setV2(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Calculate</button>
          {result && <pre className="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
        </div>
      </div>
    </main>
  );
}
