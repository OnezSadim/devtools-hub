"use client";
import { useState } from "react";
const TEMPLATES:Record<string,string>={
  "Node.js + PostgreSQL":`version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:`,
  "Next.js + Redis":`version: '3.8'
services:
  web:
    build: .
    ports:
      - '3000:3000'
    environment:
      - REDIS_URL=redis://cache:6379
    depends_on:
      - cache
  cache:
    image: redis:7-alpine
    ports:
      - '6379:6379'`,
  "NGINX + PHP + MySQL":`version: '3.8'
services:
  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./src:/var/www/html
  php:
    image: php:8.2-fpm
    volumes:
      - ./src:/var/www/html
  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: app
    volumes:
      - mysqldata:/var/lib/mysql
volumes:
  mysqldata:`,
  "Python FastAPI + MongoDB":`version: '3.8'
services:
  api:
    build: .
    ports:
      - '8000:8000'
    environment:
      - MONGO_URL=mongodb://mongo:27017/mydb
    depends_on:
      - mongo
  mongo:
    image: mongo:6
    volumes:
      - mongodata:/data/db
volumes:
  mongodata:`,
};
export default function DockerCompose() {
  const [tmpl,setTmpl]=useState(Object.keys(TEMPLATES)[0]),[yaml,setYaml]=useState(TEMPLATES[Object.keys(TEMPLATES)[0]]);
  const copy=()=>navigator.clipboard.writeText(yaml).catch(()=>{});
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Docker Compose Generator</h1><p className="text-gray-400 mb-6">Generate docker-compose.yml for common stacks.</p><div className="flex gap-2 flex-wrap mb-4">{Object.keys(TEMPLATES).map(t=><button key={t} onClick={()=>{setTmpl(t);setYaml(TEMPLATES[t]);}} className={`rounded px-3 py-1.5 text-sm ${tmpl===t?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{t}</button>)}</div><div className="relative"><textarea className="w-full bg-gray-800 rounded p-4 font-mono text-sm text-green-400 h-96 resize-y" value={yaml} onChange={e=>setYaml(e.target.value)} spellCheck={false} /><button onClick={copy} className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 rounded px-3 py-1 text-xs">Copy</button></div><p className="text-gray-500 text-sm mt-3">Edit the YAML above to customize. Use <code className="bg-gray-800 px-1 rounded">docker compose up -d</code> to start.</p></div></div>);
}