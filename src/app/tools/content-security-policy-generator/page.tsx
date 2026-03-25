"use client";
import { useState } from "react";
export default function CSPGenerator() {
  const [opts, setOpts] = useState({defaultSelf:true, scriptSelf:true, scriptNonce:false, styleSelf:true, styleUnsafeInline:false, imgSelf:true, imgData:false, connectSelf:true, fontSelf:false, frameNone:true, objectNone:true, upgradeInsecure:true});
  const [customDomains, setCustomDomains] = useState("");
  const toggle = k => setOpts(o=>({...o,[k]:!o[k]}));
  const generate = () => {
    const parts = [];
    const extras = customDomains.split(/\s+/).filter(Boolean);
    if(opts.defaultSelf) parts.push("default-src 'self'");
    const script = ["script-src", opts.scriptSelf?"'self'":"", opts.scriptNonce?"'nonce-REPLACE_WITH_NONCE'":"", ...extras].filter(Boolean).join(" ");
    if(script.includes(" ")) parts.push(script);
    const style = ["style-src", opts.styleSelf?"'self'":"", opts.styleUnsafeInline?"'unsafe-inline'":""].filter(Boolean).join(" ");
    if(style.includes(" ")) parts.push(style);
    const img = ["img-src", opts.imgSelf?"'self'":"", opts.imgData?"data:":""].filter(Boolean).join(" ");
    if(img.includes(" ")) parts.push(img);
    if(opts.connectSelf) parts.push("connect-src 'self'");
    if(opts.fontSelf) parts.push("font-src 'self'");
    if(opts.frameNone) parts.push("frame-ancestors 'none'");
    if(opts.objectNone) parts.push("object-src 'none'");
    if(opts.upgradeInsecure) parts.push("upgrade-insecure-requests");
    return parts.join("; ");
  };
  const csp = generate();
  const checks = [{k:"defaultSelf",l:"default-src 'self'"},{k:"scriptSelf",l:"Script from self"},{k:"scriptNonce",l:"Script nonce"},{k:"styleSelf",l:"Style from self"},{k:"styleUnsafeInline",l:"Unsafe inline styles (not recommended)"},{k:"imgSelf",l:"Images from self"},{k:"imgData",l:"Images from data: URI"},{k:"connectSelf",l:"Connect to self (fetch/XHR)"},{k:"fontSelf",l:"Fonts from self"},{k:"frameNone",l:"Block all framing (clickjacking protection)"},{k:"objectNone",l:"Block plugins/objects"},{k:"upgradeInsecure",l:"Upgrade HTTP to HTTPS"}];
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">Content Security Policy Generator</h1><p className="text-gray-400 mb-6">Build a CSP header to protect your website from XSS and injection attacks.</p>
    <div className="grid grid-cols-2 gap-3 mb-4">{checks.map(c=>(<label key={c.k} className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={opts[c.k]} onChange={()=>toggle(c.k)} className="w-4 h-4 accent-blue-500"/><span className="text-sm">{c.l}</span></label>))}</div>
    <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Additional domains (space-separated, e.g. cdn.example.com)</label><input type="text" value={customDomains} onChange={e=>setCustomDomains(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm"/></div>
    <div className="bg-gray-800 rounded-lg p-4"><p className="text-sm text-gray-400 mb-2">HTTP Header:</p><pre className="text-xs text-green-400 break-all whitespace-pre-wrap">Content-Security-Policy: {csp}</pre>
      <button onClick={()=>navigator.clipboard.writeText("Content-Security-Policy: "+csp)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy Header</button></div>
    <div className="mt-4 bg-gray-800 rounded-lg p-4"><p className="text-sm text-gray-400 mb-2">Meta Tag:</p><pre className="text-xs text-purple-400 break-all whitespace-pre-wrap">{`<meta http-equiv="Content-Security-Policy" content="${csp}">`}</pre></div>
  </div></div>);
}