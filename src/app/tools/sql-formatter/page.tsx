"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  function format() {
    const keywords = ['SELECT','FROM','WHERE','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN','ON','AND','OR','NOT','IN','BETWEEN','LIKE','ORDER BY','GROUP BY','HAVING','LIMIT','OFFSET','INSERT INTO','VALUES','UPDATE','SET','DELETE FROM','CREATE TABLE','DROP TABLE','ALTER TABLE','ADD','COLUMN','INDEX','PRIMARY KEY','FOREIGN KEY','REFERENCES','UNION','DISTINCT','AS','IS NULL','IS NOT NULL'];
    let r = input.toUpperCase();
    // Restore string literals
    r = input;
    const newlineKw = ['SELECT','FROM','WHERE','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN','ORDER BY','GROUP BY','HAVING','LIMIT','UNION','INSERT INTO','VALUES','UPDATE','SET','DELETE FROM'];
    for (const kw of newlineKw) {
      const re = new RegExp('\\b' + kw + '\\b', 'gi');
      r = r.replace(re, '
' + kw.toUpperCase());
    }
    r = r.replace(/,/g, ',
  ');
    r = r.trim();
    setOutput(r);
  }
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>SQL Formatter</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Format and prettify SQL queries.</p>
      <button onClick={format} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.75rem 2rem',fontSize:'1rem',cursor:'pointer',marginBottom:'1rem'}}>Format SQL</button>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input SQL:</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16} placeholder="select id,name,email from users where active=1 order by name" style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Formatted SQL:</label>
          <textarea value={output} readOnly rows={16} style={{width:'100%',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
    </div>
  );
}