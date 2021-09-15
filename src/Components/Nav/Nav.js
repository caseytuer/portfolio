import { NavLink } from 'react-router-dom';
import HomePage from '../HomePage';
import './Nav.css'

const Nav = () => {
    const url = "http://quotes.stormconsultancy.co.uk/random.json";
    function generateQuote() {
        fetch(url)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                document.getElementById("quote").innerHTML = `"${data.quote}"`;
                document.getElementById("author").innerHTML = "- " + data.author;
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    generateQuote();


    return (
        <>
            <div className="quote-container">
                <div id="quote" className="quote"></div>
                <div id="author" className="author"></div>
            </div>
            <div className="nav-links-container">
                <NavLink to="/" className="nav-links" >Home
                </NavLink>
                <NavLink to="/projects" className="nav-links">Projects</NavLink>
                <NavLink to="/stack" className="nav-links">My Stack</NavLink>
                <NavLink to="about-me" className="nav-links">About Me</NavLink>
            </div>
            <div className="footer-container">

                <div className="developer-links">
                    <a href='https://github.com/caseytuer'>
                        <i className='fab fa-github dev-link'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/caseytuer/'>
                        <i className='fab fa-linkedin dev-link'></i>
                    </a>
                    <a href='https://angel.co/u/caseytuer'>
                        <i className='fab fa-angellist dev-link'></i>
                    </a>
                    <a href='mailto:caseytuer@gmail.com'>
                        <i class="far fa-envelope dev-link"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Nav;