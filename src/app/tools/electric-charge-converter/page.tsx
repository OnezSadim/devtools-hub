"use client";
import { useState } from "react";

const units: { name: string; factor: number }[] = [
  { name: 'Coulomb (C)', factor: 1.0 },
  { name: 'Millicoulomb (mC)', factor: 0.001 },
  { name: 'Microcoulomb (μC)', factor: 1e-06 },
  { name: 'Nanocoulomb (nC)', factor: 1e-09 },
  { name: 'Picocoulomb (pC)', factor: 1e-12 },
  { name: 'Ampere-hour (Ah)', factor: 3600.0 },
  { name: 'Milliampere-hour (mAh)', factor: 3.6 },
  { name: 'Kilocoulomb (kC)', factor: 1000.0 },
  { name: 'Megacoulomb (MC)', factor: 1000000.0 },
  { name: 'Faraday (F)', factor: 96485.33 },
];

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const result = value !== "" ? (parseFloat(value) * units[from].factor / units[to].factor).toPrecision(6) : "";
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Electric Charge Converter</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>Convert between units of electric charge: coulombs, millicoulombs, microcoulombs, nanocoulombs, picocoulombs, ampere-hours, milliampere-hours.</p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <label>Value</label><br/>
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }} />
        </div>
        <div style={{ flex: 1 }}>
          <label>From</label><br/>
          <select value={from} onChange={e => setFrom(Number(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}>
            {units.map((u, i) => <option key={i} value={i}>{u.name}</option>)}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label>To</label><br/>
          <select value={to} onChange={e => setTo(Number(e.target.value))}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}>
            {units.map((u, i) => <option key={i} value={i}>{u.name}</option>)}
          </select>
        </div>
      </div>
      {result !== "" && (
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f0f0f0", borderRadius: 8 }}>
          <strong>Result: {result} {units[to].name}</strong>
        </div>
      )}
    </main>
  );
}
