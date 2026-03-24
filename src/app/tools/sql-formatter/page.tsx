"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","GROUP BY","ORDER BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE","AND","OR","NOT","IN","IS NULL","IS NOT NULL","AS","DISTINCT","COUNT","SUM","AVG","MIN","MAX"];
  const format = () => {
    let sql = input.replace(/\s+/g," ").trim();
    keywords.forEach(kw => { sql = sql.replace(new RegExp(`\b${kw}\b`,"gi"), "
" + kw); });
    setOutput(sql.trim());
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Prettify SQL queries for readability.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="SELECT * FROM users WHERE id = 1" className="w-full h-36 bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono text-sm" />
      <button onClick={format} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4">Format SQL</button>
      {output && <textarea value={output} readOnly className="w-full h-36 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />}
    </div>
  );
}