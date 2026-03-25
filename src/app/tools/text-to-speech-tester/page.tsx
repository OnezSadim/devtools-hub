"use client";
import { useState } from "react";
export default function TextToSpeech() {
  const [text, setText] = useState("Hello! This is a text to speech test.");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voice, setVoice] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const loadVoices = () => { if (typeof window!=="undefined") setVoices(window.speechSynthesis.getVoices()); };
  const speak = () => {
    if (typeof window==="undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate=rate; u.pitch=pitch;
    const v = voices.find(v=>v.name===voice);
    if (v) u.voice=v;
    window.speechSynthesis.speak(u);
  };
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">Text to Speech Tester</h1><p className="text-gray-400 mb-6">Test browser text-to-speech with different settings</p><textarea value={text} onChange={e=>setText(e.target.value)} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 mb-4" /><div className="space-y-3 mb-4"><div><label className="text-sm text-gray-400">Rate: {rate.toFixed(1)}</label><input type="range" min={0.1} max={3} step={0.1} value={rate} onChange={e=>setRate(+e.target.value)} className="w-full" /></div><div><label className="text-sm text-gray-400">Pitch: {pitch.toFixed(1)}</label><input type="range" min={0} max={2} step={0.1} value={pitch} onChange={e=>setPitch(+e.target.value)} className="w-full" /></div><div><button onClick={loadVoices} className="text-sm bg-gray-800 px-3 py-1 rounded mb-1">Load Voices</button><select value={voice} onChange={e=>setVoice(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-2 mt-1">{voices.map(v=>(<option key={v.name}>{v.name}</option>))}</select></div></div><div className="flex gap-2"><button onClick={speak} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Speak</button><button onClick={()=>window.speechSynthesis.cancel()} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Stop</button></div></div></div>);
}