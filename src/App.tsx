import './App.css'

import Icon from './icon.tsx'
import profilePhoto from './assets/profilephoto.jfif';
import LinkedInLogo from './assets/linkedlinkicon.svg'
import GithubLogo from './assets/githublinkicon.svg'
import WebsiteLogo from './assets/websitelinkicon.svg'

function App() {

  return (
    <>
    <section className="hero-container">
      <div className="hero-content">
        <a href="https://www.linkedin.com/in/hasith-basnayake/" className="img-container">
          <img className="profile-photo-img" src={profilePhoto} alt="Profile Photo"></img>
        </a>
        <div className="links-container">
          <Icon name={"LinkedIn"} link={"https://www.linkedin.com/in/hasith-basnayake/"} icon={LinkedInLogo}/>
          <Icon name={"Github"} link={"https://github.com/hasithbasnayake"} icon={GithubLogo}/>
          <Icon name={"Website"} link={"https://www.hasithbasnayake.com/"} icon={WebsiteLogo}/>
        </div>
      </div>
      <div className="hero-text">
        <div className="hero-text-header">
          <h1>Hasith Basnayake</h1>
          <h2>California, USA</h2>
        </div>
        <p>
          Hi, my name’s Hasith. I’m a Product Designer on the Maritime Autonomy team at <a href="https://www.anduril.com/">Anduril Industries</a>. 
          <br />&nbsp;<br/>Previously, I've held intern and contract roles at companies like <a href="https://www.adobe.com/">Adobe</a>, <a href="https://www.alltrails.com/">Alltrails</a> and <a href="https://crossnokaye.com/">CrossnoKaye</a>.
          <br />&nbsp;<br/>I graduated from UCSB with a B.S. in <a href="https://www.ucsb.edu/">Computational Neuroscience</a>. I design interfaces so that both humans and machines can perceive the world.
          <br />&nbsp;<br/>New Portfolio Coming Soon.
          </p>
      </div>
    </section>
    </>
  )
}

export default App
