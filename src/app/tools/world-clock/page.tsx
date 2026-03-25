"use client";
import { useState, useEffect } from "react";
const zones = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Paris', tz: 'Europe/Paris' },
  { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Mumbai', tz: 'Asia/Kolkata' },
  { name: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'Chicago', tz: 'America/Chicago' },
  { name: 'São Paulo', tz: 'America/Sao_Paulo' },
  { name: 'Johannesburg', tz: 'Africa/Johannesburg' },
];
export default function WorldClock() {
  const [now, setNow] = useState(new Date());
  const [search, setSearch] = useState('');
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const filtered = zones.filter(z => z.name.toLowerCase().includes(search.toLowerCase()) || z.tz.toLowerCase().includes(search.toLowerCase()));
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'1rem'}}>World Clock</h1>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Filter cities...' style={{width:'100%',maxWidth:'400px',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',marginBottom:'2rem',boxSizing:'border-box'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:'1rem'}}>
        {filtered.map(z => {
          const time = now.toLocaleTimeString('en-US', { timeZone: z.tz, hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false });
          const date = now.toLocaleDateString('en-US', { timeZone: z.tz, weekday:'short', month:'short', day:'numeric' });
          const offset = new Intl.DateTimeFormat('en', { timeZone: z.tz, timeZoneName: 'short' }).formatToParts(now).find(p=>p.type==='timeZoneName')?.value || '';
          return (
            <div key={z.tz} style={{background:'#1e293b',padding:'1.5rem',borderRadius:'8px',border:'1px solid #334155'}}>
              <div style={{color:'#94a3b8',fontSize:'0.875rem',marginBottom:'0.25rem'}}>{z.name}</div>
              <div style={{fontSize:'2rem',fontWeight:'bold',color:'#f1f5f9',letterSpacing:'0.05em'}}>{time}</div>
              <div style={{color:'#64748b',fontSize:'0.75rem',marginTop:'0.25rem'}}>{date} · {offset}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}