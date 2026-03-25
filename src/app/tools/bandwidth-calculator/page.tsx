"use client";
import { useState } from "react";
export default function BandwidthCalculator() {
  const [fileSize, setFileSize] = useState("");
  const [fileSizeUnit, setFileSizeUnit] = useState("MB");
  const [speed, setSpeed] = useState("");
  const [speedUnit, setSpeedUnit] = useState("Mbps");
  const [result, setResult] = useState<string|null>(null);
  const unitToBytes: Record<string,number> = {B:1,KB:1024,MB:1048576,GB:1073741824,TB:1099511627776};
  const speedToMbps: Record<string,number> = {Kbps:0.001,Mbps:1,Gbps:1000};
  const calc = () => {
    const bytes = parseFloat(fileSize)*unitToBytes[fileSizeUnit];
    const mbps = parseFloat(speed)*speedToMbps[speedUnit];
    if(!bytes||!mbps) return;
    const secs = (bytes*8)/(mbps*1000000);
    if(secs<60) setResult(secs.toFixed(2)+" seconds");
    else if(secs<3600) setResult((secs/60).toFixed(2)+" minutes");
    else setResult((secs/3600).toFixed(2)+" hours");
  };
  return (<div className="max-w-md mx-auto p-6"><h1 className="text-2xl font-bold mb-4 text-white">Bandwidth Calculator</h1><p className="text-gray-400 mb-4">Calculate download/upload time for a file.</p><div className="space-y-3 mb-4"><div><label className="block text-sm text-gray-400 mb-1">File Size</label><div className="flex gap-2"><input type="number" value={fileSize} onChange={e=>setFileSize(e.target.value)} className="flex-1 bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="100" /><select value={fileSizeUnit} onChange={e=>setFileSizeUnit(e.target.value)} className="bg-gray-800 text-white rounded px-3 py-2 border border-gray-700">{Object.keys(unitToBytes).map(u=>(<option key={u}>{u}</option>))}</select></div></div><div><label className="block text-sm text-gray-400 mb-1">Connection Speed</label><div className="flex gap-2"><input type="number" value={speed} onChange={e=>setSpeed(e.target.value)} className="flex-1 bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="100" /><select value={speedUnit} onChange={e=>setSpeedUnit(e.target.value)} className="bg-gray-800 text-white rounded px-3 py-2 border border-gray-700">{Object.keys(speedToMbps).map(u=>(<option key={u}>{u}</option>))}</select></div></div></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium mb-4">Calculate</button>{result&&(<div className="bg-gray-800 rounded p-4 text-center"><div className="text-sm text-gray-400 mb-1">Estimated Transfer Time</div><div className="text-3xl font-bold text-green-400">{result}</div></div>)}</div>);
}
