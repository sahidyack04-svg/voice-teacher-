import React from 'react';

const images = ['Campus Life', 'STEM Fair', 'Sports Day', 'Art Showcase'];

export default function Gallery() {
  return (
    <section className="card glass">
      <h3>Gallery</h3>
      <div className="grid">
        {images.map((title) => (
          <div key={title} className="placeholder-image" role="img" aria-label={title}>
            {title}
          </div>
        ))}
      </div>
    </section>
  );
}
