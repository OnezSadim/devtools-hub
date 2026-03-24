"use client";
import { useState, useRef } from "react";
export default function ImageColorPicker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<string|null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = img.width; canvas.height = img.height;
      canvas.getContext("2d")!.drawImage(img, 0, 0);
      setImgLoaded(true);
    };
    img.src = url;
  };
  const pick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width, scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX, y = (e.clientY - rect.top) * scaleY;
    const [r,g,b] = canvas.getContext("2d")!.getImageData(x, y, 1, 1).data;
    const hex = "#" + [r,g,b].map(v => v.toString(16).padStart(2,"0")).join("");
    setColor(hex);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Image Color Picker</h1>
      <p className="text-gray-400 mb-6">Upload an image and click to pick any color.</p>
      <input type="file" accept="image/*" onChange={handleFile} className="mb-4 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:bg-blue-600 file:text-white file:border-0" />
      <canvas ref={canvasRef} onClick={pick} className={`w-full rounded cursor-crosshair ${imgLoaded?"border border-gray-600":""}`} style={{display:imgLoaded?"block":"none"}} />
      {!imgLoaded && <div className="h-48 bg-gray-800 rounded flex items-center justify-center text-gray-500">Upload an image to get started</div>}
      {color && <div className="mt-4 p-4 bg-gray-800 rounded flex items-center gap-4">
        <div className="w-12 h-12 rounded border border-gray-600" style={{background:color}} />
        <div>
          <p className="text-green-400 text-xl font-mono font-bold">{color.toUpperCase()}</p>
          <button onClick={() => navigator.clipboard.writeText(color!)} className="text-sm text-blue-400 mt-1">Copy HEX</button>
        </div>
      </div>}
    </div>
  );
}