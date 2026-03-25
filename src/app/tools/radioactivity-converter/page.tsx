"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units: Record<string,number> = {{ "Bq":1,"kBq":0.001,"MBq":1e-6,"Ci":2.7027e-11,"mCi":2.7027e-8 }};
  const keys = Object.keys(units);
  const [from,setFrom] = useState(keys[0]);
  const [to,setTo] = useState(keys[1]);
  const [val,setVal] = useState("");
  const result = val ? (parseFloat(val)/units[from]*units[to]).toFixed(6) : "";
  const sel = "border p-1 rounded bg-gray-800 text-white";
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-2xl font-bold mb-2">Radioactivity Converter</h1><p className="text-gray-400 mb-4">Convert between Bq, kBq, MBq, Ci, mCi</p><div className="flex gap-2 mb-4"><input className="border p-2 rounded bg-gray-800 text-white flex-1" type="number" placeholder="Value" value={{val}} onChange={{e=>setVal(e.target.value)}} /><select className={{sel}} value={{from}} onChange={{e=>setFrom(e.target.value)}}>{{keys.map(k=><option key={{k}}>{{k}}</option>)}}</select><span className="self-center">to</span><select className={{sel}} value={{to}} onChange={{e=>setTo(e.target.value)}}>{{keys.map(k=><option key={{k}}>{{k}}</option>)}}</select></div>{{result && <div className="bg-gray-800 p-4 rounded text-xl">{{val}} {{from}} = <strong>{{result}}</strong> {{to}}</div>}}</div>);
}}
