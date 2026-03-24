"use client";
import { useState } from "react";

const FIELDS = ["minute", "hour", "day of month", "month", "day of week"];
const RANGES: Record<string, [number, number]> = { minute: [0,59], hour: [0,23], "day of month": [1,31], month: [1,12], "day of week": [0,6] };
const MONTH_NAMES = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default function CronParser() {
  const [cron, setCron] = useState("*/5 * * * *");
  const parts = cron.trim().split(/\s+/);
  const valid = parts.length === 5;

  const describe = (val: string, field: string): string => {
    if (val === "*") return `every ${field}`;
    if (val.startsWith("*/")) return `every ${val.slice(2)} ${field}(s)`;
    if (val.includes(",")) return `${field} ${val}`;
    if (val.includes("-")) return `${field} ${val}`;
    if (field === "month") return MONTH_NAMES[parseInt(val)] || val;
    if (field === "day of week") return DAY_NAMES[parseInt(val)] || val;
    return `${field} ${val}`;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Cron Expression Parser</h1>
      <p className="text-gray-400 mb-6">Parse and understand cron schedule expressions.</p>
      <input value={cron} onChange={e => setCron(e.target.value)} className="w-full bg-gray-800 rounded p-3 font-mono text-lg mb-4" placeholder="*/5 * * * *" />
      {valid ? (
        <div className="space-y-4">
          <div className="bg-gray-800 rounded p-4">
            <h2 className="font-bold mb-2">Human Readable</h2>
            <p className="text-green-400">{parts.map((p, i) => describe(p, FIELDS[i])).join(", ")}</p>
          </div>
          <div className="bg-gray-800 rounded p-4">
            <h2 className="font-bold mb-3">Field Breakdown</h2>
            {parts.map((p, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-gray-700">
                <span className="text-gray-400 capitalize">{FIELDS[i]}</span>
                <span className="font-mono">{p}</span>
                <span className="text-blue-400">{describe(p, FIELDS[i])}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 rounded p-4">
            <h2 className="font-bold mb-2">Common Examples</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[["*/5 * * * *","Every 5 min"],["0 * * * *","Every hour"],["0 0 * * *","Daily midnight"],["0 9 * * 1-5","Weekdays 9am"],["0 0 1 * *","Monthly 1st"]].map(([c,d]) => (
                <div key={c} className="flex justify-between cursor-pointer hover:bg-gray-700 p-1 rounded" onClick={() => setCron(c)}>
                  <code className="text-yellow-400">{c}</code><span className="text-gray-400">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : <p className="text-red-400">Invalid cron expression. Expected 5 space-separated fields.</p>}
    </div>
  );
}