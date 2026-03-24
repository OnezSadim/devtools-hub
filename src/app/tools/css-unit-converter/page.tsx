'use client';
import { useState } from 'react';
export default function CssUnitConverter() {
  const [value, setValue] = useState('16');
  const [baseFontSize, setBaseFontSize] = useState(16);
  const num = parseFloat(value) || 0;
  const px = num;
  const conversions = [
    { unit: 'px', val: px.toFixed(4), desc: 'Pixels' },
    { unit: 'rem', val: (px / baseFontSize).toFixed(4), desc: `Relative to root (${baseFontSize}px)` },
    { unit: 'em', val: (px / baseFontSize).toFixed(4), desc: `Relative to parent (${baseFontSize}px)` },
    { unit: 'pt', val: (px * 0.75).toFixed(4), desc: 'Points (1pt = 1.333px)' },
    { unit: '%', val: ((px / baseFontSize) * 100).toFixed(4), desc: `Percent of parent (${baseFontSize}px)` },
    { unit: 'vw', val: (px / 19.2).toFixed(4), desc: 'Viewport width (1920px base)' },
    { unit: 'vh', val: (px / 10.8).toFixed(4), desc: 'Viewport height (1080px base)' },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Unit Converter</h1>
        <p className="text-gray-400 mb-8">Convert between px, rem, em, pt, %, vw, vh.</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Value in px</label>
              <input type="number" value={value} onChange={e => setValue(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Base font size (px)</label>
              <input type="number" value={baseFontSize} onChange={e => setBaseFontSize(Number(e.target.value) || 16)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {conversions.map(c => (
            <div key={c.unit} className="bg-gray-900 rounded-xl p-4 flex justify-between items-center">
              <div>
                <span className="font-mono text-blue-400 text-lg">{c.unit}</span>
                <span className="text-gray-500 text-sm ml-3">{c.desc}</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="text-green-400 font-mono">{c.val}{c.unit}</code>
                <button onClick={() => navigator.clipboard.writeText(c.val + c.unit)}
                  className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-400">Copy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}