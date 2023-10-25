import { Link, useLocation } from 'react-router-dom';
import '../App.css'
// Return from Header function the HTML elements making up the header which is the NAVIGATION

function Header() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <div className="d-flex name_header">
        <h2>James</h2>
        <ul className="flex-row nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact Me
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header;