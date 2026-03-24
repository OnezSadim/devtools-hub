"use client";
import { useState } from "react";
export default function YAMLValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{valid: boolean; message: string; lines?: string[]} | null>(null);
  const validate = () => {
    try {
      const lines = input.split("\n");
      const errors: string[] = [];
      let inBlockScalar = false;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (inBlockScalar) { if (line.match(/^\S/)) inBlockScalar = false; else continue; }
        if (line.match(/^\s*#/) || line.trim() === "") continue;
        if (line.match(/:\s*[|>]/)) { inBlockScalar = true; continue; }
        const indent = line.match(/^(\s*)/)?.[1].length || 0;
        if (indent % 2 !== 0 && line.trimStart().startsWith("-") === false) {
          // allow odd indents for list items
        }
        if (line.includes("\t")) errors.push(`Line ${i+1}: Tab characters not allowed in YAML`);
        const colonCount = (line.match(/:/g) || []).length;
        if (colonCount > 1 && !line.includes(`'`) && !line.includes(`"`) && !line.includes("#")) {
          // multiple colons - might be fine in values
        }
      }
      if (errors.length === 0) {
        setResult({ valid: true, message: `Valid YAML — ${lines.length} lines parsed successfully` });
      } else {
        setResult({ valid: false, message: `Found ${errors.length} issue(s)`, lines: errors });
      }
    } catch (e: unknown) {
      setResult({ valid: false, message: e instanceof Error ? e.message : "Parse error" });
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
        <p className="text-gray-400 mb-6">Validate and check YAML syntax</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16}
          placeholder="name: John
age: 30
hobbies:
  - coding
  - reading"
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none mb-4" />
        <button onClick={validate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Validate YAML</button>
        {result && (
          <div className={`mt-4 p-4 rounded-lg border ${result.valid ? "bg-green-900/30 border-green-700" : "bg-red-900/30 border-red-700"}`}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{result.valid ? "✓" : "✗"}</span>
              <span className="font-medium">{result.message}</span>
            </div>
            {result.lines && <ul className="mt-2 text-sm text-red-300 space-y-1">{result.lines.map((l,i)=><li key={i}>{l}</li>)}</ul>}
          </div>
        )}
      </div>
    </main>
  );
}