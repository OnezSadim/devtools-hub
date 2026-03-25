"use client";
import { useState } from "react";
export default function VatCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("21");
  const [mode, setMode] = useState("add");
  const num = parseFloat(amount) || 0;
  const r = parseFloat(rate) / 100;
  const vatAmount = mode === "add" ? num * r : num - num / (1 + r);
  const total = mode === "add" ? num + vatAmount : num;
  const excl = mode === "add" ? num : num / (1 + r);
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>VAT Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate VAT / sales tax amounts instantly.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Amount</label>
          <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="100" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>VAT Rate (%)</label>
          <input value={rate} onChange={e=>setRate(e.target.value)} placeholder="21" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Mode</label>
          <select value={mode} onChange={e=>setMode(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
            <option value="add">Add VAT (excl → incl)</option>
            <option value="remove">Remove VAT (incl → excl)</option>
          </select>
        </div>
        {amount && (
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:"6px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>Excl. VAT:</span><span>{excl.toFixed(2)}</span></div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>VAT Amount:</span><span style={{color:"#fbbf24"}}>{vatAmount.toFixed(2)}</span></div>
            <div style={{display:"flex",justifyContent:"space-between",borderTop:"1px solid #334155",paddingTop:"8px"}}><span style={{color:"#94a3b8"}}>Incl. VAT:</span><span style={{color:"#4ade80",fontWeight:"bold"}}>{total.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}