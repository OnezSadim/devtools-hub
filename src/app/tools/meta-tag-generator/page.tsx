'use client';
import { useState } from 'react';
export default function MetaTagGenerator() {
  const [form, setForm] = useState({title:'',description:'',keywords:'',author:'',ogImage:''});
  const [output, setOutput] = useState('');
  function generate() {
    const lines = [];
    if (form.title) lines.push('<title>' + form.title + '</title>');
    if (form.description) lines.push('<meta name="description" content="' + form.description + '">');
    if (form.keywords) lines.push('<meta name="keywords" content="' + form.keywords + '">');
    if (form.author) lines.push('<meta name="author" content="' + form.author + '">');
    lines.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    if (form.title) lines.push('<meta property="og:title" content="' + form.title + '">');
    if (form.description) lines.push('<meta property="og:description" content="' + form.description + '">');
    if (form.ogImage) lines.push('<meta property="og:image" content="' + form.ogImage + '">');
    setOutput(lines.join('
'));
  }
  const f = (k) => ({ value: form[k], onChange: e => setForm({...form,[k]:e.target.value}), style:{width:'100%',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',padding:'0.5rem',color:'#e2e8f0',marginBottom:'1rem'} });
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Meta Tag Generator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Generate HTML meta tags for SEO</p>
      <div style={{maxWidth:'600px'}}>
        {[['title','Page Title'],['description','Description'],['keywords','Keywords (comma separated)'],['author','Author'],['ogImage','OG Image URL']].map(([k,l]) => (<div key={k}><label style={{color:'#94a3b8',fontSize:'0.875rem'}}>{l}</label><input {...f(k)} /></div>))}
        <button onClick={generate} style={{padding:'0.75rem 2rem',background:'#6366f1',color:'white',border:'none',borderRadius:'8px',cursor:'pointer'}}>Generate Tags</button>
        {output && <><label style={{display:'block',marginTop:'1rem',color:'#94a3b8',fontSize:'0.875rem'}}>Output</label><textarea readOnly value={output} style={{width:'100%',height:'200px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#10b981',fontFamily:'monospace',fontSize:'0.875rem',marginTop:'0.5rem'}} /></>}
      </div>
    </main>
  );
}
