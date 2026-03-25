"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units = ['Pascal-second (Pa·s)', 'Poise (P)', 'Centipoise (cP)', 'Millipascal-second (mPa·s)', 'Micropascal-second (μPa·s)', 'Newton-second/m² (N·s/m²)', 'Kilogram/(m·s)', 'Gram/(cm·s)'];
  const rates = [1, 10, 1000, 1000, 1000000, 1, 1, 10];
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const convert = (v: string, f: number) => {{
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    const base = n / rates[f];
    return units.map((u, i) => `${{u}}: ${{(base * rates[i]).toPrecision(6)}}`).join("\n");
  }};
  return (<div style={{{{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}}}><h1 style={{{{fontSize:"1.5rem",marginBottom:"1rem"}}}}>Dynamic Viscosity Converter</h1><p style={{{{marginBottom:"1.5rem",color:"#94a3b8"}}}}>Convert between pascal-second, poise, centipoise, millipascal-second and more dynamic viscosity units.</p><div style={{{{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}}}><input type="number" value={{val}} onChange={{e=>setVal(e.target.value)}} placeholder="Enter value" style={{{{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"200px"}}}}/><select value={{from}} onChange={{e=>setFrom(Number(e.target.value))}} style={{{{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}}}>{{units.map((u,i)=><option key={{i}} value={{i}}>{{u}}</option>)}}</select></div><pre style={{{{background:"#1e293b",padding:"1rem",borderRadius:"8px",whiteSpace:"pre-wrap",color:"#a3e635"}}}}>{{convert(val,from)||"Enter a value to convert"}}</pre></div>);
}}
