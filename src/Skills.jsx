import './Skills.css'

export default function Skills(){

    return(
        <>
            <div className="skills">
                <h1 className="skills-title">Skills and Technology</h1>
                <ul className="skills-list">
                        <div className="skill-subtitle">
                            <li>HTML</li>
                            <p>90%</p>
                        </div>
                        <div className="outer-bar">
                            <div className="inner-bar html"></div>
                        </div>
                        <div className="skill-subtitle">
                            <li>CSS</li>
                            <p>65%</p>
                        </div>
                        <div className="outer-bar">
                            <div className="inner-bar css"></div>
                        </div>
                        <div className="skill-subtitle">
                            <li>JavaScript</li>
                            <p>45%</p>
                        </div>
                        <div className="outer-bar">
                            <div className="inner-bar javascript"></div>
                        </div>
                        <div className="skill-subtitle">
                            <li>React</li>
                            <p>15%</p>
                        </div>
                        <div className="outer-bar">
                            <div className="inner-bar react"></div>
                        </div>
                    </ul>
            </div>
        </>
    )
}