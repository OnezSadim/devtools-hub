"use client";
import { useState } from "react";
export default function TextStatistics() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim() ? (text.match(/[.!?]+/g)||[]).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p=>p.trim()).length : 0;
  const avgWordLen = words > 0 ? (text.replace(/\s/g,'').replace(/[^a-zA-Z]/g,'').length / words).toFixed(1) : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const freq: Record<string,number> = {};
  text.toLowerCase().replace(/[^a-z]/g,' ').split(/\s+/).filter(w=>w.length>3).forEach(w=>freq[w]=(freq[w]||0)+1);
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,10);
  const stats = [{label:'Characters',value:text.length},{label:'Characters (no spaces)',value:text.replace(/\s/g,'').length},{label:'Words',value:words},{label:'Sentences',value:sentences},{label:'Paragraphs',value:paragraphs},{label:'Avg word length',value:avgWordLen},{label:'Reading time',value:readingTime+'min'},{label:'Lines',value:text.split('\n').length}];
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'2rem'}}>Text Statistics</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem'}}>
        <div>
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder='Paste your text here...' style={{width:'100%',height:'300px',padding:'1rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',color:'#f1f5f9',fontFamily:'monospace',fontSize:'0.875rem',resize:'vertical',boxSizing:'border-box'}}/>
        </div>
        <div style={{display:'grid',gap:'1rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
            {stats.map(s=>(
              <div key={s.label} style={{background:'#1e293b',padding:'0.75rem',borderRadius:'6px'}}>
                <div style={{color:'#64748b',fontSize:'0.75rem'}}>{s.label}</div>
                <div style={{color:'#38bdf8',fontSize:'1.25rem',fontWeight:'bold'}}>{s.value}</div>
              </div>
            ))}
          </div>
          {topWords.length > 0 && (
            <div style={{background:'#1e293b',padding:'1rem',borderRadius:'8px'}}>
              <h2 style={{color:'#94a3b8',fontSize:'0.875rem',marginBottom:'0.75rem'}}>Top Words</h2>
              <div style={{display:'grid',gap:'0.25rem'}}>
                {topWords.map(([w,c])=>(
                  <div key={w} style={{display:'flex',justifyContent:'space-between',fontSize:'0.875rem'}}>
                    <span>{w}</span><span style={{color:'#38bdf8'}}>{c}x</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}