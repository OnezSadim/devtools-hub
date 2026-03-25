"use client";
import { useState } from "react";
export default function TsconfigGenerator() {
  const [target, setTarget] = useState("ES2020");
  const [module_, setModule] = useState("commonjs");
  const [strict, setStrict] = useState(true);
  const [jsx, setJsx] = useState("react-jsx");
  const [outDir, setOutDir] = useState("./dist");
  const [srcDir, setSrcDir] = useState("./src");
  const [paths, setPaths] = useState(false);
  const generate = () => {
    const cfg = { compilerOptions: { target, module: module_, strict, jsx, outDir, rootDir: srcDir, esModuleInterop: true, skipLibCheck: true, forceConsistentCasingInFileNames: true, resolveJsonModule: true, declaration: true } };
    if (paths) (cfg.compilerOptions as any).paths = { "@/*": ["./src/*"] };
    return JSON.stringify(cfg, null, 2);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TSConfig Generator</h1>
        <p className="text-gray-400 mb-8">Generate TypeScript configuration files</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">Target</label>
              <select value={target} onChange={e=>setTarget(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm">
                {["ES5","ES6","ES2017","ES2019","ES2020","ES2022","ESNext"].map(t=><option key={t}>{t}</option>)}
              </select></div>
            <div><label className="block text-sm text-gray-400 mb-1">Module</label>
              <select value={module_} onChange={e=>setModule(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm">
                {["commonjs","ESNext","ES2020","NodeNext","none"].map(m=><option key={m}>{m}</option>)}
              </select></div>
            <div><label className="block text-sm text-gray-400 mb-1">JSX</label>
              <select value={jsx} onChange={e=>setJsx(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm">
                {["react","react-jsx","react-native","preserve","none"].map(j=><option key={j}>{j}</option>)}
              </select></div>
            <div><label className="block text-sm text-gray-400 mb-1">Out Dir</label><input value={outDir} onChange={e=>setOutDir(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" /></div>
          </div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={strict} onChange={e=>setStrict(e.target.checked)} />Strict Mode</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={paths} onChange={e=>setPaths(e.target.checked)} />Path Aliases (@/*)</label>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between mb-2"><span className="text-sm text-gray-400">tsconfig.json</span><button onClick={()=>navigator.clipboard.writeText(generate())} className="text-xs bg-gray-700 px-3 py-1 rounded">Copy</button></div>
          <pre className="text-sm text-green-400 overflow-auto">{generate()}</pre>
        </div>
      </div>
    </div>
  );
}
