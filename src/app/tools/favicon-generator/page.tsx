"use client";
import { useState, useRef, useEffect } from "react";
export default function FaviconGenerator() {
  const [text, setText] = useState("A");
  const [bg, setBg] = useState("#6366f1");
  const [fg, setFg] = useState("#ffffff");
  const [size, setSize] = useState(64);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = fg;
    ctx.font = `bold ${size * 0.6}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.slice(0, 2), size / 2, size / 2);
  };
  useEffect(draw, [text, bg, fg, size]);
  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = `favicon-${size}x${size}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Favicon Generator</h1>
      <div className="flex justify-center mb-6">
        <canvas ref={canvasRef} style={{ imageRendering: "pixelated", width: 128, height: 128, border: "1px solid #374151", borderRadius: 4 }} />
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Text (1-2 chars)</label>
          <input value={text} onChange={e => setText(e.target.value)} maxLength={2} className="w-full p-2 bg-gray-800 border border-gray-700 rounded font-bold text-2xl" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Background</label>
            <input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Size: {size}x{size}px</label>
          <select value={size} onChange={e => setSize(Number(e.target.value))} className="w-full p-2 bg-gray-800 border border-gray-700 rounded">
            {[16,32,48,64,128,256].map(s => <option key={s} value={s}>{s}x{s}</option>)}
          </select>
        </div>
      </div>
      <button onClick={download} className="mt-4 w-full py-2 bg-indigo-600 rounded hover:bg-indigo-700 font-medium">Download PNG</button>
    </div>
  );
}