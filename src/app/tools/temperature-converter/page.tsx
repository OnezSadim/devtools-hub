"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const c = parseFloat(celsius);
  const f = celsius !== "" ? (c * 9/5 + 32).toFixed(4) : "";
  const k = celsius !== "" ? (c + 273.15).toFixed(4) : "";
  const r = celsius !== "" ? ((c + 273.15) * 9/5).toFixed(4) : "";

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Celsius, Fahrenheit, Kelvin, and Rankine.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Celsius (°C)</label>
            <input type="number" value={celsius} onChange={e => setCelsius(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Celsius" />
          </div>
          {celsius !== "" && (
            <div className="space-y-3">
              {[["Fahrenheit (°F)", f], ["Kelvin (K)", k], ["Rankine (°R)", r]].map(([label, val]) => (
                <div key={label} className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-gray-400">{label}</span>
                  <span className="text-xl font-bold text-blue-400">{val}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
