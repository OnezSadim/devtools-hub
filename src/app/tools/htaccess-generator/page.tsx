"use client";
import { useState } from "react";
export default function HtaccessGen() {
  const [opts, setOpts] = useState({forceHttps:true,wwwRedirect:"none",dirListing:true,caching:true,gzip:false,customErrors:true,phpFront:false});
  const toggle = (k:string) => setOpts(p=>({...p,[k]:!p[k as keyof typeof p]}));
  let code = "";
  if (opts.forceHttps) code += `RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

`;
  if (opts.wwwRedirect==="add") code += `RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\.
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

`;
  if (opts.wwwRedirect==="remove") code += `RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1%{REQUEST_URI} [L,R=301]

`;
  if (opts.dirListing) code += `Options -Indexes

`;
  if (opts.caching) code += `<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

`;
  if (opts.customErrors) code += `ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

`;
  if (opts.phpFront) code += `DirectoryIndex index.php index.html
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?/$1 [L]

`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">.htaccess Generator</h1>
      <p className="text-gray-400 mb-6">Generate Apache .htaccess configuration rules</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[["forceHttps","Force HTTPS"],["dirListing","Disable directory listing"],["caching","Browser caching"],["customErrors","Custom error pages"],["phpFront","PHP front controller"]].map(([k,l])=>(
            <label key={k} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={!!opts[k as keyof typeof opts]} onChange={()=>toggle(k)} className="w-4 h-4" />
              <span>{l}</span>
            </label>
          ))}
          <div><label className="text-sm text-gray-400 mb-2 block">WWW redirect</label>
            <select value={opts.wwwRedirect as string} onChange={e=>setOpts(p=>({...p,wwwRedirect:e.target.value}))} className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
              <option value="none">No redirect</option><option value="add">Add www</option><option value="remove">Remove www</option>
            </select>
          </div>
        </div>
        <div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm font-mono overflow-auto whitespace-pre-wrap h-80">{code||"# Select options to generate rules"}</pre>
          <button onClick={()=>navigator.clipboard.writeText(code)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button>
        </div>
      </div>
    </main>
  );
}