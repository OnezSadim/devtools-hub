"use client";
import { useState } from "react";

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => {
    let sql = input.trim();
    const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","DROP TABLE","ALTER TABLE","UNION","WITH","AS"];
    keywords.forEach(kw => {
      const re = new RegExp(`\b${kw}\b`, "gi");
      sql = sql.replace(re, `
${kw}`);
    });
    sql = sql.replace(/,/g, ",
  ");
    sql = sql.replace(/

+/g, "
").trim();
    setOutput(sql);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-gray-400 mb-6">Beautify and format SQL queries for readability.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Input SQL</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste SQL here..." className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Formatted SQL</label>
            <textarea value={output} readOnly className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Format</button>
          <button onClick={()=>{navigator.clipboard.writeText(output)}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy</button>
          <button onClick={()=>{setInput("");setOutput("")}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Clear</button>
        </div>
      </div>
    </main>
  );
}