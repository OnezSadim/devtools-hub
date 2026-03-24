"use client";
import { useState } from "react";
export default function SemverCalculator() {
  const [v, setV] = useState("1.4.2");
  const parse = (s: string) => {
    const m = s.match(/^(\d+)\.(\d+)\.(\d+)(?:-([\w.]+))?(?:\+([\w.]+))?$/);
    if (!m) return null;
    return { major: +m[1], minor: +m[2], patch: +m[3], pre: m[4]||null, build: m[5]||null };
  };
  const p = parse(v);
  const bump = (t: string) => {
    if (!p) return "";
    if (t==="major") return `${p.major+1}.0.0`;
    if (t==="minor") return `${p.major}.${p.minor+1}.0`;
    if (t==="patch") return `${p.major}.${p.minor}.${p.patch+1}`;
    return "";
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">SemVer Calculator</h1>
      <p className="text-gray-400 mb-6">Parse and bump semantic version numbers.</p>
      <input value={v} onChange={e=>setV(e.target.value)} placeholder="1.0.0" className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono mb-6" />
      {p ? (
        <div className="max-w-lg space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {["major","minor","patch"].map(k=>(
              <div key={k} className="p-4 bg-gray-800 rounded text-center">
                <p className="text-gray-400 text-xs uppercase mb-1">{k}</p>
                <p className="text-3xl font-bold text-blue-400">{p[k as keyof typeof p]}</p>
              </div>
            ))}
          </div>
          {p.pre && <div className="p-3 bg-gray-800 rounded"><span className="text-yellow-400 text-sm">Pre-release: </span><span className="font-mono">{p.pre}</span></div>}
          {p.build && <div className="p-3 bg-gray-800 rounded"><span className="text-gray-400 text-sm">Build: </span><span className="font-mono">{p.build}</span></div>}
          <div>
            <h2 className="text-lg font-semibold mb-2">Next Versions</h2>
            <div className="space-y-2">
              {["major","minor","patch"].map(t=>(
                <div key={t} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                  <span className="text-gray-300 capitalize">{t} bump</span>
                  <div className="flex items-center gap-2">
                    <code className="text-green-400 font-mono">{bump(t)}</code>
                    <button onClick={()=>setV(bump(t))} className="text-xs text-blue-400 hover:text-blue-300">Use</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : <p className="text-red-400">Invalid semver. Use format: MAJOR.MINOR.PATCH</p>}
    </main>
  );
}