"use client";
import { useState } from "react";
export default function BinaryCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [base1, setBase1] = useState("10");
  const [base2, setBase2] = useState("10");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState("");
  const bases = [{v:"2",l:"Binary"},{v:"8",l:"Octal"},{v:"10",l:"Decimal"},{v:"16",l:"Hex"}];
  const calculate = () => {
    try {
      const a = parseInt(num1, parseInt(base1));
      const b = parseInt(num2, parseInt(base2));
      let r = 0;
      if(op==="+") r=a+b;
      else if(op==="-") r=a-b;
      else if(op==="*") r=a*b;
      else if(op==="/") r=Math.floor(a/b);
      else if(op==="AND") r=a&b;
      else if(op==="OR") r=a|b;
      else if(op==="XOR") r=a^b;
      setResult(`Dec: ${r} | Bin: ${r.toString(2)} | Oct: ${r.toString(8)} | Hex: ${r.toString(16).toUpperCase()}`);
    } catch(e) { setResult("Invalid input"); }
  };
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Binary Calculator</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Perform arithmetic and bitwise operations in any base.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"1rem",alignItems:"end",marginBottom:"1rem"}}>
        <div>
          <label style={{display:"block",marginBottom:4,color:"#aaa"}}>Number 1</label>
          <input value={num1} onChange={e=>setNum1(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} />
          <select value={base1} onChange={e=>setBase1(e.target.value)} style={{width:"100%",marginTop:4,padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff"}}>
            {bases.map(b=><option key={b.v} value={b.v}>{b.l}</option>)}
          </select>
        </div>
        <select value={op} onChange={e=>setOp(e.target.value)} style={{padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff"}}>
          {["+","-","*","/","AND","OR","XOR"].map(o=><option key={o}>{o}</option>)}
        </select>
        <div>
          <label style={{display:"block",marginBottom:4,color:"#aaa"}}>Number 2</label>
          <input value={num2} onChange={e=>setNum2(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} />
          <select value={base2} onChange={e=>setBase2(e.target.value)} style={{width:"100%",marginTop:4,padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff"}}>
            {bases.map(b=><option key={b.v} value={b.v}>{b.l}</option>)}
          </select>
        </div>
      </div>
      <button onClick={calculate} style={{width:"100%",padding:"0.75rem",background:"#7c3aed",color:"#fff",border:"none",borderRadius:4,cursor:"pointer",fontSize:"1rem",marginBottom:"1rem"}}>Calculate</button>
      {result && <div style={{padding:"1rem",background:"#1e1e1e",borderRadius:4,border:"1px solid #333",fontSize:"1.1rem"}}>{result}</div>}
    </div>
  );
}