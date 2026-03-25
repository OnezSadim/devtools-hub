'use client';
import { useState } from 'react';

export default function Tool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      let output = '';
      const slug = 'time-duration-calculator';

      if (slug === 'time-zone-converter') {
        const zones = Intl.supportedValuesOf ? Intl.supportedValuesOf('timeZone') : ['UTC','America/New_York','America/Los_Angeles','Europe/London','Europe/Paris','Asia/Tokyo','Asia/Shanghai','Australia/Sydney'];
        const dt = input ? new Date(input) : new Date();
        if (isNaN(dt.getTime())) { setResult('Invalid date/time'); return; }
        const lines = zones.slice(0, 20).map(tz => {
          try { return tz + ': ' + dt.toLocaleString('en-US', { timeZone: tz, dateStyle: 'short', timeStyle: 'short' }); } catch { return null; }
        }).filter(Boolean);
        output = lines.join('
');
      } else if (slug === 'countdown-timer') {
        const target = input ? new Date(input) : new Date(Date.now() + 86400000);
        const now = new Date();
        const diff = target.getTime() - now.getTime();
        if (diff < 0) { output = 'That date has already passed!'; }
        else {
          const days = Math.floor(diff / 86400000);
          const hours = Math.floor((diff % 86400000) / 3600000);
          const mins = Math.floor((diff % 3600000) / 60000);
          const secs = Math.floor((diff % 60000) / 1000);
          output = days + ' days, ' + hours + ' hours, ' + mins + ' minutes, ' + secs + ' seconds';
        }
      } else if (slug === 'time-duration-calculator') {
        const parts = input.split(' to ');
        if (parts.length === 2) {
          const d1 = new Date(parts[0].trim());
          const d2 = new Date(parts[1].trim());
          if (isNaN(d1.getTime()) || isNaN(d2.getTime())) { setResult('Invalid format. Use: 2024-01-01 to 2024-12-31'); return; }
          const diff2 = Math.abs(d2.getTime() - d1.getTime());
          const days = Math.floor(diff2 / 86400000);
          const hours = Math.floor((diff2 % 86400000) / 3600000);
          const mins = Math.floor((diff2 % 3600000) / 60000);
          output = days + ' days, ' + hours + ' hours, ' + mins + ' minutes
' + 'Total hours: ' + (diff2/3600000).toFixed(2) + '
Total minutes: ' + Math.floor(diff2/60000) + '
Total seconds: ' + Math.floor(diff2/1000);
        } else {
          output = 'Format: 2024-01-01 to 2024-12-31';
        }
      } else if (slug === 'week-number-calculator') {
        const d = input ? new Date(input) : new Date();
        if (isNaN(d.getTime())) { setResult('Invalid date'); return; }
        const jan1 = new Date(d.getFullYear(), 0, 1);
        const week = Math.ceil(((d.getTime() - jan1.getTime()) / 86400000 + jan1.getDay() + 1) / 7);
        const isoWeek = (() => {
          const tmp = new Date(d.valueOf());
          const dayNr = (d.getDay() + 6) % 7;
          tmp.setDate(tmp.getDate() - dayNr + 3);
          const firstThursday = tmp.valueOf();
          tmp.setMonth(0, 1);
          if (tmp.getDay() !== 4) { tmp.setMonth(0, 1 + ((4 - tmp.getDay()) + 7) % 7); }
          return 1 + Math.ceil((firstThursday - tmp.valueOf()) / 604800000);
        })();
        output = 'Date: ' + d.toDateString() + '
Week number (simple): ' + week + '
ISO week number: ' + isoWeek + '
Year: ' + d.getFullYear() + '
Day of year: ' + Math.floor((d.getTime() - jan1.getTime()) / 86400000 + 1);
      } else if (slug === 'leap-year-checker') {
        const year = parseInt(input) || new Date().getFullYear();
        const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
        const leap = isLeap(year);
        let next = year + 1;
        while (!isLeap(next)) next++;
        let prev = year - 1;
        while (!isLeap(prev)) prev--;
        output = year + ' is ' + (leap ? 'a LEAP year' : 'NOT a leap year') + '
Days in year: ' + (leap ? 366 : 365) + '
Previous leap year: ' + prev + '
Next leap year: ' + next;
      }

      setResult(output);
    } catch (e) {
      setResult('Error: ' + String(e));
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Time Duration Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate duration between two times or add/subtract time</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value (or leave blank for current date/time)"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >Calculate</button>
          {result && (
            <pre className="bg-gray-800 rounded-lg p-4 text-green-400 whitespace-pre-wrap font-mono text-sm">{result}</pre>
          )}
        </div>
      </div>
    </div>
  );
}
