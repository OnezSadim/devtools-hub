"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units = [{"n":"Candela/m²","s":"cd/m²","f":1},{"n":"Nit","s":"nt","f":1},{"n":"Stilb","s":"sb","f":10000},{"n":"Lambert","s":"L","f":3183.099},{"n":"Foot-lambert","s":"fL","f":3.42626},{"n":"Millinit","s":"mnt","f":0.001}];
  const [vals, setVals] = useState(Object.fromEntries(units.map(u => [u.s, ''])));
  function handleChange(sym, raw) {{
    const n = parseFloat(raw);
    if (raw === '' || isNaN(n)) {{ setVals(Object.fromEntries(units.map(u => [u.s, '']))); return; }}
    const base = n / units.find(u => u.s === sym).f;
    setVals(Object.fromEntries(units.map(u => [u.s, sym === u.s ? raw : (base * u.f).toPrecision(6)])));
  }}
  return (<div style={{{{padding:'2rem',maxWidth:'600px',margin:'0 auto',fontFamily:'sans-serif'}}}}><h1 style={{{{fontSize:'1.5rem',marginBottom:'1rem'}}}}>Luminance Converter</h1><p style={{{{color:'#666',marginBottom:'2rem'}}}}>Convert between candela/m², nit, stilb, lambert units</p><div style={{{{display:'grid',gap:'1rem'}}}}>{units.map(u => (<div key={{u.s}}><label style={{{{display:'block',marginBottom:'0.25rem',fontWeight:'bold'}}}}>{u.n} ({u.s})</label><input type="number" value={{vals[u.s]}} onChange={{e => handleChange(u.s, e.target.value)}} style={{{{width:'100%',padding:'0.5rem',border:'1px solid #ccc',borderRadius:'4px',fontSize:'1rem'}}}} placeholder="Enter value" /></div>))}</div></div>);
}}
