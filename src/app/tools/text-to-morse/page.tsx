"use client";
import { useState } from "react";

const MORSE = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',0:'-----',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.' };
const RMORSE = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));

export default function TextToMorse() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');
  const [mode, setMode] = useState('encode');

  const encode = (t) => t.toUpperCase().split('').map(c => c === ' ' ? '/' : (MORSE[c] || c)).join(' ');
  const decode = (m) => m.split(' / ').map(w => w.split(' ').map(c => RMORSE[c] || c).join('')).join(' ');

  const handle = (val) => {
    setText(val);
    setMorse(mode === 'encode' ? encode(val) : decode(val));
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Morse Code</h1>
        <p className="text-gray-400 mb-6">Convert text to Morse code and back.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded ${mode==='encode'?'bg-blue-600':'bg-gray-700'}`}>Text → Morse</button>
          <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded ${mode==='decode'?'bg-blue-600':'bg-gray-700'}`}>Morse → Text</button>
        </div>
        <textarea value={text} onChange={e=>handle(e.target.value)} rows={4} placeholder={mode==='encode'?'Enter text...':'Enter morse (use / for spaces)...'} className="w-full p-3 bg-gray-800 rounded font-mono mb-4" />
        <div className="bg-gray-800 p-4 rounded">
          <label className="text-sm text-gray-400">Result</label>
          <p className="font-mono mt-1 text-green-400 break-all">{morse || '—'}</p>
        </div>
        {morse && <button onClick={()=>navigator.clipboard.writeText(morse)} className="mt-3 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Copy</button>}
      </div>
    </main>
  );
}