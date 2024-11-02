import "../App.css";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <div className="nav-inner-left">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </div>
          <div className="nav-inner-right">
            <a target="_blank" href="https://github.com/AndrChr0">
            <img className="github-icon-nav" src="/icons/github.svg" alt="GitHub icon" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
