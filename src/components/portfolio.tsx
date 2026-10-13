import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import texture from "@/assets/graphite-background.jpg";
import signature from "@/assets/sriyaan-original.asset.json";

export const companies = ["Trusting Social", "Documatic", "Vestlane", "Autonomous", "Genetica"];

function RevealText({ text }: { text: string }) {
  return <span className="text-reveal" aria-label={text}>{Array.from(text).map((character, index) => <span className="text-reveal-character" aria-hidden="true" key={index}>{character === " " ? "\u00a0" : character}</span>)}</span>;
}

export function Portfolio({ page = "Home" }: { page?: "Home" | "Projects" | "Archive" }) {
  const [seconds, setSeconds] = useState(23);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds(value => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="portfolio-frame">
      <img className="graphite-texture" src={texture} alt="" width={1792} height={1024} />
      <header className="portfolio-header">
        <div className="companies"><span>Companies:</span><ul>{companies.map(company => <li key={company}>{company}</li>)}</ul></div>
        <div className="about">
          <section className="about-description">
            <h2>About me</h2>
            <p>I'm Sriyaan, a developer working<br className="hidden min-[900px]:block" /> across machine learning, LLMs,<br className="hidden min-[900px]:block" /> and backend infrastructure.</p>
          </section>
          <div className="contact"><p>Based in Ho Chi Minh City,<br />Vietnam<br />Available for freelance work<br />E: <a href="mailto:sriyaan.nda26@gmail.com">sriyaan.nda26@gmail.com</a></p></div>
        </div>
      </header>

      {page === "Home" ? <>
        <div className="explore-control">
          <Button asChild variant="portfolioIcon" className="eye-button" aria-label="Explore projects" title="Explore projects"><Link to="/projects"><Eye strokeWidth={1.25} /></Link></Button>
          <div className="scroll-thread" />
          <span className="scroll-label">SCROLL<br />TO EXPLORE</span>
        </div>
        <section className="signature-cluster" aria-label="Sriyaan">
          <img className="signature" src={signature.url} alt="Sriyaan" width={380} height={125} />
          <span className="interest interest-football">Football</span>
          <span className="interest interest-games">Playing game</span>
          <span className="interest interest-technology">Technology</span>
          <span className="interest interest-collection">Collection</span>
          <span className="interest interest-music">Music</span>
        </section>
      </> : <section className="secondary-page" key={page}><h1><RevealText text={page} /></h1>{companies.map((company, index) => <div className="project-row" key={company}><RevealText text={company} /><span className="project-index">{String(index + 1).padStart(2, "0")}</span></div>)}</section>}

      <footer className="portfolio-footer">
        <div className="footer-left">
          <p className="coordinates">10.8231°N 106.6297°E</p>
          <nav className="page-navigation" aria-label="Main navigation">
            <Button asChild variant={page === "Home" ? "portfolioActive" : "portfolio"}><Link to="/">Home</Link></Button>
            <Button asChild className="portfolio-pill-motion" variant={page === "Projects" ? "portfolioActive" : "portfolio"}><Link to="/projects"><span>Projects</span></Link></Button>
            <Button asChild className="portfolio-pill-motion" variant={page === "Archive" ? "portfolioActive" : "portfolio"}><Link to="/archive"><span>Archive</span></Link></Button>
          </nav>
        </div>
        <div className="social-primary">
          <a className="social-link" href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance">BE</a>
          <a className="social-link" href="https://dribbble.com/" target="_blank" rel="noreferrer" aria-label="Dribbble">DRI</a>
          <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
        <div className="footer-right">
          <time className="elapsed-time" aria-label="Time on page">{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</time>
          <div className="social-secondary"><a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a className="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a></div>
        </div>
      </footer>
    </main>
  );
}