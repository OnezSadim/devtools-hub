"use client";
import { useState } from "react";
export default function TextSorter() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState("asc");
  const sort = () => {
    const lines = input.split("\n").filter(l=>l.trim());
    lines.sort((a,b)=>order==="asc"?a.localeCompare(b):b.localeCompare(a));
    setInput(lines.join("\n"));
  };
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Text Line Sorter</h1><div className="flex gap-4 mb-4"><select className="bg-gray-800 p-3 rounded" value={order} onChange={e=>setOrder(e.target.value)}><option value="asc">A → Z</option><option value="desc">Z → A</option></select><button onClick={sort} className="bg-blue-600 px-6 py-2 rounded">Sort Lines</button></div><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter lines to sort"/></div>);
}