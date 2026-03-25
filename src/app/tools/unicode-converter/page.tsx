'''use client'''
import { useState } from 'react';

export default function UnicodeConverter() {
  const [text, setText] = useState('');
  const [codePoints, setCodePoints] = useState('');

  const textToUnicode = (s: string) => [...s].map(c => 'U+' + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4,'0')).join(' ');
  const textToEscape = (s: string) => [...s].map(c => { const cp = c.codePointAt(0)!; return cp > 0xFFFF ? '\u{' + cp.toString(16).toUpperCase() + '}' : '\u' + cp.toString(16).toUpperCase().padStart(4,'0'); }).join('');
  const unicodeToText = (s: string) => { try { return s.replace(/U\+([0-9a-fA-F]+)/g, (_, h) => String.fromCodePoint(parseInt(h, 16))); } catch { return 'Invalid input'; } };
  const escapeToText = (s: string) => { try { return s.replace(/\u\{([0-9a-fA-F]+)\}/g, (_, h) => String.fromCodePoint(parseInt(h,16))).replace(/\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCodePoint(parseInt(h,16))); } catch { return 'Invalid input'; } };

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Unicode Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert text to Unicode code points and escape sequences.</p>
      <div style={{marginBottom:'2rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Text Input</label>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." style={{width:'100%',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'1rem',boxSizing:'border-box'}} />
      </div>
      {text && (
        <div style={{display:'grid',gap:'1rem'}}>
          {[['Code Points (U+)', textToUnicode(text)],['JS Escape Sequences', textToEscape(text)],['Decimal Values', [...text].map(c => c.codePointAt(0)).join(' ')],['Hex Values', [...text].map(c => c.codePointAt(0)!.toString(16).toUpperCase()).join(' ')]].map(([label, value]) => (
            <div key={label as string} style={{background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem'}}>
              <div style={{fontSize:'0.75rem',color:'#64748b',marginBottom:'0.5rem'}}>{label}</div>
              <div style={{color:'#4ade80',wordBreak:'break-all',marginBottom:'0.5rem'}}>{value}</div>
              <button onClick={() => navigator.clipboard.writeText(value as string)} style={{background:'#0ea5e9',border:'none',borderRadius:'4px',padding:'0.25rem 0.75rem',color:'#fff',cursor:'pointer',fontSize:'0.75rem'}}>Copy</button>
            </div>
          ))}
        </div>
      )}
      <div style={{marginTop:'2rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Code Points to Text (e.g. U+0048 U+0065)</label>
        <input value={codePoints} onChange={e => setCodePoints(e.target.value)} placeholder="U+0048 U+0065 U+006C..." style={{width:'100%',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'1rem',boxSizing:'border-box',marginBottom:'0.5rem'}} />
        {codePoints && <div style={{background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#4ade80'}}>{unicodeToText(codePoints)}</div>}
      </div>
    </main>
  );
}
