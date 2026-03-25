"use client";
import { useState, useRef } from "react";

export default function ImageToBase64() {
  const [result, setResult] = useState('');
  const [preview, setPreview] = useState('');
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      setPreview(dataUrl);
      setResult(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Image to Base64</h1>
        <p className="text-gray-400 mb-6">Convert any image file to a Base64 data URL.</p>
        <input type="file" accept="image/*" ref={fileRef} onChange={handleFile} className="mb-4 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white" />
        {preview && <img src={preview} alt="preview" className="mb-4 max-h-48 rounded" />}
        {result && (
          <div>
            <label className="text-sm text-gray-400">Base64 Data URL</label>
            <textarea readOnly value={result} rows={6} className="w-full mt-1 p-3 bg-gray-800 rounded font-mono text-xs" />
            <button onClick={() => navigator.clipboard.writeText(result)} className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Copy</button>
          </div>
        )}
      </div>
    </main>
  );
}