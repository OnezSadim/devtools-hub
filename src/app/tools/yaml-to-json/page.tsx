"use client";
import { useState } from "react";
function parseYaml(yaml) {
  const lines = yaml.split('
');
  const result = {};
  for (const line of lines) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) {
      const val = m[2].trim();
      if (val === 'true') result[m[1]] = true;
      else if (val === 'false') result[m[1]] = false;
      else if (!isNaN(val) && val !== '') result[m[1]] = Number(val);
      else result[m[1]] = val.replace(/^['"](.*)['"]$/, '$1');
    }
  }
  return result;
}
export default function YamlToJson() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const convert = () => {
    try { setOutput(JSON.stringify(parseYaml(input), null, 2)); }
    catch(e) { setOutput('Error: ' + e.message); }
  };
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>YAML to JSON</h1>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="name: John
age: 30
active: true" style={{height:'300px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
      <textarea value={output} readOnly placeholder="JSON output" style={{height:'300px',padding:'0.5rem',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
    </div>
    <button onClick={convert} style={{padding:'0.5rem 1.5rem',background:'#0ea5e9',color:'white',border:'none',borderRadius:'4px',cursor:'pointer'}}>Convert</button>
  </div>);
}
