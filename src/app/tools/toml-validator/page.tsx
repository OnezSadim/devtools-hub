"use client";
import { useState } from "react";

export default function TomlValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    setError(""); setResult("");
    try {
      const lines = input.split("\n");
      let valid = true;
      const issues: string[] = [];
      lines.forEach((line, i) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        if (trimmed.startsWith("[") && !trimmed.endsWith("]")) {
          issues.push(`Line ${i+1}: Unclosed section header`);
          valid = false;
        }
        if (trimmed.includes("=")) {
          const [k] = trimmed.split("=");
          if (!k.trim()) { issues.push(`Line ${i+1}: Empty key`); valid = false; }
        }
      });
      if (valid && issues.length === 0) setResult("Valid TOML! No syntax errors found.");
      else setError(issues.join("\n"));
    } catch(e: unknown) { setError(String(e)); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">TOML Validator</h1>
        <p className="text-gray-400 mb-6">Validate your TOML configuration files for syntax errors.</p>
        <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm mb-4 focus:outline-none focus:border-blue-500" placeholder="[database]
host = &apos;localhost&apos;
port = 5432" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={validate} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mb-4">Validate</button>
        {result && <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 text-green-400">{result}</div>}
        {error && <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400 whitespace-pre">{error}</div>}
      </div>
    </div>
  );
}
