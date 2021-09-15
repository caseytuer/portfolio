import ezpickupImg from '../../assets/ezpickup-img.png';
import hotpotatoImg from '../../assets/hotpotato-img.png'
import extremerentalsImg from '../../assets/extremerentals-img.png'
import './Projects.css';

const Projects = () => {

    const ezpickupDescription = "EZpickup is an original full stack application I created using Flask/SQLAlchemy in the backend and React/Redux for in frontend. It allows users to find and create local pickup sports events based on location, start time, skill level, or equipment needed. It is implemented with the use of Google Maps API to ensure accurate pinpointing of game locations and to increase user experience."
    
    const hotpotatoDescription = "Hotpotao is a collaborative full stack application created by Leslie Owiti, Nico Pierson, Wes Trinh and myself using Flask/SQLAlchemy in the backend and React/Redux in the frontend. It allows users to create, find and like culinary recipes, as well as follow creators and develope a currated feed. It is equiped with the ability to sort feeds via a substantial categorization model or by our sorting algorithm for trending creations."

    const extremerentalsDescription = "Extreme Rentals is a full stack application inspired by Airbnb, I created with Express/Sequelize in the backend and React/Redux in the frontend. It is incorporated with an extensive user authentication process which allows the safe storage of sensitive information in a PostgreSQL database that I setup. Users logged into verified accounts can find, create and review extreme things to rent."

    return (
        <div className="projects-container">
            <div className="project-container">
                <div className="project-title">EZpickup</div>
                <img className="project-img" src={ezpickupImg} alt=""/>
                <div className="project-description">{ezpickupDescription}</div>
                <a className="check-it-out"
                    href='https://github.com/caseytuer/ezpickup'>
                        Check it out on GitHub
                        <i className='fab fa-github dev-link'></i>
                </a>
            </div>
            <div className="project-container">
                <div className="project-title">Hotpotato</div>
                <img className="project-img" src={hotpotatoImg} alt="" />
                <div className="project-description">{hotpotatoDescription}</div>
                <a className="check-it-out"
                    href='https://github.com/nicopierson/hotpotato'>
                    Check it out on GitHub
                    <i className='fab fa-github dev-link'></i>
                </a>
            </div>
            <div className="project-container">
                <div className="project-title">Extreme Rentals</div>
                <img className="project-img" src={extremerentalsImg} alt="" />
                <div className="project-description">{extremerentalsDescription}</div>
                <a className="check-it-out"
                    href='https://github.com/caseytuer/extreme-rentals'>
                    Check it out on GitHub
                    <i className='fab fa-github dev-link'></i>
                </a>
            </div>
        </div>
    )
}

export default Projects;