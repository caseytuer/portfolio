import jsImg from '../../assets/js-img.gif';
import pythonImg from '../../assets/python.gif';
import reactImg from '../../assets/react.png';
import reduxImg from '../../assets/redux.png';
import cssImg from '../../assets/css.png';
import flaskImg from '../../assets/flask.png';
import nodeImg from '../../assets/node.png';
import postgresImg from '../../assets/postgres.png';
import dockerImg from '../../assets/docker.png';
import './Stack.css';

const Stack = () => {
    return (
        <div className="languages-container">
        <div className="languages">
            <div className="language-container">
                <img className="stack-icon" src={jsImg} alt=""/>
                <span>JavaScript</span>
            </div>
            <div className="language-container">
                <img className="stack-icon" src={pythonImg} alt=""></img>
                <span>Python</span>
            </div>
        </div>
        <div className="languages">
            <div className="language-container">
                <img className="stack-icon" src={reactImg} alt=""></img>
                <span>React</span>
            </div>
            <div className="language-container">
                <img className="stack-icon" src={reduxImg} alt=""></img>
                <span>Redux</span>
            </div>
            <div className="language-container">
                <img className="stack-icon" src={cssImg} alt=""></img>
                <span>CSS</span>
            </div>
        </div>
        <div className="languages">
            <div className="language-container">
                <img className="stack-icon" src={flaskImg} alt=""></img>
                <span>Flask</span>
            </div>
            <div className="language-container">
                <i class="devicon-express-original express-icon"></i>
                <span>Express.js</span>
            </div>
            <div className="language-container">
                <img className="stack-icon" src={nodeImg} alt=""></img>
                <span>Node.js</span>
            </div>
        </div>
        <div className="languages">
            <div className="language-container">
                <img className="stack-icon" src={postgresImg} alt=""></img>
                <span>PostgreSQL</span>
            </div>
            <div className="language-container">
                <img className="stack-icon" src={dockerImg} alt=""></img>
                <span>Docker</span>
            </div>
        </div>
        </div>
    )
}

export default Stack;