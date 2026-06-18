import React from 'react';

const recommendations = [
  'Planning admission? Start with the Admissions section.',
  'Interested in activities? Explore Facilities and Gallery.',
  'Need updates? Follow our Instagram for events.'
];

export default function Recommendations() {
  return (
    <section className="card">
      <h3>AI Recommendations</h3>
      <ul>
        {recommendations.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
