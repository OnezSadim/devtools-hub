"use client";
import { useState } from "react";
export default function YamlValidator() {
  const [yaml, setYaml] = useState("name: my-app
version: 1.0.0
services:
  web:
    image: nginx
    ports:
      - 80:80
  db:
    image: postgres
    environment:
      POSTGRES_DB: mydb");
  const validate = () => {
    const lines = yaml.split("
");
    const errors: string[] = [];
    const stack: number[] = [];
    lines.forEach((line,i)=>{
      if (line.trim() === "" || line.trim().startsWith("#")) return;
      const indent = line.length - line.trimStart().length;
      if (indent % 2 !== 0) errors.push("Line "+(i+1)+": odd indentation");
      if (line.includes("	")) errors.push("Line "+(i+1)+": tabs not allowed");
      if (line.match(/:[^ 
]/) && !line.match(/https?:\/\//)) errors.push("Line "+(i+1)+": missing space after colon");
    });
    return errors;
  };
  const errors = validate();
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
      <p className="text-gray-400 mb-6">Validate YAML syntax and structure.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">YAML</label>
          <textarea value={yaml} onChange={e=>setYaml(e.target.value)} rows={16} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm resize-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Validation</label>
          <div className={"p-4 rounded border "+(errors.length===0?"border-green-700 bg-green-950":"border-red-700 bg-red-950")}>
            {errors.length === 0 ? (
              <p className="text-green-400 font-semibold">Valid YAML (basic checks passed)</p>
            ) : (
              <div><p className="text-red-400 font-semibold mb-2">{errors.length} issue(s) found:</p><ul className="space-y-1">{errors.map((e,i)=><li key={i} className="text-red-300 text-sm font-mono">{e}</li>)}</ul></div>
            )}
          </div>
          <div className="mt-4 p-3 bg-gray-800 rounded">
            <p className="text-xs text-gray-400 mb-1">Stats</p>
            <p className="text-sm">Lines: {yaml.split("
").length} | Non-empty: {yaml.split("
").filter(l=>l.trim()).length}</p>
          </div>
        </div>
      </div>
    </main>
  );
}