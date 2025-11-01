'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { worldComposers, vietnamComposers } from "../lib/composerData";
import "../styles/layout.css";
import "../styles/composer.css";

function ComposerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab') as "world" | "vietnam" | null;
  const [selectedCategory, setSelectedCategory] = useState<"world" | "vietnam">(tabParam || "world");

  const handleCategoryChange = (category: "world" | "vietnam") => {
    setSelectedCategory(category);
    router.push(`/composer?tab=${category}`, { scroll: false });
  };

  const displayedComposers = selectedCategory === "world" ? worldComposers : vietnamComposers;

  return (
    <main className="composer-container">
      <div className="composer-content">
        <div className="composer-header">
          <h1 className="composer-title">Famous Composers</h1>
          <p className="composer-subtitle">
            Discover the brilliant minds behind legendary musicals
          </p>

          {/* Tab Navigation */}
          <div className="composer-nav">
            <button onClick={() => handleCategoryChange("world")}>
              <p className={`composer-nav-item ${selectedCategory === "world" ? "active" : ""}`}>
                WORLD
              </p>
            </button>
            <button onClick={() => handleCategoryChange("vietnam")}>
              <p className={`composer-nav-item ${selectedCategory === "vietnam" ? "active" : ""}`}>
                VIETNAM
              </p>
            </button>
          </div>
        </div>

        {/* Composer Grid */}
        <div className="composer-grid">
          {displayedComposers.map((composer) => (
            <Link
              key={composer.id}
              href={`/composer/${selectedCategory}/${composer.id}`}
              className="composer-card"
            >
              <div className="composer-card-inner">
                <div className="composer-avatar-wrapper">
                  <Image
                    src={composer.avatar}
                    alt={composer.name}
                    width={300}
                    height={360}
                    className="composer-avatar"
                  />
                  <div className="composer-avatar-overlay"></div>
                </div>
                <div className="composer-card-content">
                  <h2 className="composer-name">{composer.name}</h2>
                  <span className="composer-era">{composer.era}</span>
                  {composer.overview && (
                    <p className="composer-preview">{composer.overview}</p>
                  )}
                  <div className="composer-card-footer">
                    <span className="view-profile">View Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function ComposerPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={
        <main className="composer-container">
          <div className="composer-content">
            <div className="composer-header">
              <h1 className="composer-title">Loading...</h1>
            </div>
          </div>
        </main>
      }>
        <ComposerContent />
      </Suspense>
      <Footer />
    </div>
  );
}
