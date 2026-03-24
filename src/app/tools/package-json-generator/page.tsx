"use client";
import { useState } from "react";
export default function PackageJsonGenerator() {
  const [name, setName] = useState("");
  const [version, setVersion] = useState("1.0.0");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState("index.js");
  const [license, setLicense] = useState("MIT");
  const [author, setAuthor] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [type, setType] = useState("commonjs");
  const generate = () => JSON.stringify(Object.fromEntries(Object.entries({
    name: name || "my-package",
    version,
    description: desc || undefined,
    main,
    type,
    scripts: {start:"node " + main, test:"echo "Error: no test specified" && exit 1"},
    author: author || undefined,
    license,
    private: isPrivate || undefined,
  }).filter(([,v])=>v !== undefined)), null, 2);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">package.json Generator</h1>
      <p className="text-gray-400 mb-6">Generate a package.json scaffold</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {[{label:"Package name",val:name,set:setName,ph:"my-package"},{label:"Version",val:version,set:setVersion,ph:"1.0.0"},{label:"Description",val:desc,set:setDesc,ph:"A short description"},{label:"Main",val:main,set:setMain,ph:"index.js"},{label:"Author",val:author,set:setAuthor,ph:"Name <email>"}].map(f=>(
            <div key={f.label}>
              <label className="block text-sm text-gray-400 mb-1">{f.label}</label>
              <input value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} className="w-full bg-gray-900 border border-gray-700 rounded p-2"/>
            </div>
          ))}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Module type</label>
            <select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-2">
              <option value="commonjs">CommonJS</option><option value="module">ESM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">License</label>
            <select value={license} onChange={e=>setLicense(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-2">
              {["MIT","ISC","Apache-2.0","GPL-3.0","BSD-3-Clause","UNLICENSED"].map(l=><option key={l}>{l}</option>)}
            </select>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={isPrivate} onChange={e=>setIsPrivate(e.target.checked)} className="w-4 h-4"/>
            <span className="text-sm">Private package</span>
          </label>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Generated package.json</label>
          <pre className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 h-80 overflow-auto">{generate()}</pre>
          <button onClick={()=>navigator.clipboard.writeText(generate())} className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy</button>
        </div>
      </div>
    </main>
  );
}