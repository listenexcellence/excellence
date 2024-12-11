"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Nav from "./component/Nav";

export default function Home() {
  // State to track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode"); // Add class to <html>
  };
  // Update the body's class based on the theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={styles.page}>
      <Nav />
      <div className="mainBody">
        <div className="left">
          <div className="first">
            <div className="time">
              <img src="/img/clock.png" />
              <p className="smallText">1-Dec-2024</p>
            </div>
            <div className="headerexcellence">
              <p className="heading">Hi, I'm Excellence Jephter.</p>
              <div className="tag">
                <div className="time">
                  <img src="/img/pin.png" />
                  <p className="smallText">Remote</p>
                </div>
                <div className="time">
                  <img src="/img/lang.png" />
                  <p className="smallText">English & Yoruba Language</p>
                </div>
              </div>
              <p className="regular">
                I am a certified tech bro, web designer/developer and co-founder
                of <span>TheTrybeCo</span>, a digital agency focused on
                delivering excellence in everything we do.
              </p>
              <div className="flowTags">
                <div className="flow">
                  <img src="/img/tag1.png" />
                  <p className="smallText">web Design</p>
                </div>
                <div className="flow">
                  <img src="/img/tag2.png" />
                  <p className="smallText">Web Dev</p>
                </div>
                <div className="flow">
                  <img src="/img/tag3.png" />
                  <p className="smallText">Mobile Dev</p>
                </div>
                <div className="flow">
                  <img src="/img/tag4.png" />
                  <p className="smallText">Photography</p>
                </div>
                <div className="flow">
                  <img src="/img/tag5.png" />
                  <p className="smallText">HTML5</p>
                </div>
                <div className="flow">
                  <img src="/img/tag6.png" />
                  <p className="smallText">CSS3</p>
                </div>
                <div className="flow">
                  <img src="/img/tag8.png" />
                  <p className="smallText">React</p>
                </div>
                <div className="flow">
                  <img src="/img/tag9.png" />
                  <p className="smallText">Node</p>
                </div>
                <div className="flow">
                  <img src="/img/tag10.png" />
                  <p className="smallText">Figma</p>
                </div>
              </div>
            </div>
            <img className="abs" src="/img/ast.png" />
          </div>
          <Link href="#">
            <div className="second">
              <img alt="profile" src="./img/dsc.png" />
            </div>
          </Link>
          <div className="bottom">
            <p className="testimonies">
              Excellence is a professional developer and excells in everything
              he does.
            </p>
            <div className="testimonialBottom">
              <div className="tesimonialBtnSet">
                <img src="/img/left.png" />
                <img src="/img/right.png" />
              </div>
              <div className="testimonialTextSet">
                <p className="testiName">Ololade</p>
                <p className="testiSub">TheTrybeCo</p>
              </div>
            </div>
          </div>
          <div className="bottom2">
            <p>Supercharge your project *Now*</p>
            <div className="navLinkCon">
              <img alt="nexticon" src="./img/icon.png" />
              <Link className="navLinkContact" href="/Contact">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="third">
            <p className="regular">Featured Projects</p>
            <div className="projectsCon">
              <Link
                href="https://www.thetrybeco.org"
                target="_blank"
                className="projLink"
              >
                <p className="headingProj">TheTrybeCo</p>
                <img alt="vecor arrow" src="/img/vector.png" />
              </Link>
              <div className="projTagsContain">
                <div className="flow">
                  <p className="smallText">HTML5</p>
                </div>
                <div className="flow">
                  <p className="smallText">CSS3</p>
                </div>
                <div className="flow">
                  <p className="smallText">Web Design</p>
                </div>
                <div className="flow">
                  <p className="smallText">ReactJS</p>
                </div>
              </div>
              <img className="projImage" src="/img/law.png" />
            </div>
            <div className="projectsCon">
              <p className="headingProj">Lawverse Magazine</p>
            </div>
            <div className="projectsCon">
              <p className="headingProj">Stasoul Nig Ltd</p>
            </div>
            <div className="projectsCon">
              <p className="headingProj">Emplace College</p>
            </div>
            <Link href="/Projects" className="proj">
              <img src="/img/rightArrow.png" />
              <p className="regular">VIEW MORE PROJECTS</p>
            </Link>
          </div>
          <div className="footer">
            <Link className="navLink" href="#">
              Instagram
            </Link>
            <Link className="navLink" href="#">
              Twitter
            </Link>
            <Link className="navLink" href="#">
              LINKEDIN
            </Link>
            <Link className="navLink" href="#">
              Spotify
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
