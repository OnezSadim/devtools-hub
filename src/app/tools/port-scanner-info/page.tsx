"use client";
import { useState } from "react";
const PORTS = [
  [20,"FTP Data"],[21,"FTP Control"],[22,"SSH"],[23,"Telnet"],[25,"SMTP"],[53,"DNS"],[67,"DHCP Server"],[68,"DHCP Client"],[80,"HTTP"],[110,"POP3"],[143,"IMAP"],[443,"HTTPS"],[465,"SMTPS"],[587,"SMTP Submission"],[993,"IMAPS"],[995,"POP3S"],[1433,"MSSQL"],[1521,"Oracle DB"],[2181,"ZooKeeper"],[2375,"Docker"],[3000,"Dev Server"],[3306,"MySQL"],[3389,"RDP"],[4000,"Dev Alt"],[5000,"Flask/Dev"],[5432,"PostgreSQL"],[5672,"RabbitMQ"],[6379,"Redis"],[6443,"Kubernetes"],[8080,"HTTP Alt"],[8443,"HTTPS Alt"],[8888,"Jupyter"],[9200,"Elasticsearch"],[9092,"Kafka"],[27017,"MongoDB"],[27018,"MongoDB Shard"],[28015,"RethinkDB"],[50070,"Hadoop"],[54321,"H2O"]
];
export default function PortRef() {
  const [q, setQ] = useState("");
  const filtered = PORTS.filter(([p,s])=>p.toString().includes(q)||s.toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Port Reference</h1>
      <p className="text-gray-400 mb-6">Common TCP/UDP ports and their services</p>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search port or service..." className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm mb-4" />
      <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-800"><th className="text-left p-3">Port</th><th className="text-left p-3">Service</th></tr></thead>
          <tbody>{filtered.map(([p,s])=>(<tr key={p} className="border-t border-gray-800 hover:bg-gray-800/50"><td className="p-3 font-mono text-blue-400">{p}</td><td className="p-3">{s}</td></tr>))}</tbody>
        </table>
      </div>
    </main>
  );
}