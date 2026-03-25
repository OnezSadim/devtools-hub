"use client";
import { useState } from "react";
export default function JsonSchemaValidator() {
  const [schema, setSchema] = useState('');
  const [data, setData] = useState('');
  const [result, setResult] = useState('');
  function validate() {
    try {
      const s = JSON.parse(schema);
      const d = JSON.parse(data);
      // Basic type checking
      function check(schema, data, path) {
        if (schema.type) {
          const t = schema.type;
          const actual = Array.isArray(data) ? 'array' : typeof data;
          if (t === 'array' && !Array.isArray(data)) return path + ': expected array';
          if (t !== 'array' && t !== actual) return path + ': expected ' + t + ' got ' + actual;
        }
        if (schema.required && typeof data === 'object' && !Array.isArray(data)) {
          for (const k of schema.required) {
            if (!(k in data)) return path + '.' + k + ': required field missing';
          }
        }
        if (schema.properties && typeof data === 'object') {
          for (const [k, v] of Object.entries(schema.properties)) {
            if (k in data) { const e = check(v, data[k], path + '.' + k); if (e) return e; }
          }
        }
        return null;
      }
      const err = check(s, d, 'root');
      setResult(err ? '❌ Invalid: ' + err : '✅ Valid JSON!');
    } catch(e) { setResult('Parse error: ' + e.message); }
  }
  return (
    <div style={{maxWidth:700,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>JSON Schema Validator</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Validate JSON data against a JSON Schema.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Schema (JSON Schema):</label>
          <textarea value={schema} onChange={e=>setSchema(e.target.value)} rows={10} placeholder='{"type":"object","required":["name"],"properties":{"name":{"type":"string"}}}' style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Data (JSON):</label>
          <textarea value={data} onChange={e=>setData(e.target.value)} rows={10} placeholder='{"name":"Alice"}' style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
      <button onClick={validate} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.75rem 2rem',fontSize:'1rem',cursor:'pointer',marginBottom:'1rem'}}>Validate</button>
      {result && <div style={{background:'#1e293b',borderRadius:6,padding:'1rem',fontSize:'1rem'}}>{result}</div>}
    </div>
  );
}