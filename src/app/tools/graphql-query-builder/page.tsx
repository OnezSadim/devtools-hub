"use client";
import { useState } from "react";
export default function GraphQLQueryBuilder() {
  const [typeName, setTypeName] = useState("User");
  const [fields, setFields] = useState("id
name
email
createdAt");
  const [args, setArgs] = useState("id: ID!");
  const [queryType, setQueryType] = useState<"query"|"mutation">("query");
  const [opName, setOpName] = useState("GetUser");
  const [result, setResult] = useState("");
  const build = () => {
    const fieldList = fields.split("
").filter(Boolean).map(f => "    " + f.trim()).join("
");
    const argStr = args.trim() ? `(${args.trim()})` : "";
    const varStr = args.trim() ? `(${args.split(",").map(a => { const [n, t] = a.split(":").map(s => s.trim()); return "$" + n + ": " + t; }).join(", ")})` : "";
    const innerArgs = args.trim() ? `(${args.split(",").map(a => { const n = a.split(":")[0].trim(); return n + ": $" + n; }).join(", ")})` : "";
    const q = queryType + " " + opName + varStr + " {
  " + typeName.charAt(0).toLowerCase() + typeName.slice(1) + innerArgs + " {
" + fieldList + "
  }
}";
    setResult(q);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">GraphQL Query Builder</h1>
        <p className="text-gray-400 mb-6">Build GraphQL queries visually without memorizing syntax.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Operation Type</label>
            <select value={queryType} onChange={e => setQueryType(e.target.value as "query"|"mutation")} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
              <option value="query">Query</option>
              <option value="mutation">Mutation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Operation Name</label>
            <input value={opName} onChange={e => setOpName(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Type Name</label>
            <input value={typeName} onChange={e => setTypeName(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Arguments (name: Type)</label>
            <input value={args} onChange={e => setArgs(e.target.value)} placeholder="id: ID!" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Fields (one per line)</label>
          <textarea value={fields} onChange={e => setFields(e.target.value)} rows={5} className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
        </div>
        <button onClick={build} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium mb-4">Build Query</button>
        {result && <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm font-mono overflow-auto whitespace-pre-wrap">{result}</pre>}
      </div>
    </div>
  );
}