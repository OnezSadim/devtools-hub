"use client";
import { useState } from "react";

export default function CarnotEfficiencyCalculator() {
  const [TH, setTH] = useState("");
  const [TC, setTC] = useState("");
  const [result, setResult] = useState<{eff:string,cop_r:string,cop_hp:string}|null>(null);

  const calc = () => {
    try {
      const th = parseFloat(TH), tc = parseFloat(TC);
      if (tc >= th) { setResult(null); return; }
      const eff = (1 - tc/th)*100;
      const cop_r = tc/(th-tc);
      const cop_hp = th/(th-tc);
      setResult({ eff: eff.toFixed(2), cop_r: cop_r.toFixed(4), cop_hp: cop_hp.toFixed(4) });
    } catch { setResult(null); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Carnot Efficiency Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate the maximum theoretical efficiency of a heat engine operating between two temperatures.</p>
        <div className="bg-gray-800/50 border border-gray-700 rounded p-4 mb-6 font-mono text-center">
          η = 1 - T<sub>C</sub>/T<sub>H</sub>
        </div>
        <div className="space-y-3">
          <input className="w-full bg-gray-800 p-3 rounded" placeholder="Hot reservoir temperature TH (K)" value={TH} onChange={e=>setTH(e.target.value)} />
          <input className="w-full bg-gray-800 p-3 rounded" placeholder="Cold reservoir temperature TC (K)" value={TC} onChange={e=>setTC(e.target.value)} />
          <p className="text-gray-500 text-sm">Note: Temperatures must be in Kelvin (K = °C + 273.15)</p>
          <button onClick={calc} className="w-full bg-yellow-600 hover:bg-yellow-700 p-3 rounded font-semibold">Calculate</button>
          {result && (
            <div className="bg-gray-800 p-4 rounded space-y-2">
              <div className="text-green-400 font-mono text-lg">Carnot Efficiency: {result.eff}%</div>
              <div className="text-blue-400 font-mono">COP (Refrigerator): {result.cop_r}</div>
              <div className="text-purple-400 font-mono">COP (Heat Pump): {result.cop_hp}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
