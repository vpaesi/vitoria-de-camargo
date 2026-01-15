import Nav from "./nav";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="nav-wrapper">
        <Nav />
      </div>

      <a href="#">
        <img src={logo} alt="Logo" className="nav-logo nav-title" />
      </a>
      <div className="header-right" />
    </header>
  );
}
