"use client";
import { useState } from "react";
export default function CssAnimationGenerator() {
  const [name, setName] = useState("fadeIn");
  const [duration, setDuration] = useState("1");
  const [timing, setTiming] = useState("ease");
  const [delay, setDelay] = useState("0");
  const [iterations, setIterations] = useState("1");
  const [direction, setDirection] = useState("normal");
  const [anim, setAnim] = useState("fade");
  const keyframes: Record<string,string> = {
    fade: `@keyframes ${name} {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    slide: `@keyframes ${name} {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}`,
    bounce: `@keyframes ${name} {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
    rotate: `@keyframes ${name} {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
    scale: `@keyframes ${name} {
  from { transform: scale(0); }
  to { transform: scale(1); }
}`,
    pulse: `@keyframes ${name} {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`,
  };
  const css = `${keyframes[anim]}

.animated-element {
  animation: ${name} ${duration}s ${timing} ${delay}s ${iterations} ${direction};
}`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">CSS Animation Generator</h1>
      <p className="text-gray-400 mb-6">Generate CSS keyframe animations instantly</p>
      <div className="max-w-2xl space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-sm text-gray-400">Animation Name</label><input value={name} onChange={e=>setName(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Duration (s)</label><input type="number" value={duration} onChange={e=>setDuration(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Timing Function</label><select value={timing} onChange={e=>setTiming(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2">{["ease","linear","ease-in","ease-out","ease-in-out"].map(t=><option key={t}>{t}</option>)}</select></div>
          <div><label className="text-sm text-gray-400">Delay (s)</label><input type="number" value={delay} onChange={e=>setDelay(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Iterations</label><input value={iterations} onChange={e=>setIterations(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Direction</label><select value={direction} onChange={e=>setDirection(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2">{["normal","reverse","alternate","alternate-reverse"].map(d=><option key={d}>{d}</option>)}</select></div>
        </div>
        <div><label className="text-sm text-gray-400 block mb-2">Animation Type</label><div className="flex flex-wrap gap-2">{Object.keys(keyframes).map(k=><button key={k} onClick={()=>setAnim(k)} className={`px-3 py-1 rounded capitalize text-sm ${anim===k?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{k}</button>)}</div></div>
        <pre className="bg-gray-800 rounded p-4 font-mono text-green-400 text-sm overflow-x-auto">{css}</pre>
        <button onClick={()=>navigator.clipboard.writeText(css)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy CSS</button>
      </div>
    </main>
  );
}