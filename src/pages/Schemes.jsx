import React, { useState, useEffect } from 'react';
import ChromaGrid from '../components/chromaGrid.jsx';
import '../styles/Schemes.css';

const AllSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/schemes.json')
      .then(res => res.json())
      .then(data => setSchemes(data));
  }, []);

  const visibleSchemes = showAll ? schemes : schemes.slice(0, 5);

  const chromaItems = visibleSchemes.map((scheme) => ({
    image: scheme.image || "https://placehold.co/320x200?text=Scheme",
    title: scheme.name,
    subtitle: scheme.ministry,
    handle: scheme.category || "",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: scheme.link,
    badge: scheme.category
  }));

  const renderCard = (c, i, handleCardClick, handleCardMove) => (
    <article
      key={i}
      className="chroma-card"
      onMouseMove={handleCardMove}
      onClick={() => handleCardClick(c.url)}
      style={{
        '--card-border': c.borderColor || 'transparent',
        '--card-gradient': c.gradient,
        cursor: c.url ? 'pointer' : 'default',
      }}
    >
      <div className="chroma-img-wrapper">
        <img src={c.image} alt={c.title} loading="lazy" />
        {c.badge && (
          <span className="scheme-badge">{c.badge}</span>
        )}
      </div>
      <footer className="chroma-info">
        <h3 className="name">{c.title}</h3>
        {c.handle && <span className="handle">{c.handle}</span>}
        <p className="role">{c.subtitle}</p>
      </footer>
    </article>
  );

  return (
    <div className="all-schemes-container">
      <div className="schemes-header">
        <h2 className="schemes-heading">Government Schemes</h2>
        <button
          className="see-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less ▲' : 'See All Schemes ▼'}
        </button>
      </div>

      <ChromaGrid
        items={chromaItems}
        columns={5}
        rows={1}
        renderCard={renderCard}
      />
    </div>
  );
};

export default AllSchemes;