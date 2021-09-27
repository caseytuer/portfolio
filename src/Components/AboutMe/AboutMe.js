
import casey from '../../assets/casey.png';
import kona from '../../assets/kona.png';
import './AboutMe.css';

const aboutMe1 = "I have always been fascinated with technology and aspired to one day pursue a career in software development. After years of learning to code on my own while working full time in the service industry, I made the decision to attend App Academy's 1500 hr full stack software engineering program. Here I was formally trained in software development and introduced to the most in-demand programming tools to date." 
const aboutMe2 = "Since then I've been sharpening my skills in various frontend and backend frameworks and libraries by building full stack applications from the ground up and collaborating with my peers." 
const aboutMe3 = "When I'm not programming I am volunteering with Urban Surf 4 Kids, fostering animals, training my rescue pitty Kona, or hanging out at the beach in beautiful San Diego."

const AboutMe = () => {
    return (
        <>
            <div className="about-me-container">
                <div className="about-me">
                    <div className="about-me-1">{aboutMe1}</div>
                    <div className="about-me-1">{aboutMe2}</div>
                    <div>{aboutMe3}</div>
                </div>
            </div>
            <img src={casey} alt=""
                className="about-me-casey-img">
            </img>
            <img src={kona} alt=""
                className="kona-img">
            </img>
        </>
    )
}

export default AboutMe;