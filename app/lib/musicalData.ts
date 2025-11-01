// Interface cho Musical Era/Genre (thay vì từng vở kịch riêng lẻ)
export interface MusicalEra {
  id: string;
  title: string;
  period: string; // Khoảng thời gian (e.g., "1850-1914")
  poster: string; // Đường dẫn đến poster/thumbnail
  characteristics: string; // Đặc trưng của thời kỳ
  vocalTechniques: string; // Kỹ thuật thanh nhạc
  representativeWorks: RepresentativeWork[]; // Danh sách tác phẩm tiêu biểu với ảnh
  overview?: string; // Tổng quan ngắn gọn
}

// Representative Works với ảnh chi tiết
export interface RepresentativeWork {
  title: string;
  image: string;
  year?: string;
}

export const musicalEras: MusicalEra[] = [
  {
    id: "operetta",
    title: "Operetta",
    period: "1850 - 1914 (continuing into the 1930s)",
    poster: "/images/musical-eras/operetta.jpg",
    overview:
      "As a direct descendant of opera, operettas focused primarily on vocal performance rather than plot or acting.",
    characteristics:
      "As a direct descendant of opera, most operettas focused primarily on vocal performance rather than plot or acting.",
    vocalTechniques: `Vocal techniques:
- Employed the traditional bel canto style of opera, featuring strong and frequent vibrato.
- Often performed using a "Mid-Atlantic" or British-English vocal accent.`,
    representativeWorks: [
      {
        title: "The Mikado",
        image: "/images/works/the-mikado.jpg",
        year: "1885",
      },
      {
        title: "H.M.S. Pinafore",
        image: "/images/works/hms-pinafore.jpg",
        year: "1878",
      },
      {
        title: "The Pirates of Penzance",
        image: "/images/works/pirates-of-penzance.jpg",
        year: "1879",
      },
    ],
  },
  {
    id: "jazz-age-early-musical",
    title: "Jazz Age / Early Musical Theatre Comedy",
    period: "1900s - 1940s",
    poster: "/images/musical-eras/jazz-age.jpg",
    overview:
      "Closely associated with the Jazz Age and the exuberant 1920s, this period's musicals often centered on themes of youthful romance and optimism.",
    characteristics:
      "Closely associated with the Jazz Age and the exuberant 1920s, this period's musicals often centered on themes of youthful romance and optimism. By the late 1930s, more nuanced and metaphorical depictions of sensuality began to emerge in lyrics and staging.",
    vocalTechniques: `Vocal Techniques:
- Featured a bright, brassy timbre with forward resonance, employing the twang technique.
- Introduced the assertive belt style — a powerful, speech-like mode of singing.
- Maintained vibrato, though often used in the crooner style, sustaining a straight tone before adding a gentle vibrato.
- Emphasized clear diction, as witty, fast-paced lyrics required audiences to catch every word.
- Typically sung with a New York accent, unless a role demanded a different dialect.
- Began experimenting with syncopation, shifting rhythmic emphasis to create energy and drive in phrasing.`,
    representativeWorks: [
      { title: "Kismet", image: "/images/works/kismet.jpg" },
      {
        title: "The Boys from Syracuse",
        image: "/images/works/boys-from-syracuse.jpg",
      },
      { title: "Street Scene", image: "/images/works/street-scene.jpg" },
      { title: "Babes in Arms", image: "/images/works/babes-in-arms.jpg" },
      {
        title: "Show Boat",
        image: "/images/works/show-boat.jpg",
        year: "1927",
      },
      { title: "A Star is Born", image: "/images/works/star-is-born.jpg" },
    ],
  },
  {
    id: "golden-age",
    title: "Golden Age Musicals",
    period: "1943 - 1960s",
    poster: "/images/musical-eras/golden-age.jpg",
    overview:
      "Broadway's Golden Age, characterized by sophisticated integration of music, lyrics, and book.",
    characteristics:
      "Closely tied to the Jazz Age and the exuberant 1920s, these musicals often explored themes of youthful romance and urban vitality. By the late 1930s, subtle sensuality and metaphorical innuendo began to appear in the storytelling and lyrics.",
    vocalTechniques: `Vocal Techniques:
- Featured a bright, brassy tone with forward resonance, utilizing the twang technique.
- Adopted the powerful belt style of singing, characterized by a shouting-like intensity.
- Retained vibrato but often applied it in the crooner style—singing straight tones before adding gentle oscillation.
- Clear diction was crucial, as witty lyrics required precise articulation for audience comprehension.
- Typically performed with an American New York accent, unless the role demanded otherwise.
- Syncopation—the deliberate shifting of rhythmic emphasis—became a defining stylistic feature in phrasing and delivery.`,
    representativeWorks: [
      { title: "Oklahoma!", image: "/images/works/oklahoma.jpg", year: "1943" },
      { title: "Carousel", image: "/images/works/carousel.jpg", year: "1945" },
      {
        title: "South Pacific",
        image: "/images/works/south-pacific.jpg",
        year: "1949",
      },
      {
        title: "The King and I",
        image: "/images/works/king-and-i.jpg",
        year: "1951",
      },
      {
        title: "My Fair Lady",
        image: "/images/works/my-fair-lady.jpg",
        year: "1956",
      },
      {
        title: "West Side Story",
        image: "/images/works/west-side-story.jpg",
        year: "1957",
      },
    ],
  },
  {
    id: "classic-musicals",
    title: "Classic Musicals (Transitional Era)",
    period: "1960s - 1970s",
    poster: "/images/musical-eras/classic-musicals.jpg",
    overview:
      "Broadway's Transitional Era shaped by the Vietnam War and British Invasion, featuring lighter themes and technological innovations.",
    characteristics: `The period was profoundly shaped by the Vietnam War and the rise of the British Invasion in pop music, both of which heavily influenced the sound and themes of musical theatre.

A major milestone came with Hello, Dolly! (1964) — the first musical to use body-mounted microphones for vocal amplification. This innovation fundamentally changed vocal requirements, as singers no longer needed the powerful projection demanded in earlier decades.

Musicals of this era adopted lighter themes, catchier melodies, and recurring refrains that established musical motifs for individual characters — a hallmark of composer Jerry Herman.`,
    vocalTechniques: `Vocal Techniques:
- Returned to the bright, energetic tone of the Jazz Age, with more open vowels.
- Still grounded in classical technique, yet featuring more conversational articulation.
- Incorporated elements of pop and rock singing, as heard in Hair and Jesus Christ Superstar.
- Used delayed vibrato, typically applied only to sustained notes.
- The Standard American English accent remained the default vocal norm.
- Emphasized clean, logical phrasing over overt emotional display.`,
    representativeWorks: [
      { title: "Annie", image: "/images/works/annie.jpg", year: "1977" },
      {
        title: "Fiddler on the Roof",
        image: "/images/works/fiddler-on-the-roof.jpg",
        year: "1964",
      },
      {
        title: "She Loves Me",
        image: "/images/works/she-loves-me.jpg",
        year: "1963",
      },
      { title: "Pippin", image: "/images/works/pippin.jpg", year: "1972" },
      {
        title: "Hello, Dolly!",
        image: "/images/works/hello-dolly.jpg",
        year: "1964",
      },
      {
        title: "Bye Bye Birdie",
        image: "/images/works/bye-bye-birdie.jpg",
        year: "1960",
      },
      { title: "Chicago", image: "/images/works/chicago.jpg", year: "1975" },
      {
        title: "A Chorus Line",
        image: "/images/works/chorus-line.jpg",
        year: "1975",
      },
      {
        title: "Funny Girl",
        image: "/images/works/funny-girl.jpg",
        year: "1964",
      },
      { title: "Oliver!", image: "/images/works/oliver.jpg", year: "1960" },
    ],
  },
  {
    id: "pop-rock-opera",
    title: "Pop / Rock Operas (Poperetta)",
    period: "1970s - 1990s (especially 1980s - 1990s)",
    poster: "/images/musical-eras/pop-rock-opera.jpg",
    overview:
      "The Mega-Musical Era combining epic opera scale with contemporary pop/rock orchestration.",
    characteristics: `Combined the epic scale of opera with the contemporary orchestration of pop and rock music.

Productions from this era were often emotionally intense and densely arranged, sometimes criticized as being overly grand or melodramatic in performance style.

While rooted in truthful acting, performances were frequently heightened and stylized to match the scale of the material.`,
    vocalTechniques: `Vocal Techniques:
- Retained classical vowel shaping while allowing greater flexibility in belting passages.
- Developed a hybrid tone — forward and bright like pop/rock, yet darker and more resonant, reminiscent of the Golden Age and operatic timbres.
- Typically performed by classically trained singers, though never sung strictly in an operatic style.
- Vibrato mirrored that of the Golden Age: delayed onset but rich in resonance and warmth.
- Often employed a British vowel coloration with American consonants, reflecting the strong influence of West End productions.
- Introduced a new phrasing aesthetic: back phrasing and front phrasing became expressive conventions, and cast recordings were often regarded as performance benchmarks rather than the written score itself.`,
    representativeWorks: [
      {
        title: "Les Misérables",
        image: "/images/works/les-miserables.jpg",
        year: "1985",
      },
      {
        title: "Miss Saigon",
        image: "/images/works/miss-saigon.jpg",
        year: "1989",
      },
      {
        title: "The Phantom of the Opera",
        image: "/images/works/phantom.jpg",
        year: "1986",
      },
      { title: "Cats", image: "/images/works/cat.jpg", year: "1981" },
      {
        title: "Jesus Christ Superstar",
        image: "/images/works/jesus-christ-superstar.jpg",
        year: "1971",
      },
      {
        title: "Jekyll & Hyde",
        image: "/images/works/jekyll-hyde.jpg",
        year: "1997",
      },
      {
        title: "The Secret Garden",
        image: "/images/works/secret-garden.jpg",
        year: "1991",
      },
      { title: "Rent", image: "/images/works/rent.jpg", year: "1996" },
      { title: "Ragtime", image: "/images/works/ragtime.jpg", year: "1998" },
      {
        title: "Into the Woods",
        image: "/images/works/into-the-woods.jpg",
        year: "1987",
      },
      {
        title: "Sweeney Todd",
        image: "/images/works/sweeney-todd.jpg",
        year: "1979",
      },
      { title: "Chess", image: "/images/works/chess.jpg", year: "1984" },
    ],
  },
  {
    id: "contemporary",
    title: "Contemporary Musicals",
    period: "1990s - Present",
    poster: "/images/musical-eras/contemporary.jpg",
    overview:
      "Modern era featuring diverse styles, from hip-hop to indie rock, with innovative storytelling approaches.",
    characteristics: `The contemporary era represents the most diverse period in musical theatre history, incorporating hip-hop (Hamilton), indie rock (Dear Evan Hansen), electronic music, and experimental formats.

This period emphasizes authentic storytelling, diverse representation, and breaking traditional boundaries between musical genres and theatrical conventions.`,
    vocalTechniques: `Vocal Techniques:
- Highly varied, depending on the specific show's style and requirements.
- Embraces "authentic" pop/rock singing without classical foundation in many cases.
- Mix technique (blending chest and head voice) becomes standard.
- Contemporary commercial music (CCM) vocal styles dominate.
- Emphasis on emotional authenticity over technical perfection.
- Incorporation of rap, spoken word, and conversational singing.`,
    representativeWorks: [
      { title: "Hamilton", image: "/images/works/hamilton.jpg", year: "2015" },
      {
        title: "Dear Evan Hansen",
        image: "/images/works/dear-evan-hansen.jpg",
        year: "2016",
      },
      {
        title: "Spring Awakening",
        image: "/images/works/spring-awakening.jpg",
        year: "2006",
      },
      {
        title: "Next to Normal",
        image: "/images/works/next-to-normal.jpg",
        year: "2008",
      },
      {
        title: "The Book of Mormon",
        image: "/images/works/book-of-mormon.jpg",
        year: "2011",
      },
      {
        title: "Hadestown",
        image: "/images/works/hadestown.jpg",
        year: "2019",
      },
      { title: "Six", image: "/images/works/six.jpg", year: "2017" },
      {
        title: "Come From Away",
        image: "/images/works/come-from-away.jpg",
        year: "2017",
      },
    ],
  },
  {
    id: "jukebox",
    title: "Jukebox Musicals",
    period: "2001 - Present",
    poster: "/images/musical-eras/jukebox.jpg",
    overview:
      "Musicals built around pre-existing popular songs, following the model established by Mamma Mia!",
    characteristics: `Built upon a model that first appeared during the eras of Porter, Berlin, and Gershwin—constructing musicals around pre-existing popular songs rather than original scores.

The first major success of this format was Mamma Mia! (London, 1999; Broadway, 2001), which established the "jukebox musical" as a globally popular form.`,
    vocalTechniques: `Vocal Techniques:
- Largely dependent on the style of the original recording artists whose songs are featured.
- In bio-musicals (biographical musicals), performers must closely replicate the original artist's vocal tone and delivery.
- The guiding principle is fidelity to the source style—performers are expected to study and reference the original singers directly to capture the authentic sound.`,
    representativeWorks: [
      {
        title: "Mamma Mia!",
        image: "/images/works/mamma-mia.jpg",
        year: "1999",
      },
      {
        title: "Jersey Boys",
        image: "/images/works/jersey-boys.jpg",
        year: "2005",
      },
      {
        title: "Beautiful: The Carole King Musical",
        image: "/images/works/beautiful.jpg",
        year: "2013",
      },
      {
        title: "Rock of Ages",
        image: "/images/works/rock-of-ages.jpg",
        year: "2009",
      },
      {
        title: "Motown: The Musical",
        image: "/images/works/motown.jpg",
        year: "2013",
      },
      {
        title: "On Your Feet!",
        image: "/images/works/on-your-feet.jpg",
        year: "2015",
      },
      {
        title: "Jagged Little Pill",
        image: "/images/works/jagged-little-pill.jpg",
        year: "2019",
      },
    ],
  },
  {
    id: "disney-family",
    title: "Disney and Family-Friendly Musicals",
    period: "1994 - Present",
    poster: "/images/musical-eras/disney.jpg",
    overview:
      "Broadway adaptations of beloved Disney films and family-oriented spectacles celebrating energy and entertainment.",
    characteristics: `This era encompasses not only Disney's Broadway productions but also a wider range of family-oriented musicals celebrated for their energy, spectacle, and entertainment value.

The Disney Renaissance (1990s–2000s) marked a new trend: Disney began hiring Broadway performers to voice animated film characters, later adapting those films into full-scale stage musicals.

The goal was to give audiences the chance to see and hear familiar stories and songs from beloved films—now transformed into grander, more theatrical experiences.`,
    vocalTechniques: `Vocal Techniques:
- Both the music and vibrato often replicate the original film versions to preserve a sense of familiarity.
- Lead roles are frequently transposed into higher keys or rewritten with new climactic passages to create a standout "showstopper" moment.
- Supporting roles often employ character voices—bright, animated tones with a playful quality—commonly utilizing the twang technique.`,
    representativeWorks: [
      {
        title: "Beauty and the Beast",
        image: "/images/works/beauty-and-the-beast.jpg",
        year: "1994",
      },
      {
        title: "The Lion King",
        image: "/images/works/lion-king.jpg",
        year: "1997",
      },
      { title: "Newsies", image: "/images/works/newsies.jpg", year: "2012" },
      { title: "Aladdin", image: "/images/works/aladdin.jpg", year: "2014" },
      {
        title: "Shrek the Musical",
        image: "/images/works/shrek.jpg",
        year: "2008",
      },
      {
        title: "You're a Good Man, Charlie Brown",
        image: "/images/works/charlie-brown.jpg",
        year: "1967",
      },
    ],
  },
];

// Helper functions cho Musical Eras
export function getMusicalEraById(id: string): MusicalEra | undefined {
  return musicalEras.find((era) => era.id === id);
}

export function getAllMusicalEras(): MusicalEra[] {
  return musicalEras;
}

// Backward compatibility
export type Musical = MusicalEra;
export const musicals = musicalEras;
export const getMusicalById = getMusicalEraById;
export const getAllMusicals = getAllMusicalEras;
