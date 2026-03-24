"use client";
import { useState } from "react";

export default function DiffChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState<{line: number; type: string; text: string}[]>([]);

  const compare = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const maxLen = Math.max(lines1.length, lines2.length);
    const result = [];
    for (let i = 0; i < maxLen; i++) {
      const l1 = lines1[i] ?? "";
      const l2 = lines2[i] ?? "";
      if (l1 === l2) result.push({line: i+1, type: "same", text: l1});
      else {
        if (lines1[i] !== undefined) result.push({line: i+1, type: "removed", text: l1});
        if (lines2[i] !== undefined) result.push({line: i+1, type: "added", text: l2});
      }
    }
    setDiff(result);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Text Diff Checker</h1>
      <p className="text-gray-400 mb-6">Compare two texts and see the differences line by line.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <textarea value={text1} onChange={e => setText1(e.target.value)} placeholder="Original text..." className="w-full h-64 bg-gray-800 rounded p-3 font-mono text-sm" />
        <textarea value={text2} onChange={e => setText2(e.target.value)} placeholder="Modified text..." className="w-full h-64 bg-gray-800 rounded p-3 font-mono text-sm" />
      </div>
      <button onClick={compare} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Compare</button>
      {diff.length > 0 && (
        <div className="bg-gray-800 rounded p-4 font-mono text-sm">
          {diff.map((d, i) => (
            <div key={i} className={`py-0.5 px-2 ${d.type === "added" ? "bg-green-900/40 text-green-300" : d.type === "removed" ? "bg-red-900/40 text-red-300" : "text-gray-400"}`}>
              <span className="inline-block w-8 text-gray-500">{d.line}</span>
              <span className="inline-block w-4">{d.type === "added" ? "+" : d.type === "removed" ? "-" : " "}</span>
              {d.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}