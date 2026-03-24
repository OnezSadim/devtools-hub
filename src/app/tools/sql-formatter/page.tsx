"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [sql, setSql] = useState("SELECT u.id, u.name, COUNT(o.id) as orders FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE u.active=1 GROUP BY u.id, u.name ORDER BY orders DESC LIMIT 10");
  const format = (s: string) => {
    const kw = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","DROP TABLE","ALTER TABLE","UNION","UNION ALL"];
    let r = s.trim();
    const sorted = [...kw].sort((a,b)=>b.length-a.length);
    sorted.forEach(k=>{
      r = r.replace(new RegExp("\b"+k+"\b","gi"), "
"+k+" ");
    });
    return r.split("
").map(l=>l.trim()).filter(Boolean).join("
");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Format and prettify SQL queries.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between mb-1"><label className="text-sm text-gray-400">Input SQL</label><button onClick={()=>setSql("")} className="text-xs text-gray-500 hover:text-gray-300">Clear</button></div>
          <textarea value={sql} onChange={e=>setSql(e.target.value)} rows={12} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm resize-none" />
        </div>
        <div>
          <div className="flex justify-between mb-1"><label className="text-sm text-gray-400">Formatted</label><button onClick={()=>navigator.clipboard.writeText(format(sql))} className="text-xs text-blue-400 hover:text-blue-300">Copy</button></div>
          <pre className="w-full h-64 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-green-300 font-mono text-sm overflow-auto whitespace-pre-wrap">{format(sql)}</pre>
        </div>
      </div>
    </main>
  );
}