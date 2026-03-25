"use client"
import { useState } from "react"
export default function FlexboxHelper() {
  const [dir, setDir] = useState("row")
  const [justify, setJustify] = useState("flex-start")
  const [align, setAlign] = useState("stretch")
  const [wrap, setWrap] = useState("nowrap")
  const [gap, setGap] = useState("8")
  const css = `display: flex;
flex-direction: ${dir};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap}px;`
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flexbox Helper</h1>
        <p className="text-gray-400 mb-8">Build flexbox layouts visually</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[{l:"Direction",v:dir,s:setDir,opts:["row","row-reverse","column","column-reverse"]},{l:"Justify Content",v:justify,s:setJustify,opts:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},{l:"Align Items",v:align,s:setAlign,opts:["flex-start","center","flex-end","stretch","baseline"]},{l:"Flex Wrap",v:wrap,s:setWrap,opts:["nowrap","wrap","wrap-reverse"]}].map(({l,v,s,opts})=>(
            <div key={l}><label className="block text-sm text-gray-400 mb-1">{l}</label><select className="w-full bg-gray-800 rounded p-2" value={v} onChange={e=>s(e.target.value)}>{opts.map(o=><option key={o}>{o}</option>)}</select></div>
          ))}
        </div>
        <div className="bg-gray-800 rounded-xl p-4 h-40 mb-4" style={{display:"flex",flexDirection:dir as any,justifyContent:justify,alignItems:align,flexWrap:wrap as any,gap:`${gap}px`}}>
          {["A","B","C","D"].map(l=><div key={l} className="bg-purple-600 rounded w-12 h-12 flex items-center justify-center font-bold">{l}</div>)}
        </div>
        <div className="bg-gray-900 rounded p-4"><pre className="text-green-400 text-sm">{css}</pre></div>
        <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy CSS</button>
      </div>
    </div>
  )
}