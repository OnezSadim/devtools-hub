"use client";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-white">XML Formatter & Validator</h1>
        <p className="text-gray-400 mb-6">Paste your XML to format and validate it.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Input</label>
            <textarea
              className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Enter input here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Output</label>
            <textarea
              className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Output will appear here..."
              value={output}
              readOnly
            />
          </div>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          onClick={() => setOutput(input)}
        >
          Process
        </button>
      </div>
    </div>
  );
}
