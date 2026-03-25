"use client";
import { useState } from "react";
export default function LoanEMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  function calculate() {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    if (!p || !r || !n) return;
    const e = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(e);
    setTotal(e * n);
    setInterest(e * n - p);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:"0.5rem"}}>Loan EMI Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate your monthly loan installment</p>
      <div style={{maxWidth:"480px"}}>
        {[{label:"Principal Amount ($)",val:principal,set:setPrincipal},{label:"Annual Interest Rate (%)",val:rate,set:setRate},{label:"Tenure (years)",val:tenure,set:setTenure}].map(({label,val,set})=>(
          <div key={label} style={{marginBottom:"1rem"}}>
            <label style={{display:"block",color:"#94a3b8",marginBottom:"0.3rem",fontSize:"0.9rem"}}>{label}</label>
            <input value={val} onChange={e=>set(e.target.value)} type="number" placeholder="0" style={{width:"100%",padding:"0.6rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#f1f5f9",fontSize:"1rem"}} />
          </div>
        ))}
        <button onClick={calculate} style={{width:"100%",padding:"0.8rem",background:"#3b82f6",border:"none",borderRadius:"6px",color:"#fff",fontSize:"1rem",cursor:"pointer",marginBottom:"1.5rem"}}>Calculate EMI</button>
        {emi !== null && (
          <div style={{background:"#1e293b",borderRadius:"8px",padding:"1.5rem"}}>
            <div style={{marginBottom:"1rem"}}><span style={{color:"#94a3b8"}}>Monthly EMI: </span><strong style={{fontSize:"1.4rem",color:"#60a5fa"}}>${emi.toFixed(2)}</strong></div>
            <div style={{marginBottom:"0.5rem"}}><span style={{color:"#94a3b8"}}>Total Amount: </span><strong>${total!.toFixed(2)}</strong></div>
            <div><span style={{color:"#94a3b8"}}>Total Interest: </span><strong style={{color:"#f87171"}}>${interest!.toFixed(2)}</strong></div>
          </div>
        )}
      </div>
    </main>
  );
}
