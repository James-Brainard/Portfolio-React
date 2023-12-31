import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import { TypeAnimation } from 'react-type-animation';

const HeaderAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'James Brainard',
        1000
      ]}
      style={{ fontSize: '2em', color: 'white'}}
      repeat={Infinity}
      wrapper="span"
      loop={true}
      cursor={true}
    />
  )
}

function Header() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <div className="mb-5 d-flex justify-content-between name_header">
        <HeaderAnimation />
        <ul className="flex-row nav nav-tabs">
          <li className="nav-fill nav-item">
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