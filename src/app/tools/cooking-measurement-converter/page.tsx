'use client';
import { useState } from 'react';

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('cup (US)');
  const [to, setTo] = useState('tablespoon');

  function convert(v: number, unit: string): number {
    let base = 0;
    switch(unit) {
      case 'cup (US)': base = v / 1.0; break;
      case 'tablespoon': base = v / 16.0; break;
      case 'teaspoon': base = v / 48.0; break;
      case 'fluid oz': base = v / 8.0; break;
      case 'pint': base = v / 0.5; break;
      case 'quart': base = v / 0.25; break;
      case 'gallon': base = v / 0.0625; break;
      case 'milliliter': base = v / 236.588; break;
      case 'liter': base = v / 0.236588; break;
    }
    switch(to) {
      case 'cup (US)': return base * 1.0;
      case 'tablespoon': return base * 16.0;
      case 'teaspoon': return base * 48.0;
      case 'fluid oz': return base * 8.0;
      case 'pint': return base * 0.5;
      case 'quart': return base * 0.25;
      case 'gallon': return base * 0.0625;
      case 'milliliter': return base * 236.588;
      case 'liter': return base * 0.236588;
    }
    return base;
  }

  const result = convert(parseFloat(val) || 0, from);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cooking Measurement Converter</h1>
        <p className="text-gray-400 mb-8">Convert between cooking units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="cup (US)">cup (US)</option>
          <option value="tablespoon">tablespoon</option>
          <option value="teaspoon">teaspoon</option>
          <option value="fluid oz">fluid oz</option>
          <option value="pint">pint</option>
          <option value="quart">quart</option>
          <option value="gallon">gallon</option>
          <option value="milliliter">milliliter</option>
          <option value="liter">liter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="cup (US)">cup (US)</option>
          <option value="tablespoon">tablespoon</option>
          <option value="teaspoon">teaspoon</option>
          <option value="fluid oz">fluid oz</option>
          <option value="pint">pint</option>
          <option value="quart">quart</option>
          <option value="gallon">gallon</option>
          <option value="milliliter">milliliter</option>
          <option value="liter">liter</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl font-mono font-bold text-blue-400">{isNaN(result) ? '—' : result.toPrecision(6)}</p>
            <p className="text-gray-400 mt-1">{to}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
