'''use client'''
import { useState } from 'react';

export default function TextCaseConverter() {
  const [input, setInput] = useState('');

  const toCamelCase = (s: string) => s.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toLowerCase());
  const toSnakeCase = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
  const toPascalCase = (s: string) => s.replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase());
  const toKebabCase = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]+/g, '-').toLowerCase();
  const toConstantCase = (s: string) => toSnakeCase(s).toUpperCase();
  const toDotCase = (s: string) => toSnakeCase(s).replace(/_/g, '.');
  const toTitleCase = (s: string) => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
  const toSentenceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const cases = [
    { label: 'camelCase', value: toCamelCase(input) },
    { label: 'snake_case', value: toSnakeCase(input) },
    { label: 'PascalCase', value: toPascalCase(input) },
    { label: 'kebab-case', value: toKebabCase(input) },
    { label: 'CONSTANT_CASE', value: toConstantCase(input) },
    { label: 'dot.case', value: toDotCase(input) },
    { label: 'Title Case', value: toTitleCase(input) },
    { label: 'Sentence case', value: toSentenceCase(input) },
    { label: 'UPPERCASE', value: input.toUpperCase() },
    { label: 'lowercase', value: input.toLowerCase() },
  ];

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Text Case Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert text between camelCase, snake_case, PascalCase, kebab-case and more.</p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter text to convert..."
        style={{width:'100%',minHeight:'80px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'1rem',marginBottom:'1.5rem',boxSizing:'border-box'}}
      />
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1rem'}}>
        {cases.map(c => (
          <div key={c.label} style={{background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem'}}>
            <div style={{fontSize:'0.75rem',color:'#64748b',marginBottom:'0.5rem'}}>{c.label}</div>
            <div style={{color:'#f1f5f9',wordBreak:'break-all',marginBottom:'0.5rem'}}>{c.value || <span style={{color:'#475569'}}>—</span>}</div>
            <button onClick={() => navigator.clipboard.writeText(c.value)} style={{background:'#0ea5e9',border:'none',borderRadius:'4px',padding:'0.25rem 0.75rem',color:'#fff',cursor:'pointer',fontSize:'0.75rem'}}>Copy</button>
          </div>
        ))}
      </div>
    </main>
  );
}
