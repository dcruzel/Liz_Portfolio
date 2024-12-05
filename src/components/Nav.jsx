// import Link and useLocation from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
//Create Nav function
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <header>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {/* Link the aboutMe as homepage */}
        <Link
          to="/"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        {/* Link contact page */}
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        {/* Link to Portfolio page*/}
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        {/* Link to Resume Page*/}
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </header>
  );
}

export default Nav;
