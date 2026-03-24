"use client";
import { useState } from "react";
export default function ColorNameFinder() {
  const [hex, setHex] = useState("#3b82f6");
  const colors: [string,string][] = [["#000000","Black"],["#ffffff","White"],["#ff0000","Red"],["#00ff00","Lime"],["#0000ff","Blue"],["#ffff00","Yellow"],["#00ffff","Cyan"],["#ff00ff","Magenta"],["#808080","Gray"],["#800000","Maroon"],["#808000","Olive"],["#008000","Green"],["#800080","Purple"],["#008080","Teal"],["#000080","Navy"],["#ffa500","Orange"],["#ffc0cb","Pink"],["#a52a2a","Brown"],["#f5f5dc","Beige"],["#ffe4c4","Bisque"],["#7fffd4","Aquamarine"],["#dc143c","Crimson"],["#ff7f50","Coral"],["#6495ed","Cornflower Blue"],["#daa520","Goldenrod"],["#adff2f","Green Yellow"],["#ff69b4","Hot Pink"],["#4b0082","Indigo"],["#f0e68c","Khaki"],["#e6e6fa","Lavender"],["#7cfc00","Lawn Green"],["#add8e6","Light Blue"],["#f08080","Light Coral"],["#90ee90","Light Green"],["#ffb6c1","Light Pink"],["#20b2aa","Light Sea Green"],["#87cefa","Light Sky Blue"],["#778899","Light Slate Gray"],["#00fa9a","Medium Spring Green"],["#9370db","Medium Purple"],["#3cb371","Medium Sea Green"],["#191970","Midnight Blue"],["#ffe4e1","Misty Rose"],["#ffdead","Navajo White"],["#fdf5e6","Old Lace"],["#6b8e23","Olive Drab"],["#ff4500","Orange Red"],["#da70d6","Orchid"],["#eee8aa","Pale Goldenrod"],["#98fb98","Pale Green"],["#afeeee","Pale Turquoise"],["#db7093","Pale Violet Red"],["#ffefd5","Papaya Whip"],["#ffdab9","Peach Puff"],["#cd853f","Peru"],["#dda0dd","Plum"],["#b0e0e6","Powder Blue"],["#bc8f8f","Rosy Brown"],["#4169e1","Royal Blue"],["#8b4513","Saddle Brown"],["#fa8072","Salmon"],["#f4a460","Sandy Brown"],["#2e8b57","Sea Green"],["#fff5ee","Seashell"],["#a0522d","Sienna"],["#87ceeb","Sky Blue"],["#6a5acd","Slate Blue"],["#708090","Slate Gray"],["#fffafa","Snow"],["#00ff7f","Spring Green"],["#4682b4","Steel Blue"],["#d2b48c","Tan"],["#40e0d0","Turquoise"],["#ee82ee","Violet"],["#f5deb3","Wheat"],["#9acd32","Yellow Green"]];
  const hexToRgb = (h: string) => { const r = parseInt(h.slice(1,3),16), g=parseInt(h.slice(3,5),16), b=parseInt(h.slice(5,7),16); return [r,g,b]; };
  const dist = (a: string, b: string) => { const [r1,g1,b1]=hexToRgb(a),[r2,g2,b2]=hexToRgb(b); return Math.sqrt((r1-r2)**2+(g1-g2)**2+(b1-b2)**2); };
  const findNearest = () => { const [r,g,b]=hexToRgb(hex); const rgb=`rgb(${r},${g},${b})`; let best=colors[0]; colors.forEach(c=>{if(dist(hex,c[0])<dist(hex,best[0]))best=c;}); return {name:best[1],hex:best[0],rgb}; };
  const nearest = hex.length===7?findNearest():null;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Color Name Finder</h1>
      <p className="text-gray-400 mb-6">Find the nearest named color for any hex value</p>
      <div className="flex gap-4 mb-6 items-center">
        <input type="color" value={hex} onChange={e=>setHex(e.target.value)} className="w-16 h-12 rounded cursor-pointer" />
        <input value={hex} onChange={e=>setHex(e.target.value)} placeholder="#000000" className="bg-gray-900 border border-gray-700 rounded p-3 font-mono" />
      </div>
      {nearest && <div className="bg-gray-900 border border-gray-700 rounded p-6">
        <div className="w-full h-24 rounded mb-4" style={{backgroundColor:hex}} />
        <p className="text-2xl font-bold mb-2">{nearest.name}</p>
        <p className="text-gray-400 font-mono">{nearest.hex} &bull; {nearest.rgb}</p>
      </div>}
    </div>
  );
}