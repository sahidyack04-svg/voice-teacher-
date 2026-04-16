import React from 'react';

export default function Admissions() {
  return (
    <section id="admissions" className="card">
      <h3>Admissions</h3>
      <p>Simple, transparent, and parent-friendly admissions process.</p>
      <ul>
        <li>Online enquiry and application</li>
        <li>Document checklist and counselling</li>
        <li>Fee and scholarship guidance</li>
      </ul>
      <div className="cta-row">
        <button>Start Application</button>
        <button className="outline">Download Prospectus</button>
      </div>
    </section>
  );
}
