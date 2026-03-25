"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units = [{"n":"Steradian","s":"sr","f":1},{"n":"Square degree","s":"deg²","f":0.000304617},{"n":"Square arcminute","s":"arcmin²","f":8.46159e-08},{"n":"Square arcsecond","s":"arcsec²","f":2.35044e-11},{"n":"Spat","s":"sp","f":12.5664}];
  const [vals, setVals] = useState(Object.fromEntries(units.map(u => [u.s, ''])));
  function handleChange(sym, raw) {{
    const n = parseFloat(raw);
    if (raw === '' || isNaN(n)) {{ setVals(Object.fromEntries(units.map(u => [u.s, '']))); return; }}
    const base = n / units.find(u => u.s === sym).f;
    setVals(Object.fromEntries(units.map(u => [u.s, sym === u.s ? raw : (base * u.f).toPrecision(6)])));
  }}
  return (<div style={{{{padding:'2rem',maxWidth:'600px',margin:'0 auto',fontFamily:'sans-serif'}}}}><h1 style={{{{fontSize:'1.5rem',marginBottom:'1rem'}}}}>Solid Angle Converter</h1><p style={{{{color:'#666',marginBottom:'2rem'}}}}>Convert between steradian, square degree, spat units</p><div style={{{{display:'grid',gap:'1rem'}}}}>{units.map(u => (<div key={{u.s}}><label style={{{{display:'block',marginBottom:'0.25rem',fontWeight:'bold'}}}}>{u.n} ({u.s})</label><input type="number" value={{vals[u.s]}} onChange={{e => handleChange(u.s, e.target.value)}} style={{{{width:'100%',padding:'0.5rem',border:'1px solid #ccc',borderRadius:'4px',fontSize:'1rem'}}}} placeholder="Enter value" /></div>))}</div></div>);
}}
