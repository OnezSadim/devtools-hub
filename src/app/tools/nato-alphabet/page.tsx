"use client";
import { useState } from "react";
export default function NatoAlphabet() {
  const [text, setText] = useState("");
  const NATO: Record<string,string> = {A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliet",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"X-ray",Y:"Yankee",Z:"Zulu","0":"Zero","1":"One","2":"Two","3":"Three","4":"Four","5":"Five","6":"Six","7":"Seven","8":"Eight","9":"Nine"};
  const result = text.toUpperCase().split("").map(c=>c==" "?"[space]":NATO[c]||c).join(" ");
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>NATO Phonetic Alphabet</h1>
    <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type text to convert..." style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"1rem",boxSizing:"border-box"}} />
    {text && <div style={{background:"#1e293b",padding:"1rem",borderRadius:"4px",lineHeight:"2"}}>{result}</div>}
  </div>);
}