"use client";
import { useState } from "react";
export default function SQLFormatter() {
  const [sql, setSql] = useState("");
  const [formatted, setFormatted] = useState("");
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","NOT","IN","IS","NULL","LIKE","ORDER BY","GROUP BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","DROP TABLE","ALTER TABLE","AS","DISTINCT","COUNT","SUM","AVG","MAX","MIN","UNION","INTERSECT","EXCEPT"];
  const format = () => {
    let q = sql.trim();
    const breakwords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ORDER BY","GROUP BY","HAVING","LIMIT","OFFSET","UNION","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM"];
    breakwords.forEach(kw => {
      const re = new RegExp("\b" + kw + "\b", "gi");
      q = q.replace(re, "
" + kw);
    });
    q = q.replace(/,\s*/g, ",
  ");
    q = q.split("
").map(l => l.trim()).filter(Boolean).join("
");
    setFormatted(q);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-gray-400 mb-6">Format and beautify SQL queries for better readability.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Input SQL</label>
            <textarea value={sql} onChange={e => setSql(e.target.value)} rows={14} placeholder="SELECT id,name,email FROM users WHERE active=1 ORDER BY name" className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
            <button onClick={format} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full">Format SQL</button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Formatted Output</label>
            <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono overflow-auto h-64 whitespace-pre-wrap">{formatted}</pre>
            {formatted && <button onClick={() => navigator.clipboard.writeText(formatted)} className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded w-full text-sm">Copy</button>}
          </div>
        </div>
      </div>
    </div>
  );
}