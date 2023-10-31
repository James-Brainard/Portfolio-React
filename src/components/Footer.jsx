import gitLogo from '../images/github-logo.png';
import linkedinLogo from '../images/Linkedin.png';

function Footer() {
  return (
      <footer className="d-flex justify-content-center footer">
        <a href="https://github.com/James-Brainard" target="_blank"><img className="git-logo" src={gitLogo} width={50}/> </a>
        <a href="https://www.linkedin.com/in/james-brainard-565012252/" target="_blank"><img className="linkedin-logo" src={linkedinLogo} width={50} /></a>
      </footer>
  )
}

export default Footer;