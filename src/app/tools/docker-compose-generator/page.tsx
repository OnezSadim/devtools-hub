"use client";
import { useState } from "react";
export default function DockerComposeGenerator() {
  const [services, setServices] = useState([{name:"app",image:"node:18",port:"3000",env:""}]);
  const [output, setOutput] = useState("");
  const addService = () => setServices([...services, {name:"",image:"",port:"",env:""}]);
  const update = (i,k,v) => { const s=[...services]; s[i]={...s[i],[k]:v}; setServices(s); };
  const generate = () => {
    let yaml = "version: '3.8'
services:
";
    services.forEach(s => {
      yaml += `  ${s.name}:
    image: ${s.image}
`;
      if (s.port) yaml += `    ports:
      - "${s.port}:${s.port}"
`;
      if (s.env) { yaml += `    environment:
`; s.env.split("
").forEach(e=>{ if(e.trim()) yaml+=`      - ${e.trim()}
`; }); }
    });
    setOutput(yaml);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Docker Compose Generator</h1>
        <p className="text-gray-400 mb-8">Generate docker-compose.yml configurations</p>
        <div className="space-y-4 mb-6">
          {services.map((s,i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 space-y-3">
              <h3 className="font-medium">Service {i+1}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-gray-400 mb-1">Name</label><input value={s.name} onChange={e=>update(i,"name",e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" /></div>
                <div><label className="block text-xs text-gray-400 mb-1">Image</label><input value={s.image} onChange={e=>update(i,"image",e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" /></div>
                <div><label className="block text-xs text-gray-400 mb-1">Port</label><input value={s.port} onChange={e=>update(i,"port",e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" /></div>
                <div><label className="block text-xs text-gray-400 mb-1">Env Vars (one per line)</label><textarea value={s.env} onChange={e=>update(i,"env",e.target.value)} rows={2} className="w-full bg-gray-800 rounded p-2 text-sm" /></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mb-6">
          <button onClick={addService} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">+ Add Service</button>
          <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Generate</button>
        </div>
        {output && <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between mb-2"><span className="text-sm text-gray-400">docker-compose.yml</span><button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs bg-gray-700 px-3 py-1 rounded">Copy</button></div>
          <pre className="text-sm text-green-400 overflow-auto whitespace-pre-wrap">{output}</pre>
        </div>}
      </div>
    </div>
  );
}
