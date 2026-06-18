import React, { useState } from 'react';

const faq = {
  admissions: 'Admissions are open. Please click Start Application to begin.',
  fees: 'Fee details are shared after counsellor interaction based on grade.',
  facilities: 'WWIS offers labs, sports, arts, and transport tracking.'
};

export default function ChatAssistant() {
  const [q, setQ] = useState('');
  const [a, setA] = useState('Ask about admissions, fees, or facilities.');

  const handleAsk = () => {
    const key = Object.keys(faq).find((k) => q.toLowerCase().includes(k));
    setA(key ? faq[key] : 'Thanks! Our admissions team will contact you shortly.');
  };

  return (
    <section className="card">
      <h3>AI Chat Assistant</h3>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type your question..." />
      <button onClick={handleAsk}>Ask</button>
      <p>{a}</p>
    </section>
  );
}
