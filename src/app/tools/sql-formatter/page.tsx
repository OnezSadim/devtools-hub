"use client";
import { useState } from "react";
export default function SQLFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [dialect, setDialect] = useState('standard');
  function formatSQL(sql) {
    const keywords = ['SELECT','FROM','WHERE','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN','OUTER JOIN','ON','GROUP BY','ORDER BY','HAVING','LIMIT','OFFSET','INSERT INTO','VALUES','UPDATE','SET','DELETE FROM','CREATE TABLE','ALTER TABLE','DROP TABLE','INDEX','UNIQUE','PRIMARY KEY','FOREIGN KEY','REFERENCES','NOT NULL','DEFAULT','AND','OR','NOT','IN','LIKE','BETWEEN','IS NULL','IS NOT NULL','AS','DISTINCT','COUNT','SUM','AVG','MIN','MAX','CASE','WHEN','THEN','ELSE','END','UNION','ALL','EXISTS','WITH'];
    let result = sql.trim();
    keywords.forEach(kw => {
      const re = new RegExp('\b' + kw.replace(/ /g,'\s+') + '\b', 'gi');
      result = result.replace(re, '
' + kw);
    });
    result = result.split('
').map(l=>l.trim()).filter(Boolean).join('
');
    return result;
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">SQL Formatter</h1>
      <p className="text-gray-400 mb-6">Format and beautify SQL queries</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input SQL</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="SELECT * FROM users WHERE id = 1" />
          <button onClick={()=>setOutput(formatSQL(input))} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Format SQL</button>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Formatted Output</label>
          <textarea value={output} readOnly className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          <button onClick={()=>{if(output)navigator.clipboard.writeText(output)}} className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
        </div>
      </div>
    </main>
  );
}