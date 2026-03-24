'use client';
import { useState } from 'react';
const BASES = [
  { label: 'Binary (2)', value: 2, prefix: '0b' },
  { label: 'Octal (8)', value: 8, prefix: '0o' },
  { label: 'Decimal (10)', value: 10, prefix: '' },
  { label: 'Hexadecimal (16)', value: 16, prefix: '0x' },
];
export default function NumberBaseConverter() {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [error, setError] = useState('');
  const parse = (val: string, base: number) => {
    if (!val.trim()) return null;
    const n = parseInt(val.trim().replace(/^0[bBoOxX]/, ''), base);
    return isNaN(n) ? null : n;
  };
  const num = parse(input, fromBase);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-8">Convert between binary, octal, decimal, and hex.</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex gap-2 mb-4 flex-wrap">
            {BASES.map(b => (
              <button key={b.value} onClick={() => { setFromBase(b.value); setInput(''); setError(''); }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${ fromBase === b.value ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700' }`}>
                {b.label}
              </button>
            ))}
          </div>
          <input type="text" value={input} onChange={e => { setInput(e.target.value); setError(parse(e.target.value, fromBase) === null && e.target.value ? `Invalid for base ${fromBase}` : ''); }}
            placeholder={fromBase === 16 ? 'FF' : fromBase === 2 ? '1010' : '255'}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 font-mono text-lg focus:outline-none focus:border-blue-500" />
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
        {num !== null ? (
          <div className="space-y-3">
            {BASES.map(b => (
              <div key={b.value} className="bg-gray-900 rounded-xl p-4 flex justify-between items-center">
                <span className="text-gray-400 text-sm">{b.label}</span>
                <div className="flex items-center gap-3">
                  <code className="text-green-400 font-mono text-lg">{b.prefix}{num.toString(b.value).toUpperCase()}</code>
                  <button onClick={() => navigator.clipboard.writeText(b.prefix + num.toString(b.value).toUpperCase())}
                    className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-400">Copy</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl p-8 text-center text-gray-600">Enter a number above</div>
        )}
      </div>
    </div>
  );
}