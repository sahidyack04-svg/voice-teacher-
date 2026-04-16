import React from 'react';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div>
        <p className="eyebrow">Admissions Open 2026-27</p>
        <h2>Empowering Young Minds with Values, Vision, and Innovation.</h2>
        <p>
          A future-ready school experience for parents and students seeking
          academic excellence, leadership, and global exposure.
        </p>
        <div className="cta-row">
          <button>Apply Now</button>
          <button className="outline">Book Campus Visit</button>
        </div>
      </div>
    </section>
  );
}
