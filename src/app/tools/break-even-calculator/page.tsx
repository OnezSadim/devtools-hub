"use client";
import { useState } from "react";
export default function BreakEvenCalculator() {
  const [fixed, setFixed] = useState("");
  const [price, setPrice] = useState("");
  const [variable, setVariable] = useState("");
  const margin = parseFloat(price) - parseFloat(variable);
  const units = fixed && price && variable && margin > 0 ? Math.ceil(parseFloat(fixed) / margin) : null;
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:24,fontFamily:"monospace"}}>
      <h1 style={{fontSize:28,marginBottom:8}}>Break-Even Calculator</h1>
      <p style={{color:"#888",marginBottom:24}}>Find how many units you need to sell to break even.</p>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Fixed Costs ($)</label>
        <input type="number" value={fixed} onChange={e=>setFixed(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Selling Price per Unit ($)</label>
        <input type="number" value={price} onChange={e=>setPrice(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Variable Cost per Unit ($)</label>
        <input type="number" value={variable} onChange={e=>setVariable(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      {units !== null && (
        <div style={{padding:16,background:"#0a2a0a",border:"1px solid #0f5",borderRadius:4}}>
          <p style={{margin:0,fontSize:20}}>Break-Even: <strong style={{color:"#0f5"}}>{units} units</strong></p>
          <p style={{margin:"8px 0 0",color:"#888",fontSize:14}}>Contribution margin: ${margin.toFixed(2)}/unit</p>
        </div>
      )}
      {price && variable && margin <= 0 && <p style={{color:"#f55"}}>Price must exceed variable cost.</p>}
    </div>
  );
}
