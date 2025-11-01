'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import TimelineModal from "../components/TimelineModal";
import VietnamModal from "../components/VietnamModal";
import "../styles/layout.css";
import "../styles/timeLine.css";
import "../styles/vietnamTimeline.css";
import Image from "next/image";
import timeLineBGTop from '../../public/images/timeLineBGTop.png';
import timeLineBG from '../../public/images/timeLineBG.png';
import { useState } from "react";

// Dữ liệu nội dung modal
const timelineContent: Record<string, { title: string; content: string }> = {
  "ancient-renaissance": {
    title: "Ancient Period & Renaissance",
    content: `The origins of modern musical theatre can be traced back to ancient Greece, where stage performances incorporated music through choruses to narrate events and heighten emotional depth. Later, during the Medieval and Renaissance periods, court performances began integrating elements of singing and dance, laying the groundwork for what would eventually become the musical theatre we know today.

  These early performances introduced a new form of storytelling—one in which characters expressed their emotions through music and movement. Over time, musical theatre evolved to reflect the trends of each historical era, adapting its themes, structures, and staging techniques to meet the expectations of diverse audiences. Through this continuous transformation, the art form has come to embody the vibrant, immersive productions we experience in contemporary musical theatre.`
  },
  "19th-century": {
    title: "19th Century",
    content: `The Influence of Opera and Operetta in the 19th Century

  The rise of opera and operetta in the 19th century marked a turning point in the history of musical theatre. Influential composers, including Oscar Hammerstein II, revolutionized storytelling by integrating songs that actively advanced the plot, laying the foundation for modern musical theatre.

  At the same time, French theatre witnessed the emergence of works influenced by opera and dance, where music played a central role in driving dramatic action. Genres such as comic opera and ballad opera served as bridges between traditional opera and stage performance.

  The legacy of comédies-ballets pioneered by Molière also encouraged the fusion of drama and music. Over time, musical theatre developed its own artistic identity, gradually diverging from its operatic roots to establish itself as an independent and ever-evolving genre.

  Vaudeville and Music Hall: The Early Pioneers

  Before modern musical theatre took shape, vaudeville and music hall played a vital role in defining the landscape of stage performance. These forms blended comedy, singing, and spoken dialogue, profoundly influencing the evolution of musical theatre across both the United States and Europe.

  In France, such traditions paved the way for a distinctive style of musical theatre that emphasized elegance in dialogue and stage direction rather than the grandeur of operatic structure. Unlike opera, these productions relied heavily on witty, light-hearted songs that propelled the narrative — a defining characteristic of modern musical theatre.

  As the art form continued to evolve, the essential elements of musical theatre gradually took shape: the integration of spoken dialogue with emotionally expressive musical numbers, forming the foundation for the grand productions that followed.`
  },
  "1920-1950": {
    title: "1920s – 1950s",
    content: `Broadway and the Rise of American Musicals

  By the 1960s, Broadway had established itself as the epicenter of American musical theatre, where music and storytelling intertwined seamlessly, and songs became essential to narrative progression. Influential composers such as Cole Porter, George Gershwin, and Andrew Lloyd Webber introduced distinctive creative styles that continued to shape productions worldwide — including those in Paris.

  With increasingly ambitious and large-scale productions, Broadway and London's West End became the gold standards of stage art. Works like West Side Story and My Fair Lady redefined the genre, placing song and choreography at the heart of storytelling.

  Over time, these masterpieces have been adapted to resonate with contemporary audiences, ensuring that Broadway musicals and American cultural influence continue to hold a dominant position on the global stage. Whether in New York or London, musical theatre shines on — captivating audiences around the world.

  The Great Figures of Musical Theatre (Rodgers & Hammerstein, Gene Kelly, and More)

  Icons such as Gene Kelly, Rodgers & Hammerstein, and Richard Cocciante left an indelible mark on the history of musical theatre, shaping its evolution through artistic innovation and narrative transformation. The groundbreaking works of Rodgers & Hammerstein introduced a new approach, in which songs served as a seamless vehicle for storytelling — a technique that remains central to musical theatre today.

  Other influential figures, including Jay Lerner and Frederick Loewe, created timeless masterpieces such as My Fair Lady, which continues to stand as a cultural milestone across generations. Their contributions, deeply rooted in popular music and intertwined with American musical traditions, helped redefine the genre entirely.

  Celebrated with prestigious awards in both Broadway and Hollywood, their legacy continues to inspire and propel the evolution of musical theatre on a global scale.`
  },
  "1960-1980": {
    title: "1960s - 1980s",
    content: `From the 1960s onward, musical theatre underwent profound transformations, embracing new musical styles and expanding in both scale and ambition. From Broadway masterpieces to French adaptations, the genre continued to evolve, constantly reinventing itself to sustain its appeal to contemporary audiences.

  From the Rock Revolution to the Blockbusters of the 1980s

  With the rise of rock and pop music, productions such as Hair and Jesus Christ Superstar broke away from the traditional conventions of musical theatre. By the 1980s, visionary creators like Andrew Lloyd Webber introduced grand-scale productions that became global phenomena — most notably Les Misérables, a work that redefined storytelling in the world of musicals.

  Guided by the music of Claude-Michel Schönberg, this landmark production reshaped the landscape of musical theatre, reigniting the epic, historical narrative form on stage. Its resounding success paved the way for other ambitious works that combined sweeping orchestration with deeply emotional storytelling — leaving an enduring influence that continues to inspire new generations of creators.`
  },
  "2000-now": {
    title: "2000s - Present",
    content: `Globalization of the Genre and Emerging Influences

  Musical theatre has expanded far beyond the United States and the United Kingdom, embracing a diverse range of influences from around the world. Productions such as Notre-Dame de Paris and French adaptations of popular films into stage musicals have enriched and diversified the art form, introducing new storytelling techniques and artistic styles.

  Drawing inspiration from the Anglo-Saxon tradition of musical theatre, these works restructure narratives by placing music at the core of dramatic progression. The emergence of sound cinema in the 20th century also contributed to the genre's growing international appeal, influencing both stagecraft and performance techniques.

  Today, dramatic musical theatre has become a widely embraced form, harmonizing theatrical intensity with powerful musical composition—affirming the genre's enduring and truly global resonance.`
  }
};

