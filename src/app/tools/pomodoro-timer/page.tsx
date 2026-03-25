"use client";
import { useState, useEffect, useRef } from "react";
export default function PomodoroTimer() {
  const [mode, setMode] = useState<'work'|'break'>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const workTime = 25 * 60;
  const breakTime = 5 * 60;
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(intervalRef.current!);
            setRunning(false);
            if (mode === 'work') { setSessions(s => s + 1); setMode('break'); setTimeLeft(breakTime); }
            else { setMode('work'); setTimeLeft(workTime); }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [running, mode]);
  const reset = () => { setRunning(false); setTimeLeft(mode === 'work' ? workTime : breakTime); };
  const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const s = String(timeLeft % 60).padStart(2, '0');
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pomodoro Timer</h1>
        <p className="text-gray-400 mb-8">Stay focused with the Pomodoro technique.</p>
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <div className="text-2xl font-semibold mb-4 text-blue-400">{mode === 'work' ? 'Work Session' : 'Break Time'}</div>
          <div className="text-7xl font-mono font-bold mb-8">{m}:{s}</div>
          <div className="flex gap-4 justify-center mb-6">
            <button onClick={() => setRunning(!running)} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">{running ? 'Pause' : 'Start'}</button>
            <button onClick={reset} className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg">Reset</button>
          </div>
          <div className="text-gray-400">Sessions completed: <span className="text-white font-bold">{sessions}</span></div>
        </div>
      </div>
    </main>
  );
}