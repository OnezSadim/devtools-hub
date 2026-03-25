"use client";
import { useState } from "react";
const codes: Record<string, {desc: string, meaning: string}> = {
  "100":{desc:"Continue",meaning:"Server received request headers, client should proceed."},
  "101":{desc:"Switching Protocols",meaning:"Server is switching protocols as requested."},
  "200":{desc:"OK",meaning:"Request succeeded."},
  "201":{desc:"Created",meaning:"Request succeeded and a new resource was created."},
  "204":{desc:"No Content",meaning:"Request succeeded but no content to return."},
  "301":{desc:"Moved Permanently",meaning:"Resource permanently moved to a new URL."},
  "302":{desc:"Found",meaning:"Resource temporarily moved to another URL."},
  "304":{desc:"Not Modified",meaning:"Resource not modified since last request; use cache."},
  "400":{desc:"Bad Request",meaning:"Server cannot process due to client error."},
  "401":{desc:"Unauthorized",meaning:"Authentication is required and has failed."},
  "403":{desc:"Forbidden",meaning:"Server understood request but refuses to authorize."},
  "404":{desc:"Not Found",meaning:"Requested resource could not be found."},
  "405":{desc:"Method Not Allowed",meaning:"Request method is not supported."},
  "408":{desc:"Request Timeout",meaning:"Server timed out waiting for the request."},
  "409":{desc:"Conflict",meaning:"Request conflicts with current state of the resource."},
  "410":{desc:"Gone",meaning:"Resource is permanently gone."},
  "422":{desc:"Unprocessable Entity",meaning:"Request well-formed but semantic errors."},
  "429":{desc:"Too Many Requests",meaning:"User has sent too many requests (rate limiting)."},
  "500":{desc:"Internal Server Error",meaning:"Server encountered an unexpected error."},
  "501":{desc:"Not Implemented",meaning:"Server does not support the request method."},
  "502":{desc:"Bad Gateway",meaning:"Server received invalid response from upstream."},
  "503":{desc:"Service Unavailable",meaning:"Server temporarily unavailable."},
  "504":{desc:"Gateway Timeout",meaning:"Upstream server failed to respond in time."},
};
export default function HttpStatusCodes() {
  const [q, setQ] = useState("");
  const filtered = Object.entries(codes).filter(([code,v]) => code.includes(q) || v.desc.toLowerCase().includes(q.toLowerCase()));
  const color = (c: string) => c.startsWith("2") ? "bg-green-900" : c.startsWith("3") ? "bg-blue-900" : c.startsWith("4") ? "bg-yellow-900" : c.startsWith("5") ? "bg-red-900" : "bg-gray-800";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">HTTP Status Codes</h1>
      <input type="text" placeholder="Search code or description..." value={q} onChange={e=>setQ(e.target.value)} className="w-full max-w-md bg-gray-800 rounded px-4 py-2 mb-6" />
      <div className="space-y-2">
        {filtered.map(([code,v]) => (
          <div key={code} className={`${color(code)} rounded-lg p-4 flex items-start gap-4`}>
            <span className="text-2xl font-mono font-bold w-16">{code}</span>
            <div>
              <div className="font-semibold">{v.desc}</div>
              <div className="text-sm text-gray-300 mt-1">{v.meaning}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
