'use client';

import Link from "next/link";
import { useState } from "react";
import '../styles/header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link href="/" onClick={closeMenu}>
        <h1 className="header-title">History of Drama</h1>
      </Link>
      
      {/* Hamburger Button */}
      <button 
        className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation */}
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link href="/timeline" onClick={closeMenu}>Timeline</Link>
          </li>
          <li>
            <Link href="/musical-series" onClick={closeMenu}>Musical series</Link>
          </li>
          <li>
            <Link href="/composer" onClick={closeMenu}>Composer</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}