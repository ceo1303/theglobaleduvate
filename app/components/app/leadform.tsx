'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function LeadForm({ triggerText }: { triggerText: string }) {
  const [form, setForm] = useState({
    name: '', whatsapp: '', email: '', country: '', desired_course: '', last_qualification: '', preferred_university: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('leads').insert([form]);
    if (!error) {
      setSubmitted(true);
      const message = encodeURIComponent(`Hi, I'm ${form.name}. Interested in ${form.desired_course} at ${form.preferred_university}. Email: ${form.email}. Message: ${form.message}`);
      window.location.href = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${message}`;
    }
  };

  if (submitted) return <div className="text-green-600">Thank you! Redirecting to WhatsApp...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Fields as specified */}
      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full p-2 border rounded" />
      <input type="text" placeholder="WhatsApp" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} required className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Desired Course" value={form.desired_course} onChange={(e) => setForm({ ...form, desired_course: e.target.value })} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Last Qualification" value={form.last_qualification} onChange={(e) => setForm({ ...form, last_qualification: e.target.value })} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Preferred University" value={form.preferred_university} onChange={(e) => setForm({ ...form, preferred_university: e.target.value })} className="w-full p-2 border rounded" />
      <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">{triggerText}</button>
    </form>
  );
}
