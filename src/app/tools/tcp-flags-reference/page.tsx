"use client";
import { useState } from "react";
export default function TcpFlagsReference() {
  const [selected, setSelected] = useState([]);
  const flags = [
    {name:"SYN", bit:"0x02", desc:"Synchronize sequence numbers. Used to initiate a TCP connection.", color:"blue"},
    {name:"ACK", bit:"0x10", desc:"Acknowledgment field is significant. Confirms received data.", color:"green"},
    {name:"FIN", bit:"0x01", desc:"No more data from sender. Initiates connection teardown.", color:"orange"},
    {name:"RST", bit:"0x04", desc:"Reset the connection. Abruptly terminates a TCP connection.", color:"red"},
    {name:"PSH", bit:"0x08", desc:"Push function. Tells receiver to pass data to application immediately.", color:"purple"},
    {name:"URG", bit:"0x20", desc:"Urgent pointer field is significant. Marks data as urgent.", color:"yellow"},
    {name:"ECE", bit:"0x40", desc:"ECN-Echo. Used for Explicit Congestion Notification.", color:"gray"},
    {name:"CWR", bit:"0x80", desc:"Congestion Window Reduced. Sender reduced its sending rate.", color:"gray"},
  ];
  const combos = [
    {name:"SYN", flags:["SYN"], desc:"Initial connection request (3-way handshake step 1)"},
    {name:"SYN-ACK", flags:["SYN","ACK"], desc:"Server acknowledges connection (3-way handshake step 2)"},
    {name:"ACK", flags:["ACK"], desc:"Client confirms (3-way handshake step 3 / data acknowledgment)"},
    {name:"FIN-ACK", flags:["FIN","ACK"], desc:"Graceful connection teardown"},
    {name:"RST-ACK", flags:["RST","ACK"], desc:"Abrupt connection reset"},
    {name:"PSH-ACK", flags:["PSH","ACK"], desc:"Data push with acknowledgment (most common data packets)"},
  ];
  const toggle = f => setSelected(s => s.includes(f) ? s.filter(x=>x!==f) : [...s, f]);
  const colorMap = {blue:"border-blue-500 bg-blue-900/30", green:"border-green-500 bg-green-900/30", orange:"border-orange-500 bg-orange-900/30", red:"border-red-500 bg-red-900/30", purple:"border-purple-500 bg-purple-900/30", yellow:"border-yellow-500 bg-yellow-900/30", gray:"border-gray-500 bg-gray-800"};
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">TCP Flags Reference</h1><p className="text-gray-400 mb-6">Complete reference for TCP control flags. Click flags to explore combinations.</p>
    <div className="grid grid-cols-2 gap-3 mb-6">{flags.map(f=>(<div key={f.name} onClick={()=>toggle(f.name)} className={"cursor-pointer border rounded-lg p-3 transition-all "+(selected.includes(f.name)?colorMap[f.color]:"border-gray-700 hover:border-gray-500")}>
      <div className="flex justify-between items-center mb-1"><span className="font-bold font-mono">{f.name}</span><span className="text-xs text-gray-500 font-mono">{f.bit}</span></div>
      <p className="text-sm text-gray-400">{f.desc}</p></div>))}</div>
    <div className="mb-6"><h2 className="text-lg font-semibold mb-3">Common Flag Combinations</h2><div className="space-y-2">{combos.map(c=>(<div key={c.name} className="bg-gray-800 rounded-lg p-3 flex items-start gap-3">
      <div className="flex gap-1 flex-shrink-0">{c.flags.map(f=>(<span key={f} className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-mono">{f}</span>))}</div>
      <div><p className="font-semibold text-sm">{c.name}</p><p className="text-xs text-gray-400">{c.desc}</p></div></div>))}</div></div>
    {selected.length>0 && <div className="bg-gray-800 rounded-lg p-4"><p className="text-sm text-gray-400 mb-2">Selected flags:</p><div className="flex gap-2 flex-wrap">{selected.map(f=>(<span key={f} className="bg-blue-600 text-white px-3 py-1 rounded font-mono">{f}</span>))}</div></div>}
  </div></div>);
}