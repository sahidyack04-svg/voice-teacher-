import React from 'react';

const items = [
  'Smart Classrooms',
  'Language & Science Labs',
  'Sports & Wellness Programs',
  'Safe Transport with Tracking',
  'Performing Arts & Clubs',
  'Career Guidance & Mentorship'
];

export default function Features() {
  return (
    <section id="features" className="card glass">
      <h3>Facilities & Features</h3>
      <div className="grid">
        {items.map((item) => (
          <article key={item} className="tile">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
