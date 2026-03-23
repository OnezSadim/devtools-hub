"use client";
import { useState } from "react";

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);
  const [version, setVersion] = useState("v4");

  const generateV4 = () => crypto.randomUUID();

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => generateV4());
    setUuids(newUuids);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">UUID Generator</h1>
      <p className="text-gray-400 mb-6">Generate random UUIDs (v4) instantly.</p>
      <div className="flex gap-4 mb-6 items-end">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Count</label>
          <input type="number" min={1} max={100} value={count} onChange={e => setCount(Number(e.target.value))} className="bg-gray-800 border border-gray-700 rounded px-3 py-2 w-24 text-white" />
        </div>
        <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">Generate</button>
        {uuids.length > 0 && <button onClick={copyAll} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Copy All</button>}
      </div>
      {uuids.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-4 space-y-1">
          {uuids.map((u, i) => (
            <div key={i} className="font-mono text-sm text-green-400 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded" onClick={() => navigator.clipboard.writeText(u)}>{u}</div>
          ))}
        </div>
      )}
    </div>
  );
}
