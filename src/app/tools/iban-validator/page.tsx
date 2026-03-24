"use client";
import { useState } from "react";
export default function IBANValidator() {
  const [input, setInput] = useState("");
  const iban = input.replace(/\s/g, "").toUpperCase();
  const validate = (s: string) => {
    if (s.length < 15 || s.length > 34) return false;
    const rearranged = s.slice(4) + s.slice(0, 4);
    const numeric = rearranged.split("").map(c => isNaN(parseInt(c)) ? (c.charCodeAt(0) - 55).toString() : c).join("");
    let remainder = 0;
    for (const ch of numeric) { remainder = (remainder * 10 + parseInt(ch)) % 97; }
    return remainder === 1;
  };
  const countryCode = iban.slice(0, 2);
  const countries: Record<string, string> = { DE:"Germany", GB:"United Kingdom", FR:"France", NL:"Netherlands", ES:"Spain", IT:"Italy", BE:"Belgium", CH:"Switzerland", AT:"Austria", SE:"Sweden" };
  const isValid = iban.length > 4 && validate(iban);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">IBAN Validator</h1>
      <p className="text-gray-400 mb-4">Validate International Bank Account Numbers.</p>
      <input className="w-full p-2 bg-gray-800 rounded text-white mb-4" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter IBAN (e.g. DE89 3704 0044 0532 0130 00)" />
      {iban.length > 4 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-gray-400 text-sm">Valid</div>
            <div className={"text-lg font-bold " + (isValid ? "text-green-400" : "text-red-400")}>{isValid ? "Valid" : "Invalid"}</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-gray-400 text-sm">Country</div>
            <div className="text-white">{countries[countryCode] || countryCode}</div>
          </div>
          <div className="bg-gray-800 p-4 rounded col-span-2">
            <div className="text-gray-400 text-sm">Formatted</div>
            <div className="text-white font-mono">{iban.match(/.{1,4}/g)?.join(" ") || iban}</div>
          </div>
        </div>
      )}
    </div>
  );
}