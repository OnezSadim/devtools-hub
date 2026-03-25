"use client";
import { useState } from "react";
export default function SqlQueryBuilder() {
  const [table, setTable] = useState("users");
  const [cols, setCols] = useState("id, name, email");
  const [where, setWhere] = useState("active = 1");
  const [order, setOrder] = useState("created_at DESC");
  const [limit, setLimit] = useState("10");
  const [type, setType] = useState<"SELECT"|"INSERT"|"UPDATE"|"DELETE">("SELECT");
  const [setClause, setSetClause] = useState("name = 'New Name'");
  const [vals, setVals] = useState("1, 'John', 'john@example.com'");
  let sql = "";
  if (type === "SELECT") {
    sql = `SELECT ${cols}
FROM ${table}`;
    if (where) sql += `
WHERE ${where}`;
    if (order) sql += `
ORDER BY ${order}`;
    if (limit) sql += `
LIMIT ${limit}`;
  } else if (type === "INSERT") {
    sql = `INSERT INTO ${table} (${cols})
VALUES (${vals})`;
  } else if (type === "UPDATE") {
    sql = `UPDATE ${table}
SET ${setClause}`;
    if (where) sql += `
WHERE ${where}`;
  } else {
    sql = `DELETE FROM ${table}`;
    if (where) sql += `
WHERE ${where}`;
  }
  sql += ";";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">SQL Query Builder</h1>
      <div className="flex gap-2 mb-6">
        {(["SELECT","INSERT","UPDATE","DELETE"] as const).map(t=><button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded font-mono ${type===t?"bg-blue-600":"bg-gray-700"}`}>{t}</button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div><label className="block mb-1 text-sm text-gray-400">Table</label><input value={table} onChange={e=>setTable(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>
          {(type==="SELECT"||type==="INSERT") && <div><label className="block mb-1 text-sm text-gray-400">Columns</label><input value={cols} onChange={e=>setCols(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
          {type==="INSERT" && <div><label className="block mb-1 text-sm text-gray-400">Values</label><input value={vals} onChange={e=>setVals(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
          {type==="UPDATE" && <div><label className="block mb-1 text-sm text-gray-400">SET Clause</label><input value={setClause} onChange={e=>setSetClause(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
          {type!=="INSERT" && <div><label className="block mb-1 text-sm text-gray-400">WHERE</label><input value={where} onChange={e=>setWhere(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
          {type==="SELECT" && <div><label className="block mb-1 text-sm text-gray-400">ORDER BY</label><input value={order} onChange={e=>setOrder(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
          {type==="SELECT" && <div><label className="block mb-1 text-sm text-gray-400">LIMIT</label><input value={limit} onChange={e=>setLimit(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" /></div>}
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Generated SQL</label>
          <pre className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">{sql}</pre>
          <button onClick={()=>navigator.clipboard.writeText(sql)} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy SQL</button>
        </div>
      </div>
    </div>
  );
}
