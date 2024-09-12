import './About.css'
import profilePic from './assets/profile-img-3.jpg'
import resumeFile from './assets/Arick,B-Resume.pdf'

export default function About(){

    return(
        <>
            <div className="grid" id="about-page">
                <div className="grid-item left">
                    <img src={profilePic}></img>
                </div>
                <div className="grid-item right">
                    <div className="grid-items">
                        <h2>Bailey Arick</h2>
                        <p>Front-end Web Developer</p>
                        <ul>
                            <li className="list-item">Lives In: Abilene, TX</li>
                            <li className="list-item">Age: 24</li>
                            <li className="list-item">Gender: Male</li>
                        </ul>
                        <a className="download-link" href={resumeFile} download="Arick,B-Resume.pdf"><button id="resume-btn">Download CV</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}