"use client";
import { useState } from "react";
const codes = [
  {code:100,name:"Continue",desc:"The server received the request headers and client should proceed"},
  {code:200,name:"OK",desc:"Request succeeded"},
  {code:201,name:"Created",desc:"Request succeeded and a new resource was created"},
  {code:204,name:"No Content",desc:"Request succeeded but no content to return"},
  {code:301,name:"Moved Permanently",desc:"Resource permanently moved to new URL"},
  {code:302,name:"Found",desc:"Resource temporarily moved to different URL"},
  {code:304,name:"Not Modified",desc:"Resource has not been modified since last request"},
  {code:400,name:"Bad Request",desc:"Server cannot process request due to client error"},
  {code:401,name:"Unauthorized",desc:"Authentication is required and has failed"},
  {code:403,name:"Forbidden",desc:"Server understood request but refuses to authorize it"},
  {code:404,name:"Not Found",desc:"Requested resource could not be found"},
  {code:405,name:"Method Not Allowed",desc:"Request method is not supported for this resource"},
  {code:408,name:"Request Timeout",desc:"Server timed out waiting for the request"},
  {code:409,name:"Conflict",desc:"Request conflicts with current state of server"},
  {code:410,name:"Gone",desc:"Resource is no longer available and will not be available again"},
  {code:422,name:"Unprocessable Entity",desc:"Request well-formed but unable to be followed due to semantic errors"},
  {code:429,name:"Too Many Requests",desc:"User has sent too many requests in a given time"},
  {code:500,name:"Internal Server Error",desc:"Server encountered unexpected condition"},
  {code:501,name:"Not Implemented",desc:"Server does not support the functionality required"},
  {code:502,name:"Bad Gateway",desc:"Server received invalid response from upstream server"},
  {code:503,name:"Service Unavailable",desc:"Server is not ready to handle the request"},
  {code:504,name:"Gateway Timeout",desc:"Server did not receive timely response from upstream server"},
];
const color = (c:number) => c<200?"bg-gray-700":c<300?"bg-green-800":c<400?"bg-blue-800":c<500?"bg-yellow-800":"bg-red-800";
export default function HttpStatusCodes() {
  const [search, setSearch] = useState("");
  const filtered = codes.filter(c=>c.code.toString().includes(search)||c.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">HTTP Status Codes</h1>
      <p className="text-gray-400 mb-6">Complete reference for HTTP response status codes</p>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by code or name..." className="w-full max-w-md bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-6" />
      <div className="space-y-2 max-w-2xl">
        {filtered.map(c=>(
          <div key={c.code} className="flex gap-4 items-start bg-gray-800 rounded p-3">
            <span className={`${color(c.code)} px-2 py-1 rounded font-mono font-bold text-sm min-w-fit`}>{c.code}</span>
            <div><p className="font-semibold">{c.name}</p><p className="text-gray-400 text-sm">{c.desc}</p></div>
          </div>
        ))}
      </div>
    </main>
  );
}