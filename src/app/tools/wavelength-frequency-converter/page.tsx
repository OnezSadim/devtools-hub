"use client";
import { useState } from "react";

const c = 299792458;

const freqUnits = [
  { label: "Hz", factor: 1 },
  { label: "kHz", factor: 1e3 },
  { label: "MHz", factor: 1e6 },
  { label: "GHz", factor: 1e9 },
  { label: "THz", factor: 1e12 },
];

const waveUnits = [
  { label: "meter (m)", factor: 1 },
  { label: "centimeter (cm)", factor: 0.01 },
  { label: "millimeter (mm)", factor: 0.001 },
  { label: "micrometer (µm)", factor: 1e-6 },
  { label: "nanometer (nm)", factor: 1e-9 },
];

export default function WavelengthFrequencyConverter() {
  const [freq, setFreq] = useState("");
  const [freqUnit, setFreqUnit] = useState(0);
  const [waveUnit, setWaveUnit] = useState(0);

  const fHz = parseFloat(freq) * freqUnits[freqUnit].factor;
  const waveM = fHz ? c / fHz : null;
  const wave = waveM !== null ? waveM / waveUnits[waveUnit].factor : null;

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Wavelength ↔ Frequency</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between frequency and wavelength using speed of light</p>
      <div style={{marginBottom:"1.5rem"}}>
        <label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>Frequency</label>
        <div style={{display:"flex",gap:"0.5rem"}}>
          <input type="number" value={freq} onChange={e=>setFreq(e.target.value)} placeholder="Enter frequency" style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"180px"}} />
          <select value={freqUnit} onChange={e=>setFreqUnit(Number(e.target.value))} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0"}}>
            {freqUnits.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
          </select>
        </div>
      </div>
      <div style={{padding:"1.5rem",background:"#1e293b",borderRadius:"12px",marginBottom:"1rem"}}>
        <div style={{color:"#94a3b8",marginBottom:"0.5rem"}}>Wavelength</div>
        <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
          <span style={{fontSize:"2rem",fontWeight:"bold",color:"#38bdf8"}}>{wave !== null ? wave.toExponential(4) : "—"}</span>
          <select value={waveUnit} onChange={e=>setWaveUnit(Number(e.target.value))} style={{padding:"0.5rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0"}}>
            {waveUnits.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
          </select>
        </div>
      </div>
      <p style={{color:"#475569",fontSize:"0.8rem"}}>c = 299,792,458 m/s</p>
    </main>
  );
}
