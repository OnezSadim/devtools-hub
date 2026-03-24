"use client";
import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) return;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, v => chars[v % chars.length]).join(""));
    setCopied(false);
  }, [length, upper, lower, numbers, symbols]);

  const copy = () => { navigator.clipboard.writeText(password); setCopied(true); };

  const strength = password.length >= 20 && symbols && numbers ? "Very Strong" : password.length >= 14 ? "Strong" : password.length >= 8 ? "Medium" : "Weak";
  const strengthColor = strength === "Very Strong" ? "text-green-400" : strength === "Strong" ? "text-blue-400" : strength === "Medium" ? "text-yellow-400" : "text-red-400";

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Password Generator</h1>
      <p className="text-gray-400 mb-6">Generate secure random passwords with customizable options.</p>
      {password && (
        <div className="bg-gray-800 rounded p-4 mb-4">
          <div className="font-mono text-xl break-all mb-2">{password}</div>
          <div className="flex justify-between items-center">
            <span className={strengthColor}>{strength}</span>
            <button onClick={copy} className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm">{copied ? "Copied!" : "Copy"}</button>
          </div>
        </div>
      )}
      <div className="bg-gray-800 rounded p-4 space-y-4">
        <div>
          <label className="block mb-1">Length: {length}</label>
          <input type="range" min={4} max={64} value={length} onChange={e => setLength(+e.target.value)} className="w-full" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["Uppercase (A-Z)", upper, setUpper], ["Lowercase (a-z)", lower, setLower], ["Numbers (0-9)", numbers, setNumbers], ["Symbols (!@#$)", symbols, setSymbols]].map(([label, val, setter]: any) => (
            <label key={label} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={val} onChange={e => setter(e.target.checked)} className="w-4 h-4" />{label}
            </label>
          ))}
        </div>
        <button onClick={generate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-medium">Generate Password</button>
      </div>
    </div>
  );
}