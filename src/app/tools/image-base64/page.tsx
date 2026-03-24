"use client";
import { useState, useRef } from "react";
export default function ImageBase64() {
  const [b64, setB64] = useState("");
  const [preview, setPreview] = useState("");
  const [info, setInfo] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if(!f) return;
    setInfo(`${f.name} (${f.type}, ${(f.size/1024).toFixed(1)} KB)`);
    const r = new FileReader();
    r.onload = (ev) => { const res = ev.target?.result as string; setB64(res); setPreview(res); };
    r.readAsDataURL(f);
  };
  const decodeB64 = () => {
    if(!b64.startsWith("data:")) { try { const url="data:image/png;base64,"+b64; setPreview(url); } catch(e){} }
  };
  const copy = () => navigator.clipboard.writeText(b64);
  return (
    <div style={{maxWidth:700,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Image ↔ Base64</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Convert images to Base64 data URLs and back.</p>
      <div style={{border:"2px dashed #333",borderRadius:8,padding:"2rem",textAlign:"center",marginBottom:"1.5rem",cursor:"pointer"}} onClick={()=>fileRef.current?.click()}>
        <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>📁</div>
        <div style={{color:"#aaa"}}>Click to upload image</div>
        {info && <div style={{marginTop:"0.5rem",color:"#7c3aed",fontSize:"0.9rem"}}>{info}</div>}
      </div>
      <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{display:"none"}} />
      <textarea value={b64} onChange={e=>setB64(e.target.value)} placeholder="Or paste Base64 string here..." style={{width:"100%",height:120,padding:"1rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontFamily:"monospace",fontSize:"0.75rem",resize:"vertical",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:"1rem",margin:"1rem 0"}}>
        <button onClick={copy} style={{flex:1,padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",cursor:"pointer"}}>Copy Base64</button>
        <button onClick={decodeB64} style={{flex:1,padding:"0.75rem",background:"#7c3aed",border:"none",borderRadius:4,color:"#fff",cursor:"pointer"}}>Preview Image</button>
      </div>
      {preview && <img src={preview} alt="preview" style={{maxWidth:"100%",borderRadius:4,border:"1px solid #333"}} onError={()=>setPreview("")} />}
    </div>
  );
}