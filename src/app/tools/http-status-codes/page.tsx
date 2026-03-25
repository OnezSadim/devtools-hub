"use client"
import { useState } from "react"

const codes: Record<number, {text:string,desc:string}> = {
  100:{text:"Continue",desc:"Server received request headers, client should proceed"},
  101:{text:"Switching Protocols",desc:"Server is switching protocols as requested"},
  200:{text:"OK",desc:"Request succeeded"},
  201:{text:"Created",desc:"Request succeeded and a new resource was created"},
  204:{text:"No Content",desc:"Request succeeded but no content to return"},
  301:{text:"Moved Permanently",desc:"Resource has been permanently moved to new URL"},
  302:{text:"Found",desc:"Resource temporarily located at different URL"},
  304:{text:"Not Modified",desc:"Cached version is still valid"},
  400:{text:"Bad Request",desc:"Server cannot process due to client error"},
  401:{text:"Unauthorized",desc:"Authentication required"},
  403:{text:"Forbidden",desc:"Server refuses to fulfill request"},
  404:{text:"Not Found",desc:"Resource not found on server"},
  405:{text:"Method Not Allowed",desc:"HTTP method not supported for this resource"},
  408:{text:"Request Timeout",desc:"Server timed out waiting for the request"},
  409:{text:"Conflict",desc:"Request conflicts with current state of server"},
  410:{text:"Gone",desc:"Resource permanently deleted and will not return"},
  422:{text:"Unprocessable Entity",desc:"Request well-formed but semantically incorrect"},
  429:{text:"Too Many Requests",desc:"Rate limit exceeded"},
  500:{text:"Internal Server Error",desc:"Generic server-side error"},
  502:{text:"Bad Gateway",desc:"Invalid response from upstream server"},
  503:{text:"Service Unavailable",desc:"Server temporarily unable to handle request"},
  504:{text:"Gateway Timeout",desc:"Upstream server timed out"}
}

function color(code: number) {
  if(code<200) return "bg-gray-700"
  if(code<300) return "bg-green-900 text-green-300"
  if(code<400) return "bg-blue-900 text-blue-300"
  if(code<500) return "bg-yellow-900 text-yellow-300"
  return "bg-red-900 text-red-300"
}

export default function HttpStatusCodes() {
  const [search, setSearch] = useState("")
  const filtered = Object.entries(codes).filter(([code,{text}]) =>
    code.includes(search) || text.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">HTTP Status Codes Reference</h1>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by code or name..." className="w-full bg-gray-800 rounded px-4 py-3 mb-6" />
      <div className="space-y-2">
        {filtered.map(([code,{text,desc}])=>(
          <div key={code} className={`${color(parseInt(code))} rounded-lg p-4 flex items-center gap-4`}>
            <span className="text-2xl font-bold w-16">{code}</span>
            <div><p className="font-semibold">{text}</p><p className="text-sm opacity-75">{desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}
