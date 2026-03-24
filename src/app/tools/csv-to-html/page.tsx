"use client";
import { useState } from "react";

export default function CSVToHTML() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [hasHeader, setHasHeader] = useState(true);

  const convert = () => {
    const lines = input.trim().split("
").filter(l=>l.trim());
    if (!lines.length) return;
    const parse = (line: string) => line.split(",").map(c=>c.trim().replace(/^"|"$/g,""));
    let html = "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse:collapse'>
";
    let start = 0;
    if (hasHeader) {
      html += "  <thead>
    <tr>
";
      parse(lines[0]).forEach(cell => { html += `      <th>${cell}</th>
`; });
      html += "    </tr>
  </thead>
";
      start = 1;
    }
    html += "  <tbody>
";
    for (let i=start; i<lines.length; i++) {
      html += "    <tr>
";
      parse(lines[i]).forEach(cell => { html += `      <td>${cell}</td>
`; });
      html += "    </tr>
";
    }
    html += "  </tbody>
</table>";
    setOutput(html);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSV to HTML Table</h1>
        <p className="text-gray-400 mb-6">Convert CSV data into an HTML table.</p>
        <label className="flex items-center gap-2 mb-4 cursor-pointer">
          <input type="checkbox" checked={hasHeader} onChange={e=>setHasHeader(e.target.checked)} className="w-4 h-4" />
          <span className="text-sm text-gray-300">First row is header</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">CSV Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="name,age,city
Alice,30,NYC" className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">HTML Output</label>
            <textarea value={output} readOnly className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>
          <button onClick={()=>{navigator.clipboard.writeText(output)}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy HTML</button>
        </div>
      </div>
    </main>
  );
}