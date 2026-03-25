"use client";
import { useState } from "react";
export default function ImageBase64Converter() {
  const [b64, setB64] = useState("");
  const [mime, setMime] = useState("image/png");
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setMime(f.type);
    const reader = new FileReader();
    reader.onload = ev => setB64((ev.target?.result as string) || "");
    reader.readAsDataURL(f);
  };
  const dataUrl = b64 ? b64 : "";
  const raw = b64 ? b64.split(",")[1] : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Image to Base64</h1>
      <p className="text-gray-400 mb-6">Convert images to Base64 data URLs for embedding in HTML/CSS.</p>
      <input type="file" accept="image/*" onChange={handleFile} className="block mb-4 text-gray-300" />
      {b64 && (
        <div className="space-y-4">
          <img src={dataUrl} alt="preview" className="max-h-48 rounded border border-gray-700" />
          <div>
            <label className="block text-sm text-gray-400 mb-1">Data URL</label>
            <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-xs" value={dataUrl} readOnly />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Raw Base64</label>
            <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-xs" value={raw} readOnly />
          </div>
          <button onClick={() => navigator.clipboard.writeText(dataUrl)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy Data URL</button>
        </div>
      )}
    </main>
  );
}