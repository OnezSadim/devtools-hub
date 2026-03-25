"use client";
import { useState } from "react";
export default function Page() {
  const [xml, setXml] = useState("");
  const [json, setJson] = useState("");
  const convert = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/xml");
      const xmlToObj = (node) => {
        if (node.nodeType === 3) return node.textContent.trim();
        const obj = {};
        for (const child of node.childNodes) {
          const val = xmlToObj(child);
          if (val === "") continue;
          const key = child.nodeName;
          obj[key] = obj[key] ? [].concat(obj[key], val) : val;
        }
        return obj;
      };
      setJson(JSON.stringify(xmlToObj(doc.documentElement), null, 2));
    } catch { setJson("Invalid XML"); }
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>XML to JSON</h1>
    <textarea value={xml} onChange={e=>setXml(e.target.value)} placeholder="<root><item>hello</item></root>" style={{width:"100%",height:"150px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem"}} />
    <button onClick={convert} style={{margin:"0.75rem 0",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Convert</button>
    {json && <pre style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",overflow:"auto",maxHeight:"300px"}}>{json}</pre>}
  </div>);
}