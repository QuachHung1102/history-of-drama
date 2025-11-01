'use client';

import { musicalEras } from '../lib/musicalData';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/musicalSeries.css';

export default function MusicalSeriesPage() {
  const [activeEra, setActiveEra] = useState('operetta');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: string]: number }>({});

  const scrollToSection = (eraId: string) => {
    setActiveEra(eraId);
    setIsMenuOpen(false); // Close menu after selection
    const section = sectionsRef.current[eraId];
    if (section) {
      const navHeight = 200; // Height of navigation pills
      const yOffset = -navHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const nextSlide = (eraId: string, totalWorks: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [eraId]: ((prev[eraId] || 0) + 1) % totalWorks
    }));
  };

  const prevSlide = (eraId: string, totalWorks: number) => {
    setCarouselIndexes(prev => ({
      ...prev,
      [eraId]: ((prev[eraId] || 0) - 1 + totalWorks) % totalWorks
    }));
  };

  const getVisibleWorks = (eraId: string, works: Array<{ title: string; year?: string; image: string }>) => {
    const startIndex = carouselIndexes[eraId] || 0;
    const itemsToShow = 3;
    const visibleWorks = [];

    for (let i = 0; i < itemsToShow; i++) {
      const index = (startIndex + i) % works.length;
      visibleWorks.push({ ...works[index], originalIndex: index });
    }

    return visibleWorks;
  };

  return (
    <div>
      <Header />
      <div className="musical-series-container">
        {/* Header */}
        <header className="musical-series-header">
          <h1 className="musical-series-title">MUSICAL SERIES</h1>
        </header>

        {/* Navigation Pills */}
        <nav className="musical-nav-pills">
          <button 
            className="nav-toggle-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            <span className="nav-toggle-text">
              {isMenuOpen ? 'Close Menu' : 'Musical Eras Menu'}
            </span>
          </button>
          <div className={`nav-pills-container ${isMenuOpen ? 'open' : ''}`}>
            {musicalEras.map((era) => (
              <button
                key={era.id}
                className={`nav-pill ${activeEra === era.id ? 'active' : ''}`}
                onClick={() => scrollToSection(era.id)}
              >
                {era.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <div className="musical-content">
          {musicalEras.map((era) => (
            <section
              key={era.id}
              ref={(el) => {
                sectionsRef.current[era.id] = el;
              }}
              className="musical-era-section"
              id={era.id}
            >
              {/* Left Sidebar Label */}
              <div className="era-sidebar-label">
                <span className="era-sidebar-text">{era.title}</span>
              </div>

              {/* Main Content */}
              <div className="era-main-content">
                {/* Title and Header */}
                <div className="era-header-wrapper">
                  <div className="era-header-text">
                    <h2 className="era-title">{era.title.toUpperCase()}</h2>
                    <h3 className="era-period">{era.title} ({era.period})</h3>
                    <p className="era-characteristics">{era.characteristics}</p>
                  </div>
                  <div className="era-header-image">
                    <Image
                      src={era.poster}
                      alt={era.title}
                      width={400}
                      height={300}
                      className="era-poster"
                    />
                  </div>
                </div>

                {/* Vocal Techniques Section */}
                <div className="vocal-techniques-section">
                  <h3 className="vocal-techniques-title">Vocal techniques:</h3>
                  <div className="vocal-techniques-content">
                    {era.vocalTechniques.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* Representative Works Carousel */}
                <div className="representative-works-section">
                  <div className="works-header">
                    <h3 className="representative-works-title">Representative works</h3>
                    <div className="carousel-controls">
                      <button
                        className="carousel-btn carousel-prev"
                        onClick={() => prevSlide(era.id, era.representativeWorks.length)}
                        aria-label="Previous works"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                      <span className="carousel-counter">
                        {(carouselIndexes[era.id] || 0) + 1} - {Math.min((carouselIndexes[era.id] || 0) + 3, era.representativeWorks.length)} / {era.representativeWorks.length}
                      </span>
                      <button
                        className="carousel-btn carousel-next"
                        onClick={() => nextSlide(era.id, era.representativeWorks.length)}
                        aria-label="Next works"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                  <div className="works-carousel">
                    <div className="works-grid">
                      {getVisibleWorks(era.id, era.representativeWorks).map((work) => (
                        <div key={`${era.id}-${work.originalIndex}`} className="work-card">
                          <div className="work-image-placeholder">
                            <Image
                              src={work.image}
                              alt={work.title}
                              width={300}
                              height={450}
                              className="work-image"
                            />
                          </div>
                          <h4 className="work-title">{work.title}</h4>
                          {work.year && <span className="work-year">{work.year}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <hr className="era-separator" />
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
