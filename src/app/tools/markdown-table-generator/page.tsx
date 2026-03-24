"use client";
import { useState } from "react";
export default function MarkdownTableGenerator() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [data, setData] = useState([['Header 1','Header 2','Header 3'],['Cell 1','Cell 2','Cell 3'],['Cell 4','Cell 5','Cell 6']]);
  const [output, setOutput] = useState('');
  function updateData(r,c,v){
    const d=[...data.map(row=>[...row])];
    while(d.length<=r) d.push([]);
    while(d[r].length<=c) d[r].push('');
    d[r][c]=v;
    setData(d);
  }
  function generate(){
    const colWidths = Array.from({length:cols},(_,c)=>Math.max(...data.map(r=>(r[c]||'').length),3));
    const pad=(s,n)=>(s||'').padEnd(n);
    const header = '| '+data[0].map((h,i)=>pad(h,colWidths[i])).join(' | ')+' |';
    const sep = '| '+colWidths.map(w=>'-'.repeat(w)).join(' | ')+' |';
    const body = data.slice(1).map(row=>'| '+row.map((c,i)=>pad(c,colWidths[i])).join(' | ')+' |').join('
');
    setOutput(header+'
'+sep+'
'+body);
  }
  function initGrid(r,c){
    setRows(r);setCols(c);
    setData(Array.from({length:r},(_,ri)=>Array.from({length:c},(_,ci)=>ri===0?`Header ${ci+1}`:`Cell ${ri*c+ci+1-c}`)));
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Markdown Table Generator</h1>
      <p className="text-gray-400 mb-6">Create Markdown tables with a visual editor</p>
      <div className="flex gap-4 mb-4">
        <label className="text-sm">Rows: <input type="number" value={rows} min={2} max={20} onChange={e=>initGrid(parseInt(e.target.value)||2,cols)} className="w-16 bg-gray-800 border border-gray-700 rounded px-2 py-1 ml-1" /></label>
        <label className="text-sm">Cols: <input type="number" value={cols} min={1} max={10} onChange={e=>initGrid(rows,parseInt(e.target.value)||1)} className="w-16 bg-gray-800 border border-gray-700 rounded px-2 py-1 ml-1" /></label>
      </div>
      <div className="overflow-auto mb-4">
        <table className="border-collapse">
          {data.map((row,r)=>(
            <tr key={r} className={r===0?'bg-gray-800':''}>
              {Array.from({length:cols},(_,c)=>(
                <td key={c} className="border border-gray-700 p-1">
                  <input value={row[c]||''} onChange={e=>updateData(r,c,e.target.value)} className="bg-transparent w-32 px-2 py-1 text-sm" />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <button onClick={generate} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium mb-4">Generate</button>
      {output && (
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">Markdown Output</label>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm">{output}</pre>
        </div>
      )}
    </main>
  );
}