"use client";
import { useState } from "react";

export default function PixelToEmConverter() {
  const [base, setBase] = useState(16);
  const [px, setPx] = useState(16);
  const [em, setEm] = useState(1);
  const [rem, setRem] = useState(1);

  function fromPx(v) {
    setPx(v);
    const e = v / base;
    setEm(parseFloat(e.toFixed(4)));
    setRem(parseFloat(e.toFixed(4)));
  }
  function fromEm(v) {
    setEm(v);
    setRem(v);
    setPx(parseFloat((v * base).toFixed(2)));
  }

  const rows = [8,10,12,14,16,18,20,24,28,32,36,48,64];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">PX to EM/REM Converter</h1>
        <p className="text-gray-400 mb-6">Convert pixel values to em and rem units</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Base Font Size (px)</label>
            <input type="number" value={base} onChange={e => setBase(parseInt(e.target.value)||16)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white font-mono focus:outline-none" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Pixels (px)</label>
              <input type="number" value={px} onChange={e => fromPx(parseFloat(e.target.value)||0)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-green-400 font-mono focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Em (em)</label>
              <input type="number" step="0.001" value={em} onChange={e => fromEm(parseFloat(e.target.value)||0)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-blue-400 font-mono focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Root Em (rem)</label>
              <input type="number" step="0.001" value={rem} readOnly className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-purple-400 font-mono" />
            </div>
          </div>
          <table className="w-full text-sm">
            <thead><tr className="text-gray-400 border-b border-gray-700"><th className="py-2 text-left">PX</th><th className="py-2 text-left">EM / REM</th><th className="py-2 text-left">PT</th></tr></thead>
            <tbody>
              {rows.map(p => (
                <tr key={p} className="border-b border-gray-800 hover:bg-gray-800 cursor-pointer" onClick={() => fromPx(p)}>
                  <td className="py-2 font-mono text-green-400">{p}px</td>
                  <td className="py-2 font-mono text-blue-400">{(p/base).toFixed(4)}em</td>
                  <td className="py-2 font-mono text-gray-400">{(p*0.75).toFixed(2)}pt</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
