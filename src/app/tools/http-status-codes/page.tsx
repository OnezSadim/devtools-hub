"use client";
import { useState } from "react";
const codes: Record<number, {text:string, desc:string, cat:string}> = {
  200:{text:"OK",desc:"Request succeeded",cat:"2xx"},
  201:{text:"Created",desc:"Resource created",cat:"2xx"},
  204:{text:"No Content",desc:"Success with no body",cat:"2xx"},
  206:{text:"Partial Content",desc:"Partial resource returned",cat:"2xx"},
  301:{text:"Moved Permanently",desc:"Permanent redirect",cat:"3xx"},
  302:{text:"Found",desc:"Temporary redirect",cat:"3xx"},
  304:{text:"Not Modified",desc:"Cache is valid",cat:"3xx"},
  307:{text:"Temporary Redirect",desc:"Same method redirect",cat:"3xx"},
  308:{text:"Permanent Redirect",desc:"Same method permanent redirect",cat:"3xx"},
  400:{text:"Bad Request",desc:"Invalid request syntax",cat:"4xx"},
  401:{text:"Unauthorized",desc:"Authentication required",cat:"4xx"},
  403:{text:"Forbidden",desc:"Access denied",cat:"4xx"},
  404:{text:"Not Found",desc:"Resource not found",cat:"4xx"},
  405:{text:"Method Not Allowed",desc:"HTTP method not allowed",cat:"4xx"},
  409:{text:"Conflict",desc:"Resource conflict",cat:"4xx"},
  410:{text:"Gone",desc:"Resource permanently removed",cat:"4xx"},
  422:{text:"Unprocessable Entity",desc:"Validation error",cat:"4xx"},
  429:{text:"Too Many Requests",desc:"Rate limit exceeded",cat:"4xx"},
  500:{text:"Internal Server Error",desc:"Server error",cat:"5xx"},
  501:{text:"Not Implemented",desc:"Method not supported",cat:"5xx"},
  502:{text:"Bad Gateway",desc:"Invalid upstream response",cat:"5xx"},
  503:{text:"Service Unavailable",desc:"Server temporarily unavailable",cat:"5xx"},
  504:{text:"Gateway Timeout",desc:"Upstream timeout",cat:"5xx"},
};
const catColor: Record<string,string> = {"2xx":"text-green-400","3xx":"text-blue-400","4xx":"text-yellow-400","5xx":"text-red-400"};
export default function HttpStatusCodes() {
  const [search, setSearch] = useState("");
  const filtered = Object.entries(codes).filter(([code, info]) =>
    code.includes(search) || info.text.toLowerCase().includes(search.toLowerCase()) || info.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">HTTP Status Codes</h1>
      <p className="text-gray-400 mb-6">Quick reference for all HTTP status codes</p>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by code or description..." className="w-full max-w-md bg-gray-900 border border-gray-700 rounded p-3 mb-6"/>
      <div className="grid gap-2">
        {filtered.map(([code, info]) => (
          <div key={code} className="bg-gray-900 rounded p-3 flex items-center gap-4">
            <span className={"font-mono font-bold text-lg w-12 " + catColor[info.cat]}>{code}</span>
            <span className="font-medium w-48">{info.text}</span>
            <span className="text-gray-400 text-sm">{info.desc}</span>
            <span className={"ml-auto text-xs px-2 py-0.5 rounded bg-gray-800 " + catColor[info.cat]}>{info.cat}</span>
          </div>
        ))}
      </div>
    </main>
  );
}