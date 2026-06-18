import React, { useState } from 'react';

const pages = ['Admissions', 'Facilities', 'Gallery', 'Contact', 'Events', 'News'];

export default function SmartSearch() {
  const [query, setQuery] = useState('');
  const filtered = pages.filter((p) => p.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="card">
      <h3>Smart Search</h3>
      <input
        type="search"
        placeholder="Search admissions, fees, facilities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul>
          {filtered.length ? filtered.map((item) => <li key={item}>{item}</li>) : <li>No results.</li>}
        </ul>
      )}
    </section>
  );
}
