"use client";
import { useState } from "react";
export default function JSONToTypeScript() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  function getType(val, name) {
    if(val === null) return 'null';
    if(Array.isArray(val)) {
      if(val.length===0) return 'unknown[]';
      return getType(val[0],name)+'[]'; 
    }
    if(typeof val === 'object') return generate(val, name);
    return typeof val;
  }
  function generate(obj, name='Root') {
    const fields = Object.entries(obj).map(([k,v])=>{
      const safe = /^[a-zA-Z_$]/.test(k)?k:`'${k}'`;
      return `  ${safe}: ${getType(v,k.charAt(0).toUpperCase()+k.slice(1))};`;
    }).join('
');
    return `interface ${name} {
${fields}
}`;
  }
  function convert() {
    setError('');
    try {
      const obj = JSON.parse(input);
      setOutput(generate(obj));
    } catch(e){setError(e.message);}
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">JSON to TypeScript</h1>
      <p className="text-gray-400 mb-6">Convert JSON objects to TypeScript interface definitions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">JSON Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder='{"name":"John","age":30,"active":true}' />
          <button onClick={convert} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Convert</button>
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">TypeScript Interface</label>
          <textarea value={output} readOnly className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>}
        </div>
      </div>
    </main>
  );
}