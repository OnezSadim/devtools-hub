"use client";
import { useState } from "react";

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function formatSQL(sql) {
    const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","DROP TABLE","ALTER TABLE"];
    let result = sql.trim();
    keywords.forEach(kw => {
      const re = new RegExp("\b" + kw + "\b", "gi");
      result = result.replace(re, "
" + kw);
    });
    return result.replace(/,/g, ",
  ").replace(/
\s*
/g, "
").trim();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
        <p className="text-gray-400 mb-6">Format and beautify SQL queries</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Input SQL</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-green-400 focus:outline-none focus:border-blue-500" value={input} onChange={e => setInput(e.target.value)} placeholder="SELECT * FROM users WHERE id = 1" />
            <button onClick={() => setOutput(formatSQL(input))} className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">Format SQL</button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Formatted SQL</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-green-400 focus:outline-none" value={output} readOnly />
            <button onClick={() => navigator.clipboard.writeText(output)} className="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-medium">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
