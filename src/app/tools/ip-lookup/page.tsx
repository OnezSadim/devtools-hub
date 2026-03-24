'use client';
import { useState } from 'react';
export default function IpLookup() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState<Record<string,string>|null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const lookup = async () => {
    setLoading(true); setError(''); setResult(null);
    try {
      const target = ip.trim() || '';
      const url = target ? `https://ipapi.co/${target}/json/` : 'https://ipapi.co/json/';
      const r = await fetch(url);
      const d = await r.json();
      if (d.error) { setError(d.reason || 'Lookup failed'); }
      else setResult({IP: d.ip, City: d.city, Region: d.region, Country: d.country_name, Postal: d.postal, Timezone: d.timezone, ISP: d.org, Latitude: d.latitude, Longitude: d.longitude});
    } catch { setError('Request failed'); }
    setLoading(false);
  };
  return (<div className='min-h-screen bg-gray-950 text-gray-100 p-8'><div className='max-w-2xl mx-auto'><h1 className='text-3xl font-bold mb-2'>IP Lookup</h1><p className='text-gray-400 mb-6'>Look up geolocation and ISP info for any IP address.</p><div className='bg-gray-900 rounded-lg p-6 space-y-4'><div className='flex gap-2'><input className='flex-1 bg-gray-800 rounded p-2 font-mono' value={ip} onChange={e=>setIp(e.target.value)} placeholder='Enter IP or leave blank for your IP'/><button onClick={lookup} disabled={loading} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-50'>{loading?'...':'Lookup'}</button></div>{error && <div className='text-red-400 text-sm'>{error}</div>}{result && <div className='grid grid-cols-2 gap-2'>{Object.entries(result).filter(([,v])=>v).map(([k,v])=>(<div key={k} className='bg-gray-800 rounded p-2'><div className='text-xs text-gray-400'>{k}</div><div className='font-mono text-sm'>{String(v)}</div></div>))}</div>}</div></div></div>);
}
