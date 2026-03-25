"use client";
import { useState } from "react";
function formatSQL(sql) {
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE","CREATE TABLE","DROP TABLE","ALTER TABLE"];
  let result = sql.trim();
  keywords.forEach(kw => {
    const re = new RegExp(kw, "gi");
    result = result.replace(re, "\n" + kw);
  });
  return result.split("\n").filter(l=>l.trim()).map(l=>l.trim()).join("\n");
}
export default function SQLFormatter() {
  const [input, setInput] = useState("SELECT id, name, email FROM users WHERE active = 1 AND role = 'admin' ORDER BY name LIMIT 10");
  const [output, setOutput] = useState("");
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-white">SQL Formatter</h1>
      <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-32 bg-gray-800 text-white rounded-xl p-4 font-mono text-sm" placeholder="Paste SQL here..." />
      <button onClick={()=>setOutput(formatSQL(input))} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">Format SQL</button>
      {output && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Formatted:</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-indigo-400 hover:text-indigo-300 text-sm">Copy</button>
          </div>
          <pre className="bg-gray-900 rounded-xl p-4 text-green-400 text-sm overflow-auto whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}
