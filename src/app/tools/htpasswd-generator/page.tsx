"use client";
import { useState } from "react";
export default function HtpasswdGenerator() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const md5 = async (str: string) => {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  };
  const generate = async () => {
    if (!username || !password) return;
    const hash = await md5(username + ":" + password);
    const entry = `${username}:{SHA256}${btoa(hash)}`;
    setEntries(prev => [...prev.filter(e => !e.startsWith(username + ":")), entry]);
    setPassword("");
  };
  const file = entries.join("
");
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">.htpasswd Generator</h1>
      <p className="text-gray-400 text-sm mb-6">Generate Apache .htpasswd entries for basic auth. Note: Use a proper tool in production for bcrypt hashing.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && generate()} className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
        </div>
      </div>
      <button onClick={generate} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 mb-6">Add Entry</button>
      {entries.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">.htpasswd file ({entries.length} user{entries.length !== 1 ? "s" : ""})</span>
            <button onClick={() => { navigator.clipboard.writeText(file); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="text-xs px-3 py-1 bg-indigo-600 rounded">{copied ? "Copied!" : "Copy"}</button>
          </div>
          <pre className="bg-gray-800 rounded p-3 text-sm font-mono whitespace-pre-wrap">{file}</pre>
          <button onClick={() => setEntries([])} className="mt-2 text-xs text-red-400 hover:text-red-300">Clear all</button>
        </div>
      )}
    </div>
  );
}