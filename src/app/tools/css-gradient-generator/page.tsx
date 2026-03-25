"use client";
import { useState } from "react";

export default function CssGradientGenerator() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#8b5cf6");
  const [color3, setColor3] = useState("");
  const [copied, setCopied] = useState(false);

  const colors = [color1, color2, ...(color3 ? [color3] : [])].join(", ");
  const css = type === "linear"
    ? `linear-gradient(${angle}deg, ${colors})`
    : type === "radial"
    ? `radial-gradient(circle, ${colors})`
    : `conic-gradient(from ${angle}deg, ${colors})`;
  const fullCss = `background: ${css};`;

  const copy = () => { navigator.clipboard.writeText(fullCss); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Create beautiful CSS gradients visually</p>
        <div className="rounded-2xl h-48 mb-6 border border-gray-700" style={{background: css}} />
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            {["linear","radial","conic"].map(t => (
              <button key={t} onClick={() => setType(t)} className={`flex-1 py-2 rounded-lg font-medium capitalize ${type===t ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}>{t}</button>
            ))}
          </div>
          {type !== "radial" && (
            <div>
              <label className="block text-sm text-gray-300 mb-1">Angle: {angle}deg</label>
              <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(parseInt(e.target.value))} className="w-full" />
            </div>
          )}
          <div className="grid grid-cols-3 gap-3">
            {[["Color 1", color1, setColor1],["Color 2", color2, setColor2],["Color 3 (opt)", color3, setColor3]].map(([label, val, setter]) => (
              <div key={label}>
                <label className="block text-sm text-gray-300 mb-1">{label}</label>
                <div className="flex gap-2">
                  <input type="color" value={val||"#000000"} onChange={e => setter(e.target.value)} className="w-10 h-10 rounded bg-gray-800 border border-gray-700 cursor-pointer" />
                  <input value={val} onChange={e => setter(e.target.value)} placeholder="#..." className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 text-sm font-mono text-green-400 focus:outline-none" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400 break-all">{fullCss}</div>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
