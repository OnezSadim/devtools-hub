'use client'
import { useState } from 'react';

const UNITS = ["Milliliter (ml)", "Liter (L)", "Teaspoon (tsp)", "Tablespoon (tbsp)", "Fluid ounce (fl oz)", "Cup (US)", "Pint (US)", "Quart (US)", "Gallon (US)", "Cup (UK)", "Pint (UK)"];
const FACTORS = [1, 1000, 4.92892, 14.7868, 29.5735, 236.588, 473.176, 946.353, 3785.41, 284.131, 568.261];

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  return (
    <main style={{maxWidth:600,margin:'0 auto',padding:'2rem'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>Cooking Measurement Converter</h1>
      <p style={{color:'#aaa',marginBottom:'1.5rem'}}>Convert between cooking measurements: cups, tablespoons, teaspoons, milliliters, fluid ounces, and more.</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem',flexWrap:'wrap'}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{flex:1,minWidth:120,padding:'0.5rem',background:'#1a1a1a',border:'1px solid #333',borderRadius:6,color:'#fff',fontSize:'1rem'}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{flex:1,minWidth:150,padding:'0.5rem',background:'#1a1a1a',border:'1px solid #333',borderRadius:6,color:'#fff'}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      <div style={{display:'grid',gap:'0.5rem'}}>
        {UNITS.map((u,i)=>(
          <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'0.75rem 1rem',background:i===from?'#1e3a5f':'#111',borderRadius:8,border:'1px solid #222'}}>
            <span style={{color:'#ccc'}}>{u}</span>
            <span style={{fontWeight:600,color:'#4af'}}>
              {isNaN(num) ? '' : (num * FACTORS[from] / FACTORS[i]).toPrecision(6)}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
