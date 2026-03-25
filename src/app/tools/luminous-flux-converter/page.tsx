
"use client";
import { useState } from "react";
export default function LuminousFluxConverter() {
  const [lumens, setLumens] = useState("");
  const [area, setArea] = useState("1");
  const [result, setResult] = useState("");
  const calculate = () => {
    const lm = parseFloat(lumens), a = parseFloat(area);
    if (isNaN(lm)||lm<=0) { setResult("Enter valid lumens"); return; }
    const lux = isNaN(a)||a<=0 ? null : lm/a;
    const watts_vis = lm / 683;
    const candela_sphere = lm / (4*Math.PI);
    let out = "Luminous flux: " + lm.toFixed(2) + " lm
";
    out += "Radiant power (vis): " + watts_vis.toFixed(4) + " W
";
    out += "Avg intensity (sphere): " + candela_sphere.toFixed(4) + " cd
";
    if (lux!==null) out += "Illuminance ("+a+" m²): " + lux.toFixed(4) + " lux";
    setResult(out);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Luminous Flux Converter</h1>
        <p className="text-gray-400 mb-6">Convert lumens to lux, candelas, watts and more</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Luminous Flux (lumens)</label>
            <input type="number" value={lumens} onChange={e=>setLumens(e.target.value)} placeholder="e.g. 800" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Surface Area (m², for lux calculation)</label>
            <input type="number" value={area} onChange={e=>setArea(e.target.value)} placeholder="e.g. 1" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Convert</button>
          {result && <pre className="bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-medium text-gray-300 mb-2">Typical Lumen Values</p>
          {[["Candle","12"],["40W bulb","450"],["60W bulb","800"],["100W bulb","1600"],["LED streetlight","10,000"]].map(([s,l])=>(
            <div key={s} className="flex justify-between py-1 border-b border-gray-800"><span>{s}</span><span className="text-white">{l} lm</span></div>
          ))}
        </div>
      </div>
    </main>
  );
}
