"use client";
import { useState } from "react";
export default function NumberFormatter() {
  const [num, setNum] = useState('');
  const [decimals, setDecimals] = useState('2');
  const [locale, setLocale] = useState('en-US');
  const format = (n) => {
    const v = parseFloat(n);
    if (isNaN(v)) return 'Invalid number';
    return new Intl.NumberFormat(locale, { minimumFractionDigits: parseInt(decimals), maximumFractionDigits: parseInt(decimals) }).format(v);
  };
  const formats = num ? [
    { label: 'Formatted', value: format(num) },
    { label: 'Currency (USD)', value: isNaN(parseFloat(num)) ? 'N/A' : new Intl.NumberFormat('en-US', {style:'currency',currency:'USD'}).format(parseFloat(num)) },
    { label: 'Percentage', value: isNaN(parseFloat(num)) ? 'N/A' : (parseFloat(num)/100).toLocaleString('en-US',{style:'percent',minimumFractionDigits:2}) },
    { label: 'Scientific', value: isNaN(parseFloat(num)) ? 'N/A' : parseFloat(num).toExponential(2) },
    { label: 'Binary', value: isNaN(parseInt(num)) ? 'N/A' : parseInt(num).toString(2) },
    { label: 'Hex', value: isNaN(parseInt(num)) ? 'N/A' : parseInt(num).toString(16).toUpperCase() },
  ] : [];
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>Number Formatter</h1>
    <div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap'}}>
      <input value={num} onChange={e=>setNum(e.target.value)} placeholder="Enter a number" style={{padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',flex:1}} />
      <select value={decimals} onChange={e=>setDecimals(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px'}}>
        {[0,1,2,3,4].map(d=><option key={d} value={d}>{d} decimals</option>)}
      </select>
    </div>
    {formats.map(f=><div key={f.label} style={{display:'flex',justifyContent:'space-between',padding:'0.75rem',background:'#1e293b',borderRadius:'4px',marginBottom:'0.5rem'}}><span style={{color:'#94a3b8'}}>{f.label}</span><span style={{color:'#a3e635'}}>{f.value}</span></div>)}
  </div>);
}
