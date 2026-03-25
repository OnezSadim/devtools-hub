"use client";
import { useState } from "react";
const MORSE: Record<string, string> = { A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',0:'-----',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.' };
export default function TextToMorse() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'encode'|'decode'>('encode');
  const encode = (t: string) => t.toUpperCase().split('').map(c => c === ' ' ? '/' : (MORSE[c] || '?')).join(' ');
  const decode = (t: string) => t.split(' / ').map(word => word.split(' ').map(code => Object.entries(MORSE).find(([,v]) => v === code)?.[0] || '?').join('')).join(' ');
  const result = text ? (mode === 'encode' ? encode(text) : decode(text)) : '';
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Morse Code</h1>
        <p className="text-gray-400 mb-8">Convert between text and Morse code.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-4">
            <button onClick={() => setMode('encode')} className={"px-4 py-2 rounded-lg " + (mode === 'encode' ? 'bg-blue-600' : 'bg-gray-700')}>Text to Morse</button>
            <button onClick={() => setMode('decode')} className={"px-4 py-2 rounded-lg " + (mode === 'decode' ? 'bg-blue-600' : 'bg-gray-700')}>Morse to Text</button>
          </div>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder={mode === 'encode' ? 'Enter text...' : 'Enter morse code (use / for spaces)...'} rows={4} className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white resize-none" />
          {result && <div className="bg-gray-800 rounded-lg p-4"><p className="font-mono text-blue-300 break-all">{result}</p></div>}
        </div>
      </div>
    </main>
  );
}