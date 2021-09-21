import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import quotes from '../../assets/quotes';
import './Nav.css'

const Nav = () => {

    let number = Math.floor((Math.random() * 5) + 1);





    return (
        <>
            <div className="quote-container">
                <div id="quote" className="quote">{quotes[number]?.quote}</div>
                <div id="author" className="author">{quotes[number]?.author}</div>
            </div>
            <div className="nav-links-container">
                <NavLink to="/" className="nav-links" >Home</NavLink>
                <NavLink to="/projects" className="nav-links">Projects</NavLink>
                <NavLink to="/stack" className="nav-links">My Stack</NavLink>
                <NavLink to="/about-me" className="nav-links">About Me</NavLink>
            </div>
            <div className="footer-container">

                <div className="developer-links">
                    <a href='https://github.com/caseytuer'>
                        <i className='fab fa-github dev-link'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/caseytuer/'>
                        <i className='fab fa-linkedin dev-link'></i>
                    </a>
                    <a href='mailto:caseytuer@gmail.com'>
                        <i class="far fa-envelope dev-link"></i>
                    </a>
                    <a href="https://docs.google.com/document/d/19G2Hf9_OyJj0ctKjRYIPijYRTgtabvW38xY505J47q4/edit?usp=sharing" className="dev-link">Resume</a>
                </div>
            </div>
        </>
    )
}

export default Nav;