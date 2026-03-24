"use client";
import { useState } from "react";

const KW = ["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE","UNION","UNION ALL","AS","IN","NOT","NULL","IS","BETWEEN","LIKE","EXISTS","CASE","WHEN","THEN","ELSE","END"];
const MAJOR = new Set(["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","OUTER JOIN","ON","GROUP BY","ORDER BY","HAVING","LIMIT","OFFSET","UNION","UNION ALL","VALUES","SET"]);

export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const format = () => {
    let sql = input.replace(/\s+/g, " ").trim();
    MAJOR.forEach(kw => {
      const re = new RegExp("\\b" + kw.replace(/ /g, "\\s+") + "\\b", "gi");
      sql = sql.replace(re, "\n" + kw);
    });
    setOutput(sql.trim());
  };

  const minify = () => setOutput(input.replace(/\s+/g, " ").replace(/\s*([,()=<>])\s*/g, "$1").trim());

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Format and beautify SQL queries for readability.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="SELECT * FROM users WHERE id = 1..." className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 mb-3 font-mono text-sm" />
      <div className="flex gap-2 mb-4">
        <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Format</button>
        <button onClick={minify} className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded font-medium">Minify</button>
      </div>
      <textarea readOnly value={output} className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm whitespace-pre" />
    </div>
  );
}
