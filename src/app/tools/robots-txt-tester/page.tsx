"use client";
import { useState } from "react";
function parseRobots(content: string) {
  const rules: {ua:string,allow:string[],disallow:string[]}[] = [];
  let current: typeof rules[0] = {ua:"*",allow:[],disallow:[]};
  for (const line of content.split("
")) {
    const t = line.trim();
    if (!t||t.startsWith("#")) continue;
    const [key,...rest] = t.split(":");
    const val = rest.join(":").trim();
    if (key.toLowerCase()==="user-agent") { if (current.ua||current.allow.length||current.disallow.length) rules.push(current); current={ua:val,allow:[],disallow:[]}; }
    else if (key.toLowerCase()==="allow") current.allow.push(val);
    else if (key.toLowerCase()==="disallow") current.disallow.push(val);
  }
  rules.push(current);
  return rules;
}
function isAllowed(rules: ReturnType<typeof parseRobots>, path: string, ua="*") {
  const matching = rules.filter(r=>r.ua==="*"||r.ua===ua);
  for (const r of matching) {
    for (const a of r.allow) { if (path.startsWith(a)) return true; }
    for (const d of r.disallow) { if (d&&path.startsWith(d)) return false; }
  }
  return true;
}
export default function RobotsTester() {
  const [content, setContent] = useState("User-agent: *
Disallow: /admin/
Allow: /public/
");
  const [path, setPath] = useState("/admin/page");
  const rules = parseRobots(content);
  const allowed = isAllowed(rules, path);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Robots.txt Tester</h1>
      <p className="text-gray-400 mb-6">Validate robots.txt and test if paths are allowed</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">robots.txt content</label>
          <textarea value={content} onChange={e=>setContent(e.target.value)} rows={12} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm font-mono" />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Test path</label>
          <input value={path} onChange={e=>setPath(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm font-mono mb-4" />
          <div className={`rounded-lg p-4 ${allowed?"bg-green-900/30 border border-green-700":"bg-red-900/30 border border-red-700"}`}>
            <p className="font-bold text-lg">{allowed?"✓ Allowed":"✗ Blocked"}</p>
            <p className="text-sm text-gray-400 mt-1">{path} is {allowed?"allowed":"disallowed"} by robots.txt</p>
          </div>
          <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Parsed rules ({rules.length}):</p>
            {rules.map((r,i)=>(<div key={i} className="text-sm mb-2"><span className="text-blue-400">User-agent: {r.ua}</span><div className="ml-4">{r.allow.map(a=><div key={a} className="text-green-400">Allow: {a}</div>)}{r.disallow.map(d=><div key={d} className="text-red-400">Disallow: {d}</div>)}</div></div>))}
          </div>
        </div>
      </div>
    </main>
  );
}