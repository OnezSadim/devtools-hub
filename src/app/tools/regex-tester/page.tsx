"use client";
import { useState, useMemo } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testStr, setTestStr] = useState("");
  const [error, setError] = useState("");

  const matches = useMemo(() => {
    if (!pattern) return [];
    try {
      const re = new RegExp(pattern, flags);
      setError("");
      const result: { match: string; index: number; groups?: Record<string, string> }[] = [];
      let m;
      if (flags.includes("g")) {
        while ((m = re.exec(testStr)) !== null) {
          result.push({ match: m[0], index: m.index, groups: m.groups });
          if (!m[0]) break;
        }
      } else {
        m = re.exec(testStr);
        if (m) result.push({ match: m[0], index: m.index, groups: m.groups });
      }
      return result;
    } catch (e: any) { setError(e.message); return []; }
  }, [pattern, flags, testStr]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Regex Tester</h1>
      <p className="text-gray-400 mb-6">Test regular expressions with live matching</p>
      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-400 mb-1">Pattern</label>
          <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 font-mono text-sm focus:border-blue-500 focus:outline-none" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="Enter regex pattern..." />
        </div>
        <div className="w-24">
          <label className="block text-sm text-gray-400 mb-1">Flags</label>
          <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 font-mono text-sm focus:border-blue-500 focus:outline-none" value={flags} onChange={(e) => setFlags(e.target.value)} />
        </div>
      </div>
      {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
      <label className="block text-sm text-gray-400 mb-1">Test String</label>
      <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none mb-4" value={testStr} onChange={(e) => setTestStr(e.target.value)} placeholder="Enter test string..." />
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-400 mb-2">Matches ({matches.length})</h2>
        {matches.length === 0 ? <p className="text-gray-600 text-sm">No matches</p> : (
          <div className="space-y-2">
            {matches.map((m, i) => (
              <div key={i} className="flex items-center gap-4 text-sm">
                <span className="text-blue-400 font-mono">{i + 1}.</span>
                <code className="bg-gray-800 px-2 py-1 rounded text-green-400">{m.match}</code>
                <span className="text-gray-500">index: {m.index}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
