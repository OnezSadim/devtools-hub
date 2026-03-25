"use client";
import { useState } from "react";

const examples = [
  { eq: "H2 + O2 → H2O", balanced: "2H₂ + O₂ → 2H₂O", note: "Combustion of hydrogen" },
  { eq: "CH4 + O2 → CO2 + H2O", balanced: "CH₄ + 2O₂ → CO₂ + 2H₂O", note: "Methane combustion" },
  { eq: "Fe + O2 → Fe2O3", balanced: "4Fe + 3O₂ → 2Fe₂O₃", note: "Iron oxidation (rust)" },
  { eq: "N2 + H2 → NH3", balanced: "N₂ + 3H₂ → 2NH₃", note: "Haber process (ammonia)" },
  { eq: "C3H8 + O2 → CO2 + H2O", balanced: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", note: "Propane combustion" },
  { eq: "Na + H2O → NaOH + H2", balanced: "2Na + 2H₂O → 2NaOH + H₂", note: "Sodium and water" },
  { eq: "KClO3 → KCl + O2", balanced: "2KClO₃ → 2KCl + 3O₂", note: "Potassium chlorate decomposition" },
  { eq: "Al + HCl → AlCl3 + H2", balanced: "2Al + 6HCl → 2AlCl₃ + 3H₂", note: "Aluminum and HCl" },
];

export default function ChemEquationBalancer() {
  const [sel, setSel] = useState<typeof examples[0]|null>(null);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Chemistry Equation Balancer</h1>
      <p className="text-gray-400 mb-6">Reference for common balanced chemical equations. Click any equation to see the balanced form.</p>
      <div className="grid gap-3 max-w-2xl mb-8">
        {examples.map((ex, i) => (
          <button key={i} onClick={()=>setSel(sel?.eq===ex.eq?null:ex)} className={`text-left bg-gray-900 hover:bg-gray-800 rounded-xl p-4 border ${sel?.eq===ex.eq?"border-blue-500":"border-gray-700"}`}>
            <div className="font-mono text-blue-300 mb-1">{ex.eq}</div>
            <div className="text-sm text-gray-400">{ex.note}</div>
          </button>
        ))}
      </div>
      {sel && (
        <div className="bg-gray-900 border border-green-700 rounded-xl p-6 max-w-2xl">
          <div className="text-sm text-gray-400 mb-2">Unbalanced</div>
          <div className="font-mono text-red-300 text-lg mb-4">{sel.eq}</div>
          <div className="text-sm text-gray-400 mb-2">Balanced</div>
          <div className="font-mono text-green-300 text-xl mb-3">{sel.balanced}</div>
          <div className="text-gray-300 text-sm">{sel.note}</div>
        </div>
      )}
    </main>
  );
}