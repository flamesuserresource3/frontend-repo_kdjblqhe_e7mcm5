import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

export default function BookingModal({ open, onClose, master }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const iso = new Date(`${date}T${time}:00Z`).toISOString();
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          master_id: master?.id,
          name,
          email,
          datetime_utc: iso,
          notes,
        }),
      });
      if (!res.ok) throw new Error('Не удалось создать бронь');
      const data = await res.json();
      setSuccess(`Бронь создана. Статус: ${data.status}`);
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setNotes('');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 p-6 border border-neutral-200 dark:border-white/10">
        <button onClick={onClose} className="absolute right-3 top-3 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-semibold">Бронирование {master?.name ? `— ${master.name}` : ''}</h3>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <input className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-transparent px-3 py-2" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-transparent px-3 py-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-transparent px-3 py-2" value={date} onChange={(e) => setDate(e.target.value)} required />
              <input type="time" className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-transparent px-3 py-2" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <textarea className="w-full rounded-xl border border-neutral-200 dark:border-white/10 bg-transparent px-3 py-2" placeholder="Пожелания (необязательно)" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          {success && <div className="text-sm text-green-600">{success}</div>}
          <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 text-white px-4 py-2 text-sm hover:bg-pink-700 disabled:opacity-60">
            <Calendar className="h-4 w-4" /> {loading ? 'Отправка...' : 'Подтвердить бронь'}
          </button>
        </form>
      </div>
    </div>
  );
}
