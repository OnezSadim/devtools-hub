'use client'

import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');

  const convert = () => {
    if (mode === 'encode') {
      setOutput('[Encoded: ' + input + ']');
    } else {
      setOutput('[Decoded: ' + input + ']');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morse Audio Converter</h1>
        <p className="text-gray-400 mb-6">Convert text to Morse code audio signals</p>
        <div className="flex gap-4 mb-4">
          <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded font-medium ${mode === 'encode' ? 'bg-blue-600' : 'bg-gray-800'}`}>Encode</button>
          <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded font-medium ${mode === 'decode' ? 'bg-blue-600' : 'bg-gray-800'}`}>Decode</button>
        </div>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text here..."
          className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 mb-4"
        />
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mb-4">
          Convert
        </button>
        {output && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="text-xs text-gray-500 mb-1">Output</div>
            <div className="font-mono text-green-400">{output}</div>
          </div>
        )}
      </div>
    </div>
  );
}
