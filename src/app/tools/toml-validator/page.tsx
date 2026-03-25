"use client";
import { useState } from "react";
export default function TOMLValidator() {
  const [toml, setToml] = useState("");
  const [result, setResult] = useState("");
  const [valid, setValid] = useState<boolean|null>(null);
  const validate = () => {
    const lines = toml.split("
");
    const errors: string[] = [];
    let inTable = false;
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      if (trimmed.startsWith("[")) {
        if (!trimmed.endsWith("]")) errors.push(`Line ${i+1}: Unclosed table header: ${trimmed}`);
        return;
      }
      if (!trimmed.includes("=")) errors.push(`Line ${i+1}: Missing = in key-value pair: ${trimmed}`);
    });
    if (errors.length === 0) {
      setValid(true);
      setResult("TOML is valid! " + lines.filter(l => l.trim() && !l.trim().startsWith("#")).length + " key-value pairs or sections found.");
    } else {
      setValid(false);
      setResult(errors.join("
"));
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TOML Validator</h1>
        <p className="text-gray-400 mb-6">Validate TOML configuration files for syntax errors.</p>
        <textarea value={toml} onChange={e => setToml(e.target.value)} rows={12} placeholder="[server]
host = "localhost"
port = 8080

[database]
url = "postgres://localhost/mydb"" className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3" />
        <button onClick={validate} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium mb-4 w-full">Validate TOML</button>
        {valid !== null && (
          <div className={"rounded p-4 " + (valid ? "bg-green-900 border border-green-700" : "bg-red-900 border border-red-700")}>
            <p className={"font-medium mb-1 " + (valid ? "text-green-300" : "text-red-300")}>{valid ? "Valid" : "Invalid"}</p>
            <pre className="text-sm font-mono whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}