"use client";
import { useState } from "react";
const commands = [
  {cmd:"ls -la",desc:"List all files with details",cat:"files"},
  {cmd:"cd /path",desc:"Change directory",cat:"files"},
  {cmd:"pwd",desc:"Print working directory",cat:"files"},
  {cmd:"mkdir -p dir",desc:"Create directory (with parents)",cat:"files"},
  {cmd:"rm -rf dir",desc:"Remove directory recursively",cat:"files"},
  {cmd:"cp -r src dst",desc:"Copy recursively",cat:"files"},
  {cmd:"mv src dst",desc:"Move or rename",cat:"files"},
  {cmd:"find . -name *.txt",desc:"Find files by name",cat:"search"},
  {cmd:"grep -r pattern .",desc:"Search text recursively",cat:"search"},
  {cmd:"grep -l pattern .",desc:"List files with match",cat:"search"},
  {cmd:"ps aux",desc:"List all processes",cat:"process"},
  {cmd:"kill -9 PID",desc:"Force kill process",cat:"process"},
  {cmd:"top",desc:"Live process monitor",cat:"process"},
  {cmd:"htop",desc:"Interactive process viewer",cat:"process"},
  {cmd:"cat file",desc:"Print file contents",cat:"files"},
  {cmd:"tail -f file",desc:"Follow file (logs)",cat:"files"},
  {cmd:"head -n 20 file",desc:"First 20 lines",cat:"files"},
  {cmd:"chmod 755 file",desc:"Set permissions",cat:"perms"},
  {cmd:"chown user:group f",desc:"Change owner",cat:"perms"},
  {cmd:"df -h",desc:"Disk usage human-readable",cat:"system"},
  {cmd:"du -sh dir",desc:"Directory size",cat:"system"},
  {cmd:"free -h",desc:"Memory usage",cat:"system"},
  {cmd:"uname -a",desc:"System info",cat:"system"},
  {cmd:"curl -X POST url",desc:"HTTP POST request",cat:"network"},
  {cmd:"wget url",desc:"Download file",cat:"network"},
  {cmd:"ssh user@host",desc:"SSH connect",cat:"network"},
  {cmd:"scp f user@host:p",desc:"Copy via SSH",cat:"network"},
  {cmd:"tar -czf f.tgz d",desc:"Create tar.gz",cat:"archive"},
  {cmd:"tar -xzf f.tgz",desc:"Extract tar.gz",cat:"archive"},
  {cmd:"zip -r f.zip dir",desc:"Create zip",cat:"archive"},
];
const catColor: Record<string,string> = {files:"blue",search:"purple",process:"red",perms:"yellow",system:"green",network:"cyan",archive:"orange"};
export default function LinuxCommands() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const filtered = commands.filter(c =>
    (cat === "all" || c.cat === cat) &&
    (c.cmd.includes(search) || c.desc.toLowerCase().includes(search.toLowerCase()))
  );
  const cats = ["all", ...Array.from(new Set(commands.map(c=>c.cat)))];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Linux Commands</h1>
      <p className="text-gray-400 mb-6">Essential Linux command cheatsheet</p>
      <div className="flex gap-3 mb-4 flex-wrap">
        {cats.map(c=><button key={c} onClick={()=>setCat(c)} className={"px-3 py-1 rounded text-sm capitalize " + (cat===c?"bg-blue-600":"bg-gray-800 hover:bg-gray-700")}>{c}</button>)}
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search commands..." className="w-full max-w-md bg-gray-900 border border-gray-700 rounded p-2 mb-4 text-sm"/>
      <div className="grid gap-2">
        {filtered.map((c,i)=>(
          <div key={i} className="bg-gray-900 rounded p-3 flex items-center gap-4">
            <code className="font-mono text-green-400 text-sm flex-1">{c.cmd}</code>
            <span className="text-gray-400 text-sm flex-1">{c.desc}</span>
            <button onClick={()=>navigator.clipboard.writeText(c.cmd)} className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded">Copy</button>
          </div>
        ))}
      </div>
    </main>
  );
}