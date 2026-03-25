"use client";
import { useState, useRef } from "react";
export default function ImageToBase64() {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { const d = ev.target?.result as string; setResult(d); setPreview(d); };
    reader.readAsDataURL(file);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Image to Base64</h1>
        <p className="text-gray-400 mb-6">Convert images to Base64 data URLs for embedding in HTML/CSS</p>
        <div onClick={()=>inputRef.current?.click()} className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 mb-6">
          <p className="text-gray-400">Click to upload image</p>
          <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </div>
        {preview && <img src={preview} alt="Preview" className="max-h-48 mb-6 rounded" />}
        {result && <div>
          <textarea value={result} readOnly className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-xs mb-2" />
          <button onClick={()=>navigator.clipboard.writeText(result)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Copy Base64</button>
        </div>}
      </div>
    </div>
  );
}