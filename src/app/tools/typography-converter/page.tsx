'use client';
import { useState } from 'react';

export default function TypographyconverterConverter() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('px');
  const [to, setTo] = useState('pt');

  const toBase: Record<string,number> = {
    'px': 1.0,
    'pt': 1.3333,
    'pc': 16.0,
    'cm': 37.7953,
    'mm': 3.77953,
    'in': 96.0,
    'em (16px base)': 16.0,
    'rem (16px base)': 16.0,
    'ex (approx)': 8.0,
  };

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return 'Invalid';
    const base = n * (toBase[from] || 1);
    const result = base / (toBase[to] || 1);
    return result.toPrecision(6);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Typography Unit Converter</h1>
        <p className="text-gray-400 mb-8">Convert between typography units: px, pt, em, rem, cm, mm, inch, pica.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="px">px</option>
      <option value="pt">pt</option>
      <option value="pc">pc</option>
      <option value="cm">cm</option>
      <option value="mm">mm</option>
      <option value="in">in</option>
      <option value="em (16px base)">em (16px base)</option>
      <option value="rem (16px base)">rem (16px base)</option>
      <option value="ex (approx)">ex (approx)</option>
            </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="px">px</option>
      <option value="pt">pt</option>
      <option value="pc">pc</option>
      <option value="cm">cm</option>
      <option value="mm">mm</option>
      <option value="in">in</option>
      <option value="em (16px base)">em (16px base)</option>
      <option value="rem (16px base)">rem (16px base)</option>
      <option value="ex (approx)">ex (approx)</option>
            </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-3xl font-mono text-blue-400">{convert()}</span>
            <span className="ml-2 text-gray-400">{to}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
