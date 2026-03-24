"use client";
import { useState } from "react";
const cmds = [
  {cat:"Files",cmd:"ls -la",desc:"List files with details and hidden files"},
  {cat:"Files",cmd:"cd <dir>",desc:"Change directory"},
  {cat:"Files",cmd:"pwd",desc:"Print working directory"},
  {cat:"Files",cmd:"cp <src> <dst>",desc:"Copy file or directory"},
  {cat:"Files",cmd:"mv <src> <dst>",desc:"Move or rename file"},
  {cat:"Files",cmd:"rm -rf <dir>",desc:"Remove directory recursively"},
  {cat:"Files",cmd:"mkdir -p <dir>",desc:"Create directory with parents"},
  {cat:"Files",cmd:"find . -name "*.txt"",desc:"Find files by name pattern"},
  {cat:"Text",cmd:"cat <file>",desc:"Display file contents"},
  {cat:"Text",cmd:"grep -r "pattern" .",desc:"Search text recursively"},
  {cat:"Text",cmd:"sed -i "s/old/new/g" file",desc:"Replace text in file"},
  {cat:"Text",cmd:"awk '{ print $1 }' file",desc:"Print first column"},
  {cat:"Text",cmd:"wc -l <file>",desc:"Count lines in file"},
  {cat:"Text",cmd:"sort | uniq -c | sort -rn",desc:"Count and sort unique lines"},
  {cat:"Process",cmd:"ps aux",desc:"Show all running processes"},
  {cat:"Process",cmd:"kill -9 <pid>",desc:"Force kill a process"},
  {cat:"Process",cmd:"top",desc:"Interactive process viewer"},
  {cat:"Process",cmd:"nohup cmd &",desc:"Run command in background"},
  {cat:"Network",cmd:"curl -I <url>",desc:"Get HTTP headers"},
  {cat:"Network",cmd:"wget <url>",desc:"Download a file"},
  {cat:"Network",cmd:"netstat -tulpn",desc:"Show open ports"},
  {cat:"Network",cmd:"ssh user@host",desc:"Connect via SSH"},
  {cat:"Network",cmd:"scp file user@host:/path",desc:"Copy file to remote host"},
  {cat:"Disk",cmd:"df -h",desc:"Show disk usage"},
  {cat:"Disk",cmd:"du -sh <dir>",desc:"Show directory size"},
  {cat:"Perms",cmd:"chmod 755 <file>",desc:"Set file permissions"},
  {cat:"Perms",cmd:"chown user:group <file>",desc:"Change file owner"},
];
const cats = [...new Set(cmds.map(c=>c.cat))];
export default function LinuxCommandReference() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = cmds.filter(c=>(cat==="All"||c.cat===cat)&&(c.cmd.includes(search)||c.desc.toLowerCase().includes(search.toLowerCase())));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Linux Command Reference</h1>
      <p className="text-gray-400 mb-6">Quick reference for essential Linux/Unix commands</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["All",...cats].map(c=><button key={c} onClick={()=>setCat(c)} className={`px-3 py-1 rounded text-sm ${cat===c?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{c}</button>)}
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search commands..." className="w-full max-w-md bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-4" />
      <div className="space-y-2 max-w-2xl">
        {filtered.map((c,i)=>(
          <div key={i} className="flex items-start gap-4 bg-gray-800 rounded p-3 group">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded min-w-fit">{c.cat}</span>
            <div className="flex-1">
              <code className="text-green-400 font-mono text-sm">{c.cmd}</code>
              <p className="text-gray-400 text-sm mt-1">{c.desc}</p>
            </div>
            <button onClick={()=>navigator.clipboard.writeText(c.cmd)} className="opacity-0 group-hover:opacity-100 text-xs bg-gray-700 px-2 py-1 rounded">Copy</button>
          </div>
        ))}
      </div>
    </main>
  );
}