"use client";
import { useState } from "react";
export default function YamlValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [valid, setValid] = useState<boolean|null>(null);
  const validate = () => {
    try {
      const lines = input.split("
");
      const errors: string[] = [];
      lines.forEach((line, i) => {
        if (line.includes("\t")) errors.push(`Line ${i+1}: Tab character found (use spaces)`);
        const indent = line.match(/^( *)/)?.[1]?.length || 0;
        if (indent % 2 !== 0 && indent > 0) errors.push(`Line ${i+1}: Odd indentation (${indent} spaces)`);
      });
      if (errors.length === 0) { setResult("YAML appears valid!"); setValid(true); }
      else { setResult(errors.join("
")); setValid(false); }
    } catch(e) { setResult(String(e)); setValid(false); }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
      <p className="text-gray-400 mb-6">Validate YAML syntax and structure</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste YAML here..." className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
      <button onClick={validate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-4">Validate</button>
      {valid !== null && <div className={`p-4 rounded font-mono text-sm whitespace-pre-wrap ${valid?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`}>{result}</div>}
    </div>
  );
}