"use client";
import { useState } from "react";
export default function YamlToJson() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('yaml2json');
  function parseYaml(yaml) {
    const lines = yaml.split('
');
    const root = {};
    const stack = [{obj: root, indent: -1}];
    for (const line of lines) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const indent = line.search(/\S/);
      const match = line.trim().match(/^([\w-]+):\s*(.*)$/);
      if (!match) continue;
      const [, key, val] = match;
      while (stack.length > 1 && stack[stack.length-1].indent >= indent) stack.pop();
      const parent = stack[stack.length-1].obj;
      if (val.trim()) {
        let v = val.trim();
        if (v === 'true') v = true;
        else if (v === 'false') v = false;
        else if (!isNaN(v)) v = Number(v);
        parent[key] = v;
      } else {
        parent[key] = {};
        stack.push({obj: parent[key], indent});
      }
    }
    return root;
  }
  function convert() {
    try {
      if (mode === 'yaml2json') {
        const obj = parseYaml(input);
        setOutput(JSON.stringify(obj, null, 2));
      } else {
        const obj = JSON.parse(input);
        function toYaml(o, level) {
          const pad = '  '.repeat(level);
          if (typeof o !== 'object' || o === null) return String(o);
          return Object.entries(o).map(([k,v]) => {
            if (typeof v === 'object' && v !== null) return pad + k + ':
' + toYaml(v, level+1);
            return pad + k + ': ' + v;
          }).join('
');
        }
        setOutput(toYaml(obj, 0));
      }
    } catch(e) { setOutput('Error: ' + e.message); }
  }
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>YAML ↔ JSON Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Convert between YAML and JSON formats.</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1rem'}}>
        <button onClick={()=>setMode('yaml2json')} style={{background:mode==='yaml2json'?'#3b82f6':'#1e293b',color:'#fff',border:'none',borderRadius:6,padding:'0.5rem 1.5rem',cursor:'pointer'}}>YAML → JSON</button>
        <button onClick={()=>setMode('json2yaml')} style={{background:mode==='json2yaml'?'#3b82f6':'#1e293b',color:'#fff',border:'none',borderRadius:6,padding:'0.5rem 1.5rem',cursor:'pointer'}}>JSON → YAML</button>
        <button onClick={convert} style={{background:'#10b981',color:'#fff',border:'none',borderRadius:6,padding:'0.5rem 1.5rem',cursor:'pointer'}}>Convert</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input:</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={18} style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Output:</label>
          <textarea value={output} readOnly rows={18} style={{width:'100%',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
    </div>
  );
}