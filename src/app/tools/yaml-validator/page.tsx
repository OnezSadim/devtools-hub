"use client";
import { useState } from "react";
export default function YAMLValidator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  function validate() {
    if(!input.trim()){setResult({error:'No input'});return;}
    try {
      // Basic YAML validation by checking structure
      const lines = input.split('
');
      let errors = [];
      lines.forEach((line,i)=>{
        if(line.includes('	')) errors.push(`Line ${i+1}: Tab character found (use spaces)`);
        const m = line.match(/^(\s*)(\S+):(\s*)(.*)$/);
        if(m && m[4] && !m[3]) errors.push(`Line ${i+1}: Missing space after colon`);
      });
      if(errors.length>0){setResult({error:errors.join('
')});}
      else{setResult({ok:true,lines:lines.length,keys:lines.filter(l=>/^\s*\w+:/.test(l)).length});}
    } catch(e){setResult({error:e.message});}
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
      <p className="text-gray-400 mb-6">Validate YAML syntax and structure</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" placeholder="key: value
list:
  - item1
  - item2" />
      <button onClick={validate} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium mr-2">Validate</button>
      {result && (
        <div className={`mt-4 p-4 rounded border ${result.ok?'border-green-600 bg-green-900/20':'border-red-600 bg-red-900/20'}`}>
          {result.ok ? (
            <div className="text-green-400">✓ Valid YAML — {result.lines} lines, {result.keys} keys</div>
          ) : (
            <pre className="text-red-400 text-sm whitespace-pre-wrap">{result.error}</pre>
          )}
        </div>
      )}
    </main>
  );
}