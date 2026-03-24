"use client";
import { useState } from "react";
export default function CreditCardValidator() {
  const [input, setInput] = useState("");
  const digits = input.replace(/\s/g, "");
  const luhn = (n: string) => {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      let d = parseInt(n[n.length - 1 - i]);
      if (i % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
      sum += d;
    }
    return sum % 10 === 0;
  };
  const getType = (n: string) => {
    if (/^4/.test(n)) return "Visa";
    if (/^5[1-5]/.test(n)) return "Mastercard";
    if (/^3[47]/.test(n)) return "American Express";
    if (/^6(?:011|5)/.test(n)) return "Discover";
    return "Unknown";
  };
  const valid = digits.length >= 13 && luhn(digits);
  const type = digits ? getType(digits) : "";
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Credit Card Validator</h1>
      <p className="text-gray-400 mb-4">Validate credit card numbers using the Luhn algorithm.</p>
      <input className="w-full p-2 bg-gray-800 rounded text-white mb-4" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter card number..." maxLength={19} />
      {digits.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-gray-400 text-sm">Valid (Luhn)</div>
            <div className={"text-lg font-bold " + (valid ? "text-green-400" : "text-red-400")}>{valid ? "Valid" : "Invalid"}</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-gray-400 text-sm">Card Type</div>
            <div className="text-white text-lg">{type}</div>
          </div>
        </div>
      )}
    </div>
  );
}