"use client";
import { useState } from "react";
export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [expr, setExpr] = useState("");
  const [deg, setDeg] = useState(true);
  const toRad = (x: number) => deg ? x * Math.PI / 180 : x;
  const press = (val: string) => {
    if (val === "C") { setDisplay("0"); setExpr(""); return; }
    if (val === "=") {
      try {
        const e = expr
          .replace(/sin\(/g, deg?`Math.sin(Math.PI/180*`:`Math.sin(`)
          .replace(/cos\(/g, deg?`Math.cos(Math.PI/180*`:`Math.cos(`)
          .replace(/tan\(/g, deg?`Math.tan(Math.PI/180*`:`Math.tan(`)
          .replace(/sqrt\(/g, "Math.sqrt(").replace(/log\(/g, "Math.log10(").replace(/ln\(/g, "Math.log(").replace(/\^/g, "**").replace(/π/g, "Math.PI").replace(/e/g, "Math.E");
        const r = eval(e);
        setDisplay(String(parseFloat(r.toFixed(10))));
        setExpr(String(parseFloat(r.toFixed(10))));
      } catch { setDisplay("Error"); setExpr(""); }
      return;
    }
    if (display === "0" && !/[+\-*/^(]/.test(val)) { setDisplay(val); setExpr(val); }
    else { setDisplay(prev => prev === "Error" ? val : prev + val); setExpr(prev => prev + val); }
  };
  const btn = (label: string, val?: string, cls?: string) => <button onClick={()=>press(val||label)} className={`p-3 rounded text-sm font-medium ${cls||"bg-gray-700 hover:bg-gray-600"}`}>{label}</button>;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-4">Scientific Calculator</h1>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2"><span className="text-gray-400 text-xs">{expr}</span><button onClick={()=>setDeg(!deg)} className="text-xs px-2 py-1 bg-gray-700 rounded">{deg?"DEG":"RAD"}</button></div>
          <div className="text-right text-3xl font-mono mb-4 bg-gray-900 rounded p-3 overflow-hidden">{display}</div>
          <div className="grid grid-cols-5 gap-1">
            {btn("sin","sin(","bg-purple-800 hover:bg-purple-700")}{btn("cos","cos(","bg-purple-800 hover:bg-purple-700")}{btn("tan","tan(","bg-purple-800 hover:bg-purple-700")}{btn("log","log(","bg-purple-800 hover:bg-purple-700")}{btn("ln","ln(","bg-purple-800 hover:bg-purple-700")}
            {btn("√","sqrt(","bg-purple-800 hover:bg-purple-700")}{btn("xʸ","^","bg-purple-800 hover:bg-purple-700")}{btn("π","π","bg-purple-800 hover:bg-purple-700")}{btn("e","e","bg-purple-800 hover:bg-purple-700")}{btn("(","(","bg-gray-600")}
            {btn("7")}{btn("8")}{btn("9")}{btn("/",undefined,"bg-yellow-700 hover:bg-yellow-600")}{btn(")",")","bg-gray-600")}
            {btn("4")}{btn("5")}{btn("6")}{btn("*",undefined,"bg-yellow-700 hover:bg-yellow-600")}{btn("C",undefined,"bg-red-700 hover:bg-red-600")}
            {btn("1")}{btn("2")}{btn("3")}{btn("-",undefined,"bg-yellow-700 hover:bg-yellow-600")}{btn("=",undefined,"bg-blue-600 hover:bg-blue-500 row-span-2")}
            {btn("0",undefined,"col-span-2")}{btn(".")}{btn("+",undefined,"bg-yellow-700 hover:bg-yellow-600")}
          </div>
        </div>
      </div>
    </main>
  );
}
