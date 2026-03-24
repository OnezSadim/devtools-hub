"use client";
import { useState, useEffect } from "react";

const pairs = [
  {heading:"Playfair Display",body:"Source Sans Pro",style:"Elegant"},
  {heading:"Montserrat",body:"Merriweather",style:"Modern"},
  {heading:"Oswald",body:"Lato",style:"Bold"},
  {heading:"Raleway",body:"Open Sans",style:"Clean"},
  {heading:"Abril Fatface",body:"Lato",style:"Dramatic"},
  {heading:"Roboto Slab",body:"Roboto",style:"Tech"},
  {heading:"Josefin Sans",body:"Josefin Slab",style:"Geometric"},
  {heading:"Libre Baskerville",body:"Libre Franklin",style:"Classic"},
];

export default function FontPairingTool() {
  const [selected, setSelected] = useState(0);
  const [sampleText, setSampleText] = useState("The quick brown fox");
  const pair = pairs[selected];
  useEffect(() => {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(pair.heading)}:wght@700&family=${encodeURIComponent(pair.body)}&display=swap`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }, [pair]);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Font Pairing Tool</h1>
        <p className="text-gray-400 mb-8">Explore Google Font pairings for your projects.</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {pairs.map((p,i)=>(
            <button key={i} onClick={()=>setSelected(i)} className={`px-4 py-2 rounded-lg text-sm ${selected===i?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{p.style}</button>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Sample Text</label>
          <input value={sampleText} onChange={e=>setSampleText(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" />
        </div>
        <div className="bg-gray-800 rounded-xl p-8 mb-6">
          <h2 style={{fontFamily:`"${pair.heading}", serif`,fontWeight:700,fontSize:"2.5rem",lineHeight:1.2,marginBottom:"1rem"}}>{sampleText}</h2>
          <p style={{fontFamily:`"${pair.body}", sans-serif`,fontSize:"1rem",lineHeight:1.7,color:"#9ca3af"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">Pairing: <strong className="text-white">{pair.heading}</strong> + <strong className="text-white">{pair.body}</strong></span>
            <button onClick={()=>navigator.clipboard.writeText(`@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(pair.heading)}:wght@700&family=${encodeURIComponent(pair.body)}&display=swap');`)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy Import</button>
          </div>
        </div>
      </div>
    </main>
  );
}