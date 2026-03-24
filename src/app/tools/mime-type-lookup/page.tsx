"use client";
import { useState } from "react";
const MIMES: Record<string,string> = {
  "html":"text/html","htm":"text/html","css":"text/css","js":"application/javascript","ts":"application/typescript","json":"application/json","xml":"application/xml","pdf":"application/pdf","zip":"application/zip","gz":"application/gzip","tar":"application/x-tar","png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","gif":"image/gif","svg":"image/svg+xml","webp":"image/webp","ico":"image/x-icon","bmp":"image/bmp","tiff":"image/tiff","mp4":"video/mp4","webm":"video/webm","ogg":"video/ogg","avi":"video/x-msvideo","mov":"video/quicktime","mp3":"audio/mpeg","wav":"audio/wav","flac":"audio/flac","aac":"audio/aac","woff":"font/woff","woff2":"font/woff2","ttf":"font/ttf","otf":"font/otf","csv":"text/csv","txt":"text/plain","md":"text/markdown","yaml":"application/yaml","yml":"application/yaml","toml":"application/toml","sh":"application/x-sh","py":"text/x-python","rb":"application/x-ruby","php":"application/x-httpd-php","java":"text/x-java-source","c":"text/x-c","cpp":"text/x-c++","h":"text/x-c","go":"text/x-go","rs":"text/x-rust","wasm":"application/wasm","exe":"application/vnd.microsoft.portable-executable","dmg":"application/x-apple-diskimage","deb":"application/vnd.debian.binary-package","apk":"application/vnd.android.package-archive"
};
export default function MimeLookup() {
  const [q, setQ] = useState("");
  const ext = q.replace(/^\./,"").toLowerCase();
  const mime = ext ? (MIMES[ext]||"Unknown") : null;
  const reverse = q.includes("/") ? Object.entries(MIMES).filter(([,v])=>v.includes(q.toLowerCase())).map(([k])=>k) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">MIME Type Lookup</h1>
      <p className="text-gray-400 mb-6">Find MIME types for file extensions, or extensions for MIME types</p>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder=".jpg or image/jpeg" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm mb-6" />
      {mime && <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4"><p className="text-gray-400 text-sm mb-1">MIME type for .{ext}</p><p className="font-mono text-green-400 text-lg">{mime}</p></div>}
      {reverse && reverse.length>0 && <div className="bg-gray-900 border border-gray-700 rounded-lg p-4"><p className="text-gray-400 text-sm mb-2">Extensions for this MIME type:</p><div className="flex flex-wrap gap-2">{reverse.map(e=><span key={e} className="bg-gray-800 px-2 py-1 rounded font-mono text-sm">.{e}</span>)}</div></div>}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">{Object.entries(MIMES).slice(0,20).map(([e,m])=>(<div key={e} className="bg-gray-900 border border-gray-800 rounded p-2 text-xs"><div className="text-blue-400 font-mono">.{e}</div><div className="text-gray-400 truncate">{m}</div></div>))}</div>
    </main>
  );
}