"use client";
import { useState, useEffect, useRef } from "react";

const TEXTS = [
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
  "How vexingly quick daft zebras jump. The five boxing wizards jump quickly.",
  "Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."
];

export default function TypingSpeedTest() {
  const [text] = useState(TEXTS[Math.floor(Math.random() * TEXTS.length)]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (started && !finished) {
      interval = setInterval(() => setElapsed((Date.now() - startTime) / 1000), 100);
    }
    return () => clearInterval(interval);
  }, [started, finished, startTime]);

  const handleInput = (val: string) => {
    if (!started) { setStarted(true); setStartTime(Date.now()); }
    setInput(val);
    if (val === text) { setFinished(true); setElapsed((Date.now() - startTime) / 1000); }
  };

  const wpm = finished ? Math.round((text.split(" ").length / elapsed) * 60) : 0;
  const accuracy = input.length > 0 ? Math.round((input.split("").filter((c, i) => c === text[i]).length / input.length) * 100) : 100;

  const reset = () => { setInput(""); setStarted(false); setFinished(false); setElapsed(0); inputRef.current?.focus(); };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Typing Speed Test</h1>
        <p className="text-gray-400 mb-6">Test your WPM and accuracy</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="bg-gray-800 rounded-lg p-4 text-lg leading-relaxed font-mono">
            {text.split("").map((char, i) => {
              let color = "text-gray-500";
              if (i < input.length) color = input[i] === char ? "text-green-400" : "text-red-400";
              else if (i === input.length) color = "text-white underline";
              return <span key={i} className={color}>{char}</span>;
            })}
          </div>
          <textarea ref={inputRef} value={input} onChange={e => !finished && handleInput(e.target.value)}
            placeholder="Start typing here..." rows={3}
            className="w-full bg-gray-800 rounded-lg px-3 py-2 font-mono resize-none" />
          <div className="flex gap-4 text-center">
            <div className="flex-1 bg-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-400">{finished ? wpm : Math.round(elapsed > 0 ? (input.split(" ").length / elapsed) * 60 : 0)}</div>
              <div className="text-xs text-gray-400">WPM</div>
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-400">{accuracy}%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-3">
              <div className="text-2xl font-bold text-yellow-400">{elapsed.toFixed(1)}s</div>
              <div className="text-xs text-gray-400">Time</div>
            </div>
          </div>
          {finished && <div className="text-center text-green-400 font-bold text-xl">Done! {wpm} WPM with {accuracy}% accuracy</div>}
          <button onClick={reset} className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg">Reset</button>
        </div>
      </div>
    </div>
  );
}
