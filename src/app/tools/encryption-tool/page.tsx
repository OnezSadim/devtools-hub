"use client";
import { useState } from "react";
export default function EncryptionTool() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt"|"decrypt">("encrypt");
  const [error, setError] = useState("");
  const strToBytes = (s: string) => new TextEncoder().encode(s);
  const bytesToStr = (b: Uint8Array) => new TextDecoder().decode(b);
  const toHex = (b: Uint8Array) => Array.from(b).map(x=>x.toString(16).padStart(2,"0")).join("");
  const fromHex = (h: string) => new Uint8Array(h.match(/.{2}/g)!.map(b=>parseInt(b,16)));
  const getKey = async (k: string) => { const raw = await crypto.subtle.importKey("raw", strToBytes(k.padEnd(32,"0").slice(0,32)), "AES-CBC", false, ["encrypt","decrypt"]); return raw; };
  const run = async () => {
    setError(""); setOutput("");
    if (!key) { setError("Key required"); return; }
    try {
      const k = await getKey(key);
      if (mode==="encrypt") {
        const iv = crypto.getRandomValues(new Uint8Array(16));
        const ct = await crypto.subtle.encrypt({name:"AES-CBC",iv}, k, strToBytes(input));
        setOutput(toHex(iv)+toHex(new Uint8Array(ct)));
      } else {
        const hex = input.trim();
        const iv = fromHex(hex.slice(0,32));
        const ct = fromHex(hex.slice(32));
        const pt = await crypto.subtle.decrypt({name:"AES-CBC",iv}, k, ct);
        setOutput(bytesToStr(new Uint8Array(pt)));
      }
    } catch { setError("Failed. Wrong key or invalid ciphertext."); }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AES Encryption Tool</h1>
        <p className="text-gray-400 mb-6">Client-side AES-CBC encryption using Web Crypto API</p>
        <div className="flex gap-4 mb-4">
          <button onClick={()=>setMode("encrypt")} className={`px-4 py-2 rounded ${mode==="encrypt"?"bg-blue-600":"bg-gray-800"}`}>Encrypt</button>
          <button onClick={()=>setMode("decrypt")} className={`px-4 py-2 rounded ${mode==="decrypt"?"bg-blue-600":"bg-gray-800"}`}>Decrypt</button>
        </div>
        <input value={key} onChange={e=>setKey(e.target.value)} placeholder="Encryption key..." className="w-full bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="encrypt"?"Text to encrypt..":"Hex ciphertext to decrypt.."} className="w-full h-28 bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <button onClick={run} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold mb-4">{mode==="encrypt"?"Encrypt":"Decrypt"}</button>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        {output && <div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="font-mono break-all text-sm">{output}</p><button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-blue-400 text-sm">Copy</button></div>}
      </div>
    </div>
  );
}