"use client";
import { useState } from "react";
const TEMPLATES = {
  'Node.js': 'node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
.env
.env.local
.env.*.local
dist/
build/
.next/
.nuxt/
.cache/
*.log',
  'Python': '__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
dist/
*.egg-info/
.eggs/
.env
venv/
.venv/
*.pyc
.pytest_cache/
.mypy_cache/',
  'Java': '*.class
*.log
*.jar
*.war
*.ear
*.zip
*.tar.gz
target/
build/
.gradle/
*.iml
.idea/
.classpath
.project
.settings/',
  'Go': '*.exe
*.exe~
*.dll
*.so
*.dylib
*.test
*.out
vendor/
build/',
  'Rust': 'debug/
target/
**/*.rs.bk
Cargo.lock',
  'macOS': '.DS_Store
.AppleDouble
.LSOverride
Thumbnails
._*
.Spotlight-V100
.Trashes',
  'Windows': 'Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
*.lnk',
  'Linux': '*~
.fuse_hidden*
.directory
.Trash-*
.nfs*',
  'VSCode': '.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace',
  'JetBrains': '.idea/
*.iml
*.iws
out/',
  'Docker': '*.env
docker-compose.override.yml',
  'Terraform': '.terraform/
*.tfstate
*.tfstate.*
.terraform.lock.hcl
crash.log',
};
export default function GitIgnoreGenerator() {
  const [selected, setSelected] = useState(new Set(['Node.js','macOS']));
  const [custom, setCustom] = useState('');
  function toggle(k){const s=new Set(selected);s.has(k)?s.delete(k):s.add(k);setSelected(s);}
  const output = [...selected].map(k=>`# ${k}
${TEMPLATES[k]}`).join('

')+(custom?`

# Custom
${custom}`:'');
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">.gitignore Generator</h1>
      <p className="text-gray-400 mb-6">Generate .gitignore files for any project type</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {Object.keys(TEMPLATES).map(k=>(
              <button key={k} onClick={()=>toggle(k)} className={`px-3 py-2 rounded text-sm text-left ${selected.has(k)?"bg-blue-600 hover:bg-blue-700":"bg-gray-800 hover:bg-gray-700"}`}>{selected.has(k)?"✓ ":""}{k}</button>
            ))}
          </div>
          <textarea value={custom} onChange={e=>setCustom(e.target.value)} className="w-full h-28 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Add custom patterns..." />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">.gitignore</label>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm h-96 overflow-auto whitespace-pre">{output}</pre>
        </div>
      </div>
    </main>
  );
}