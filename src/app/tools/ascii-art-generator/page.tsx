"use client";
import { useState } from "react";
export default function AsciiArtGenerator() {
  const [text, setText] = useState("");
  const [art, setArt] = useState("");
  const letters: Record<string,string[]> = {
    A:[" _ ","/_\\","/ \\"],B:["|- ","|_|","|-'"],C:[" _","/ ","\\_"],D:["|- ","| |","|-'"],E:["|=","|_","|="],F:["|=","|_","| "],G:["._ ","/ _","\\_|"],H:["| |","|_|","| |"],I:["_","|","_"],J:[" |"," |","_|"],K:["|\\","|-","|\\"],L:["| ","| ","|_"],M:["|\\/|","| |","| |"],N:["|_|","|\\","| "],O:[" _ ","| |"," - "],P:["|- ","|_|","| "],Q:[" _ ","| |"," -'"],R:["|- ","|_|","| "],S:[" _","(_"," _)"],T:["-|-"," | "," | "],U:["| |","| |","|_|"],V:["\\. /"," \\/ ","    "],W:["| |","| |","\\/"],X:["\\/","/\\","  "],Y:["\\/ "," | "," | "],Z:["_","/","_"]," ":["   ","   ","   "]
  };
  function generate() {
    const upper = text.toUpperCase().slice(0,12);
    const rows = ["";","",""];
    for (const ch of upper) {
      const l = letters[ch] || letters[" "];
      for (let i = 0; i < 3; i++) rows[i] += (l[i] || "   ") + " ";
    }
    setArt(rows.join("\n"));
  }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>ASCII Art Generator</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text (max 12 chars)" maxLength={12} style={{flex:1,padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} /><button onClick={generate} style={{padding:"0.5rem 1rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Generate</button></div>{art&&<pre style={{background:"#1e293b",padding:"1.5rem",borderRadius:"4px",fontSize:"1.2rem",overflowX:"auto"}}>{art}</pre>}</div>);
}
