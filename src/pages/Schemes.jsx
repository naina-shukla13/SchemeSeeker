import React, { useState, useEffect } from 'react';
import ChromaGrid from '../components/chromaGrid.jsx';
import '../styles/Schemes.css';
import { useTranslation } from 'react-i18next';
import schemeBanner from '../assets/schemes-banner.png'; // single banner image

const AllSchemes = () => {
  const { t } = useTranslation();
  const [schemes, setSchemes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/schemes.json')
      .then(res => res.json())
      .then(data => setSchemes(data));
  }, []);

  const visibleSchemes = showAll ? schemes : schemes.slice(0, 5);

  const chromaItems = visibleSchemes.map((scheme) => ({
    image: schemeBanner, // same banner for all schemes
    title: t(scheme.name) || scheme.name,
    subtitle: scheme.source,
    handle: scheme.criteria?.occupation?.join(', ') || "",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: scheme.link,
    badge: scheme.criteria?.state?.join(', ') || ""
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
        {c.badge && <span className="scheme-badge">{c.badge}</span>}
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
        <h2 className="schemes-heading">{t('schemesTitle', 'Government Schemes')}</h2>
        <button
          className="see-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? t('showLess', 'Show Less ▲') : t('seeAll', 'See All Schemes ▼')}
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
