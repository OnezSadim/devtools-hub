"use client";
import { useState } from "react";
export default function ImageToBase64() {
  const [b64, setB64] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const handleFile = e => {
    const f = e.target.files[0];
    if(!f) return;
    setName(f.name);
    setSize((f.size/1024).toFixed(1)+" KB");
    const r = new FileReader();
    r.onload = ev => setB64(ev.target.result);
    r.readAsDataURL(f);
  };
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Image to Base64</h1>
      <input type="file" accept="image/*" onChange={handleFile} className="mb-4 text-gray-300" />
      {b64 && (
        <div>
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span>{name}</span><span>{size}</span>
          </div>
          <img src={b64} alt="preview" className="max-h-40 rounded mb-4" />
          <textarea className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32 font-mono text-xs" value={b64} readOnly />
          <button onClick={()=>navigator.clipboard.writeText(b64)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Copy Base64</button>
        </div>
      )}
    </div>
  );
}