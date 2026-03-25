"use client";
import { useState } from "react";

export default function BoxShadowGenerator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(16);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.3);
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  const toRgba = (hex, a) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  };
  const shadow = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${toRgba(color, opacity)}`;
  const css = `box-shadow: ${shadow};`;
  const copy = () => { navigator.clipboard.writeText(css); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const controls = [["X Offset", x, setX, -50, 50],["Y Offset", y, setY, -50, 50],["Blur", blur, setBlur, 0, 100],["Spread", spread, setSpread, -50, 50]];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Create CSS box shadows visually</p>
        <div className="flex items-center justify-center h-48 bg-gray-800 rounded-xl mb-6">
          <div className="w-32 h-32 bg-white rounded-xl" style={{boxShadow: shadow}} />
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {controls.map(([label, val, setter, min, max]) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">{label}</span><span className="font-mono text-green-400">{val}px</span></div>
              <input type="range" min={min} max={max} value={val} onChange={e => setter(parseInt(e.target.value))} className="w-full" />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Color</label>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-10 rounded bg-gray-800 border border-gray-700 cursor-pointer" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Opacity: {opacity}</label>
              <input type="range" min={0} max={1} step={0.01} value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} className="w-full mt-3" />
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} className="w-4 h-4" /><span className="text-gray-300">Inset shadow</span></label>
          <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400 break-all">{css}</div>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
