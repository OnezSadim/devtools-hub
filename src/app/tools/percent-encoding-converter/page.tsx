'''use client'''
import { useState } from 'react';

export default function PercentEncodingConverter() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'encode'|'decode'>('encode');

  const encodeAll = (s: string) => [...s].map(c => { const cp = c.codePointAt(0)!; if (cp < 128) return '%' + cp.toString(16).toUpperCase().padStart(2,'0'); const bytes = new TextEncoder().encode(c); return Array.from(bytes).map(b => '%' + b.toString(16).toUpperCase().padStart(2,'0')).join(''); }).join('');
  const encodeUri = (s: string) => { try { return encodeURIComponent(s); } catch { return 'Invalid input'; } };
  const decodeUri = (s: string) => { try { return decodeURIComponent(s); } catch { return 'Invalid encoding'; } };

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Percent Encoding Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Encode and decode percent-encoded (URL-encoded) strings for use in URLs and form data.</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem'}}>
        {(['encode','decode'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} style={{background:mode===m?'#0ea5e9':'#1e293b',border:'1px solid #334155',borderRadius:'6px',padding:'0.5rem 1.5rem',color:mode===m?'#fff':'#94a3b8',cursor:'pointer',textTransform:'capitalize'}}>{m}</button>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={mode==='encode'?'Hello World! こんにちは':'Hello%20World%21'} style={{width:'100%',minHeight:'150px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'0.9rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>{mode==='encode'?'URI Component Encoded':'Decoded'}</label>
          <textarea readOnly value={mode==='encode'?encodeUri(input):decodeUri(input)} style={{width:'100%',minHeight:'150px',background:'#0f172a',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#4ade80',fontSize:'0.9rem',boxSizing:'border-box'}} />
          <button onClick={() => navigator.clipboard.writeText(mode==='encode'?encodeUri(input):decodeUri(input))} style={{marginTop:'0.5rem',background:'#0ea5e9',border:'none',borderRadius:'6px',padding:'0.5rem 1.5rem',color:'#fff',cursor:'pointer'}}>Copy</button>
        </div>
      </div>
      {mode === 'encode' && input && (
        <div style={{marginTop:'1.5rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem'}}>
          <div style={{fontSize:'0.75rem',color:'#64748b',marginBottom:'0.5rem'}}>Encode All Bytes (including unreserved)</div>
          <div style={{color:'#fb923c',wordBreak:'break-all'}}>{encodeAll(input)}</div>
        </div>
      )}
      <div style={{marginTop:'2rem',background:'#1e293b',borderRadius:'8px',padding:'1.5rem'}}>
        <h2 style={{color:'#94a3b8',fontSize:'1rem',marginBottom:'1rem'}}>Common Encodings</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem',fontSize:'0.85rem'}}>
          {[[' ','%20'],['!','%21'],['"','%22'],['#','%23'],['$','%24'],['%','%25'],['&','%26'],['','%27'],['(','%28'],[')','%29'],['*','%2A'],['+','%2B'],[',','%2C'],['/','%2F'],['?','%3F']].map(([c,e]) => (
            <div key={c} style={{display:'flex',gap:'1rem'}}><span style={{color:'#f1f5f9',minWidth:'2rem'}}>{c}</span><span style={{color:'#38bdf8'}}>{e}</span></div>
          ))}
        </div>
      </div>
    </main>
  );
}
