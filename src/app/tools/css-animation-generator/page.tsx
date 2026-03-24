"use client";
import { useState } from "react";

export default function CssAnimationGenerator() {
  const [name, setName] = useState("myAnimation");
  const [duration, setDuration] = useState(1);
  const [timing, setTiming] = useState("ease");
  const [delay, setDelay] = useState(0);
  const [iteration, setIteration] = useState("infinite");
  const [direction, setDirection] = useState("normal");
  const [preset, setPreset] = useState("fade");
  const presets: Record<string,string> = {
    fade: "  0% { opacity: 0; }
  100% { opacity: 1; }",
    bounce: "  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }",
    spin: "  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }",
    pulse: "  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }",
    shake: "  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }",
    slide: "  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }",
  };
  const css = `@keyframes ${name} {
${presets[preset]}
}

.animated {
  animation: ${name} ${duration}s ${timing} ${delay}s ${iteration} ${direction};
}`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Animation Generator</h1>
        <p className="text-gray-400 mb-8">Generate CSS @keyframe animations.</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(presets).map(p=>(
            <button key={p} onClick={()=>setPreset(p)} className={`px-4 py-2 rounded-lg capitalize ${preset===p?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{p}</button>
          ))}
        </div>
        <div className="bg-gray-800 rounded-xl h-32 flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" style={{animation:`${name} ${duration}s ${timing} ${delay}s ${iteration} ${direction}`}}></div>
          <style>{`@keyframes ${name} {${presets[preset]}}`}</style>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Animation Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Duration</span><span className="font-mono">{duration}s</span></div>
            <input type="range" min={0.1} max={5} step={0.1} value={duration} onChange={e=>setDuration(Number(e.target.value))} className="w-full mt-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">timing-function</label>
            <select value={timing} onChange={e=>setTiming(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2">
              {["ease","linear","ease-in","ease-out","ease-in-out","cubic-bezier(0.68,-0.55,0.265,1.55)"].map(t=><option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">iteration-count</label>
            <select value={iteration} onChange={e=>setIteration(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2">
              {["infinite","1","2","3"].map(t=><option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">CSS</span>
            <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
          <pre className="text-sm text-green-400 whitespace-pre-wrap">{css}</pre>
        </div>
      </div>
    </main>
  );
}