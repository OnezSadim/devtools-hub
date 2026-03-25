"use client";
import { useState } from "react";
export default function FaviconGenerator() {
  const [emoji, setEmoji] = useState("🚀");
  const [size, setSize] = useState(32);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><text y=".9em" font-size="${size * 0.85}">${emoji}</text></svg>`;
  const dataUrl = "data:image/svg+xml," + encodeURIComponent(svg);
  const linkTag = `<link rel="icon" href="${dataUrl}" />`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Favicon Generator</h1>
      <p className="text-gray-400 mb-6">Generate an emoji favicon with SVG data URL — no image file needed.</p>
      <div className="flex gap-4 items-center mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Emoji</label>
          <input className="bg-gray-900 border border-gray-700 rounded p-2 text-2xl w-20 text-center" value={emoji} onChange={e => setEmoji(e.target.value)} maxLength={2} />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Size</label>
          <select className="bg-gray-900 border border-gray-700 rounded p-2" value={size} onChange={e => setSize(Number(e.target.value))}>
            <option value={16}>16px</option>
            <option value={32}>32px</option>
            <option value={64}>64px</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <img src={dataUrl} width={size} height={size} alt="favicon preview" className="border border-gray-600 rounded" />
        <span className="text-gray-400 text-sm">Preview</span>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">HTML Link Tag</label>
        <textarea className="w-full h-20 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={linkTag} readOnly />
      </div>
      <button onClick={() => navigator.clipboard.writeText(linkTag)} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button>
    </main>
  );
}