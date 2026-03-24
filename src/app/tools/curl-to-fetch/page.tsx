"use client";
import { useState } from "react";
export default function CurlToFetch() {
  const [curl, setCurl] = useState('');
  const [output, setOutput] = useState('');
  const [lang, setLang] = useState('js');
  function convert() {
    const cmd = curl.trim().replace(/\
/g,' ');
    const urlMatch = cmd.match(/curl [^-]*['"]?(https?:\/\/[^'" ]+)['"]?/);
    const url = urlMatch ? urlMatch[1] : 'URL_HERE';
    const method = cmd.match(/-X\s+(\w+)/)?.[1] || (cmd.includes('-d ')||cmd.includes('--data')?'POST':'GET');
    const headers = {};
    const hMatches = cmd.matchAll(/-H ['"]([^'"]+)['"]/g);
    for(const m of hMatches){const[k,v]=m[1].split(/:\s*/,2);headers[k]=v;}
    const dataMatch = cmd.match(/(?:-d|--data) ['"]([^'"]+)['"]/);
    const body = dataMatch?.[1];
    if(lang==='js'){
      const opts = [`method: '${method}'`];
      if(Object.keys(headers).length) opts.push(`headers: ${JSON.stringify(headers,null,2)}`);
      if(body) opts.push(`body: \`${body}\``);
      setOutput(`const response = await fetch('${url}', {
  ${opts.join(',
  ')}
});
const data = await response.json();`);
    } else {
      const hStr = Object.entries(headers).map(([k,v])=>`    '${k}': '${v}'`).join(',
');
      const bStr = body?`    data='${body}',
`:`    `;
      setOutput(`import requests
response = requests.${method.toLowerCase()}(
    '${url}',${hStr?`
    headers={
${hStr}
    },`:''}
${body?`    data='${body}',
`:''})
data = response.json()`);
    }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">cURL to Fetch Converter</h1>
      <p className="text-gray-400 mb-6">Convert cURL commands to JavaScript fetch or Python requests</p>
      <div className="flex gap-2 mb-4">
        {['js','python'].map(l=>(
          <button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded ${lang===l?'bg-blue-600':'bg-gray-700 hover:bg-gray-600'}`}>{l==='js'?'JavaScript':'Python'}</button>
        ))}
      </div>
      <textarea value={curl} onChange={e=>setCurl(e.target.value)} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-3" placeholder={`curl -X POST 'https://api.example.com/data' -H 'Content-Type: application/json' -d '{"key":"value"}'`} />
      <button onClick={convert} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium mb-4">Convert</button>
      {output && (
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">Output</label>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm overflow-auto">{output}</pre>
        </div>
      )}
    </main>
  );
}