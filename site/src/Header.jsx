import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">Portfolio</h1>
        <nav className="headerNav">
          <a href="#about" className="headerLink">About</a>
          <a href="#projects" className="headerLink">Projects</a>
          <a href="#experience" className="headerLink">Experience</a>
          <a href="#skills" className="headerLink">Skills</a>
          <a href="#contact" className="headerLink">Contact</a>
        </nav>
      </div>
    </header>
  );
};