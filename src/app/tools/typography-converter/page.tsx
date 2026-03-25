"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "pt": 1,
  "pc": 12,
  "px": 0.75,
  "in": 72,
  "cm": 28.3465,
  "mm": 2.83465,
  "em": 12,
};

export default function TypographyUnitConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("pt");
  const [to, setTo] = useState("pc");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Typography Unit Converter</h1>
        <p className="text-gray-400 mb-6">Convert between typographic units: points, picas, pixels, em, inches and centimeters.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded p-3 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="pt">Point (pt)</option>
          <option value="pc">Pica (pc)</option>
          <option value="px">Pixel (px) at 96dpi</option>
          <option value="in">Inch (in)</option>
          <option value="cm">Centimeter (cm)</option>
          <option value="mm">Millimeter (mm)</option>
          <option value="em">Em (at 16px)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="pt">Point (pt)</option>
          <option value="pc">Pica (pc)</option>
          <option value="px">Pixel (px) at 96dpi</option>
          <option value="in">Inch (in)</option>
          <option value="cm">Centimeter (cm)</option>
          <option value="mm">Millimeter (mm)</option>
          <option value="em">Em (at 16px)</option>
              </select>
            </div>
          </div>
          {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
        </div>
      </div>
    </main>
  );
}
