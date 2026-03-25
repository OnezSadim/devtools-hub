"use client";

const sections = [
  { title: "Setup", cmds: [
    ["git config --global user.name "Name"", "Set global username"],
    ["git config --global user.email "email"", "Set global email"],
    ["git init", "Init new repo"],
    ["git clone <url>", "Clone remote repo"],
  ]},
  { title: "Basics", cmds: [
    ["git status", "Show working tree status"],
    ["git add .", "Stage all changes"],
    ["git add <file>", "Stage specific file"],
    ["git commit -m "msg"", "Commit staged changes"],
    ["git commit -am "msg"", "Stage tracked + commit"],
  ]},
  { title: "Branching", cmds: [
    ["git branch", "List branches"],
    ["git branch <name>", "Create branch"],
    ["git checkout <name>", "Switch branch"],
    ["git checkout -b <name>", "Create + switch"],
    ["git merge <branch>", "Merge branch into current"],
    ["git branch -d <name>", "Delete branch"],
  ]},
  { title: "Remote", cmds: [
    ["git remote add origin <url>", "Add remote"],
    ["git push origin <branch>", "Push to remote"],
    ["git pull", "Fetch + merge"],
    ["git fetch", "Fetch without merge"],
    ["git push -u origin main", "Push and set upstream"],
  ]},
  { title: "Undo", cmds: [
    ["git restore <file>", "Discard working changes"],
    ["git reset HEAD <file>", "Unstage file"],
    ["git reset --soft HEAD~1", "Undo last commit (keep changes)"],
    ["git reset --hard HEAD~1", "Undo last commit (discard)"],
    ["git revert <hash>", "Create revert commit"],
  ]},
  { title: "Log & Diff", cmds: [
    ["git log --oneline", "Compact log"],
    ["git log --graph --all", "Visual branch graph"],
    ["git diff", "Show unstaged changes"],
    ["git diff --staged", "Show staged changes"],
    ["git blame <file>", "Show who changed each line"],
  ]},
];

export default function GitCheatSheet() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Git Cheat Sheet</h1>
        <p className="text-gray-400 mb-8">Quick reference for the most common Git commands.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map(sec=>(
            <div key={sec.title} className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-lg font-bold text-blue-400 mb-3">{sec.title}</h2>
              <div className="space-y-2">
                {sec.cmds.map(([cmd,desc])=>(
                  <div key={cmd}>
                    <code className="text-green-400 text-sm font-mono">{cmd}</code>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}