"use client";
import { useState } from "react";
export default function MarkdownTableGenerator() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [data, setData] = useState<string[][]>(() => Array.from({length:4},(_,r)=>Array.from({length:3},(_,c)=>r===0?`Header ${c+1}`:`Cell ${r},${c+1}`)));
  function updateData(r: number, c: number, val: string) {
    setData(prev => { const n = prev.map(row=>[...row]); n[r][c]=val; return n; });
  }
  function addRow() { setRows(r=>r+1); setData(prev=>[...prev, Array(cols).fill("")]); }
  function addCol() { setCols(c=>c+1); setData(prev=>prev.map(r=>[...r,""])); }
  const header = data[0]?.slice(0,cols) || [];
  const sep = header.map(()=>"---");
  const body = data.slice(1,rows+1).map(r=>r.slice(0,cols));
  const md = [
    "| " + header.join(" | ") + " |",
    "| " + sep.join(" | ") + " |",
    ...body.map(r => "| " + r.join(" | ") + " |")
  ].join("\n");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Markdown Table Generator</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={addRow} className="px-3 py-1 bg-gray-700 hover:bg-blue-600 rounded text-sm">+ Row</button>
        <button onClick={addCol} className="px-3 py-1 bg-gray-700 hover:bg-blue-600 rounded text-sm">+ Column</button>
      </div>
      <div className="overflow-x-auto mb-6">
        <table className="border-collapse">
          {[0,...Array.from({length:rows},(_,i)=>i+1)].map(r=>(
            <tr key={r}>
              {Array.from({length:cols},(_,c)=>(
                <td key={c} className="border border-gray-600 p-1">
                  <input value={data[r]?.[c]||""} onChange={e=>updateData(r,c,e.target.value)} className={`bg-gray-800 px-2 py-1 text-sm w-24 ${r===0?"font-bold":""}`} />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-400">Markdown Output</label>
        <pre className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 overflow-x-auto">{md}</pre>
        <button onClick={()=>navigator.clipboard.writeText(md)} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy Markdown</button>
      </div>
    </div>
  );
}
