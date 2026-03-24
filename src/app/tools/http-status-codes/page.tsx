"use client";
import { useState } from "react";
const codes = [
  {code:100,name:"Continue",desc:"The server has received the request headers."},
  {code:101,name:"Switching Protocols",desc:"The requester has asked the server to switch protocols."},
  {code:200,name:"OK",desc:"The request has succeeded."},
  {code:201,name:"Created",desc:"The request has been fulfilled and resulted in a new resource being created."},
  {code:204,name:"No Content",desc:"The server successfully processed the request but is not returning any content."},
  {code:301,name:"Moved Permanently",desc:"The requested resource has been assigned a new permanent URI."},
  {code:302,name:"Found",desc:"The resource resides temporarily under a different URI."},
  {code:304,name:"Not Modified",desc:"The resource has not been modified since the last request."},
  {code:400,name:"Bad Request",desc:"The server cannot process the request due to a client error."},
  {code:401,name:"Unauthorized",desc:"Authentication is required and has failed or not been provided."},
  {code:403,name:"Forbidden",desc:"The server understood the request but refuses to authorize it."},
  {code:404,name:"Not Found",desc:"The requested resource could not be found."},
  {code:405,name:"Method Not Allowed",desc:"The request method is not supported for the requested resource."},
  {code:408,name:"Request Timeout",desc:"The server timed out waiting for the request."},
  {code:409,name:"Conflict",desc:"The request could not be completed due to a conflict."},
  {code:410,name:"Gone",desc:"The resource requested is no longer available."},
  {code:422,name:"Unprocessable Entity",desc:"The request was well-formed but was unable to be followed due to semantic errors."},
  {code:429,name:"Too Many Requests",desc:"The user has sent too many requests in a given amount of time."},
  {code:500,name:"Internal Server Error",desc:"The server encountered an unexpected condition."},
  {code:501,name:"Not Implemented",desc:"The server does not support the functionality required to fulfill the request."},
  {code:502,name:"Bad Gateway",desc:"The server received an invalid response from an upstream server."},
  {code:503,name:"Service Unavailable",desc:"The server is currently unavailable."},
  {code:504,name:"Gateway Timeout",desc:"The server did not receive a timely response from an upstream server."},
];
export default function HttpStatusCodes() {
  const [search, setSearch] = useState("");
  const color = (c) => c<200?"text-gray-400":c<300?"text-green-400":c<400?"text-blue-400":c<500?"text-yellow-400":"text-red-400";
  const filtered = search ? codes.filter(c=>c.code.toString().includes(search)||c.name.toLowerCase().includes(search.toLowerCase())) : codes;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTTP Status Codes</h1>
        <p className="text-gray-400 mb-4">Quick reference for all HTTP response status codes</p>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by code or name..." className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mb-4" />
        <div className="space-y-2">{filtered.map(c=>(
          <div key={c.code} className="bg-gray-900 rounded p-4">
            <div className="flex items-center gap-3 mb-1">
              <span className={`font-mono font-bold text-xl ${color(c.code)}`}>{c.code}</span>
              <span className="font-semibold">{c.name}</span>
            </div>
            <p className="text-gray-400 text-sm">{c.desc}</p>
          </div>
        ))}</div>
      </div>
    </div>
  );
}