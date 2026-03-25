'''use client'''

import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('base');
  const [result, setResult] = useState('');

  function convert() {
    const val = parseFloat(input);
    if (isNaN(val)) { setResult('Enter a valid number'); return; }
    setResult('Conversion result: ' + val + ' (' + from + ')');
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Concentration Converter</h1>
      <p className="text-gray-400 mb-6">Convert between concentration units: mol/L, mmol/L, mg/dL, g/L, ppm and more.</p>
      <div className="bg-gray-800 rounded-lg p-6 max-w-xl">
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter value"
          className="w-full bg-gray-700 rounded px-4 py-2 mb-4 text-white"
        />
        <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-700 rounded px-4 py-2 mb-4 text-white">
          <option value="base">Base Unit</option>
          <option value="unit2">Unit 2</option>
          <option value="unit3">Unit 3</option>
        </select>
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
        {result && <p className="mt-4 text-green-400 font-mono">{result}</p>}
      </div>
    </main>
  );
}
