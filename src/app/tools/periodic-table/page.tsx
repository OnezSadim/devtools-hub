"use client";
import { useState } from "react";

const elements = [
  {n:1,s:"H",name:"Hydrogen",mass:1.008,cat:"nonmetal",group:1,period:1},
  {n:2,s:"He",name:"Helium",mass:4.003,cat:"noble",group:18,period:1},
  {n:3,s:"Li",name:"Lithium",mass:6.941,cat:"alkali",group:1,period:2},
  {n:4,s:"Be",name:"Beryllium",mass:9.012,cat:"alkaline",group:2,period:2},
  {n:5,s:"B",name:"Boron",mass:10.811,cat:"metalloid",group:13,period:2},
  {n:6,s:"C",name:"Carbon",mass:12.011,cat:"nonmetal",group:14,period:2},
  {n:7,s:"N",name:"Nitrogen",mass:14.007,cat:"nonmetal",group:15,period:2},
  {n:8,s:"O",name:"Oxygen",mass:15.999,cat:"nonmetal",group:16,period:2},
  {n:9,s:"F",name:"Fluorine",mass:18.998,cat:"halogen",group:17,period:2},
  {n:10,s:"Ne",name:"Neon",mass:20.18,cat:"noble",group:18,period:2},
  {n:11,s:"Na",name:"Sodium",mass:22.99,cat:"alkali",group:1,period:3},
  {n:12,s:"Mg",name:"Magnesium",mass:24.305,cat:"alkaline",group:2,period:3},
  {n:13,s:"Al",name:"Aluminum",mass:26.982,cat:"post-transition",group:13,period:3},
  {n:14,s:"Si",name:"Silicon",mass:28.086,cat:"metalloid",group:14,period:3},
  {n:15,s:"P",name:"Phosphorus",mass:30.974,cat:"nonmetal",group:15,period:3},
  {n:16,s:"S",name:"Sulfur",mass:32.065,cat:"nonmetal",group:16,period:3},
  {n:17,s:"Cl",name:"Chlorine",mass:35.453,cat:"halogen",group:17,period:3},
  {n:18,s:"Ar",name:"Argon",mass:39.948,cat:"noble",group:18,period:3},
  {n:19,s:"K",name:"Potassium",mass:39.098,cat:"alkali",group:1,period:4},
  {n:20,s:"Ca",name:"Calcium",mass:40.078,cat:"alkaline",group:2,period:4},
];

const catColors: Record<string,string> = {
  nonmetal:"bg-green-800",noble:"bg-purple-800",alkali:"bg-red-800",
  alkaline:"bg-orange-800",metalloid:"bg-yellow-800",halogen:"bg-teal-800",
  "post-transition":"bg-blue-800",transition:"bg-gray-700",
};

export default function PeriodicTable() {
  const [sel, setSel] = useState<typeof elements[0]|null>(null);
  const [q, setQ] = useState("");
  const filtered = q ? elements.filter(e => e.name.toLowerCase().includes(q.toLowerCase()) || e.s.toLowerCase().includes(q.toLowerCase())) : elements;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Periodic Table</h1>
      <p className="text-gray-400 mb-4">Interactive periodic table. Click an element for details.</p>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search element..." className="bg-gray-800 rounded p-2 mb-6 w-64" />
      <div className="flex flex-wrap gap-2 mb-8">
        {filtered.map(el => (
          <button key={el.n} onClick={()=>setSel(el)} className={`w-16 h-16 rounded text-center text-xs ${catColors[el.cat]||"bg-gray-700"} hover:opacity-80 ${sel?.n===el.n?"ring-2 ring-white":""}`}>
            <div className="text-xs opacity-70">{el.n}</div>
            <div className="text-lg font-bold">{el.s}</div>
          </button>
        ))}
      </div>
      {sel && (
        <div className="bg-gray-900 rounded-xl p-6 max-w-sm">
          <div className="text-5xl font-bold mb-1">{sel.s}</div>
          <div className="text-xl mb-3">{sel.name}</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-400">Atomic Number</div><div>{sel.n}</div>
            <div className="text-gray-400">Atomic Mass</div><div>{sel.mass}</div>
            <div className="text-gray-400">Category</div><div className="capitalize">{sel.cat}</div>
            <div className="text-gray-400">Group</div><div>{sel.group}</div>
            <div className="text-gray-400">Period</div><div>{sel.period}</div>
          </div>
        </div>
      )}
    </main>
  );
}