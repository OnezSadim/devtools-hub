"use client";
import { useState } from "react";
export default function WebpackGen() {
  const [opts, setOpts] = useState({mode:"production",entry:"./src/index.js",output:"dist",react:false,typescript:false,sass:false,images:true,fonts:true,splitting:true,sourcemap:false});
  const u = (k:string,v:any) => setOpts(p=>({...p,[k]:v}));
  const t = (k:string) => setOpts(p=>({...p,[k]:!p[k as keyof typeof p]}));
  let plugins = "";
  let rules = `      {
        test: /\.js${opts.typescript?"x?|.tsx?":""}$/,
        exclude: /node_modules/,
        use: {
          loader: "${opts.typescript?"ts-":"babel-"}loader"
        }
      }`;
  if (opts.sass) rules += `,
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"${opts.sass?', "sass-loader"':''}]
      }`;
  if (opts.images) rules += `,
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource"
      }`;
  if (opts.fonts) rules += `,
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        type: "asset/resource"
      }`;
  const config = `const path = require("path");
${opts.react?'const HtmlPlugin = require("html-webpack-plugin");
':''}
module.exports = {
  mode: "${opts.mode}",
  entry: "${opts.entry}",
  output: {
    path: path.resolve(__dirname, "${opts.output}"),
    filename: "[name]${opts.splitting?".[contenthash]":""}.js",
    clean: true
  },${opts.splitting?'
  optimization: {
    splitChunks: { chunks: "all" }
  },':''}${opts.sourcemap?'
  devtool: "source-map",':''} 
  module: {
    rules: [
${rules}
    ]
  },
  resolve: {
    extensions: [${opts.typescript?".ts", ".tsx", ":""}".js", ".jsx"]
  }${opts.react?',
  plugins: [new HtmlPlugin({ template: "./public/index.html" })]':""}}
`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Webpack Config Generator</h1>
      <p className="text-gray-400 mb-6">Generate webpack.config.js for your project</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div><label className="text-sm text-gray-400 mb-1 block">Mode</label><select value={opts.mode} onChange={e=>u("mode",e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"><option>development</option><option>production</option></select></div>
          <div><label className="text-sm text-gray-400 mb-1 block">Entry point</label><input value={opts.entry} onChange={e=>u("entry",e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" /></div>
          <div><label className="text-sm text-gray-400 mb-1 block">Output dir</label><input value={opts.output} onChange={e=>u("output",e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" /></div>
          {[["react","React/JSX"],["typescript","TypeScript"],["sass","SASS/SCSS"],["images","Image assets"],["fonts","Font assets"],["splitting","Code splitting"],["sourcemap","Source maps"]].map(([k,l])=>(
            <label key={k} className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={!!opts[k as keyof typeof opts]} onChange={()=>t(k)} className="w-4 h-4" /><span>{l}</span></label>
          ))}
        </div>
        <div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-xs font-mono overflow-auto whitespace-pre-wrap h-96">{config}</pre>
          <button onClick={()=>navigator.clipboard.writeText(config)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button>
        </div>
      </div>
    </main>
  );
}