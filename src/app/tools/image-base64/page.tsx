'use client';
import { useState, useCallback } from 'react';
export default function ImageBase64() {
  const [base64, setBase64] = useState('');
  const [mime, setMime] = useState('');
  const [name, setName] = useState('');
  const [copied, setCopied] = useState(false);
  const handleFile = useCallback((file: File) => {
    setName(file.name);
    setMime(file.type);
    const reader = new FileReader();
    reader.onload = e => setBase64((e.target?.result as string) || '');
    reader.readAsDataURL(file);
  }, []);
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); };
  const copy = (str: string) => { navigator.clipboard.writeText(str); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const dataUrl = base64;
  const rawBase64 = base64.split(',')[1] || '';
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Image to Base64</h1>
        <p className="text-gray-400 mb-8">Convert images to Base64 data URLs for embedding in HTML/CSS.</p>
        <div onDrop={onDrop} onDragOver={e => e.preventDefault()}
          className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center mb-6 hover:border-blue-500 transition-colors">
          <input type="file" accept="image/*" onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
            className="hidden" id="img-upload" />
          <label htmlFor="img-upload" className="cursor-pointer">
            <div className="text-4xl mb-3">🖼️</div>
            <p className="text-gray-400">Drop an image or <span className="text-blue-400 underline">click to browse</span></p>
            <p className="text-gray-600 text-sm mt-1">PNG, JPG, GIF, SVG, WebP</p>
          </label>
        </div>
        {base64 && (
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-xl p-4 flex items-center gap-4">
              <img src={dataUrl} alt={name} className="w-16 h-16 object-cover rounded-lg" />
              <div><p className="font-medium">{name}</p><p className="text-gray-400 text-sm">{mime} · {Math.round(rawBase64.length * 0.75 / 1024)} KB</p></div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-400">Data URL</label>
                <div className="flex gap-2">
                  <button onClick={() => copy(dataUrl)} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300">{copied ? 'Copied!' : 'Copy Data URL'}</button>
                  <button onClick={() => copy(rawBase64)} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300">Copy Base64</button>
                </div>
              </div>
              <textarea readOnly value={dataUrl}
                className="w-full h-32 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 font-mono text-xs text-green-400 focus:outline-none resize-none" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}