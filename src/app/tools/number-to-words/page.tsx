"use client";
import { useState } from "react";

const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

function toWords(n) {
  if (n === 0) return 'zero';
  if (n < 0) return 'negative ' + toWords(-n);
  if (n < 20) return ones[n];
  if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? '-' + ones[n%10] : '');
  if (n < 1000) return ones[Math.floor(n/100)] + ' hundred' + (n%100 ? ' ' + toWords(n%100) : '');
  if (n < 1000000) return toWords(Math.floor(n/1000)) + ' thousand' + (n%1000 ? ' ' + toWords(n%1000) : '');
  if (n < 1000000000) return toWords(Math.floor(n/1000000)) + ' million' + (n%1000000 ? ' ' + toWords(n%1000000) : '');
  return toWords(Math.floor(n/1000000000)) + ' billion' + (n%1000000000 ? ' ' + toWords(n%1000000000) : '');
}

export default function NumberToWords() {
  const [input, setInput] = useState('');
  const num = parseInt(input.replace(/,/g,''));
  const result = !isNaN(num) && Math.abs(num) < 1e12 ? toWords(num) : '';

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words</h1>
        <p className="text-gray-400 mb-6">Convert any number into its English word form.</p>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 42 or 1000000" className="w-full p-3 bg-gray-800 rounded text-xl mb-4" />
        {result && (
          <div className="bg-gray-800 p-6 rounded">
            <p className="text-2xl text-green-400 capitalize">{result}</p>
            <button onClick={()=>navigator.clipboard.writeText(result)} className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Copy</button>
          </div>
        )}
      </div>
    </main>
  );
}