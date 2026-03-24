"use client";
import { useState } from "react";
export default function AsciiArtGenerator() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const fonts: Record<string, Record<string, string>> = {
    block: { A:'/_\\', B:'|_)', C:'(', D:'|)', E:'|_', F:'|_', G:'(_', H:'|_|', I:'|', J:'_|', K:'|/', L:'|_', M:'|\/|', N:'|\\|', O:'(_)', P:'|_)', Q:'(_)', R:'|_)', S:'5', T:'-|-', U:'|_|', V:'\\/', W:'\\/\\/', X:'>\',' Y:'\\/', Z:'--/' },
  };
  const generate = () => {
    const result = text.toUpperCase().split('').map(c => c === ' ' ? '   ' : (fonts.block[c] || c)).join(' ');
    setOutput(result);
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">ASCII Art Generator</h1>
      <p className="text-gray-400 mb-4">Convert text to ASCII art.</p>
      <input className="w-full p-2 bg-gray-800 rounded mb-2 text-white" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
      <button onClick={generate} className="bg-blue-600 px-4 py-2 rounded text-white mb-4">Generate</button>
      {output && <pre className="bg-gray-800 p-4 rounded text-green-400 overflow-x-auto text-xs">{output}</pre>}
    </div>
  );
}