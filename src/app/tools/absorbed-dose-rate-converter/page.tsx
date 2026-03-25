"use client";
import { useState } from "react";

export default function AbsorbedDoseRateConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("gy_s");
  const [to, setTo] = useState("gy_min");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "gy_s": toBase = v * 1; break;
      case "gy_min": toBase = v * 0.016666666666666666; break;
      case "gy_h": toBase = v * 0.0002777777777777778; break;
      case "mgy_s": toBase = v * 0.001; break;
      case "rad_s": toBase = v * 0.01; break;
      case "rad_min": toBase = v * 0.00016666666666666666; break;
      case "rad_h": toBase = v * 2.777777777777778e-06; break;
      case "sv_s": toBase = v * 1; break;
      case "rem_s": toBase = v * 0.01; break;
      default: toBase = v;
    }
    let baseVal = toBase;
    let result = 0;
    switch (to) {
FROM_      case "gy_s": toBase = v * 1; break;
      case "gy_min": toBase = v * 0.016666666666666666; break;
      case "gy_h": toBase = v * 0.0002777777777777778; break;
      case "mgy_s": toBase = v * 0.001; break;
      case "rad_s": toBase = v * 0.01; break;
      case "rad_min": toBase = v * 0.00016666666666666666; break;
      case "rad_h": toBase = v * 2.777777777777778e-06; break;
      case "sv_s": toBase = v * 1; break;
      case "rem_s": toBase = v * 0.01; break;
      default: result = baseVal;
    }
    return result.toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Absorbed Dose Rate Converter</h1>
        <p className="text-gray-400 mb-8">Convert between absorbed dose rate units</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="gy_s">Gray/second (Gy/s)</option>
              <option value="gy_min">Gray/minute (Gy/min)</option>
              <option value="gy_h">Gray/hour (Gy/h)</option>
              <option value="mgy_s">Milligray/second (mGy/s)</option>
              <option value="rad_s">Rad/second (rad/s)</option>
              <option value="rad_min">Rad/minute (rad/min)</option>
              <option value="rad_h">Rad/hour (rad/h)</option>
              <option value="sv_s">Sievert/second (Sv/s)</option>
              <option value="rem_s">Rem/second (rem/s)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="gy_s">Gray/second (Gy/s)</option>
              <option value="gy_min">Gray/minute (Gy/min)</option>
              <option value="gy_h">Gray/hour (Gy/h)</option>
              <option value="mgy_s">Milligray/second (mGy/s)</option>
              <option value="rad_s">Rad/second (rad/s)</option>
              <option value="rad_min">Rad/minute (rad/min)</option>
              <option value="rad_h">Rad/hour (rad/h)</option>
              <option value="sv_s">Sievert/second (Sv/s)</option>
              <option value="rem_s">Rem/second (rem/s)</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-4 text-2xl font-mono text-blue-400">
            {convert()} <span className="text-sm text-gray-400">{to}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
