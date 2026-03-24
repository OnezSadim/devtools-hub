'use client';
import { useState } from 'react';
export default function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readTime = Math.ceil(words / 200);
  const stats = [
    { label: 'Words', value: words },
    { label: 'Characters', value: chars },
    { label: 'Chars (no spaces)', value: charsNoSpaces },
    { label: 'Sentences', value: sentences },
    { label: 'Paragraphs', value: paragraphs },
    { label: 'Read time', value: `~${readTime} min` },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
        <p className="text-gray-400 mb-8">Count words, characters, sentences, and more.</p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map(s => (
            <div key={s.label} className="bg-gray-900 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <textarea value={text} onChange={e => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="w-full h-64 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500 resize-y" />
        {text && (
          <button onClick={() => setText('')} className="mt-3 text-sm text-gray-500 hover:text-gray-300">Clear</button>
        )}
      </div>
    </div>
  );
}