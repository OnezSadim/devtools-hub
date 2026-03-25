"use client";
import {{ useState }} from "react";
export default function Page() {{
  const units: Record<string,number> = {{ "W":1,"kW":0.001,"HP":0.00134102,"BTU/hr":3.41214 }};
  const keys = Object.keys(units);
  const [from,setFrom] = useState(keys[0]);
  const [to,setTo] = useState(keys[1]);
  const [val,setVal] = useState("");
  const result = val ? (parseFloat(val)/units[from]*units[to]).toFixed(6) : "";
  const sel = "border p-1 rounded bg-gray-800 text-white";
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-2xl font-bold mb-2">Power Converter</h1><p className="text-gray-400 mb-4">Convert between W, kW, HP, BTU/hr</p><div className="flex gap-2 mb-4"><input className="border p-2 rounded bg-gray-800 text-white flex-1" type="number" placeholder="Value" value={{val}} onChange={{e=>setVal(e.target.value)}} /><select className={{sel}} value={{from}} onChange={{e=>setFrom(e.target.value)}}>{{keys.map(k=><option key={{k}}>{{k}}</option>)}}</select><span className="self-center">to</span><select className={{sel}} value={{to}} onChange={{e=>setTo(e.target.value)}}>{{keys.map(k=><option key={{k}}>{{k}}</option>)}}</select></div>{{result && <div className="bg-gray-800 p-4 rounded text-xl">{{val}} {{from}} = <strong>{{result}}</strong> {{to}}</div>}}</div>);
}}
