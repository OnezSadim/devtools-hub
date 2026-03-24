"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const KEYWORDS = ["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","INDEX","DROP","ALTER","ADD","COLUMN","AS","DISTINCT","COUNT","SUM","AVG","MAX","MIN","NOT","NULL","IS","IN","LIKE","BETWEEN","EXISTS","UNION","ALL"];
  function format(sql: string): string {
    let s = sql.replace(/\s+/g, " ").trim();
    const newline = ["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","GROUP BY","ORDER BY","HAVING","LIMIT","UNION"];
    for (const kw of newline) { s = s.replace(new RegExp(`\b${kw}\b`,"gi"), "
"+kw); }
    s = s.replace(/,\s*/g, ",
  ");
    return s.trim();
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-gray-400 mb-6">Prettify and format SQL queries for readability.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Input SQL</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="SELECT id, name FROM users WHERE active=1 AND age > 18 ORDER BY name" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Formatted SQL</label>
            <textarea readOnly value={output} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={()=>setOutput(format(input))} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Format</button>
          <button onClick={()=>{setInput("");setOutput("");}} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Clear</button>
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>}
        </div>
      </div>
    </main>
  );
}
