"use client";
import { useState, useEffect } from "react";

export default function TimestampConverter() {
  const [ts, setTs] = useState("");
  const [now, setNow] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => { const i = setInterval(() => setNow(Math.floor(Date.now()/1000)), 1000); return () => clearInterval(i); }, []);

  const convert = () => {
    const n = Number(ts);
    if (isNaN(n)) { setResult("Invalid timestamp"); return; }
    const d = n > 1e12 ? new Date(n) : new Date(n * 1000);
    setResult(`UTC: ${d.toUTCString()}
ISO: ${d.toISOString()}
Local: ${d.toLocaleString()}`);
  };

  const fromDate = () => {
    const d = new Date(ts);
    if (isNaN(d.getTime())) { setResult("Invalid date string"); return; }
    setResult(`Unix (s): ${Math.floor(d.getTime()/1000)}
Unix (ms): ${d.getTime()}`);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-400 hover:underline text-sm">&larr; All Tools</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">Timestamp Converter</h1>
        <p className="text-zinc-400 mb-6">Convert between Unix timestamps and human-readable dates.</p>
        <div className="bg-zinc-900 border border-zinc-700 rounded p-4 mb-6"><span className="text-zinc-400 text-sm">Current Unix time:</span> <span className="font-mono text-xl text-green-400">{now}</span></div>
        <input value={ts} onChange={e=>setTs(e.target.value)} placeholder="1711234567 or 2024-03-23T12:00:00Z" className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 font-mono text-sm mb-3" />
        <div className="flex gap-3 mb-4">
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded font-medium">Timestamp &rarr; Date</button>
          <button onClick={fromDate} className="bg-zinc-700 hover:bg-zinc-600 px-6 py-2 rounded font-medium">Date &rarr; Timestamp</button>
        </div>
        {result && <pre className="bg-zinc-900 border border-zinc-700 rounded p-3 text-sm whitespace-pre-wrap">{result}</pre>}
      </div>
    </main>
  );
}