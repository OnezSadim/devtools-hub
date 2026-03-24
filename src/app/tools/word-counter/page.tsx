'use client';
import { useState } from 'react';
export default function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,'').length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(p=>p.trim()).length;
  const readTime = Math.ceil(words/200);
  const stats = [['Words',words],['Characters',chars],['Chars (no space)',charsNoSpace],['Sentences',sentences],['Paragraphs',paragraphs],['Read time',readTime+'m']];
  return (<div className='min-h-screen bg-gray-950 text-gray-100 p-8'><div className='max-w-2xl mx-auto'><h1 className='text-3xl font-bold mb-2'>Word Counter</h1><p className='text-gray-400 mb-6'>Count words, characters, sentences and estimate reading time.</p><textarea className='w-full bg-gray-900 rounded-lg p-4 h-64 font-mono text-sm resize-none mb-4' placeholder='Paste or type your text here...' value={text} onChange={e=>setText(e.target.value)}/><div className='grid grid-cols-3 gap-3'>{stats.map(([l,v])=>(<div key={l} className='bg-gray-900 rounded-lg p-4 text-center'><div className='text-2xl font-bold text-blue-400'>{v}</div><div className='text-sm text-gray-400 mt-1'>{l}</div></div>))}</div></div></div>);
}
