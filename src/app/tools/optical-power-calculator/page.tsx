"use client";
import { useState } from "react";
export default function OpticalPowerCalculator() {
  const [focal, setFocal] = useState("");
  const [unit, setUnit] = useState("m");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    let fV = parseFloat(focal);
    if (isNaN(fV) || fV === 0) { setResult("Please enter a valid focal length."); return; }
    if (unit === "cm") fV = fV / 100;
    if (unit === "mm") fV = fV / 1000;
    const P = 1 / fV;
    setResult(`Optical power: ${P.toFixed(4)} diopters (D)`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Optical Power Calculator</h1>
        <p className="text-gray-400 mb-6">Optical power P = 1/f (in diopters when f is in meters)</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Focal Length</label><div className="flex gap-2"><input value={focal} onChange={e=>setFocal(e.target.value)} className="flex-1 bg-gray-800 rounded px-3 py-2" placeholder="e.g. 0.5" /><select value={unit} onChange={e=>setUnit(e.target.value)} className="bg-gray-800 rounded px-3 py-2"><option value="m">m</option><option value="cm">cm</option><option value="mm">mm</option></select></div></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
        <div className="mt-6 bg-gray-800 rounded p-4 text-sm text-gray-400"><p>Typical prescriptions range from -20D to +20D. Positive power = converging lens, negative = diverging lens.</p></div>
      </div>
    </main>
  );
}
