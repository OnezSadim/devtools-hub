'use client';
import { useState } from 'react';

const UNITS = [{name:"Miles per Gallon US (mpg)",key:"mpg_us",factor:1},{name:"Miles per Gallon UK (mpg)",key:"mpg_uk",factor:1.20095},{name:"Kilometers per Liter (km/L)",key:"kmpl",factor:0.425144},{name:"Liters per 100km (L/100km)",key:"l100km",factor:null},];

export default function Page() {
  const [from, setFrom] = useState(UNITS[0].key);
  const [to, setTo] = useState(UNITS[1].key);
  const [val, setVal] = useState('');

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return '';
    const f = UNITS.find(u => u.key === from);
    const t = UNITS.find(u => u.key === to);
    if (!f || !t || f.factor === null || t.factor === null) return 'N/A';
    return ((n * f.factor) / t.factor).toPrecision(8);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fuel Consumption Converter</h1>
        <p className="text-gray-400 mb-8">Convert between fuel consumption units: MPG, L/100km, km/L, miles per liter.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
              placeholder="Enter value" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
                {UNITS.map(u=><option key={u.key} value={u.key}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
                {UNITS.map(u=><option key={u.key} value={u.key}>{u.name}</option>)}
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Result</div>
            <div className="text-2xl font-mono text-green-400">{convert() || chr(39) + chr(39)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
