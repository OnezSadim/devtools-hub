"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units = ['Weber (Wb)', 'Milliweber (mWb)', 'Microweber (μWb)', 'Maxwell (Mx)', 'Tesla·square meter (T·m²)', 'Volt-second (V·s)', 'Kiloweber (kWb)'];
  const rates = [1, 1000, 1000000, 100000000, 1, 1, 0.001];
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const convert = (v: string, f: number) => {{
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    const base = n / rates[f];
    return units.map((u, i) => `${{u}}: ${{(base * rates[i]).toPrecision(6)}}`).join("\n");
  }};
  return (<div style={{{{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}}}><h1 style={{{{fontSize:"1.5rem",marginBottom:"1rem"}}}}>Magnetic Flux Converter</h1><p style={{{{marginBottom:"1.5rem",color:"#94a3b8"}}}}>Convert between weber, maxwell, volt-second, tesla square meter and more magnetic flux units.</p><div style={{{{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}}}><input type="number" value={{val}} onChange={{e=>setVal(e.target.value)}} placeholder="Enter value" style={{{{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"200px"}}}}/><select value={{from}} onChange={{e=>setFrom(Number(e.target.value))}} style={{{{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}}}>{{units.map((u,i)=><option key={{i}} value={{i}}>{{u}}</option>)}}</select></div><pre style={{{{background:"#1e293b",padding:"1rem",borderRadius:"8px",whiteSpace:"pre-wrap",color:"#a3e635"}}}}>{{convert(val,from)||"Enter a value to convert"}}</pre></div>);
}}
