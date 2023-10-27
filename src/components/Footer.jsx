// Footer needs to return HREF to my GITHUB and LinkedIn
import gitLogo from '../images/github-logo.png';
import linkedinLogo from '../images/Linkedin.png';

function Footer() {
  return (
    <>
      <footer className="d-flex mb-3 fixed-bottom justify-content-center footer">
        <a href="https://github.com/James-Brainard"><img className="git-logo" src={gitLogo} width={50}/> </a>
        <a href="https://www.linkedin.com/in/james-brainard-565012252/"><img className="linkedin-logo" src={linkedinLogo} width={50} /></a>
      </footer>
    </>
  )
}

export default Footer