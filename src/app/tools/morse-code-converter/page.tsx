"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',0:'-----',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.'," ":'/'};
const RMORSE: Record<string,string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
export default function MorseCodeConverter() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"toMorse"|"fromMorse">("toMorse");
  const toMorse = (t:string) => t.toUpperCase().split("").map(c=>MORSE[c]||"").join(" ");
  const fromMorse = (t:string) => t.trim().split(" / ").map(w=>w.split(" ").map(c=>RMORSE[c]||"").join("")).join(" ");
  const result = mode==="toMorse" ? toMorse(text) : fromMorse(text);
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Morse Code Converter</h1>
    <p style={{color:"#888",marginBottom:20}}>Convert text to Morse code and back.</p>
    <div style={{display:"flex",gap:8,marginBottom:16}}>
      {(["toMorse","fromMorse"] as const).map(m=>(
        <button key={m} onClick={()=>setMode(m)} style={{padding:"8px 16px",background:mode===m?"#7c3aed":"#222",color:"#fff",border:"1px solid #444",borderRadius:6,cursor:"pointer"}}>{m==="toMorse"?"Text → Morse":"Morse → Text"}</button>
      ))}
    </div>
    <textarea value={text} onChange={e=>setText(e.target.value)} placeholder={mode==="toMorse"?"Enter text..":"Enter morse (use / for spaces)"} style={{width:"100%",height:120,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,padding:12,fontSize:14,boxSizing:"border-box"}} />
    {result && <div style={{marginTop:16,background:"#111",border:"1px solid #333",borderRadius:8,padding:16}}><strong>Result:</strong><br/><span style={{color:"#7c3aed",wordBreak:"break-all"}}>{result}</span></div>}
  </div>);
}