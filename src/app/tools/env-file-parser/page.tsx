"use client";
import { useState } from "react";
export default function EnvFileParser() {
  const [env, setEnv] = useState("DATABASE_URL=postgres://user:pass@localhost/db
APP_PORT=3000
DEBUG=true
# Comment line
API_KEY=sk-abc123
EMPTY_VAR=
QUOTED="hello world"");
  const parse = () => {
    return env.split("
").filter(l=>l.trim() && !l.trim().startsWith("#")).map(line=>{
      const idx = line.indexOf("=");
      if (idx === -1) return null;
      const key = line.slice(0,idx).trim();
      let val = line.slice(idx+1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith('\`') && val.endsWith('\`'))) val = val.slice(1,-1);
      return { key, val, type: val === "" ? "empty" : /^\d+$/.test(val) ? "number" : /^(true|false)$/i.test(val) ? "boolean" : "string" };
    }).filter(Boolean);
  };
  const vars = parse();
  const typeColor = (t: string) => t=="number" ? "text-blue-400" : t=="boolean" ? "text-yellow-400" : t=="empty" ? "text-gray-500" : "text-green-400";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">.env File Parser</h1>
      <p className="text-gray-400 mb-6">Parse and inspect .env files.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">.env content</label>
          <textarea value={env} onChange={e=>setEnv(e.target.value)} rows={12} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm resize-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{vars.length} variables</label>
          <div className="space-y-2">
            {vars.map((v,i)=>v&&(
              <div key={i} className="p-3 bg-gray-800 rounded flex justify-between items-start">
                <div><p className="font-mono text-white text-sm">{v.key}</p><p className="font-mono text-gray-300 text-xs mt-1 break-all">{v.val || "(empty)"}</p></div>
                <span className={"text-xs font-mono ml-2 "+typeColor(v.type)}>{v.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}