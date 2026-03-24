"use client";
import { useState } from "react";
const KEYWORDS = ["SELECT","FROM","WHERE","JOIN","LEFT","RIGHT","INNER","OUTER","ON","AND","OR","NOT","IN","IS","NULL","ORDER","BY","GROUP","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","INDEX","DROP","ALTER","ADD","COLUMN","AS","DISTINCT","COUNT","SUM","AVG","MAX","MIN","UNION","ALL","CASE","WHEN","THEN","ELSE","END"];
export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const format = () => {
    let sql = input.trim();
    const newlineKw = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ORDER BY","GROUP BY","HAVING","LIMIT","UNION","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM"];
    sql = sql.replace(/\s+/g, " ");
    for (const kw of newlineKw) {
      sql = sql.replace(new RegExp(`\b${kw}\b`, "gi"), `\n${kw}`);
    }
    sql = sql.replace(/,/g, ",\n  ");
    KEYWORDS.forEach(kw => { sql = sql.replace(new RegExp(`\b${kw}\b`, "g"), kw); });
    setOutput(sql.trim());
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-gray-400 mb-6">Format and beautify SQL queries</p>
        <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Format SQL</button>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Input SQL</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={20}
              placeholder="SELECT * FROM users WHERE id = 1;"
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Formatted SQL</label>
            <textarea value={output} readOnly rows={20}
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
        </div>
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy Output</button>}
      </div>
    </main>
  );
}