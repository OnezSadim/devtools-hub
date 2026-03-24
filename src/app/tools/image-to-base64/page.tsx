"use client";
import { useState, useCallback } from "react";
export default function ImageToBase64() {
  const [result, setResult] = useState("");
  const [filename, setFilename] = useState("");
  const [mime, setMime] = useState("");
  const [size, setSize] = useState("");
  const handleFile = useCallback((file: File) => {
    setFilename(file.name);
    setMime(file.type);
    setSize((file.size/1024).toFixed(1)+" KB");
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = (e.target?.result as string);
      setResult(base64);
    };
    reader.readAsDataURL(file);
  }, []);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Image to Base64</h1>
      <p className="text-gray-400 mb-6">Convert images to Base64 encoded strings for use in HTML/CSS</p>
      <div className="max-w-2xl space-y-4">
        <div onDrop={e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f)handleFile(f);}} onDragOver={e=>e.preventDefault()} className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
          <p className="text-gray-400 mb-3">Drag & drop an image here</p>
          <label className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer">
            Choose File
            <input type="file" accept="image/*" className="hidden" onChange={e=>{const f=e.target.files?.[0];if(f)handleFile(f);}} />
          </label>
        </div>
        {result && (
          <>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>File: {filename}</span>
              <span>Type: {mime}</span>
              <span>Size: {size}</span>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <img src={result} alt="preview" className="max-h-48 mx-auto mb-4" />
            </div>
            <textarea readOnly value={result} rows={4} className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-xs text-green-400" />
            <div className="flex gap-2">
              <button onClick={()=>navigator.clipboard.writeText(result)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy Base64</button>
              <button onClick={()=>navigator.clipboard.writeText(`<img src="${result}" alt="image" />`)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Copy HTML</button>
              <button onClick={()=>navigator.clipboard.writeText(`background-image: url('${result}');`)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Copy CSS</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}