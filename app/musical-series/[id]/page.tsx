import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/layout.css";

// Dữ liệu chi tiết các musical
const musicalData: Record<string, {
  title: string;
  year: string;
  genre: string;
  composer: string;
  synopsis: string;
  highlights: string[];
  awards: string[];
}> = {
  "hamilton": {
    title: "Hamilton",
    year: "2015",
    genre: "Hip-hop Musical",
    composer: "Lin-Manuel Miranda",
    synopsis: "Hamilton tells the story of American Founding Father Alexander Hamilton through a revolutionary blend of hip-hop, jazz, R&B, and traditional show tunes. The musical follows Hamilton's journey from an immigrant orphan to George Washington's right-hand man, while exploring themes of ambition, legacy, and the American Dream.",
    highlights: [
      "Groundbreaking fusion of hip-hop and musical theatre",
      "Diverse casting representing America's multicultural heritage",
      "Fast-paced storytelling with complex rhyme schemes",
      "Educational value while being highly entertaining"
    ],
    awards: [
      "11 Tony Awards (2016)",
      "Grammy Award for Best Musical Theater Album",
      "Pulitzer Prize for Drama",
      "Kennedy Center Honors"
    ]
  },
  "phantom-of-the-opera": {
    title: "The Phantom of the Opera",
    year: "1986",
    genre: "Gothic Romance",
    composer: "Andrew Lloyd Webber",
    synopsis: "Set in the Paris Opera House, this gothic romance tells the tragic tale of the Phantom, a mysterious masked figure who haunts the opera house and becomes obsessed with Christine Daaé, a beautiful young soprano. The musical explores themes of obsession, beauty, and the power of music.",
    highlights: [
      "Iconic chandelier scene and spectacular staging",
      "Legendary score including 'Music of the Night'",
      "Lavish costumes and set designs",
      "Longest-running Broadway show in history"
    ],
    awards: [
      "7 Tony Awards including Best Musical",
      "3 Olivier Awards",
      "Grammy Award for Best Musical Cast Show Album",
      "Guinness World Record for highest-grossing entertainment event"
    ]
  },
  "les-miserables": {
    title: "Les Misérables",
    year: "1985",
    genre: "Epic Drama",
    composer: "Claude-Michel Schönberg",
    synopsis: "Based on Victor Hugo's novel, Les Misérables is an epic tale of redemption, love, and revolution in 19th century France. Following ex-convict Jean Valjean's quest for redemption against the backdrop of the June Rebellion, the musical explores themes of justice, love, and sacrifice.",
    highlights: [
      "Powerful sung-through score",
      "Iconic songs like 'I Dreamed a Dream' and 'One Day More'",
      "Epic staging of the barricade scenes",
      "Deeply emotional storytelling"
    ],
    awards: [
      "8 Tony Awards including Best Musical",
      "Multiple Olivier Awards",
      "Grammy Award for Best Musical Cast Album",
      "One of the longest-running musicals worldwide"
    ]
  },
  "wicked": {
    title: "Wicked",
    year: "2003",
    genre: "Fantasy Musical",
    composer: "Stephen Schwartz",
    synopsis: "Wicked tells the untold story of the Witches of Oz, focusing on the unlikely friendship between Elphaba (the Wicked Witch of the West) and Glinda the Good. The musical explores themes of prejudice, power, and what it truly means to be 'wicked' or 'good'.",
    highlights: [
      "Spectacular flying sequences and special effects",
      "Powerful anthem 'Defying Gravity'",
      "Clever reimagining of The Wizard of Oz story",
      "Stunning costume and set design"
    ],
    awards: [
      "3 Tony Awards",
      "6 Drama Desk Awards",
      "Grammy Award for Best Musical Show Album",
      "One of Broadway's highest-grossing shows"
    ]
  },
  "cats": {
    title: "Cats",
    year: "1981",
    genre: "Dance Musical",
    composer: "Andrew Lloyd Webber",
    synopsis: "Based on T.S. Eliot's 'Old Possum's Book of Practical Cats', this unique musical tells the story of a tribe of cats called the Jellicles who gather for their annual Jellicle Ball, where one cat will be chosen to ascend to the Heaviside Layer and be reborn.",
    highlights: [
      "Revolutionary dance choreography",
      "Iconic song 'Memory'",
      "Innovative costume design transforming actors into cats",
      "Non-traditional narrative structure"
    ],
    awards: [
      "7 Tony Awards including Best Musical",
      "Multiple Olivier Awards",
      "One of the longest-running shows in Broadway history",
      "Cultural phenomenon of the 1980s"
    ]
  },
  "the-lion-king": {
    title: "The Lion King",
    year: "1997",
    genre: "Family Musical",
    composer: "Elton John",
    synopsis: "Adapted from Disney's animated film, The Lion King tells the story of Simba, a young lion prince who must reclaim his throne after the murder of his father. Featuring African-inspired music and groundbreaking puppetry, the musical explores themes of responsibility, family, and the circle of life.",
    highlights: [
      "Revolutionary puppetry and mask work",
      "Stunning opening with 'Circle of Life'",
      "Blend of Elton John's pop songs and African music",
      "Visually spectacular production design"
    ],
    awards: [
      "6 Tony Awards including Best Musical",
      "Multiple Olivier Awards",
      "Grammy Award for Best Musical Show Album",
      "Third longest-running Broadway show"
    ]
  }
};

