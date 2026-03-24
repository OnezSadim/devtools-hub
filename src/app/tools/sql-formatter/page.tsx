"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","NOT","IN","IS","NULL","ORDER BY","GROUP BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","DROP TABLE","ALTER TABLE","INDEX","UNION","DISTINCT","AS","COUNT","SUM","AVG","MIN","MAX"];
  const format = () => {
    let sql = input.replace(/\s+/g," ").trim();
    keywords.forEach(k => { sql = sql.replace(new RegExp(`\b${k}\b`,"gi"), `
${k}`); });
    sql = sql.replace(/,/g, ",
  ");
    setOutput(sql.trim());
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Format and prettify SQL queries</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste SQL here..." className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
      <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-4">Format SQL</button>
      {output && <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm overflow-auto whitespace-pre-wrap">{output}</pre>}
    </div>
  );
}