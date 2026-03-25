"use client";
import { useState, useEffect, useRef } from "react";
export default function StudyTimer() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState<{duration: number, label: string}[]>([]);
  const [label, setLabel] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (running) intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    else clearInterval(intervalRef.current!);
    return () => clearInterval(intervalRef.current!);
  }, [running]);
  const stop = () => { setRunning(false); if (elapsed > 0) { setSessions(s => [{duration: elapsed, label: label || 'Session'}, ...s].slice(0, 10)); setElapsed(0); setLabel(''); } };
  const fmt = (s: number) => { const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60; return (h ? h + 'h ' : '') + (m ? m + 'm ' : '') + sec + 's'; };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Study Timer</h1>
        <p className="text-gray-400 mb-8">Track your study sessions.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input value={label} onChange={e => setLabel(e.target.value)} placeholder="Session label (optional)" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" />
          <div className="text-6xl font-mono font-bold text-center text-blue-400">{fmt(elapsed)}</div>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setRunning(!running)} className={"px-8 py-3 rounded-lg font-semibold " + (running ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700')}>{running ? 'Pause' : 'Start'}</button>
            <button onClick={stop} disabled={elapsed === 0} className="bg-green-700 hover:bg-green-600 disabled:opacity-40 px-6 py-3 rounded-lg">Save</button>
            <button onClick={() => { setRunning(false); setElapsed(0); }} className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg">Reset</button>
          </div>
          {sessions.length > 0 && <div className="space-y-2">
            <h3 className="text-gray-400 text-sm font-semibold">Recent Sessions</h3>
            {sessions.map((s, i) => <div key={i} className="bg-gray-800 rounded-lg px-4 py-2 flex justify-between"><span className="text-gray-300">{s.label}</span><span className="text-blue-400 font-mono">{fmt(s.duration)}</span></div>)}
          </div>}
        </div>
      </div>
    </main>
  );
}