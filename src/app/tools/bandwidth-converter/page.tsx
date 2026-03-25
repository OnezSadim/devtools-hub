'use client'

import { useState } from 'react';

const units = [
          { value: 'bps', label: 'Bits per second (bps)' },
          { value: 'kbps', label: 'Kilobits/s (Kbps)' },
          { value: 'mbps', label: 'Megabits/s (Mbps)' },
          { value: 'gbps', label: 'Gigabits/s (Gbps)' },
          { value: 'tbps', label: 'Terabits/s (Tbps)' },
        ];

export default function Page() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  return (
    <main className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-2'>Bandwidth Converter</h1>
        <p className='text-gray-400 mb-8'>Convert network bandwidth units between bps, Kbps, Mbps, Gbps</p>
        <div className='bg-gray-900 rounded-xl p-6 space-y-4'>
          <input type='number' value={value} onChange={e => setValue(e.target.value)}
            placeholder='Enter value...'
            className='w-full bg-gray-800 rounded-lg px-4 py-3 text-white text-lg outline-none focus:ring-2 focus:ring-blue-500' />
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm text-gray-400 mb-1'>From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className='w-full bg-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500'>
                {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className='block text-sm text-gray-400 mb-1'>To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className='w-full bg-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500'>
                {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg px-4 py-3 text-blue-400 text-lg font-mono'>
            {value ? `${value} ${from} = ${value} ${to}` : 'Enter a value above'}
          </div>
        </div>
      </div>
    </main>
  );
}
