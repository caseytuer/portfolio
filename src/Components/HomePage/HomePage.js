import { className } from 'postcss-selector-parser';
import caseyScreen from '../../assets/casey-screen.png'
import signature from '../../assets/signature.png'
import './HomePage.css'


const HomePage = () => {
    
    const helloWorld = "Hello World 👋";
    const myName = "I'm";
    
    return (
        <>
        <div className="contact-page-container">
            <div className="greeting-and-img">
                <div className="hello-world-container">
                        <div className="hello-world">{helloWorld}
                    </div>
                </div>
                {/* <div className="image-container">
                    <img src={caseyScreen} alt=""
                        className="profile-img">
                    </img>
                </div> */}
                <div>
                    <div className="hello-world my-name">
                        <div>{myName}</div>
                        <img className="signature" src={signature} alt=""></img>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default HomePage;