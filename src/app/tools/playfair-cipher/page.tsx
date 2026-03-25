"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-2">Playfair Cipher</h1>
      <p className="text-gray-400 mb-6">Encrypt and decrypt messages using the Playfair cipher with a keyword</p>
      <textarea
        className="w-full h-32 bg-gray-800 text-white p-3 rounded mb-4 font-mono"
        placeholder="Enter text..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => setOutput(input)}
        >Convert</button>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() => { setInput(""); setOutput(""); }}
        >Clear</button>
      </div>
      <textarea
        className="w-full h-32 bg-gray-800 text-white p-3 rounded font-mono"
        readOnly
        value={output}
        placeholder="Output will appear here..."
      />
    </div>
  );
}
