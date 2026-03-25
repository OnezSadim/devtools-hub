"use client";
import { useState } from "react";
export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const speak = () => {
    if (!text) return;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate; u.pitch = pitch;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Text to Speech</h1>
    <textarea value={text} onChange={e=>setText(e.target.value)} rows={6} placeholder="Enter text to speak..." style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"1rem",boxSizing:"border-box",resize:"vertical"}} />
    <div style={{marginBottom:"0.5rem"}}>Rate: {rate}<input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))} style={{width:"100%"}} /></div>
    <div style={{marginBottom:"1rem"}}>Pitch: {pitch}<input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={e=>setPitch(Number(e.target.value))} style={{width:"100%"}} /></div>
    <button onClick={speak} style={{padding:"0.5rem 1rem",background:"#6366f1",border:"none",borderRadius:"4px",color:"#fff",cursor:"pointer",marginRight:"0.5rem"}}>Speak</button>
    <button onClick={()=>speechSynthesis.cancel()} style={{padding:"0.5rem 1rem",background:"#dc2626",border:"none",borderRadius:"4px",color:"#fff",cursor:"pointer"}}>Stop</button>
  </div>);
}