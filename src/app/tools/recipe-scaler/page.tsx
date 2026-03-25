"use client";
import { useState } from "react";

export default function RecipeScaler() {
  const [original, setOriginal] = useState("2 cups flour
1 cup sugar
3 eggs
0.5 cup butter");
  const [servings, setServings] = useState(4);
  const [newServings, setNewServings] = useState(8);
  const [scaled, setScaled] = useState("");

  const scale = () => {
    const ratio = newServings / servings;
    const lines = original.split("
").map(line => {
      return line.replace(/(\d+\.?\d*)/g, (match) => {
        const num = parseFloat(match) * ratio;
        return Number.isInteger(num) ? num.toString() : num.toFixed(2);
      });
    });
    setScaled(lines.join("
"));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Recipe Scaler</h1>
        <p className="text-gray-400 mb-6">Scale any recipe up or down for different serving sizes</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Original Recipe (one ingredient per line)</label>
            <textarea value={original} onChange={e => setOriginal(e.target.value)} rows={6} className="w-full bg-gray-800 rounded-lg px-3 py-2 font-mono text-sm" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Original Servings</label>
              <input type="number" value={servings} onChange={e => setServings(Number(e.target.value))} className="w-full bg-gray-800 rounded-lg px-3 py-2" />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">New Servings</label>
              <input type="number" value={newServings} onChange={e => setNewServings(Number(e.target.value))} className="w-full bg-gray-800 rounded-lg px-3 py-2" />
            </div>
          </div>
          <button onClick={scale} className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold">Scale Recipe</button>
          {scaled && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Scaled Recipe ({newServings} servings)</label>
              <pre className="bg-gray-800 rounded-lg p-4 text-sm whitespace-pre-wrap">{scaled}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
