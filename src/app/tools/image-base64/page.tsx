'use client';
import { useState } from 'react';
export default function ImageBase64() {
  const [b64, setB64] = useState('');
  const [filename, setFilename] = useState('');
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFilename(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setB64(ev.target?.result as string);
    reader.readAsDataURL(file);
  };
  const copy = () => navigator.clipboard.writeText(b64);
  return (<div className='min-h-screen bg-gray-950 text-gray-100 p-8'><div className='max-w-2xl mx-auto'><h1 className='text-3xl font-bold mb-2'>Image to Base64</h1><p className='text-gray-400 mb-6'>Convert any image file to a Base64 data URL.</p><div className='bg-gray-900 rounded-lg p-6 space-y-4'><input type='file' accept='image/*' onChange={handleFile} className='block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:bg-blue-600 file:text-white file:border-0 cursor-pointer'/>{b64 && (<><div className='text-sm text-gray-400'>{filename} → {(b64.length/1024).toFixed(1)} KB</div>{b64.startsWith('data:image') && <img src={b64} alt='preview' className='max-h-40 rounded'/>}<textarea className='w-full bg-gray-800 rounded p-2 font-mono text-xs h-32' value={b64} readOnly/><button onClick={copy} className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm'>Copy Base64</button></>)}</div></div></div>);
}
