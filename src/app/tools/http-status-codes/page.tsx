"use client";
import { useState } from "react";

const CODES = [
  {code:100,text:"Continue",desc:"Request received, continue process."},
  {code:101,text:"Switching Protocols",desc:"Server switching protocols as requested."},
  {code:200,text:"OK",desc:"Request succeeded."},
  {code:201,text:"Created",desc:"Request succeeded and resource was created."},
  {code:204,text:"No Content",desc:"Request succeeded but no content to return."},
  {code:301,text:"Moved Permanently",desc:"Resource permanently moved to new URL."},
  {code:302,text:"Found",desc:"Resource temporarily at different URL."},
  {code:304,text:"Not Modified",desc:"Cached version is still valid."},
  {code:307,text:"Temporary Redirect",desc:"Request should be repeated with another URI."},
  {code:308,text:"Permanent Redirect",desc:"Request and all future requests should use new URI."},
  {code:400,text:"Bad Request",desc:"Server cannot process the request due to client error."},
  {code:401,text:"Unauthorized",desc:"Authentication required and has failed or not been provided."},
  {code:403,text:"Forbidden",desc:"Server refuses the request despite valid authentication."},
  {code:404,text:"Not Found",desc:"Requested resource could not be found."},
  {code:405,text:"Method Not Allowed",desc:"Request method is not supported for the resource."},
  {code:408,text:"Request Timeout",desc:"Server timed out waiting for the request."},
  {code:409,text:"Conflict",desc:"Request conflicts with current state of the server."},
  {code:410,text:"Gone",desc:"Resource is permanently unavailable."},
  {code:413,text:"Payload Too Large",desc:"Request entity is larger than server limits."},
  {code:422,text:"Unprocessable Entity",desc:"Request is well-formed but contains semantic errors."},
  {code:429,text:"Too Many Requests",desc:"Client has sent too many requests (rate limiting)."},
  {code:500,text:"Internal Server Error",desc:"Server encountered an unexpected condition."},
  {code:501,text:"Not Implemented",desc:"Server does not support the functionality required."},
  {code:502,text:"Bad Gateway",desc:"Server received invalid response from upstream."},
  {code:503,text:"Service Unavailable",desc:"Server is temporarily unavailable (overloaded or down)."},
  {code:504,text:"Gateway Timeout",desc:"Upstream server failed to send a response in time."},
];

const color = (code: number) => {
  if (code < 200) return "bg-gray-700 text-gray-200";
  if (code < 300) return "bg-green-900 text-green-200";
  if (code < 400) return "bg-blue-900 text-blue-200";
  if (code < 500) return "bg-yellow-900 text-yellow-200";
  return "bg-red-900 text-red-200";
};

export default function HttpStatusCodes() {
  const [search, setSearch] = useState("");
  const filtered = CODES.filter(c => 
    c.code.toString().includes(search) || 
    c.text.toLowerCase().includes(search.toLowerCase()) ||
    c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTTP Status Codes</h1>
        <p className="text-gray-400 mb-6">Complete reference of HTTP status codes with descriptions.</p>
        <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="Search by code, name, or description..."
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-6" />
        <div className="space-y-2">
          {filtered.map(c => (
            <div key={c.code} className="bg-gray-800 rounded-lg p-4 flex gap-4 items-start">
              <span className={`text-lg font-bold font-mono px-3 py-1 rounded ${color(c.code)}`}>{c.code}</span>
              <div>
                <p className="font-semibold">{c.text}</p>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-gray-500 text-center py-8">No results found.</p>}
        </div>
      </div>
    </div>
  );
}
