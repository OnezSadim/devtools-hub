"use client";
import { useState } from "react";

export default function TorqueToPowerCalculator() {
  const [torque, setTorque] = useState("");
  const [rpm, setRpm] = useState("");
  const [unit, setUnit] = useState("Nm");

  const T = parseFloat(torque);
  const N = parseFloat(rpm);
  const torqueNm = unit === "Nm" ? T : T * 1.355817948;
  const watts = T && N ? (torqueNm * 2 * Math.PI * N) / 60 : null;
  const kw = watts ? watts / 1000 : null;
  const hp = watts ? watts / 745.69987 : null;

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Torque to Power Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>P = T × 2π × RPM / 60</p>
      <div style={{display:"grid",gap:"1rem",marginBottom:"1.5rem"}}>
        <div>
          <label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>Torque</label>
          <div style={{display:"flex",gap:"0.5rem"}}>
            <input type="number" value={torque} onChange={e=>setTorque(e.target.value)} placeholder="0" style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"150px"}} />
            <select value={unit} onChange={e=>setUnit(e.target.value)} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0"}}>
              <option>Nm</option><option>ft-lb</option>
            </select>
          </div>
        </div>
        <div>
          <label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>Rotational Speed (RPM)</label>
          <input type="number" value={rpm} onChange={e=>setRpm(e.target.value)} placeholder="0" style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"150px"}} />
        </div>
      </div>
      <div style={{display:"grid",gap:"0.75rem"}}>
        {[{l:"Watts (W)",v:watts},{l:"Kilowatts (kW)",v:kw},{l:"Horsepower (hp)",v:hp}].map(({l,v})=>(
          <div key={l} style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",border:"1px solid #334155"}}>
            <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>{l}</span>
            <div style={{fontSize:"1.5rem",fontWeight:"bold",color:"#38bdf8"}}>{v !== null ? v.toFixed(4) : "—"}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
