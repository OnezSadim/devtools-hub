"use client";
import { useState } from "react";
export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const CODE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
  const REVERSE = Object.fromEntries(Object.entries(CODE).map(([k,v])=>[v,k]));
  const toMorse = (s: string) => s.toUpperCase().split("").map(c=>c==" "?"/":CODE[c]||"?").join(" ");
  const fromMorse = (s: string) => s.split(" / ").map(w=>w.split(" ").map(c=>REVERSE[c]||"?").join("")).join(" ");
  const convert = (dir: string) => setResult(dir==="to"?toMorse(text):fromMorse(text));
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Morse Code Translator</h1>
    <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} placeholder="Enter text or morse code" style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"0.5rem",boxSizing:"border-box",resize:"vertical"}} />
    <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem"}}>
      <button onClick={()=>convert("to")} style={{padding:"0.5rem 1rem",background:"#6366f1",border:"none",borderRadius:"4px",color:"#fff",cursor:"pointer"}}>Text → Morse</button>
      <button onClick={()=>convert("from")} style={{padding:"0.5rem 1rem",background:"#0891b2",border:"none",borderRadius:"4px",color:"#fff",cursor:"pointer"}}>Morse → Text</button>
    </div>
    {result && <textarea readOnly value={result} rows={4} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",boxSizing:"border-box",resize:"vertical"}} />}
  </div>);
}