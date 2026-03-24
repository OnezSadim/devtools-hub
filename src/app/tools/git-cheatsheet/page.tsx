"use client";
import { useState } from "react";
const commands = [
  {cat:"Setup",cmd:"git config --global user.name "Name"",desc:"Set your username"},
  {cat:"Setup",cmd:"git config --global user.email "email"",desc:"Set your email"},
  {cat:"Init",cmd:"git init",desc:"Initialize a new local repository"},
  {cat:"Init",cmd:"git clone <url>",desc:"Clone a remote repository"},
  {cat:"Stage",cmd:"git add <file>",desc:"Stage a specific file"},
  {cat:"Stage",cmd:"git add .",desc:"Stage all changes"},
  {cat:"Stage",cmd:"git reset <file>",desc:"Unstage a file"},
  {cat:"Commit",cmd:"git commit -m "message"",desc:"Commit staged changes"},
  {cat:"Commit",cmd:"git commit --amend",desc:"Modify the last commit"},
  {cat:"Branch",cmd:"git branch",desc:"List all local branches"},
  {cat:"Branch",cmd:"git branch <name>",desc:"Create a new branch"},
  {cat:"Branch",cmd:"git checkout <branch>",desc:"Switch to a branch"},
  {cat:"Branch",cmd:"git checkout -b <branch>",desc:"Create and switch to new branch"},
  {cat:"Branch",cmd:"git merge <branch>",desc:"Merge a branch into current"},
  {cat:"Branch",cmd:"git branch -d <branch>",desc:"Delete a branch"},
  {cat:"Remote",cmd:"git remote add origin <url>",desc:"Add a remote repository"},
  {cat:"Remote",cmd:"git push origin <branch>",desc:"Push to remote branch"},
  {cat:"Remote",cmd:"git pull",desc:"Fetch and merge from remote"},
  {cat:"Remote",cmd:"git fetch",desc:"Fetch from remote without merging"},
  {cat:"Info",cmd:"git status",desc:"Show working tree status"},
  {cat:"Info",cmd:"git log --oneline",desc:"Show commit history (compact)"},
  {cat:"Info",cmd:"git diff",desc:"Show unstaged changes"},
  {cat:"Info",cmd:"git diff --staged",desc:"Show staged changes"},
  {cat:"Undo",cmd:"git revert <commit>",desc:"Create new commit that undoes changes"},
  {cat:"Undo",cmd:"git reset --hard HEAD",desc:"Discard all local changes"},
  {cat:"Stash",cmd:"git stash",desc:"Stash current changes"},
  {cat:"Stash",cmd:"git stash pop",desc:"Apply and remove latest stash"},
];
const cats = [...new Set(commands.map(c=>c.cat))];
export default function GitCheatsheet() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = commands.filter(c=>(cat==="All"||c.cat===cat)&&(c.cmd.includes(search)||c.desc.toLowerCase().includes(search.toLowerCase())));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Git Cheatsheet</h1>
      <p className="text-gray-400 mb-6">Quick reference for the most common Git commands</p>
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