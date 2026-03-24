"use client";
import { useState } from "react";
const cmds = [
  {cmd:"ls -la",cat:"Files",desc:"List all files with details"},
  {cmd:"pwd",cat:"Files",desc:"Print working directory"},
  {cmd:"cd ~",cat:"Files",desc:"Go to home directory"},
  {cmd:"cp -r src dst",cat:"Files",desc:"Copy directory recursively"},
  {cmd:"mv src dst",cat:"Files",desc:"Move or rename file/directory"},
  {cmd:"rm -rf dir",cat:"Files",desc:"Delete directory recursively (dangerous!)"},
  {cmd:"find . -name '*.js'",cat:"Files",desc:"Find files by pattern"},
  {cmd:"grep -r 'text' .",cat:"Files",desc:"Search text in files recursively"},
  {cmd:"chmod 755 file",cat:"Permissions",desc:"Set file permissions"},
  {cmd:"chown user:group file",cat:"Permissions",desc:"Change file owner"},
  {cmd:"ps aux",cat:"Processes",desc:"List all running processes"},
  {cmd:"kill -9 PID",cat:"Processes",desc:"Force kill a process"},
  {cmd:"top",cat:"Processes",desc:"Interactive process monitor"},
  {cmd:"df -h",cat:"System",desc:"Disk usage in human-readable format"},
  {cmd:"du -sh *",cat:"System",desc:"Disk usage per item in current directory"},
  {cmd:"free -h",cat:"System",desc:"Memory usage"},
  {cmd:"uname -a",cat:"System",desc:"Kernel and OS information"},
  {cmd:"curl -X POST -H 'Content-Type: application/json' -d '{"key":"val"}' URL",cat:"Network",desc:"POST JSON with curl"},
  {cmd:"wget -O file URL",cat:"Network",desc:"Download file"},
  {cmd:"netstat -tlnp",cat:"Network",desc:"List listening ports"},
  {cmd:"ssh user@host -p 22",cat:"Network",desc:"SSH into server"},
  {cmd:"tar -czf out.tar.gz dir/",cat:"Archives",desc:"Create gzipped tar archive"},
  {cmd:"tar -xzf file.tar.gz",cat:"Archives",desc:"Extract gzipped tar archive"},
  {cmd:"zip -r out.zip dir/",cat:"Archives",desc:"Create zip archive"},
  {cmd:"git log --oneline -20",cat:"Git",desc:"Show last 20 commits"},
  {cmd:"git diff HEAD~1",cat:"Git",desc:"Show diff from last commit"},
  {cmd:"git stash && git stash pop",cat:"Git",desc:"Stash and restore changes"},
];
const cats = ["All",...new Set(cmds.map(c=>c.cat))];
export default function LinuxCommands() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const copy = (text) => navigator.clipboard.writeText(text);
  const filtered = cmds.filter(c=>(cat==="All"||c.cat===cat)&&(!search||c.cmd.toLowerCase().includes(search.toLowerCase())||c.desc.toLowerCase().includes(search.toLowerCase())));
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Linux Commands Reference</h1>
        <p className="text-gray-400 mb-4">Quick reference for common Linux shell commands</p>
        <div className="flex gap-3 mb-4">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search commands..." className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2" />
          <select value={cat} onChange={e=>setCat(e.target.value)} className="bg-gray-900 border border-gray-700 rounded px-3 py-2">
            {cats.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="space-y-2">{filtered.map((c,i)=>(
          <div key={i} className="bg-gray-900 rounded p-4 group">
            <div className="flex justify-between items-start">
              <code className="font-mono text-green-400 text-sm break-all">{c.cmd}</code>
              <button onClick={()=>copy(c.cmd)} className="ml-3 text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100">Copy</button>
            </div>
            <p className="text-gray-400 text-sm mt-1">{c.desc} <span className="text-xs text-gray-600">#{c.cat}</span></p>
          </div>
        ))}</div>
      </div>
    </div>
  );
}