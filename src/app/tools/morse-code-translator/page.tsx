"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----.",".":".-.-.-",",":"--..--","?":"..--.."};
const REVERSE: Record<string,string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [mode, setMode] = useState<"toMorse"|"fromMorse">("toMorse");
  function translate() {
    if (mode==="toMorse") { setMorse(text.toUpperCase().split("").map(c=>MORSE[c]||" ").join(" ")); }
    else { setText(text.split(" / ").map(word=>word.split(" ").map(c=>REVERSE[c]||"").join("")).join(" ")); }
  }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Morse Code Translator</h1><div style={{marginBottom:"1rem"}}><button onClick={()=>setMode("toMorse")} style={{padding:"0.5rem 1rem",background:mode==="toMorse"?"#3b82f6":"#1e293b",color:"#fff",border:"1px solid #334155",borderRadius:"4px 0 0 4px",cursor:"pointer"}}>Text → Morse</button><button onClick={()=>setMode("fromMorse")} style={{padding:"0.5rem 1rem",background:mode==="fromMorse"?"#3b82f6":"#1e293b",color:"#fff",border:"1px solid #334155",borderRadius:"0 4px 4px 0",cursor:"pointer"}}>Morse → Text</button></div><textarea value={text} onChange={e=>setText(e.target.value)} placeholder={mode==="toMorse"?"Enter text":"Enter morse code (use / between words)"} rows={4} style={{width:"100%",padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",marginBottom:"1rem",boxSizing:"border-box"}} /><button onClick={translate} style={{padding:"0.5rem 1rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"1rem"}}>Translate</button>{morse&&<div style={{background:"#1e293b",padding:"1rem",borderRadius:"4px",wordBreak:"break-all"}}>{morse}</div>}</div>);
}
