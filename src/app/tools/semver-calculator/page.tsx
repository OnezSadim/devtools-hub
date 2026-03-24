"use client";
import { useState } from "react";
export default function SemverCalculator() {
  const [version, setVersion] = useState("1.2.3");
  const bump = (type: string) => {
    const parts = version.split(".").map(Number);
    if (parts.length !== 3) return;
    if (type === "major") { parts[0]++; parts[1]=0; parts[2]=0; }
    if (type === "minor") { parts[1]++; parts[2]=0; }
    if (type === "patch") parts[2]++;
    setVersion(parts.join("."));
  };
  const isValid = /^\d+\.\d+\.\d+(-[\w.]+)?(\+[\w.]+)?$/.test(version);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Semver Calculator</h1>
      <p className="text-gray-400 mb-6">Semantic version bump calculator</p>
      <div className="max-w-md">
        <input value={version} onChange={e=>setVersion(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-2xl text-center mb-4" />
        {!isValid && <p className="text-red-400 text-sm mb-3">Invalid semver format</p>}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button onClick={()=>bump("major")} className="bg-red-700 hover:bg-red-600 py-3 rounded font-bold">MAJOR<br/><span className="text-xs font-normal opacity-75">Breaking change</span></button>
          <button onClick={()=>bump("minor")} className="bg-yellow-700 hover:bg-yellow-600 py-3 rounded font-bold">MINOR<br/><span className="text-xs font-normal opacity-75">New feature</span></button>
          <button onClick={()=>bump("patch")} className="bg-green-700 hover:bg-green-600 py-3 rounded font-bold">PATCH<br/><span className="text-xs font-normal opacity-75">Bug fix</span></button>
        </div>
        <div className="bg-gray-900 rounded p-4">
          <h3 className="font-semibold mb-2">Semver Rules</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><span className="text-red-400">MAJOR</span> — incompatible API changes</li>
            <li><span className="text-yellow-400">MINOR</span> — backwards-compatible features</li>
            <li><span className="text-green-400">PATCH</span> — backwards-compatible bug fixes</li>
          </ul>
        </div>
      </div>
    </main>
  );
}