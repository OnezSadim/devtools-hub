'use client';
import { useState } from 'react';
export default function NumberBaseConverter() {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState('10');
  const convert = (val: string, from: number) => {
    try {
      const dec = parseInt(val, from);
      if (isNaN(dec)) return { bin: '', oct: '', dec: '', hex: '' };
      return { bin: dec.toString(2), oct: dec.toString(8), dec: dec.toString(10), hex: dec.toString(16).toUpperCase() };
    } catch { return { bin: '', oct: '', dec: '', hex: '' }; }
  };
  const result = convert(input, parseInt(fromBase));
  return (<div className='min-h-screen bg-gray-950 text-gray-100 p-8'><div className='max-w-2xl mx-auto'><h1 className='text-3xl font-bold mb-2'>Number Base Converter</h1><p className='text-gray-400 mb-6'>Convert numbers between binary, octal, decimal, and hexadecimal.</p><div className='bg-gray-900 rounded-lg p-6 space-y-4'><div><label className='block text-sm text-gray-400 mb-1'>Input</label><input className='w-full bg-gray-800 rounded p-2 font-mono' value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter number'/></div><div><label className='block text-sm text-gray-400 mb-1'>From Base</label><select className='bg-gray-800 rounded p-2' value={fromBase} onChange={e=>setFromBase(e.target.value)}><option value='2'>Binary (2)</option><option value='8'>Octal (8)</option><option value='10'>Decimal (10)</option><option value='16'>Hex (16)</option></select></div><div className='grid grid-cols-2 gap-4'>{[['Binary',result.bin],['Octal',result.oct],['Decimal',result.dec],['Hex',result.hex]].map(([l,v])=>(<div key={l} className='bg-gray-800 rounded p-3'><div className='text-xs text-gray-400 mb-1'>{l}</div><div className='font-mono text-green-400 text-lg break-all'>{v||'—'}</div></div>))}</div></div></div></div>);
}
