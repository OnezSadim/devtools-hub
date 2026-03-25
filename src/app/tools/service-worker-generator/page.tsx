"use client";
import { useState } from "react";
export default function ServiceWorkerGenerator() {
  const [name, setName] = useState("my-app");
  const [version, setVersion] = useState("1");
  const [strategy, setStrategy] = useState("cache-first");
  const [offlinePage, setOfflinePage] = useState(true);
  const [staticFiles, setStaticFiles] = useState("/, /index.html, /styles.css, /app.js");
  const generate = () => {
    const cacheName = name.replace(/[^a-z0-9]/gi,"-")+"-v"+version;
    const files = staticFiles.split(",").map(f=>f.trim()).filter(Boolean);
    const filesStr = JSON.stringify(files, null, 2);
    if(strategy==="cache-first") return `const CACHE_NAME = '${cacheName}';
const STATIC_FILES = ${filesStr};

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })${offlinePage ? ".catch(() => caches.match('/offline.html'))" : ""};
    })
  );
});`;
    return `const CACHE_NAME = '${cacheName}';
const STATIC_FILES = ${filesStr};

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(STATIC_FILES))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))));

// Network-first strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const clone = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      return response;
    }).catch(() => caches.match(event.request)${offlinePage?".catch(()=>caches.match('/offline.html'))":""})
  );
});`;
  };
  const code = generate();
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Service Worker Generator</h1><p className="text-gray-400 mb-6">Generate a service worker for offline support and caching strategies.</p>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div><label className="block text-sm text-gray-400 mb-1">App Name</label><input value={name} onChange={e=>setName(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
      <div><label className="block text-sm text-gray-400 mb-1">Cache Version</label><input value={version} onChange={e=>setVersion(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2"/></div>
    </div>
    <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Caching Strategy</label><select value={strategy} onChange={e=>setStrategy(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
      <option value="cache-first">Cache First (best for static sites)</option><option value="network-first">Network First (best for dynamic content)</option></select></div>
    <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Static Files to Cache (comma-separated)</label><input value={staticFiles} onChange={e=>setStaticFiles(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm"/></div>
    <label className="flex items-center gap-2 mb-4 cursor-pointer"><input type="checkbox" checked={offlinePage} onChange={e=>setOfflinePage(e.target.checked)} className="w-4 h-4 accent-blue-500"/><span className="text-sm">Include offline fallback page (/offline.html)</span></label>
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700"><div className="flex justify-between items-center mb-2"><span className="text-sm text-gray-400">service-worker.js</span><button onClick={()=>navigator.clipboard.writeText(code)} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">Copy</button></div><pre className="text-xs text-green-400 overflow-auto max-h-80 whitespace-pre-wrap">{code}</pre></div>
  </div></div>);
}