// Dữ liệu Vietnam Timeline
const vietnamTimelineData: Record<string, {
  title: string;
  yearRange: string;
  content: string;
  composers?: { name: string; work: string; avatar?: string }[];
}> = {
  "vn-phase-1": {
    title: "Phase 1: Introduction and Colonial Influence",
    yearRange: "Late 19th Century",
    content: `Opera was introduced to Vietnam during the French colonial period, primarily serving the French community and the local elite as part of the colonial mission of "civilizing." Major opera houses such as the Saigon Opera House (1897), the Hai Phong Opera House (1912), and the Hanoi Opera House (1911) were constructed to stage European operas. This was a largely passive period, during which Vietnamese people participated mainly as spectators or minor performers, with no local composers or original works emerging at the time.

Key milestones:

1864: The first opera performed in Saigon was Les deux aveugles (The Two Blind Men) by Jacques Offenbach.

1895: French composer Camille Saint-Saëns visited Saigon.

1932: The San Carlo Opera Company from the United States toured in Saigon and Hanoi.`
  },
  "vn-phase-2": {
    title: "Phase 2: Localization and Revolutionary Themes",
    yearRange: "1945 - 1975",
    content: `After the August Revolution of 1945, opera in Vietnam began to localize, merging with traditional "ca cảnh" (musical scenes) and "ca kịch" (musical plays) to serve revolutionary propaganda during the resistance wars. This period marked the birth of Vietnamese opera as an indigenous art form, culminating in the establishment of the Vietnam National Opera and Ballet (VNOB) in 1959. The works of this era primarily focused on themes of revolution and patriotism, blending bel canto vocal techniques with traditional folk melodies.

Key milestones:

1954–1975: Development of ca cảnh and ca kịch in the North; performances of foreign operas such as Evgeny Onegin (1961).

1965: The first Vietnamese opera, Cô Sao (Miss Sao) by Đỗ Nhuận, was staged in the classical Western form and scale, premiering in 1965 to celebrate the 20th anniversary of Vietnam's National Day, featuring over 150 musicians and performers.

1967: Bông Sen (The Lotus) was adapted into a musical scene due to wartime constraints.

Notable composers and works:

Đỗ Nhuận: Cô Sao — a three-act opera about a young Thái ethnic woman's journey toward revolutionary enlightenment.

Hoàng Việt: Bông Sen — a one-act opera centered on rural life.

Nhật Lai: Bên bờ Krông Pa (By the Krông Pa River) — a three-act opera depicting the Southern uprisings.

Challenges: The development of opera during this period was hindered by war disruptions and a lack of infrastructure. While the North focused on revolutionary themes, the South experimented with more diverse forms but was heavily influenced by American culture.`,
    composers: [
      { name: "Đỗ Nhuận", work: "Cô Sao (a three-act opera about a young Thái ethnic woman's journey)", avatar: "/images/composers/vietnam/do-nhuan.jpg" },
      { name: "Hoàng Việt", work: "Bông Sen (a one-act opera centered on rural life)", avatar: "/images/composers/vietnam/hoang-viet.jpg" },
      { name: "Nhật Lai", work: "Bên bờ Krông Pa (a three-act opera depicting the Southern uprisings)", avatar: "/images/composers/vietnam/nhat-lai.jpg" }
    ]
  },
  "vn-phase-3": {
    title: "Phase 3: Post-Reunification",
    yearRange: "1975 - 2000",
    content: `After national reunification in 1975, Vietnamese opera experienced a modest revival with international support — notably, the French-assisted restoration of the Hanoi Opera House. However, new compositions declined due to high production costs and a growing preference for staging foreign classics. This period was marked by reduced creative output and fewer original works.

Key milestones:

1978: Mỵ Châu – Trọng Thủy by Nguyễn Thiên Đạo, the first Vietnamese opera to gain international recognition.

1982: Nguyễn Trãi ở Đông Quan (Nguyễn Trãi in Đông Quan) by Đỗ Nhuận.

1990s: Support from Sweden and the British Council enabled performances of foreign operas in Vietnam.

Challenges: A lack of original compositions, limited audiences, and competition from popular music contributed to the genre's stagnation.

Characteristics: The focus shifted toward restoration and performance of classical works by composers such as Mozart and Bizet.`
  },
  "vn-phase-4": {
    title: "Phase 4: International Integration",
    yearRange: "2000 - 2010",
    content: `This period emphasizes international collaboration, inviting foreign directors, staging classical works, and reviving older Vietnamese operas. Musical theatre also began to emerge in Vietnam during this time, though its growth remained uneven.

Key milestones:

2005: Đất nước đứng lên (The Country Rises) by An Thuyên.

2006: A large-scale production of Mozart's The Magic Flute.

2009: Người giữ cồn (The Keeper of the Sandbar) by Ca Lê Thuần.

Challenges: A shortage of versatile opera singers, high production costs, and the absence of specialized training institutions hindered development.

Characteristics: Vietnamese opera increasingly learned from foreign experts while beginning the process of localization and adaptation to domestic audiences.`
  },
  "vn-phase-5": {
    title: "Phase 5: Contemporary Era",
    yearRange: "2010 - Present",
    content: `In recent years, Vietnamese opera and musical theatre have experienced a vibrant revival, marked by improved production quality and stylistic diversity—from classical opera to Broadway-inspired musicals. The genre has increasingly appealed to younger audiences through contemporary elements such as pop, rock, and even K-pop influences. Recent productions have achieved notable success at the 2024 National Music and Dance Festival, including Giấc mơ Chí Phèo (Chí Phèo's Dream) and a Vietnamese version of Carmen. The Vietnam National Opera and Ballet (VNOB), along with institutions such as the Thăng Long Music and Dance Theatre, have led this movement with fully live performances and international collaborations.

Key milestones:

2012: Revival of Cô Sao (Miss Sao).

2013: Lá đỏ (The Red Leaf) by Đỗ Hồng Quân.

2016: Premiere of Lá đỏ, marking Vietnam's first new opera in 40 years.

2022: Công nữ Anio (Princess Anio) by Trần Mạnh Hùng.

2024: National Festival featuring seven new musicals, including Vầng trăng Điện Biên (The Điện Biên Moon) by Đỗ Hồng Quân.

2025: Giấc mơ Chí Phèo premieres widely across Vietnam.

Notable composers and productions:

Đỗ Hồng Quân: Lá đỏ (2013), Vầng trăng Điện Biên (2024).

Doãn Nho: Bài ca tình yêu (Song of Love, 2014).

Trần Mạnh Hùng: Công nữ Anio (2022).

Dương Cầm: Giấc mơ Chí Phèo (2024) — a Broadway-style musical blending ballad, pop, and contemporary theatre, winner of the "Best Performance" award.

Đỗ Bảo: Khát vọng đỏ (Red Aspiration, 2024) — a multi-genre production honoring the Vietnamese People's Army.

Vietnamese adaptations: Carmen (directed by Leung Siu Kwan Cindy, combining tap dance and K-pop elements), La Traviata, and Les Misérables.

Musicals: Shrek the Musical, Zorba – The Detective Cat, and Elsa's Feast.

Challenges: High production costs, a lack of specialized performance venues, and shifting youth entertainment habits remain major obstacles, underscoring the need for stronger institutional investment.

Characteristics: This new era is defined by international collaboration—with directors from Hong Kong and France—combined with a distinctly Vietnamese identity, rooted in literature and history. Modern staging and music have made opera and musical theatre more vivid, relatable, and emotionally resonant, as highlighted in recent media coverage.`
  }
};

