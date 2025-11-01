import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/layout.css'
import './styles/home.css'
import backgroundImage from '../public/images/intro-bg.png';
import representativeImg from '../public/images/representative-works-img.png';

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="main-content">
        <Image
          src={backgroundImage}
          alt="Drama Stage"
          className="main-image"
        />
        <section className="intro-section">
          <h2 className="intro-text">Japanese “Six” Makes West End History</h2>
          <p className="author-name">- By John Doe</p>
        </section>
        <section className="representative-works">
          <div className="representative-works-content">
            <div className="representative-left">
              <Image
                src={representativeImg}
                alt="Representative Work 1"
                className="representative-image"
              />
            </div>
            <div className="representative-right">
              <h2 className="representative-title">Japanese “Six” Makes West End History</h2>
              <p className="representative-description">Recently, the Japanese-language production of Six - the hit musical retelling the stories of Henry VIII’s six wives - officially opened at London’s Vaudeville Theatre, marking the first time a non-English version of a musical has become a resident show in the West End. This moment signals more than a linguistic milestone; it represents a broader movement toward the globalization of musical theatre, where productions are increasingly designed to reach multilingual and multicultural audiences.</p>
              <p className="representative-description">What’s striking is that the entire cast is Japanese, with English surtitles projected for international audiences - creating a fascinating “cross-border adaptation” that bridges not only languages but also cultures. Japanese audiences can now experience Six in their native tongue, while visitors in London witness a reimagined version of a traditionally British musical through a distinctly local lens. This experiment hints at a growing trend: the transformation of musical theatre from a nationally rooted art form into a global medium that both preserves its cultural origins and seeks new audiences abroad.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
