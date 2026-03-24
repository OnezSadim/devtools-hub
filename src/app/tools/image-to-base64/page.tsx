"use client";
import { useState, useCallback } from "react";
export default function ImageToBase64() {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("");
  const handleFile = useCallback((file: File) => {
    if (!file) return;
    setName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setPreview(base64);
      setResult(base64);
    };
    reader.readAsDataURL(file);
  }, []);
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); };
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Image to Base64 Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert images to Base64 encoded strings for embedding in HTML/CSS/JS.</p>
      <div onDrop={onDrop} onDragOver={e=>e.preventDefault()} style={{border:"2px dashed #334155",borderRadius:8,padding:"3rem",textAlign:"center",marginBottom:"1.5rem",cursor:"pointer"}} onClick={()=>document.getElementById("imgInput")?.click()}>
        {preview ? <img src={preview} alt={name} style={{maxWidth:"100%",maxHeight:200,objectFit:"contain"}} /> : <div style={{color:"#64748b"}}>Drop image here or click to upload</div>}
        <input id="imgInput" type="file" accept="image/*" style={{display:"none"}} onChange={e=>e.target.files&&handleFile(e.target.files[0])} />
      </div>
      {result && (
        <div style={{background:"#1e293b",borderRadius:8,padding:"1.5rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
            <span style={{color:"#94a3b8",fontSize:"0.875rem"}}>{name} — {(result.length/1.37/1024).toFixed(1)} KB</span>
            <button onClick={()=>navigator.clipboard.writeText(result)} style={{background:"#3b82f6",color:"white",border:"none",borderRadius:4,padding:"0.4rem 1rem",cursor:"pointer",fontSize:"0.875rem"}}>Copy Base64</button>
          </div>
          <textarea readOnly value={result} rows={6} style={{width:"100%",background:"#0f172a",color:"#38bdf8",border:"1px solid #334155",borderRadius:4,padding:"0.75rem",fontSize:"0.75rem",resize:"vertical",boxSizing:"border-box"}} />
        </div>
      )}
    </div>
  );
}