export default function TimelinePage() {
  const [selectedTimeline, setSelectedTimeline] = useState<"world" | "vietnam">("world");
  const [worldModalOpen, setWorldModalOpen] = useState(false);
  const [vietnamModalOpen, setVietnamModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  const handleEventClick = (eventKey: string) => {
    setSelectedEvent(eventKey);
    if (selectedTimeline === "world") {
      setWorldModalOpen(true);
    } else {
      setVietnamModalOpen(true);
    }
  };

  const closeWorldModal = () => {
    setWorldModalOpen(false);
    setSelectedEvent("");
  };

  const closeVietnamModal = () => {
    setVietnamModalOpen(false);
    setSelectedEvent("");
  };

  return (
    <div>
      <Header />
      <main className="timeline-container" style={{ minHeight: "60vh", padding: "4rem 2rem" }}>
        <div className="timeline-content" style={{ maxWidth: "1440px", margin: "0 auto", textAlign: "center" }} >
          <div className="timeline-header">
            <Image
              src={timeLineBGTop}
              alt="Timeline Background Top"
              className="timeLineBgTop"
            />
            <div className="timeline-nav">
              <button onClick={() => setSelectedTimeline("world")}>
                <p className={`nav-item ${selectedTimeline === "world" ? "active" : ""}`}>
                  WORLD
                </p>
              </button>
              <button onClick={() => setSelectedTimeline("vietnam")}>
                <p className={`nav-item ${selectedTimeline === "vietnam" ? "active" : ""}`}>
                  VIETNAM
                </p>
              </button>
            </div>
          </div>
          <div className="timeline">
            {/* Nội dung timeline dựa theo selection */}
            <div className="timeline-events">
              {selectedTimeline === "world" ? (
                <div className="world-timeline">
                  {/* World timeline content sẽ được thêm ở đây */}
                  <Image
                    src={timeLineBG}
                    alt="Timeline Background"
                    className="timeLineBgBottom"
                  />
                  <div className="threadtime" style={{ '--quantity': 5 } as React.CSSProperties}>
                    <div
                      className="circle"
                      style={{ '--position': 1 } as React.CSSProperties}
                      onClick={() => handleEventClick("ancient-renaissance")}
                    >
                      <p className="circle-number">1</p>
                      <p className="circle-title-1l">Ancient Period</p>
                      <p className="circle-title-1r">Renaissance</p>
                      <p className="circle-description circle-description-1l">Greek and Roman Theatre</p>
                      <p className="circle-description circle-description-1r">Court Performances and the First Sung Plays</p>
                    </div>
                    <div
                      className="circle"
                      style={{ '--position': 2 } as React.CSSProperties}
                      onClick={() => handleEventClick("19th-century")}
                    >
                      <p className="circle-number">2</p>
                      <p className="circle-title">19th Century</p>
                      <p className="circle-description">Opera, operetta and vaudeville</p>
                    </div>
                    <div
                      className="circle"
                      style={{ '--position': 3 } as React.CSSProperties}
                      onClick={() => handleEventClick("1920-1950")}
                    >
                      <p className="circle-number">3</p>
                      <p className="circle-title">1920 - 1950</p>
                    </div>
                    <div
                      className="circle"
                      style={{ '--position': 4 } as React.CSSProperties}
                      onClick={() => handleEventClick("1960-1980")}
                    >
                      <p className="circle-number">4</p>
                      <p className="circle-title">1960 - 1980</p>
                    </div>
                    <div
                      className="circle"
                      style={{ '--position': 5 } as React.CSSProperties}
                      onClick={() => handleEventClick("2000-now")}
                    >
                      <p className="circle-number">5</p>
                      <p className="circle-title">2000 - now</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="vietnam-timeline-container">
                  {/* Vertical Line */}
                  <div className="vietnam-timeline-line"></div>

                  {/* Phase 1 */}
                  <div className="vietnam-timeline-item" onClick={() => handleEventClick("vn-phase-1")}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-item-content">
                      <h3 className="timeline-phase-title">Phase 1: Introduction and Colonial Influence</h3>
                      <p className="timeline-year-range">Late 19th Century</p>
                      <p className="timeline-preview">
                        Opera was introduced to Vietnam during the French colonial period, primarily serving the French community and the local elite...
                      </p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="vietnam-timeline-item" onClick={() => handleEventClick("vn-phase-2")}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-item-content">
                      <h3 className="timeline-phase-title">Phase 2: Localization and Revolutionary Themes</h3>
                      <p className="timeline-year-range">1945 - 1975</p>
                      <p className="timeline-preview">
                        After the August Revolution of 1945, opera in Vietnam began to localize, merging with traditional &quot;ca cảnh&quot; and &quot;ca kịch&quot;...
                      </p>
                      {vietnamTimelineData["vn-phase-2"].composers && (
                        <div className="timeline-composers">
                          <p className="timeline-composers-title">Notable Composers:</p>
                          {vietnamTimelineData["vn-phase-2"].composers?.map((composer, idx) => (
                            <div key={idx} className="composer-item">
                              {composer.avatar && (
                                <Image
                                  src={composer.avatar}
                                  alt={composer.name}
                                  width={50}
                                  height={50}
                                  className="composer-avatar"
                                />
                              )}
                              <div className="composer-info">
                                <p className="composer-name">{composer.name}</p>
                                <p className="composer-work">{composer.work}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="vietnam-timeline-item" onClick={() => handleEventClick("vn-phase-3")}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-item-content">
                      <h3 className="timeline-phase-title">Phase 3: Post-Reunification</h3>
                      <p className="timeline-year-range">1975 - 2000</p>
                      <p className="timeline-preview">
                        After national reunification in 1975, Vietnamese opera experienced a modest revival with international support...
                      </p>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="vietnam-timeline-item" onClick={() => handleEventClick("vn-phase-4")}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-item-content">
                      <h3 className="timeline-phase-title">Phase 4: International Integration</h3>
                      <p className="timeline-year-range">2000 - 2010</p>
                      <p className="timeline-preview">
                        This period emphasizes international collaboration, inviting foreign directors, staging classical works...
                      </p>
                    </div>
                  </div>

                  {/* Phase 5 */}
                  <div className="vietnam-timeline-item" onClick={() => handleEventClick("vn-phase-5")}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-item-content">
                      <h3 className="timeline-phase-title">Phase 5: Contemporary Era</h3>
                      <p className="timeline-year-range">2010 - Present</p>
                      <p className="timeline-preview">
                        In recent years, Vietnamese opera and musical theatre have experienced a vibrant revival, marked by improved production quality...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* World Timeline Modal */}
      <TimelineModal
        isOpen={worldModalOpen}
        onClose={closeWorldModal}
        title={
          selectedEvent && timelineContent[selectedEvent]
            ? timelineContent[selectedEvent].title
            : ""
        }
        content={
          selectedEvent && timelineContent[selectedEvent]
            ? timelineContent[selectedEvent].content
            : ""
        }
      />

      {/* Vietnam Timeline Modal */}
      <VietnamModal
        isOpen={vietnamModalOpen}
        onClose={closeVietnamModal}
        title={
          selectedEvent && vietnamTimelineData[selectedEvent]
            ? vietnamTimelineData[selectedEvent].title
            : ""
        }
        yearRange={
          selectedEvent && vietnamTimelineData[selectedEvent]
            ? vietnamTimelineData[selectedEvent].yearRange
            : ""
        }
        content={
          selectedEvent && vietnamTimelineData[selectedEvent]
            ? vietnamTimelineData[selectedEvent].content
            : ""
        }
      />
    </div>
  );
}
