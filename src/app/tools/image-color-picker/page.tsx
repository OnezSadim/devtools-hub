"use client";
import { useState, useRef, useCallback } from "react";

export default function ImageColorPicker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<{hex:string,r:number,g:number,b:number}|null>(null);
  const [palette, setPalette] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const loadImage = (file: File) => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const maxW = 600;
      const scale = Math.min(1, maxW / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setLoaded(true);
    };
    img.src = URL.createObjectURL(file);
  };

  const pickColor = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
    const ctx = canvas.getContext("2d")!;
    const [r,g,b] = ctx.getImageData(x,y,1,1).data;
    const hex = `#${[r,g,b].map(v=>v.toString(16).padStart(2,"0")).join("")}`;
    setColor({hex,r,g,b});
  }, []);

  const addToPalette = () => {
    if (color && !palette.includes(color.hex)) {
      setPalette(p => [...p.slice(-11), color.hex]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Image Color Picker</h1>
        <p className="text-gray-400 mb-6">Upload an image and click anywhere to pick colors.</p>
        <label className="block w-full border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 mb-4">
          <input type="file" accept="image/*" className="hidden" onChange={e=>e.target.files?.[0] && loadImage(e.target.files[0])} />
          <p className="text-gray-400">{loaded ? "Click to load a different image" : "Click to upload an image"}</p>
        </label>
        {loaded && (
          <canvas ref={canvasRef} onClick={pickColor}
            className="w-full rounded-lg cursor-crosshair border border-gray-700 mb-4" />
        )}
        {!loaded && <canvas ref={canvasRef} className="hidden" />}
        {color && (
          <div className="bg-gray-800 rounded-lg p-4 flex gap-4 items-center mb-4">
            <div className="w-16 h-16 rounded-lg border border-gray-600 flex-shrink-0" style={{backgroundColor: color.hex}} />
            <div className="flex-1">
              <p className="font-mono text-lg font-bold">{color.hex.toUpperCase()}</p>
              <p className="text-gray-400 text-sm">rgb({color.r}, {color.g}, {color.b})</p>
              <p className="text-gray-400 text-sm">hsl: {Math.round(rgbToHsl(color.r,color.g,color.b)[0])}°, {Math.round(rgbToHsl(color.r,color.g,color.b)[1])}%, {Math.round(rgbToHsl(color.r,color.g,color.b)[2])}%</p>
            </div>
            <button onClick={()=>navigator.clipboard.writeText(color.hex)} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">Copy HEX</button>
            <button onClick={addToPalette} className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-sm">Save</button>
          </div>
        )}
        {palette.length > 0 && (
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Saved Palette</p>
            <div className="flex flex-wrap gap-2">
              {palette.map(hex => (
                <div key={hex} title={hex} onClick={()=>navigator.clipboard.writeText(hex)}
                  className="w-10 h-10 rounded cursor-pointer border border-gray-600 hover:scale-110 transition-transform" style={{backgroundColor: hex}} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function rgbToHsl(r:number,g:number,b:number): [number,number,number] {
  r/=255; g/=255; b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h=0,s=0,l=(max+min)/2;
  if(max!==min){
    const d=max-min;
    s=l>0.5?d/(2-max-min):d/(max+min);
    switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;}
    h/=6;
  }
  return [h*360,s*100,l*100];
}
