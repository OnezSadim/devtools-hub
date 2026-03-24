"use client";
import { useState } from "react";
export default function EnvFileGenerator() {
  const [vars, setVars] = useState([{key:'DATABASE_URL',value:'postgresql://user:pass@localhost:5432/db',comment:'PostgreSQL connection string'},{key:'JWT_SECRET',value:'',comment:'JWT signing secret'},{key:'API_KEY',value:'',comment:'External API key'},{key:'PORT',value:'3000',comment:'Server port'}]);
  const [mode, setMode] = useState('env');
  function addVar(){setVars([...vars,{key:'NEW_VAR',value:'',comment:''}]);}
  function updateVar(i,k,v){const a=[...vars];a[i]={...a[i],[k]:v};setVars(a);}
  function removeVar(i){setVars(vars.filter((_,idx)=>idx!==i));}
  const output = mode==='env'
    ? vars.map(v=>`${v.comment?`# ${v.comment}
`:''}${v.key}=${v.value}`).join('
')
    : `{
${vars.map(v=>`  "${v.key}": "${v.value||`your-${v.key.toLowerCase().replace(/_/g,'-')}`}"`).join(',
')}
}`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">.env File Generator</h1>
      <p className="text-gray-400 mb-6">Generate .env or JSON config files for your projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex gap-2 mb-4">
            {['env','json'].map(m=>(
              <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1 rounded ${mode===m?'bg-blue-600':'bg-gray-700 hover:bg-gray-600'}`}>.{m}</button>
            ))}
          </div>
          {vars.map((v,i)=>(
            <div key={i} className="bg-gray-900 border border-gray-700 rounded p-3 mb-2">
              <div className="grid grid-cols-2 gap-2 mb-1">
                <input value={v.key} onChange={e=>updateVar(i,'key',e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm font-mono" placeholder="KEY" />
                <input value={v.value} onChange={e=>updateVar(i,'value',e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm font-mono" placeholder="value" />
              </div>
              <div className="flex gap-2">
                <input value={v.comment} onChange={e=>updateVar(i,'comment',e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-400" placeholder="Comment (optional)" />
                <button onClick={()=>removeVar(i)} className="text-red-400 hover:text-red-300 text-xs px-2">Remove</button>
              </div>
            </div>
          ))}
          <button onClick={addVar} className="w-full py-2 border border-dashed border-gray-600 hover:border-gray-400 rounded text-gray-400 hover:text-gray-200 text-sm">+ Add Variable</button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">.{mode} output</label>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm h-96 overflow-auto whitespace-pre">{output}</pre>
        </div>
      </div>
    </main>
  );
}