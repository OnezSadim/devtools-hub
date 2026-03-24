"use client";
import { useState } from "react";

export default function YAMLValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{valid:boolean,message:string}|null>(null);

  const validate = () => {
    if (!input.trim()) { setResult({valid:false,message:"Input is empty"}); return; }
    try {
      // Basic YAML validation via structural checks
      const lines = input.split("
");
      const errors: string[] = [];
      lines.forEach((line,i) => {
        const trimmed = line.trimStart();
        if (trimmed.startsWith("-") && !trimmed.startsWith("- ") && trimmed.length > 1) {
          // ok
        }
        const colonIdx = trimmed.indexOf(":");
        if (colonIdx > 0 && colonIdx < trimmed.length-1) {
          const after = trimmed[colonIdx+1];
          if (after !== " " && after !== "
" && after !== undefined) {
            errors.push(`Line ${i+1}: colon not followed by space`);
          }
        }
      });
      if (errors.length > 0) {
        setResult({valid:false,message:errors.join("
")});
      } else {
        setResult({valid:true,message:"Valid YAML structure"});
      }
    } catch(e) { setResult({valid:false,message:String(e)}); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
        <p className="text-gray-400 mb-6">Check your YAML for syntax errors.</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste YAML here..." className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
        <div className="flex gap-3 mt-4">
          <button onClick={validate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Validate</button>
          <button onClick={()=>{setInput("");setResult(null)}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Clear</button>
        </div>
        {result && (
          <div className={`mt-4 p-4 rounded border ${result.valid ? "bg-green-900/30 border-green-700 text-green-300" : "bg-red-900/30 border-red-700 text-red-300"}`}>
            <div className="font-medium mb-1">{result.valid ? "Valid" : "Invalid"}</div>
            <pre className="text-sm whitespace-pre-wrap">{result.message}</pre>
          </div>
        )}
      </div>
    </main>
  );
}