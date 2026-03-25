"use client";
import { useState, useRef } from "react";
export default function ImageBase64Converter() {
  const [b64, setB64] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [size, setSize] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMimeType(file.type);
    setSize((file.size / 1024).toFixed(2) + " KB");
    const reader = new FileReader();
    reader.onload = ev => setB64(ev.target?.result as string);
    reader.readAsDataURL(file);
  };
  const dataUrl = b64;
  const base64Only = b64.includes(",") ? b64.split(",")[1] : b64;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Image to Base64 Converter</h1>
      <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center mb-4 cursor-pointer hover:border-indigo-500" onClick={() => fileRef.current?.click()}>
        <p className="text-gray-400">Click to select an image</p>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
      </div>
      {b64 && (
        <div className="space-y-4">
          <div className="flex gap-4 text-sm text-gray-400">
            <span>Type: {mimeType}</span>
            <span>Size: {size}</span>
          </div>
          <img src={dataUrl} alt="preview" className="max-h-40 rounded" />
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Data URL</span>
              <button onClick={() => navigator.clipboard.writeText(dataUrl)} className="text-xs px-3 py-1 bg-indigo-600 rounded">Copy</button>
            </div>
            <textarea readOnly value={dataUrl} className="w-full h-20 bg-gray-800 rounded p-2 text-xs font-mono resize-none" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Base64 Only</span>
              <button onClick={() => navigator.clipboard.writeText(base64Only)} className="text-xs px-3 py-1 bg-indigo-600 rounded">Copy</button>
            </div>
            <textarea readOnly value={base64Only} className="w-full h-20 bg-gray-800 rounded p-2 text-xs font-mono resize-none" />
          </div>
        </div>
      )}
    </div>
  );
}