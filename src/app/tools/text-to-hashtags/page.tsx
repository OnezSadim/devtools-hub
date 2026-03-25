"use client";
import { useState } from "react";
export default function TextToHashtags() {
  const [text, setText] = useState("");
  const [maxTags, setMaxTags] = useState(15);
  const stopWords = new Set(["the","a","an","and","or","but","in","on","at","to","for","of","with","by","from","is","are","was","were","be","been","have","has","had","do","does","did","will","would","could","should","may","might","this","that","these","those","it","its","not","no"]);
  const hashtags = text.toLowerCase().match(/[a-z]+/g)?.filter(w => w.length > 3 && !stopWords.has(w)).slice(0, maxTags).map(w => "#" + w).join(" ") || "";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text to Hashtags</h1>
      <p className="text-gray-400 mb-6">Convert text into relevant hashtags for social media.</p>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-white mb-4 resize-none" placeholder="Enter your text or content description..." value={text} onChange={e => setText(e.target.value)} />
      <div className="flex items-center gap-4 mb-4">
        <label className="text-gray-400">Max tags:</label>
        <input type="number" min={5} max={30} className="bg-gray-900 border border-gray-700 rounded px-3 py-1 text-white w-20" value={maxTags} onChange={e => setMaxTags(Number(e.target.value))} />
      </div>
      {hashtags && (
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <div className="text-sm text-gray-400 mb-2">Generated Hashtags</div>
          <div className="text-blue-400 text-lg leading-relaxed">{hashtags}</div>
          <button onClick={() => navigator.clipboard.writeText(hashtags)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm">Copy</button>
        </div>
      )}
    </div>
  );
}
