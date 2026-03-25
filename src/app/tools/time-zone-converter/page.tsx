"use client";
import { useState, useEffect } from "react";
const ZONES = ["UTC","America/New_York","America/Chicago","America/Denver","America/Los_Angeles","America/Sao_Paulo","Europe/London","Europe/Paris","Europe/Berlin","Europe/Amsterdam","Asia/Dubai","Asia/Kolkata","Asia/Bangkok","Asia/Shanghai","Asia/Tokyo","Australia/Sydney"];
export default function TimeZoneConverter() {
  const [dt, setDt] = useState("");
  const [from, setFrom] = useState("UTC");
  useEffect(()=>{ const now = new Date(); now.setSeconds(0,0); setDt(now.toISOString().slice(0,16)); },[]);
  const converted = ZONES.map(tz => {
    try {
      const d = new Date(dt + (from==="UTC"?"Z":""));
      return { tz, time: d.toLocaleString("en-US",{timeZone:tz,dateStyle:"short",timeStyle:"short",hour12:false}) };
    } catch { return { tz, time: "—" }; }
  });
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Time Zone Converter</h1>
        <p className="text-gray-400 mb-6">Convert time across world time zones instantly</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Date & Time</label><input type="datetime-local" value={dt} onChange={e=>setDt(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Source Zone</label><select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">{ZONES.map(z=><option key={z}>{z}</option>)}</select></div>
        </div>
        <div className="space-y-2">{converted.map(({tz,time})=>(
          <div key={tz} className={`flex justify-between bg-gray-800 rounded p-3 ${tz===from?"border border-blue-500":""}`}>
            <span className="text-gray-300 text-sm">{tz}</span>
            <span className="font-mono font-bold">{time}</span>
          </div>
        ))}</div>
      </div>
    </div>
  );
}