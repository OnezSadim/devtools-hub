'use client';
import { useState } from 'react';

const units = [
    { name: 'Lumen per Watt (lm/W)', factor: 1 },
    { name: 'Lumen per Milliwatt (lm/mW)', factor: 1000 },
    { name: 'Candela Steradian per Watt (cd·sr/W)', factor: 1 },
  ];

export default function ConverterPage() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState(units[0].name);

  const fromUnit = units.find(u => u.name === from)!;
  const baseValue = parseFloat(value) * fromUnit.factor;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Luminous Efficacy Converter</h1>
        <p className="text-gray-400 mb-8">Convert between luminous efficacy units including lumen per watt and more.</p>
        <div className="flex gap-4 mb-8">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />
          <select
            value={from}
            onChange={e => setFrom(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          >
            {units.map(u => <option key={u.name}>{u.name}</option>)}
          </select>
        </div>
        <div className="space-y-3">
          {units.map(u => (
            <div key={u.name} className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <span className="text-gray-400">{u.name}</span>
              <span className="text-white font-mono text-lg">
                {value ? (baseValue / u.factor).toLocaleString(undefined, { maximumSignificantDigits: 8 }) : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
