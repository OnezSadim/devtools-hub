"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [input,setInput]=useState("");
  const [output,setOutput]=useState("");
  const [error,setError]=useState("");
  function convert(){
    try{
      setError("");
      const data=JSON.parse(input);
      const arr=Array.isArray(data)?data:[data];
      if(!arr.length){setOutput("");return;}
      const keys=Object.keys(arr[0]);
      const csv=[keys.join(","),...arr.map((row:Record<string,unknown>)=>keys.map(k=>{
        const v=row[k]??"";
        const s=String(v);
        return s.includes(",")||s.includes('"')||s.includes("\n")?`"${s.replace(/"/g,''''''")}"`  :s;
      }).join(","))].join("\n");
      setOutput(csv);
    }catch(e){setError("Invalid JSON");}
  }
  function download(){
    const b=new Blob([output],{type:"text/csv"});
    const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="data.csv";a.click();
  }
  return(<div className="min-h-screen bg-gray-950 text-white p-6"><div className="max-w-3xl mx-auto"><h1 className="text-3xl font-bold mb-2">JSON to CSV</h1><p className="text-gray-400 mb-6">Convert JSON arrays to CSV format for Excel or Google Sheets.</p><div className="grid grid-cols-2 gap-4 mb-4"><div><label className="block text-sm text-gray-400 mb-1">JSON Input</label><textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" value={input} onChange={e=>setInput(e.target.value)} placeholder='[{"name":"Alice","age":30}]'/></div><div><label className="block text-sm text-gray-400 mb-1">CSV Output</label><textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" value={output} readOnly placeholder="CSV will appear here..."/></div></div>{error&&<p className="text-red-400 mb-2">{error}</p>}<div className="flex gap-3"><button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>{output&&<button onClick={download} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-medium">Download CSV</button>}</div></div></div>);
}