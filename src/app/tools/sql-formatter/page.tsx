"use client";
import { useState } from "react";

function formatSQL(sql: string): string {
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE"];
  let out = sql.trim();
  keywords.forEach(kw => {
    const re = new RegExp("\b" + kw + "\b", "gi");
    out = out.replace(re, "
" + kw);
  });
  return out.replace(/,\s*/g, ",
  ").replace(/^
/, "");
}

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Format and prettify SQL queries for readability.</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 block mb-1">Input SQL</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-72 bg-gray-900 rounded p-3 font-mono text-sm resize-none" placeholder="SELECT * FROM users WHERE id = 1 AND active = true ORDER BY name;" />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">Formatted SQL</label>
          <textarea readOnly value={output} className="w-full h-72 bg-gray-900 rounded p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button onClick={()=>setOutput(formatSQL(input))} className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 font-semibold">Format</button>
        <button onClick={()=>{setInput("");setOutput("");}} className="bg-gray-700 hover:bg-gray-600 rounded px-6 py-2">Clear</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 rounded px-6 py-2">Copy</button>
      </div>
    </main>
  );
}