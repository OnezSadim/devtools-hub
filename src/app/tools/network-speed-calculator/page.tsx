"use client";
import { useState } from "react";
export default function NetworkSpeedCalculator() {
  const [size, setSize] = useState("1");
  const [sizeUnit, setSizeUnit] = useState("GB");
  const [speed, setSpeed] = useState("100");
  const [speedUnit, setSpeedUnit] = useState("Mbps");
  const sizeInBits = () => {
    const v = parseFloat(size)||0;
    const m = {B:8,KB:8e3,MB:8e6,GB:8e9,TB:8e12};
    return v*(m[sizeUnit]||1);
  };
  const speedInBps = () => {
    const v = parseFloat(speed)||0;
    const m = {bps:1,Kbps:1e3,Mbps:1e6,Gbps:1e9};
    return v*(m[speedUnit]||1);
  };
  const seconds = () => { const s=speedInBps(); return s>0?sizeInBits()/s:0; };
  const fmt = s => { if(s<60) return s.toFixed(1)+" sec"; if(s<3600) return (s/60).toFixed(1)+" min"; if(s<86400) return (s/3600).toFixed(2)+" hr"; return (s/86400).toFixed(2)+" days"; };
  const secs = seconds();
  const connections = [{name:"2G (EDGE)",speed:"0.384 Mbps"},{name:"3G",speed:"7.2 Mbps"},{name:"4G LTE",speed:"50 Mbps"},{name:"5G",speed:"1000 Mbps"},{name:"WiFi 802.11n",speed:"150 Mbps"},{name:"WiFi 802.11ac",speed:"867 Mbps"},{name:"Gigabit Ethernet",speed:"1000 Mbps"},{name:"10GbE",speed:"10000 Mbps"}];
  const parseSpeed = s => parseFloat(s)*1e6;
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Network Speed Calculator</h1><p className="text-gray-400 mb-6">Calculate file transfer time based on file size and connection speed. Compare common connections.</p>
    <div className="space-y-4 mb-6">
      <div className="flex gap-2"><div className="flex-1"><label className="block text-sm text-gray-400 mb-1">File Size</label><input type="number" value={size} onChange={e=>setSize(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
        <div><label className="block text-sm text-gray-400 mb-1">Unit</label><select value={sizeUnit} onChange={e=>setSizeUnit(e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
          <option>B</option><option>KB</option><option>MB</option><option>GB</option><option>TB</option></select></div></div>
      <div className="flex gap-2"><div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Connection Speed</label><input type="number" value={speed} onChange={e=>setSpeed(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
        <div><label className="block text-sm text-gray-400 mb-1">Unit</label><select value={speedUnit} onChange={e=>setSpeedUnit(e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
          <option>bps</option><option>Kbps</option><option>Mbps</option><option>Gbps</option></select></div></div>
    </div>
    {secs>0 && <div className="bg-gray-800 rounded-lg p-4 mb-6"><p className="text-sm text-gray-400 mb-1">Transfer time:</p><p className="text-2xl font-bold text-green-400">{fmt(secs)}</p><p className="text-sm text-gray-500 mt-1">{secs.toFixed(2)} seconds</p></div>}
    <div><h2 className="text-lg font-semibold mb-2">Compare connections</h2><div className="space-y-2">{connections.map(c=>{ const t=sizeInBits()/parseSpeed(c.speed); return (<div key={c.name} className="bg-gray-800 rounded p-3 flex justify-between items-center"><div><p className="font-semibold text-sm">{c.name}</p><p className="text-xs text-gray-500">{c.speed}</p></div><p className="font-mono text-green-400 text-sm">{fmt(t)}</p></div>);})}</div></div>
  </div></div>);
}