"use client";
import { useState, useEffect } from "react";

export default function CssAnimationGenerator() {
  const [name, setName] = useState("fadeIn");
  const [duration, setDuration] = useState(1);
  const [timing, setTiming] = useState("ease");
  const [delay, setDelay] = useState(0);
  const [iteration, setIteration] = useState("infinite");
  const [direction, setDirection] = useState("normal");
  const [preview, setPreview] = useState(true);
  const [copied, setCopied] = useState(false);

  const presets = {
    fadeIn: "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }",
    slideIn: "@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
    bounce: "@keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }",
    spin: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    pulse: "@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.2); } }",
    shake: "@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-10px)} 75%{transform:translateX(10px)} }",
  };
  const keyframe = presets[name] || presets.fadeIn;
  const css = `${keyframe}

.animated {
  animation: ${name} ${duration}s ${timing} ${delay}s ${iteration} ${direction};
}`;
  const copy = () => { navigator.clipboard.writeText(css); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Animation Generator</h1>
        <p className="text-gray-400 mb-6">Create and preview CSS animations</p>
        <div className="flex items-center justify-center h-40 bg-gray-800 rounded-xl mb-6">
          <style>{`@keyframes ${name.replace(/[^a-zA-Z]/g,"")} { ${keyframe.replace(/^@keyframes \w+ /, "")} } .preview-box { animation: ${name.replace(/[^a-zA-Z]/g,"")} ${duration}s ${timing} ${delay}s ${iteration} ${direction}; }`}</style>
          <div className="preview-box w-16 h-16 bg-blue-500 rounded-xl" />
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Animation Preset</label>
            <div className="flex flex-wrap gap-2">
              {Object.keys(presets).map(p => (
                <button key={p} onClick={() => setName(p)} className={`px-3 py-1 rounded-full text-sm ${name===p ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}>{p}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-300 mb-1">Duration: {duration}s</label><input type="range" min={0.1} max={5} step={0.1} value={duration} onChange={e => setDuration(parseFloat(e.target.value))} className="w-full" /></div>
            <div><label className="block text-sm text-gray-300 mb-1">Delay: {delay}s</label><input type="range" min={0} max={3} step={0.1} value={delay} onChange={e => setDelay(parseFloat(e.target.value))} className="w-full" /></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[["Timing",timing,setTiming,["ease","linear","ease-in","ease-out","ease-in-out"]],["Iteration",iteration,setIteration,["infinite","1","2","3"]],["Direction",direction,setDirection,["normal","reverse","alternate","alternate-reverse"]]].map(([label,val,setter,opts]) => (
              <div key={label}><label className="block text-sm text-gray-300 mb-1">{label}</label><select value={val} onChange={e => setter(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-2 py-2 text-white text-sm focus:outline-none">{opts.map(o => <option key={o} value={o}>{o}</option>)}</select></div>
            ))}
          </div>
          <pre className="bg-gray-800 rounded-lg p-3 font-mono text-xs text-green-400 overflow-x-auto">{css}</pre>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
