"use client";
import { useState } from "react";
export default function BooleanAlgebraCalculator() {
  const [expr, setExpr] = useState("(A AND B) OR (NOT C)");
  const [vars, setVars] = useState({A:true,B:false,C:true});
  const evaluate = (expression, values) => {
    let e = expression.toUpperCase()
      .replace(/\bAND\b/g,"&&").replace(/\bOR\b/g,"||").replace(/\bNOT\b/g,"!")
      .replace(/\bXOR\b/g,"!==").replace(/\bNAND\b/g,"!(").replace(/\bNOR\b/g,"!(");
    Object.entries(values).forEach(([k,v])=>{ e=e.replace(new RegExp("\\b"+k+"\\b","g"),v?"true":"false"); });
    try { return Function('return '+e)(); } catch(err) { return null; }
  };
  const result = evaluate(expr, vars);
  const varNames = Object.keys(vars);
  const truthTable = () => {
    const rows = [];
    for(let i=0;i<Math.pow(2,varNames.length);i++) {
      const row = {};
      varNames.forEach((v,j)=>{ row[v]=(i>>(varNames.length-1-j))&1?true:false; });
      row._result = evaluate(expr, row);
      rows.push(row);
    }
    return rows;
  };
  const table = varNames.length<=4 ? truthTable() : null;
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Boolean Algebra Calculator</h1><p className="text-gray-400 mb-6">Evaluate boolean expressions and generate truth tables. Use AND, OR, NOT, XOR.</p>
    <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Expression (use AND, OR, NOT, XOR)</label><input value={expr} onChange={e=>setExpr(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono"/></div>
    <div className="mb-4"><p className="text-sm text-gray-400 mb-2">Variables:</p><div className="flex flex-wrap gap-3">{varNames.map(v=>(<label key={v} className="flex items-center gap-2 cursor-pointer"><span className="font-mono font-bold">{v}:</span><input type="checkbox" checked={vars[v]} onChange={e=>setVars(o=>({...o,[v]:e.target.checked}))} className="w-4 h-4 accent-blue-500"/><span className="text-sm">{vars[v]?"TRUE":"FALSE"}</span></label>))}</div></div>
    {result!==null && <div className={"rounded-lg p-4 mb-6 "+(result?"bg-green-900/30 border border-green-700":"bg-red-900/30 border border-red-700")}><p className="text-lg font-bold">Result: {result?"TRUE (1)":"FALSE (0)"}</p></div>}
    {table && <div><h2 className="text-lg font-semibold mb-2">Truth Table</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-gray-800">{varNames.map(v=>(<th key={v} className="px-4 py-2 font-mono">{v}</th>))}<th className="px-4 py-2 text-blue-400">Result</th></tr></thead><tbody>{table.map((row,i)=>(<tr key={i} className={i%2===0?"bg-gray-900":"bg-gray-800"}>{varNames.map(v=>(<td key={v} className="px-4 py-2 text-center font-mono">{row[v]?"1":"0"}</td>))}<td className={"px-4 py-2 text-center font-bold "+(row._result?"text-green-400":"text-red-400")}>{row._result?"1":"0"}</td></tr>))}</tbody></table></div></div>}
  </div></div>);
}