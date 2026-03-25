"use client";
import { useState } from "react";

const substitutions: Record<string, string[]> = {
  "butter": ["Use equal amount of coconut oil", "Use 3/4 amount of olive oil", "Use equal amount of applesauce (for baking)"],
  "eggs": ["1 tbsp ground flaxseed + 3 tbsp water (let sit 5 min)", "1/4 cup unsweetened applesauce", "1/4 cup mashed banana", "3 tbsp aquafaba (chickpea liquid)"],
  "buttermilk": ["1 cup milk + 1 tbsp lemon juice or vinegar (let sit 5 min)", "Equal amount of plain yogurt thinned with milk"],
  "flour": ["For 1 cup all-purpose: use 1 cup + 2 tbsp cake flour", "For 1 cup: use 1/2 cup whole wheat + 1/2 cup all-purpose"],
  "sugar": ["Equal amount of honey (reduce liquid by 1/4 cup)", "Equal amount of maple syrup (reduce liquid by 3 tbsp)", "Equal amount of coconut sugar"],
  "milk": ["Equal amount of oat milk", "Equal amount of almond milk", "Equal amount of soy milk"],
  "baking powder": ["1 tsp = 1/4 tsp baking soda + 1/2 tsp cream of tartar"],
  "vegetable oil": ["Equal amount of melted coconut oil", "Equal amount of unsweetened applesauce", "3/4 amount of melted butter"]
};

export default function BakingSubstitutionFinder() {
  const [search, setSearch] = useState("");
  const results = Object.entries(substitutions).filter(([k]) => k.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Baking Substitution Finder</h1>
        <p className="text-gray-400 mb-6">Find substitutes for common baking ingredients</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search ingredient (e.g. butter, eggs)..." className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg mb-6" />
          <div className="space-y-4">
            {(search ? results : Object.entries(substitutions)).map(([ingredient, subs]) => (
              <div key={ingredient} className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-yellow-400 capitalize mb-2">{ingredient}</h3>
                <ul className="space-y-1">
                  {subs.map((sub, i) => <li key={i} className="text-sm text-gray-300">• {sub}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