export default function MusicalDetail({ params }: { params: { id: string } }) {
  const musical = musicalData[params.id];

  if (!musical) {
    return (
      <div>
        <Header />
        <main className="main-content" style={{ minHeight: "60vh", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Musical Not Found</h1>
            <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2rem" }}>
              Sorry, we could not find information about this musical.
            </p>
            <Link 
              href="/musical-series"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                backgroundColor: "#000",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px"
              }}
            >
              Back to Musical Series
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
      <main className="main-content" style={{ minHeight: "60vh", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: "2rem", fontSize: "0.95rem", color: "#666" }}>
            <Link href="/musical-series" style={{ color: "#000", textDecoration: "underline" }}>
              Musical Series
            </Link>
            {" > "}
            <span>{musical.title}</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
              {musical.title}
            </h1>
            <div style={{ display: "flex", gap: "1rem", fontSize: "1.1rem", color: "#666" }}>
              <span>{musical.year}</span>
              <span>•</span>
              <span>{musical.genre}</span>
            </div>
            <p style={{ fontSize: "1.15rem", color: "#444", marginTop: "0.5rem" }}>
              Music by {musical.composer}
            </p>
          </div>

          {/* Synopsis */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Synopsis</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", textAlign: "justify" }}>
              {musical.synopsis}
            </p>
          </section>

          {/* Highlights */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Highlights</h2>
            <ul style={{ 
              listStyle: "none", 
              padding: 0,
              display: "grid",
              gap: "0.75rem"
            }}>
              {musical.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  style={{
                    padding: "1rem 1.5rem",
                    backgroundColor: "#f8f8f8",
                    borderLeft: "4px solid #000",
                    fontSize: "1.05rem"
                  }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {/* Awards */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Awards & Recognition</h2>
            <div style={{ 
              display: "grid",
              gap: "0.75rem"
            }}>
              {musical.awards.map((award, index) => (
                <div 
                  key={index}
                  style={{
                    padding: "1rem 1.5rem",
                    backgroundColor: "#fff4e6",
                    borderRadius: "4px",
                    fontSize: "1.05rem"
                  }}
                >
                  🏆 {award}
                </div>
              ))}
            </div>
          </section>

          {/* Back button */}
          <Link 
            href="/musical-series"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px"
            }}
          >
            ← Back to All Musicals
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Generate static params
export async function generateStaticParams() {
  return [
    { id: "hamilton" },
    { id: "phantom-of-the-opera" },
    { id: "les-miserables" },
    { id: "wicked" },
    { id: "cats" },
    { id: "the-lion-king" },
  ];
}
