"use client";
import { useState } from "react";

const units = ["Coulomb/kilogram (C/kg)", "Millicoulomb/kilogram (mC/kg)", "Microcoulomb/kilogram (uC/kg)", "Roentgen (R)", "Milliroentgen (mR)", "Microroentgen (uR)", "Parker", "Rep"];

const conversions: Record<string, number> = {
  "Coulomb/kilogram (C/kg)": 1,
  "Millicoulomb/kilogram (mC/kg)": 1,
  "Microcoulomb/kilogram (uC/kg)": 1,
  "Roentgen (R)": 1,
  "Milliroentgen (mR)": 1,
  "Microroentgen (uR)": 1,
  "Parker": 1,
  "Rep": 1,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * conversions[from]) / conversions[to]).toPrecision(6);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Radiation Exposure Converter</h1>
        <p className="text-gray-400 mb-6">Convert between radiation exposure units like roentgen and coulomb/kg.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Coulomb/kilogram (C/kg)">Coulomb/kilogram (C/kg)</option>
              <option value="Millicoulomb/kilogram (mC/kg)">Millicoulomb/kilogram (mC/kg)</option>
              <option value="Microcoulomb/kilogram (uC/kg)">Microcoulomb/kilogram (uC/kg)</option>
              <option value="Roentgen (R)">Roentgen (R)</option>
              <option value="Milliroentgen (mR)">Milliroentgen (mR)</option>
              <option value="Microroentgen (uR)">Microroentgen (uR)</option>
              <option value="Parker">Parker</option>
              <option value="Rep">Rep</option>
            </select></div>
            <div><label className="text-sm text-gray-400">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Coulomb/kilogram (C/kg)">Coulomb/kilogram (C/kg)</option>
              <option value="Millicoulomb/kilogram (mC/kg)">Millicoulomb/kilogram (mC/kg)</option>
              <option value="Microcoulomb/kilogram (uC/kg)">Microcoulomb/kilogram (uC/kg)</option>
              <option value="Roentgen (R)">Roentgen (R)</option>
              <option value="Milliroentgen (mR)">Milliroentgen (mR)</option>
              <option value="Microroentgen (uR)">Microroentgen (uR)</option>
              <option value="Parker">Parker</option>
              <option value="Rep">Rep</option>
            </select></div>
          </div>
          {val && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-2xl font-bold text-blue-400">{convert()}</span><span className="ml-2 text-gray-400">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}