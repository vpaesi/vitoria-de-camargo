export default function FloatingHire() {
  return (
    <div className="floating-hire">
      <a
        className="hire-link"
        href="https://www.linkedin.com/in/vpaesi/"
        target="_blank"
        rel="noreferrer"
        aria-label="Contrate - Quality Assurance"
      >
        <svg className="hire-svg" viewBox="0 0 100 100" role="img" aria-hidden="true">
          <defs>
            <path id="text-circle" d="M50,50 m0,-40 a40,40 0 1,1 -0.1,0" />
          </defs>

          <g className="spin">
            <text className="spin-text">
              <textPath href="#text-circle" startOffset="0">Quality Assurance • Qualidade de Software •</textPath>
            </text>
          </g>

          <circle cx="50" cy="50" r="36" className="hire-circle" />

          <text x="50" y="54" className="hire-center">
            CONTRATE
          </text>
        </svg>
      </a>
    </div>
  );
}
