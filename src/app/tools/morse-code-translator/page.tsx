"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."," ":"/"};
const REVERSE: Record<string,string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
function toMorse(text: string) { return text.toUpperCase().split("").map(c=>MORSE[c]||"").filter(Boolean).join(" "); }
function fromMorse(morse: string) { return morse.split(" ").map(c=>REVERSE[c]||"").join(""); }
export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"toMorse"|"fromMorse">("toMorse");
  const output = mode==="toMorse" ? toMorse(text) : fromMorse(text);
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Morse Code Translator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert text to Morse code or decode Morse code back to text.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem"}}>
        <button onClick={()=>setMode("toMorse")} style={{background:mode==="toMorse"?"#3b82f6":"#1e293b",color:"#e2e8f0",border:"none",borderRadius:6,padding:"0.5rem 1.5rem",cursor:"pointer"}}>Text → Morse</button>
        <button onClick={()=>setMode("fromMorse")} style={{background:mode==="fromMorse"?"#3b82f6":"#1e293b",color:"#e2e8f0",border:"none",borderRadius:6,padding:"0.5rem 1.5rem",cursor:"pointer"}}>Morse → Text</button>
      </div>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder={mode==="toMorse"?"Enter text..":"Enter morse code (use spaces between letters, / for word break)"} rows={4} style={{width:"100%",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:8,padding:"0.75rem",fontSize:"1rem",marginBottom:"1.5rem",resize:"vertical",boxSizing:"border-box"}} />
      <div style={{background:"#1e293b",borderRadius:8,padding:"1.5rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
          <span style={{color:"#64748b",fontSize:"0.875rem"}}>Output</span>
          <button onClick={()=>navigator.clipboard.writeText(output)} style={{background:"#334155",color:"#e2e8f0",border:"none",borderRadius:4,padding:"0.25rem 0.75rem",cursor:"pointer",fontSize:"0.75rem"}}>Copy</button>
        </div>
        <div style={{color:"#38bdf8",wordBreak:"break-all",letterSpacing:"0.05em"}}>{output||<span style={{color:"#475569"}}>Output appears here...</span>}</div>
      </div>
    </div>
  );
}