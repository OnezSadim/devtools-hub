"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE","AND","OR","NOT","IN","AS","DISTINCT","COUNT","SUM","AVG","MAX","MIN"];
  const format = () => {
    let sql = input.replace(/\s+/g, " ").trim();
    const breakBefore = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","GROUP BY","ORDER BY","HAVING","LIMIT","UNION"];
    for (const kw of breakBefore) {
      sql = sql.replace(new RegExp(`\b${kw}\b`, "gi"), `\n${kw}`);
    }
    sql = sql.replace(/,\s*/g, ",\n  ");
    for (const kw of keywords) {
      sql = sql.replace(new RegExp(`\b${kw}\b`, "gi"), kw);
    }
    setOutput(sql.trim());
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Prettify and format SQL queries for readability.</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Raw SQL</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={14} className="w-full bg-gray-800 rounded-lg p-3 font-mono text-sm resize-none" placeholder="SELECT * FROM users WHERE id=1" />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Formatted SQL</label>
          <textarea value={output} readOnly rows={14} className="w-full bg-gray-800 rounded-lg p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button onClick={format} className="flex-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg py-2 font-semibold">Format SQL</button>
        <button onClick={copy} className="px-6 bg-gray-700 hover:bg-gray-600 rounded-lg py-2 font-semibold">Copy</button>
      </div>
    </div>
  );
}
