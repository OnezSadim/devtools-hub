"use client";
import { useState } from "react";
const CODES=[
  {code:100,name:"Continue",cat:"1xx",desc:"Server received request headers; client should proceed."},
  {code:101,name:"Switching Protocols",cat:"1xx",desc:"Server is switching protocols as requested (e.g. WebSocket)."},
  {code:200,name:"OK",cat:"2xx",desc:"Request succeeded. Standard response for successful HTTP requests."},
  {code:201,name:"Created",cat:"2xx",desc:"Request succeeded and a new resource was created."},
  {code:202,name:"Accepted",cat:"2xx",desc:"Request accepted for processing but not yet completed."},
  {code:204,name:"No Content",cat:"2xx",desc:"Request succeeded; no content to send back."},
  {code:206,name:"Partial Content",cat:"2xx",desc:"Partial resource delivered (used with range requests)."},
  {code:301,name:"Moved Permanently",cat:"3xx",desc:"Resource permanently moved to new URL."},
  {code:302,name:"Found",cat:"3xx",desc:"Resource temporarily moved to different URL."},
  {code:304,name:"Not Modified",cat:"3xx",desc:"Resource not modified; use cached version."},
  {code:307,name:"Temporary Redirect",cat:"3xx",desc:"Temporary redirect; method must not change."},
  {code:308,name:"Permanent Redirect",cat:"3xx",desc:"Permanent redirect; method must not change."},
  {code:400,name:"Bad Request",cat:"4xx",desc:"Server cannot process due to malformed request syntax."},
  {code:401,name:"Unauthorized",cat:"4xx",desc:"Authentication required and has failed or not been provided."},
  {code:403,name:"Forbidden",cat:"4xx",desc:"Server refuses to fulfill the request. Authorization won't help."},
  {code:404,name:"Not Found",cat:"4xx",desc:"Requested resource could not be found."},
  {code:405,name:"Method Not Allowed",cat:"4xx",desc:"HTTP method not supported for this resource."},
  {code:408,name:"Request Timeout",cat:"4xx",desc:"Server timed out waiting for the request."},
  {code:409,name:"Conflict",cat:"4xx",desc:"Request conflicts with current state of the server."},
  {code:410,name:"Gone",cat:"4xx",desc:"Resource is permanently deleted and will not return."},
  {code:413,name:"Payload Too Large",cat:"4xx",desc:"Request entity is larger than limits defined by server."},
  {code:422,name:"Unprocessable Entity",cat:"4xx",desc:"Request well-formed but semantic errors prevent processing."},
  {code:429,name:"Too Many Requests",cat:"4xx",desc:"User has sent too many requests in a given time (rate limiting)."},
  {code:500,name:"Internal Server Error",cat:"5xx",desc:"Generic server error."},
  {code:501,name:"Not Implemented",cat:"5xx",desc:"Server does not support the functionality required."},
  {code:502,name:"Bad Gateway",cat:"5xx",desc:"Invalid response received from upstream server."},
  {code:503,name:"Service Unavailable",cat:"5xx",desc:"Server not ready; overloaded or down for maintenance."},
  {code:504,name:"Gateway Timeout",cat:"5xx",desc:"Upstream server failed to respond in time."},
  {code:505,name:"HTTP Version Not Supported",cat:"5xx",desc:"HTTP version in the request not supported."},
];
const CAT_COLOR:Record<string,string>={"1xx":"bg-gray-600","2xx":"bg-green-700","3xx":"bg-blue-700","4xx":"bg-yellow-700","5xx":"bg-red-700"};
export default function HttpStatusCodes() {
  const [q,setQ]=useState(""),[cat,setCat]=useState("all");
  const filtered=CODES.filter(c=>(cat==="all"||c.cat===cat)&&(q===""||c.code.toString().includes(q)||c.name.toLowerCase().includes(q.toLowerCase())));
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">HTTP Status Codes</h1><p className="text-gray-400 mb-6">Complete reference for all HTTP response status codes.</p><div className="flex gap-2 mb-4 flex-wrap"><input className="flex-1 bg-gray-800 rounded px-3 py-2 min-w-40" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search code or name..." />{["all","1xx","2xx","3xx","4xx","5xx"].map(c=><button key={c} onClick={()=>setCat(c)} className={`rounded px-3 py-2 text-sm ${cat===c?"bg-blue-600":"bg-gray-700"}`}>{c}</button>)}</div><div className="space-y-2">{filtered.map(c=><div key={c.code} className="bg-gray-800 rounded p-3 flex gap-3 items-start"><span className={`text-xs font-bold rounded px-2 py-1 flex-shrink-0 mt-0.5 ${CAT_COLOR[c.cat]}`}>{c.code}</span><div><p className="font-semibold text-sm">{c.name}</p><p className="text-gray-400 text-sm">{c.desc}</p></div></div>)}</div></div></div>);
}