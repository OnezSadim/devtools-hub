"use client";
import { useState } from "react";
export default function DockerComposeGenerator() {
  const [services, setServices] = useState([{name:'app',image:'node:18-alpine',port:'3000',envVars:'NODE_ENV=production'},{name:'db',image:'postgres:15',port:'5432',envVars:'POSTGRES_PASSWORD=secret
POSTGRES_DB=myapp'}]);
  const [output, setOutput] = useState('');
  function addService(){setServices([...services,{name:`service${services.length+1}`,image:'',port:'',envVars:''}]);}
  function updateService(i,k,v){const s=[...services];s[i]={...s[i],[k]:v};setServices(s);}
  function removeService(i){setServices(services.filter((_,idx)=>idx!==i));}
  function generate(){
    let yaml = 'version: '3.8'
services:
';
    services.forEach(s=>{
      yaml += `  ${s.name}:
    image: ${s.image}
`;
      if(s.port) yaml += `    ports:
      - '${s.port}:${s.port}'
`;
      if(s.envVars.trim()){
        yaml += '    environment:
';
        s.envVars.trim().split('
').forEach(e=>{
          if(e.trim()) yaml += `      - ${e.trim()}
`;
        });
      }
    });
    setOutput(yaml);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Docker Compose Generator</h1>
      <p className="text-gray-400 mb-6">Visually build docker-compose.yml files</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {services.map((s,i)=>(
            <div key={i} className="bg-gray-900 border border-gray-700 rounded p-4 mb-3">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Service {i+1}</span>
                <button onClick={()=>removeService(i)} className="text-red-400 hover:text-red-300 text-sm">Remove</button>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div><label className="block text-xs text-gray-400 mb-1">Name</label><input value={s.name} onChange={e=>updateService(i,'name',e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" /></div>
                <div><label className="block text-xs text-gray-400 mb-1">Image</label><input value={s.image} onChange={e=>updateService(i,'image',e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" placeholder="node:18" /></div>
              </div>
              <div className="mb-2"><label className="block text-xs text-gray-400 mb-1">Port</label><input value={s.port} onChange={e=>updateService(i,'port',e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" placeholder="3000" /></div>
              <div><label className="block text-xs text-gray-400 mb-1">Env Vars (KEY=VALUE, one per line)</label><textarea value={s.envVars} onChange={e=>updateService(i,'envVars',e.target.value)} className="w-full h-20 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm font-mono" /></div>
            </div>
          ))}
          <button onClick={addService} className="w-full py-2 border border-dashed border-gray-600 hover:border-gray-400 rounded text-gray-400 hover:text-gray-200 mb-3">+ Add Service</button>
          <button onClick={generate} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Generate docker-compose.yml</button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">docker-compose.yml</label>
            {output&&<button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>}
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm h-96 overflow-auto whitespace-pre">{output||'Configure services and click Generate'}</pre>
        </div>
      </div>
    </main>
  );
}