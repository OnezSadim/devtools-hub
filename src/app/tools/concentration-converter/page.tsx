"use client";
import { useState } from "react";

const units = [{ value: '1', label: 'mg/L' }, { value: '0.001', label: 'g/L' }, { value: '0.001', label: 'kg/m³' }, { value: '1000', label: 'µg/L' }];

export default function ConcentrationConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  const [result, setResult] = useState("");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResult("Invalid input"); return; }
    const base = num * parseFloat(from);
    setResult((base / parseFloat(to)).toExponential(6));
  };

  return (
    <main style={{ maxWidth: 480, margin: "40px auto", padding: "0 16px", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>Concentration Converter</h1>
      <p style={{ color: "#aaa", marginBottom: 24 }}>Convert between mass concentration units: mg/L, g/L, kg/m³.</p>
      <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value" style={{ width: "100%", padding: 8, marginBottom: 12, background: "#1a1a1a", border: "1px solid #333", color: "#fff", borderRadius: 4 }} />
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <select value={from} onChange={e => setFrom(e.target.value)} style={{ flex: 1, padding: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", borderRadius: 4 }}>{units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}</select>
        <span style={{ alignSelf: "center", color: "#aaa" }}>to</span>
        <select value={to} onChange={e => setTo(e.target.value)} style={{ flex: 1, padding: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", borderRadius: 4 }}>{units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}</select>
      </div>
      <button onClick={convert} style={{ width: "100%", padding: 10, background: "#3b82f6", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", marginBottom: 16 }}>Convert</button>
      {result && <div style={{ padding: 16, background: "#1a1a1a", borderRadius: 4, color: "#4ade80", fontSize: 20 }}>{result}</div>}
    </main>
  );
}
