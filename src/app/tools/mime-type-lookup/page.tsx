"use client";
import { useState } from "react";
const mimes: Record<string, {mime:string, desc:string}> = {
  ".html": {mime:"text/html", desc:"HTML document"},
  ".css": {mime:"text/css", desc:"Cascading Style Sheet"},
  ".js": {mime:"application/javascript", desc:"JavaScript"},
  ".ts": {mime:"application/typescript", desc:"TypeScript"},
  ".json": {mime:"application/json", desc:"JSON data"},
  ".xml": {mime:"application/xml", desc:"XML document"},
  ".png": {mime:"image/png", desc:"PNG image"},
  ".jpg": {mime:"image/jpeg", desc:"JPEG image"},
  ".gif": {mime:"image/gif", desc:"GIF image"},
  ".svg": {mime:"image/svg+xml", desc:"SVG image"},
  ".webp": {mime:"image/webp", desc:"WebP image"},
  ".mp4": {mime:"video/mp4", desc:"MPEG-4 video"},
  ".mp3": {mime:"audio/mpeg", desc:"MP3 audio"},
  ".pdf": {mime:"application/pdf", desc:"PDF document"},
  ".zip": {mime:"application/zip", desc:"ZIP archive"},
  ".csv": {mime:"text/csv", desc:"CSV spreadsheet"},
  ".txt": {mime:"text/plain", desc:"Plain text"},
  ".md": {mime:"text/markdown", desc:"Markdown document"},
  ".woff2": {mime:"font/woff2", desc:"Web font WOFF2"},
  ".ico": {mime:"image/x-icon", desc:"Icon file"},
  ".webmanifest": {mime:"application/manifest+json", desc:"Web app manifest"},
  ".wasm": {mime:"application/wasm", desc:"WebAssembly module"},
};
export default function MimeTypeLookup() {
  const [search, setSearch] = useState("");
  const filtered = Object.entries(mimes).filter(([ext,info]) =>
    ext.includes(search) || info.mime.includes(search) || info.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">MIME Type Lookup</h1>
      <p className="text-gray-400 mb-6">Find MIME types for file extensions</p>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search extension or MIME type..." className="w-full max-w-md bg-gray-900 border border-gray-700 rounded p-3 mb-6"/>
      <div className="grid gap-2">
        {filtered.map(([ext,info])=>(
          <div key={ext} className="bg-gray-900 rounded p-3 flex items-center gap-4">
            <span className="font-mono text-yellow-400 w-24">{ext}</span>
            <span className="font-mono text-blue-400 flex-1">{info.mime}</span>
            <span className="text-gray-400 text-sm">{info.desc}</span>
            <button onClick={()=>navigator.clipboard.writeText(info.mime)} className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded">Copy</button>
          </div>
        ))}
      </div>
    </main>
  );
}