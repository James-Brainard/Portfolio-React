// Footer needs to return HREF to my GITHUB and LinkedIn
import gitLogo from '../images/github-icon.png';
import linkedinLogo from '../images/LinkedIn-icon.png';

function Footer() {
  return (
    <>

      <div className="d-flex justify-content-center github-icon"> Footer
        <a href="https://github.com/James-Brainard"><img src={gitLogo} width={50}/> </a>
        <a href="https://www.linkedin.com/in/james-brainard-565012252/"><img src={linkedinLogo} width={50} /></a>
      </div>
    </>
  )
}

export default Footer