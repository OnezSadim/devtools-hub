"use client";
import { useState } from "react";
const SIGNS = [
  { name:"Capricorn", emoji:"♑", start:[12,22], end:[1,19], element:"Earth", traits:"Ambitious, disciplined, practical" },
  { name:"Aquarius", emoji:"♒", start:[1,20], end:[2,18], element:"Air", traits:"Innovative, independent, humanitarian" },
  { name:"Pisces", emoji:"♓", start:[2,19], end:[3,20], element:"Water", traits:"Compassionate, artistic, intuitive" },
  { name:"Aries", emoji:"♈", start:[3,21], end:[4,19], element:"Fire", traits:"Bold, ambitious, courageous" },
  { name:"Taurus", emoji:"♉", start:[4,20], end:[5,20], element:"Earth", traits:"Reliable, patient, practical" },
  { name:"Gemini", emoji:"♊", start:[5,21], end:[6,20], element:"Air", traits:"Versatile, curious, communicative" },
  { name:"Cancer", emoji:"♋", start:[6,21], end:[7,22], element:"Water", traits:"Intuitive, sentimental, loyal" },
  { name:"Leo", emoji:"♌", start:[7,23], end:[8,22], element:"Fire", traits:"Creative, generous, warm-hearted" },
  { name:"Virgo", emoji:"♍", start:[8,23], end:[9,22], element:"Earth", traits:"Analytical, hardworking, meticulous" },
  { name:"Libra", emoji:"♎", start:[9,23], end:[10,22], element:"Air", traits:"Diplomatic, fair-minded, social" },
  { name:"Scorpio", emoji:"♏", start:[10,23], end:[11,21], element:"Water", traits:"Resourceful, brave, passionate" },
  { name:"Sagittarius", emoji:"♐", start:[11,22], end:[12,21], element:"Fire", traits:"Generous, idealistic, adventurous" },
];
function getZodiac(month: number, day: number) {
  return SIGNS.find(s => {
    const [sm, sd] = s.start;
    const [em, ed] = s.end;
    if (sm <= em) return (month === sm && day >= sd) || (month === em && day <= ed);
    return (month === sm && day >= sd) || (month === em && day <= ed) || month > sm || month < em;
  }) || SIGNS[0];
}
export default function ZodiacSignCalculator() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<typeof SIGNS[0] | null>(null);
  const calculate = () => {
    if (!date) return;
    const d = new Date(date);
    setResult(getZodiac(d.getMonth()+1, d.getDate()));
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Zodiac Sign Calculator</h1>
        <p className="text-gray-400 mb-8">Find your zodiac sign and personality traits by birth date.</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <label className="block text-gray-300 mb-2">Birth Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-gray-800 rounded-lg p-3 mb-4 outline-none" />
          <button onClick={calculate} className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold">Find My Sign</button>
        </div>
        {result && (
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-6xl mb-3">{result.emoji}</div>
            <h2 className="text-2xl font-bold mb-1">{result.name}</h2>
            <span className="text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300 mb-4 inline-block">{result.element} Sign</span>
            <p className="text-gray-400 mt-3">{result.traits}</p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {SIGNS.map(s => (
            <div key={s.name} className="bg-gray-900 rounded-lg p-3 text-center">
              <div className="text-2xl">{s.emoji}</div>
              <div className="text-sm font-medium">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}