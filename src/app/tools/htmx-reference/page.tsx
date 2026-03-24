
"use client";
import { useState } from "react";
const HTMX_ATTRS = [
  { name: 'hx-get', desc: 'Issues a GET request to the given URL', example: 'hx-get="/api/data"' },
  { name: 'hx-post', desc: 'Issues a POST request to the given URL', example: 'hx-post="/api/save"' },
  { name: 'hx-put', desc: 'Issues a PUT request to the given URL', example: 'hx-put="/api/update"' },
  { name: 'hx-delete', desc: 'Issues a DELETE request to the given URL', example: 'hx-delete="/api/remove"' },
  { name: 'hx-trigger', desc: 'Specifies what triggers the request', example: 'hx-trigger="click"' },
  { name: 'hx-target', desc: 'Specifies the target element to swap', example: 'hx-target="#result"' },
  { name: 'hx-swap', desc: 'Controls how the response is swapped in', example: 'hx-swap="outerHTML"' },
  { name: 'hx-push-url', desc: 'Push URL into the browser history', example: 'hx-push-url="true"' },
  { name: 'hx-select', desc: 'Select content to swap from response', example: 'hx-select="#content"' },
  { name: 'hx-vals', desc: 'Add extra values to the request', example: 'hx-vals='{"key": "val"}'' },
  { name: 'hx-headers', desc: 'Add extra headers to the request', example: 'hx-headers='{"Auth": "token"}'' },
  { name: 'hx-confirm', desc: 'Show confirm dialog before request', example: 'hx-confirm="Are you sure?"' },
  { name: 'hx-boost', desc: 'Boost links and forms to AJAX', example: 'hx-boost="true"' },
  { name: 'hx-on', desc: 'Handle htmx events inline', example: 'hx-on::after-request="..."' },
  { name: 'hx-indicator', desc: 'Element to show during request', example: 'hx-indicator="#spinner"' },
  { name: 'hx-include', desc: 'Include additional element values', example: 'hx-include="#form"' },
  { name: 'hx-encoding', desc: 'Change the request encoding type', example: 'hx-encoding="multipart/form-data"' },
  { name: 'hx-ws', desc: 'WebSocket connection attribute', example: 'hx-ws="connect:/ws"' },
  { name: 'hx-sse', desc: 'SSE connection attribute', example: 'hx-sse="connect:/events"' },
  { name: 'hx-preserve', desc: 'Preserve element across requests', example: 'hx-preserve="true"' },
];
export default function HtmxReference() {
  const [search, setSearch] = useState("");
  const filtered = HTMX_ATTRS.filter(a => a.name.includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTMX Attribute Reference</h1>
        <p className="text-gray-400 mb-6">Quick reference for all HTMX attributes with examples</p>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search attributes..." className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 mb-6 text-white" />
        <div className="space-y-3">
          {filtered.map(a => (
            <div key={a.name} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex flex-wrap items-start gap-3">
                <code className="text-blue-400 font-bold text-sm bg-blue-950 px-2 py-1 rounded">{a.name}</code>
                <span className="text-gray-300 text-sm flex-1">{a.desc}</span>
              </div>
              <div className="mt-2">
                <code className="text-green-400 text-xs bg-gray-800 px-2 py-1 rounded">{a.example}</code>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-6">{filtered.length} of {HTMX_ATTRS.length} attributes shown</p>
      </div>
    </div>
  );
}
