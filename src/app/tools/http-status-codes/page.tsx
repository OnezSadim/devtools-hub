'use client';
import { useState } from 'react';
const CODES: Record<string,[string,string]> = {
  '100':['Continue','The server received the request headers.'],
  '200':['OK','Request succeeded.'],
  '201':['Created','Resource created.'],
  '204':['No Content','No content to return.'],
  '301':['Moved Permanently','URL permanently changed.'],
  '302':['Found','Temporary redirect.'],
  '304':['Not Modified','Cached version is current.'],
  '400':['Bad Request','Invalid syntax.'],
  '401':['Unauthorized','Authentication required.'],
  '403':['Forbidden','Access denied.'],
  '404':['Not Found','Resource not found.'],
  '405':['Method Not Allowed','HTTP method not supported.'],
  '409':['Conflict','Request conflicts with current state.'],
  '422':['Unprocessable Entity','Semantic errors in request.'],
  '429':['Too Many Requests','Rate limit exceeded.'],
  '500':['Internal Server Error','Generic server error.'],
  '502':['Bad Gateway','Invalid upstream response.'],
  '503':['Service Unavailable','Server temporarily unavailable.'],
  '504':['Gateway Timeout','Upstream server timed out.'],
};
export default function HttpStatusCodes() {
  const [search, setSearch] = useState('');
  const filtered = Object.entries(CODES).filter(([code,[name]])=>
    code.includes(search) || name.toLowerCase().includes(search.toLowerCase())
  );
  const color = (c: string) => c.startsWith('2')?'text-green-400':c.startsWith('3')?'text-blue-400':c.startsWith('4')?'text-yellow-400':'text-red-400';
  return (<div className='min-h-screen bg-gray-950 text-gray-100 p-8'><div className='max-w-2xl mx-auto'><h1 className='text-3xl font-bold mb-2'>HTTP Status Codes</h1><p className='text-gray-400 mb-6'>Quick reference for all HTTP response status codes.</p><input className='w-full bg-gray-800 rounded p-2 mb-4' placeholder='Search codes...' value={search} onChange={e=>setSearch(e.target.value)}/><div className='space-y-2'>{filtered.map(([code,[name,desc]])=>(<div key={code} className='bg-gray-900 rounded p-3 flex gap-4'><span className={`font-mono font-bold text-lg w-12 shrink-0 ${color(code)}`}>{code}</span><div><div className='font-semibold'>{name}</div><div className='text-sm text-gray-400'>{desc}</div></div></div>))}</div></div></div>);
}
