"use client";
import { useState } from "react";
export default function MatrixCalculator() {
  const empty2x2 = () => [["0","0"],["0","0"]];
  const [a, setA] = useState(empty2x2());
  const [b, setB] = useState(empty2x2());
  const [op, setOp] = useState("add");
  const [result, setResult] = useState(null);
  const parse = m => m.map(r=>r.map(v=>parseFloat(v)||0));
  function setCell(mat, setMat, r, c, v) { const m=[...mat.map(row=>[...row])]; m[r][c]=v; setMat(m); }
  function calculate() {
    const ma = parse(a), mb = parse(b);
    let res;
    if (op==="add") res=ma.map((r,i)=>r.map((v,j)=>v+mb[i][j]));
    else if (op==="sub") res=ma.map((r,i)=>r.map((v,j)=>v-mb[i][j]));
    else if (op==="mul") res=[[ma[0][0]*mb[0][0]+ma[0][1]*mb[1][0],ma[0][0]*mb[0][1]+ma[0][1]*mb[1][1]],[ma[1][0]*mb[0][0]+ma[1][1]*mb[1][0],ma[1][0]*mb[0][1]+ma[1][1]*mb[1][1]]];
    else if (op==="det_a") { const d=ma[0][0]*ma[1][1]-ma[0][1]*ma[1][0]; setResult({scalar:d,label:"det(A)"}); return; }
    else if (op==="inv_a") { const d=ma[0][0]*ma[1][1]-ma[0][1]*ma[1][0]; if(d===0){setResult({error:"Matrix A is singular (det=0)"});return;} res=[[ma[1][1]/d,-ma[0][1]/d],[-ma[1][0]/d,ma[0][0]/d]]; }
    setResult({matrix:res});
  }
  const MatGrid = ({m, setM}) => (
    <div className="grid grid-cols-2 gap-1">
      {m.map((row,r)=>row.map((v,c)=>(
        <input key={r+","+c} type="number" value={v} onChange={e=>setCell(m,setM,r,c,e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-center font-mono" />
      )))}
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Matrix Calculator</h1>
        <p className="text-gray-400 mb-6">2×2 matrix operations: add, subtract, multiply, determinant, inverse.</p>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div><h3 className="font-semibold mb-2">Matrix A</h3><MatGrid m={a} setM={setA} /></div>
          <div><h3 className="font-semibold mb-2">Matrix B</h3><MatGrid m={b} setM={setB} /></div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[["add","A + B"],["sub","A − B"],["mul","A × B"],["det_a","det(A)"],["inv_a","A⁻¹"]].map(([v,l])=>(
            <button key={v} onClick={()=>setOp(v)} className={"px-4 py-2 rounded text-sm "+(op===v?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>{l}</button>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Calculate</button>
        {result && (
          <div className="bg-gray-800 rounded p-4">
            {result.error ? <p className="text-red-400">{result.error}</p> :
             result.scalar!==undefined ? <p className="text-center text-xl font-mono">{result.label} = {result.scalar}</p> :
             <div><p className="text-gray-400 mb-2">Result:</p><div className="grid grid-cols-2 gap-1 max-w-[200px]">{result.matrix.map((row,r)=>row.map((v,c)=>(<div key={r+","+c} className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-center font-mono">{typeof v==="number"?v.toFixed(4):v}</div>)))}</div></div>}
          </div>
        )}
      </div>
    </main>
  );
}
