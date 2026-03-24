"use client";
import { useState } from "react";
export default function AsciiArtGenerator() {
  const [text, setText] = useState("");
  const [font, setFont] = useState("block");
  const [output, setOutput] = useState("");
  const fonts: Record<string, Record<string, string[]>> = {
    block: {
      A: [" ##### ","#     #","#######","#     #","#     #"],
      B: ["###### ","#     #","###### ","#     #","###### "],
      C: [" ##### ","#      ","#      ","#      "," ##### "],
      D: ["###### ","#     #","#     #","#     #","###### "],
      E: ["#######","#      ","##### ","#      ","#######"],
      F: ["#######","#      ","##### ","#      ","#      "],
      G: [" ##### ","#      ","#  ####","#     #"," ##### "],
      H: ["#     #","#     #","#######","#     #","#     #"],
      I: ["###"," # "," # "," # ","###"],
      J: ["  ###","    #","    #","#   #"," ### "],
      K: ["#    #","#   # ","####  ","#   # ","#    #"],
      L: ["#      ","#      ","#      ","#      ","#######"],
      M: ["#     #","##   ##","# # # #","#  #  #","#     #"],
      N: ["#     #","##    #","# #   #","#  #  #","#   ###"],
      O: [" ##### ","#     #","#     #","#     #"," ##### "],
      P: ["###### ","#     #","###### ","#      ","#      "],
      Q: [" ##### ","#     #","#   # #","#    ##"," #####."],
      R: ["###### ","#     #","###### ","#   #  ","#    ##"],
      S: [" ##### ","#      "," ##### ","      #"," ##### "],
      T: ["#######","   #   ","   #   ","   #   ","   #   "],
      U: ["#     #","#     #","#     #","#     #"," ##### "],
      V: ["#     #","#     #"," #   # ","  # #  ","   #   "],
      W: ["#     #","#  #  #","# # # #","##   ##","#     #"],
      X: ["#     #"," #   # ","  ###  "," #   # ","#     #"],
      Y: ["#     #"," #   # ","  ###  ","   #   ","   #   "],
      Z: ["#######","     # ","  ###  "," #     ","#######"],
      " ": ["   ","   ","   ","   ","   "],
    },
    simple: {
      A: ["/\\","/__\\"],
      B: ["|__","|__|"],
      C: ["/--","\--"],
      " ": [" "," "],
    }
  };
  const generate = () => {
    const upper = text.toUpperCase();
    const fontData = fonts[font] || fonts.block;
    const rows = 5;
    const lines: string[] = Array(rows).fill("");
    for (const ch of upper) {
      const charData = fontData[ch] || fontData[" "] || Array(rows).fill("  ");
      const h = charData.length;
      for (let i = 0; i < rows; i++) {
        lines[i] += (charData[i % h] || "") + " ";
      }
    }
    setOutput(lines.join("\n"));
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ASCII Art Generator</h1>
        <p className="text-gray-400 mb-6">Convert text to ASCII art</p>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono"/>
        <select value={font} onChange={e=>setFont(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2 mb-4">
          <option value="block">Block</option>
          <option value="simple">Simple</option>
        </select>
        <button onClick={generate} className="ml-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Generate</button>
        {output && <div className="mt-6">
          <div className="flex justify-between mb-2"><span className="text-gray-400">Output</span><button onClick={copy} className="text-blue-400 hover:text-blue-300 text-sm">Copy</button></div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 overflow-x-auto text-xs leading-tight">{output}</pre>
        </div>}
      </div>
    </main>
  );
}