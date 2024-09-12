import './BottomPanel.css'
import instagramIcon from './assets/icons/instagram-icon.png'
import githubIcon from './assets/icons/github-icon.png'
import linkedinIcon from './assets/icons/linkedin-icon.png'

export default function BottomPanel(){

    return(
        <>
        <div className="bot-panel-box" id="contact-page">
            <div className="socials">
                <h1>Socials</h1>
                <p>Contact info in my resume</p>
                <ul className="socials-list">
                    <li className="icon-item">
                        <a className="icon-link" href="https://www.instagram.com/baileyarick/" target='_blank'>
                            <div className="icon">
                            <img height="25" width="25" id="icon-img instagram" src={instagramIcon}/>
                            </div>
                        </a>
                    </li>
                    <li className="icon-item">
                        <a className="icon-link" href="https://github.com/BaileyArick" target='_blank'>
                            <div className="icon">
                            <img height="25" width="25" id="icon-img github" src={githubIcon}/>
                            </div>
                        </a>
                    </li>
                    <li className="icon-item">
                        <a className="icon-link" href="#" target="_blank">
                            <div className="icon">
                            <img height="25" width="25" id="icon-img linkedin" src={linkedinIcon}/>
                            </div>
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="copyright-banner">
                    <p>&copy; Bailey Arick, 2023</p>
                </div>
            </div>
        </div>    
        </>
    )
}