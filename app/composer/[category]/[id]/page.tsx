import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getWorldComposerById, getVietnamComposerById } from "../../../lib/composerData";
import "../../../styles/layout.css";
import "../../../styles/composerDetail.css";

interface ComposerDetailPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function ComposerDetailPage({ params }: ComposerDetailPageProps) {
  const { category, id } = await params;
  
  const composer = category === "world" 
    ? getWorldComposerById(id)
    : getVietnamComposerById(id);

  if (!composer) {
    return (
      <div>
        <Header />
        <main className="composer-detail-container">
          <div className="composer-detail-content">
            <h1 className="not-found-title">Composer Not Found</h1>
            <p className="not-found-text">
              Sorry, we couldn&apos;t find information about this composer.
            </p>
            <Link href="/composer" className="back-button">
              Back to Composers List
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="composer-detail-container">
        <div className="composer-detail-content">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link href="/composer" className="breadcrumb-link">
              Composers
            </Link>
            <span className="breadcrumb-separator"> &gt; </span>
            <Link 
              href={`/composer?tab=${category}`} 
              className="breadcrumb-link"
            >
              {category === "world" ? "World" : "Vietnam"}
            </Link>
            <span className="breadcrumb-separator"> &gt; </span>
            <span className="breadcrumb-current">{composer.name}</span>
          </div>

          {/* Header Section */}
          <div className="composer-detail-header">
            <div className="composer-detail-avatar-container">
              <Image
                src={composer.avatar}
                alt={composer.name}
                width={400}
                height={500}
                className="composer-detail-avatar"
              />
            </div>
            <div className="composer-detail-info">
              <h1 className="composer-detail-name">{composer.name}</h1>
              <p className="composer-detail-era">{composer.era}</p>
              {composer.awards && composer.awards.length > 0 && (
                <div className="composer-awards-badges">
                  {composer.awards.slice(0, 3).map((award, index) => (
                    <span key={index} className="award-badge">
                      {award}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Overview Section */}
          {composer.overview && (
            <section className="composer-section">
              <h2 className="section-title">Overview</h2>
              <p className="section-text">{composer.overview}</p>
            </section>
          )}

          {/* Style & Contribution Section */}
          {composer.styleAndContribution && (
            <section className="composer-section">
              <h2 className="section-title">Style & Contributions</h2>
              <p className="section-text">{composer.styleAndContribution}</p>
            </section>
          )}

          {/* Representative Works Section */}
          {composer.representativeWorks && composer.representativeWorks.length > 0 && (
            <section className="composer-section">
              <h2 className="section-title">Representative Works</h2>
              <div className="works-grid">
                {composer.representativeWorks.map((work, index) => (
                  <div key={index} className="work-card">
                    <div className="work-header">
                      <h3 className="work-title">{work.title}</h3>
                      <span className="work-year">{work.year}</span>
                    </div>
                    {work.description && (
                      <p className="work-description">{work.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards Section - Full List */}
          {composer.awards && composer.awards.length > 0 && (
            <section className="composer-section">
              <h2 className="section-title">Awards & Honors</h2>
              <ul className="awards-list">
                {composer.awards.map((award, index) => (
                  <li key={index} className="award-item">
                    {award}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Back Button */}
          <Link href="/composer" className="back-button-bottom">
            ← Back to All Composers
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Generate static params for all composers
export async function generateStaticParams() {
  const worldIds = [
    "stephen-sondheim",
    "richard-rodgers",
    "george-gershwin",
    "andrew-lloyd-webber",
    "leonard-bernstein",
    "irving-berlin",
    "stephen-schwartz",
    "alan-menken",
    "elton-john",
  ];

  const vietnamIds = [
    "do-nhuan",
    "nguyen-thien-dao",
    "hoang-viet",
    "do-hong-quan",
    "an-thuyen",
    "tran-manh-hung",
    "pq-phan",
    "nhat-lai",
    "vo-thien-thanh",
  ];

  return [
    ...worldIds.map(id => ({ category: "world", id })),
    ...vietnamIds.map(id => ({ category: "vietnam", id })),
  ];
}
