"use client";
import { useState } from "react";

export default function FibonacciSequenceGenerator() {
  const [n, setN] = useState(10);
  const [sequence, setSequence] = useState<bigint[]>([]);

  const generate = () => {
    const count = Math.min(Math.max(1, n), 100);
    const seq: bigint[] = [1n, 1n];
    for (let i = 2; i < count; i++) seq.push(seq[i-1] + seq[i-2]);
    setSequence(seq.slice(0, count));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fibonacci Sequence Generator</h1>
        <p className="text-gray-400 mb-6">Generate Fibonacci numbers instantly</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Count (1-100)</label>
              <input type="number" value={n} onChange={e => setN(Number(e.target.value))} min={1} max={100} className="w-full bg-gray-800 rounded-lg px-3 py-2" />
            </div>
            <div className="flex items-end">
              <button onClick={generate} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold">Generate</button>
            </div>
          </div>
          {sequence.length > 0 && (
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{sequence.length} numbers generated</span>
                <button onClick={() => navigator.clipboard.writeText(sequence.join(', '))} className="text-blue-400 hover:text-blue-300">Copy</button>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 max-h-64 overflow-y-auto">
                <div className="grid grid-cols-2 gap-1">
                  {sequence.map((num, i) => (
                    <div key={i} className="flex gap-2 text-sm font-mono">
                      <span className="text-gray-500 w-6">{i+1}.</span>
                      <span>{num.toString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
