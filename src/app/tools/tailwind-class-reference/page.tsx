"use client";
import { useState } from "react";
export default function TailwindClassReference() {
  const [search, setSearch] = useState("");
  const classes = [
    {cat:"Spacing",items:[{cls:"p-4",css:"padding: 1rem"},{cls:"m-4",css:"margin: 1rem"},{cls:"px-4",css:"padding-left/right: 1rem"},{cls:"py-4",css:"padding-top/bottom: 1rem"},{cls:"mt-4",css:"margin-top: 1rem"},{cls:"gap-4",css:"gap: 1rem"}]},
    {cat:"Flexbox",items:[{cls:"flex",css:"display: flex"},{cls:"flex-col",css:"flex-direction: column"},{cls:"items-center",css:"align-items: center"},{cls:"justify-center",css:"justify-content: center"},{cls:"flex-wrap",css:"flex-wrap: wrap"},{cls:"flex-1",css:"flex: 1 1 0%"}]},
    {cat:"Typography",items:[{cls:"text-sm",css:"font-size: 0.875rem"},{cls:"text-lg",css:"font-size: 1.125rem"},{cls:"font-bold",css:"font-weight: 700"},{cls:"text-center",css:"text-align: center"},{cls:"uppercase",css:"text-transform: uppercase"},{cls:"truncate",css:"overflow: hidden; text-overflow: ellipsis"}]},
    {cat:"Colors",items:[{cls:"text-white",css:"color: #ffffff"},{cls:"bg-blue-500",css:"background: #3b82f6"},{cls:"border-gray-300",css:"border-color: #d1d5db"},{cls:"text-gray-500",css:"color: #6b7280"}]},
    {cat:"Sizing",items:[{cls:"w-full",css:"width: 100%"},{cls:"h-screen",css:"height: 100vh"},{cls:"min-h-full",css:"min-height: 100%"},{cls:"max-w-lg",css:"max-width: 32rem"}]}
  ];
  const filtered = search ? classes.map(c=>({...c,items:c.items.filter(i=>i.cls.includes(search)||i.css.includes(search))})).filter(c=>c.items.length>0) : classes;
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Tailwind Class Reference</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Quick reference for common Tailwind CSS utility classes</p>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search classes..." style={{width:"100%",padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",marginBottom:"1.5rem",boxSizing:"border-box"}} />
      {filtered.map(cat=>(<div key={cat.cat} style={{marginBottom:"1.5rem"}}><h2 style={{color:"#a78bfa",marginBottom:"0.75rem",fontSize:"1rem"}}>{cat.cat}</h2><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"0.5rem"}}>{cat.items.map(item=>(<div key={item.cls} style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",padding:"0.6rem 0.75rem",display:"flex",justifyContent:"space-between",cursor:"pointer"}} onClick={()=>navigator.clipboard.writeText(item.cls)}><code style={{color:"#34d399"}}>{item.cls}</code><span style={{color:"#64748b",fontSize:"0.8rem"}}>{item.css}</span></div>))}</div></div>))}
    </div>
  );
}