import Nav from "./nav";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="nav-wrapper">
        <Nav />
      </div>

      <img src="assets/logo.svg" alt="Logo" className="nav-logo nav-title" aria-hidden="true" />

      <div className="header-right" aria-hidden="true" />
    </header>
  );
}
