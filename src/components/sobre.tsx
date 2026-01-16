import React, { useState } from 'react';
import selenium from '../../assets/selenium.png';
import cypress from '../../assets/cypress.svg';
import postman from '../../assets/postman.svg';
import jest from '../../assets/jest.jpg';
import cucumber from '../../assets/cucumber.png';
import appium from '../../assets/appium.png';
import insomnia from '../../assets/insomnia.jpg';
import junit from '../../assets/junit.png';
import playwright from '../../assets/playwright.png';

export default function Sobre() {
  const [showAllTech, setShowAllTech] = useState(false);
  const VISIBLE_TECH = 8;

  const techBadges = [
    { alt: 'Git', src: 'https://img.shields.io/badge/Git-E34F26?logo=git&logoColor=white&style=for-the-badge' },
    { alt: 'Node.js', src: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
    { alt: 'React', src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { alt: 'TypeScript', src: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
    { alt: 'JavaScript', src: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { alt: 'HTML5', src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { alt: 'CSS3', src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { alt: 'TailwindCSS', src: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { alt: 'Bootstrap', src: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { alt: 'Java', src: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
    { alt: 'Spring Boot', src: 'https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white' },
    { alt: 'Maven', src: 'https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white' },
    { alt: 'Gradle', src: 'https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white' },
    { alt: 'SQL Server', src: 'https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?logo=microsoft-sql-server&logoColor=white&style=for-the-badge' },
    { alt: 'PostgreSQL', src: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
    { alt: 'Oracle', src: 'https://img.shields.io/badge/-Oracle%20Database-F80000?logo=oracle&logoColor=white&style=for-the-badge' },
    { alt: 'Miro', src: 'https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=miro&logoColor=FFD02F' },
    { alt: 'Figma', src: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
  ];

  const badgeStyle = { ['--badge-count']: String(techBadges.length) } as React.CSSProperties;

  return (
    <>
    <section id="sobre" className="card sobre">
      <p>
        Atuo como <b>Analista de QA</b> e tenho experiência com testes manuais e
        automatizados, levantamento de requisito e elaboração de cenários com
        BDD. Além disso, possuo pós graduação em <b>Gestão da Qualidade</b> e
        background em <b>desenvolvimento full stack</b>.
      </p>
      </section>
      <section className="card sobre sobre-tech">
      <h2>Ferramentas e tecnologias de testes</h2>
        <div className="tools-badges">
          <div className="badge">
            <img alt="Playwright" src={playwright} />
          </div>
          <div className="badge">
            <img alt="Selenium" src={selenium} />
          </div>
          <div className="badge">
            <img alt="Cypress" src={cypress} />
          </div>
          <div className='badge'>
            <img alt="Appium" src={appium} />
          </div>
          <div className="badge">
            <img alt="Cucumber" src={cucumber} />
          </div>
          <div className="badge">
            <img alt="Jest" src={jest} />
          </div>
          <div className="badge">
            <img alt="Junit" src={junit} />
          </div>
          <div className="badge">
            <img alt="Postman" src={postman} />
          </div>
          {/* <div className="badge">
            <img alt="Insomnia" src={insomnia} />
          </div> */}
        </div>
        {showAllTech && <h3>Demais ferramentas e tecnologias</h3>}
        <div
          className={`badges ${showAllTech ? 'expanded' : 'collapsed'}` }
          style={badgeStyle}
        >
          {techBadges.map((b, i) => (
            <div
              key={b.alt}
              className={`badge ${i >= VISIBLE_TECH ? 'extra' : ''} ${!showAllTech && i >= VISIBLE_TECH ? 'hidden' : ''}`}>
              <img alt={b.alt} src={b.src} />
            </div>
          ))}
        </div>
        <div className="badges-controls">
          <button
            type="button"
            className="badges-toggle btn"
            aria-expanded={showAllTech}
            onClick={() => setShowAllTech((s) => !s)}
          >
            <span className="btn-text">{showAllTech ? 'Ver menos' : 'Ver mais'}</span>
            <span className="btn-icon" aria-hidden="true">▾</span>
          </button>
        </div>
    </section>
    </>
  );
}
