"use client";
import { useState } from "react";
export default function XmlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indent, setIndent] = useState(2);
  function format() {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'text/xml');
      const err = doc.querySelector('parsererror');
      if (err) { setOutput('Parse error: ' + err.textContent); return; }
      function serialize(node, level) {
        const pad = ' '.repeat(level * indent);
        if (node.nodeType === 3) { const t = node.textContent.trim(); return t ? pad + t : ''; }
        if (node.nodeType !== 1) return '';
        const tag = node.tagName;
        const attrs = Array.from(node.attributes).map(a => a.name + '="' + a.value + '"').join(' ');
        const open = '<' + tag + (attrs ? ' ' + attrs : '') + '>';
        const children = Array.from(node.childNodes).map(c => serialize(c, level+1)).filter(Boolean);
        if (children.length === 0) return pad + '<' + tag + (attrs ? ' ' + attrs : '') + '/>';
        if (children.length === 1 && !children[0].includes('
')) return pad + open + children[0].trim() + '</' + tag + '>';
        return pad + open + '
' + children.join('
') + '
' + pad + '</' + tag + '>';
      }
      setOutput('<?xml version="1.0" encoding="UTF-8"?>
' + serialize(doc.documentElement, 0));
    } catch(e) { setOutput('Error: ' + e.message); }
  }
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>XML Formatter</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Prettify and format XML documents.</p>
      <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
        <label style={{color:'#94a3b8'}}>Indent spaces:</label>
        <input type="number" value={indent} onChange={e=>setIndent(Number(e.target.value))} min={1} max={8} style={{width:60,background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:4,padding:'0.25rem 0.5rem'}} />
        <button onClick={format} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.5rem 1.5rem',cursor:'pointer'}}>Format</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input XML:</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={18} placeholder="<root><child>value</child></root>" style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Formatted XML:</label>
          <textarea value={output} readOnly rows={18} style={{width:'100%',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
    </div>
  );
}