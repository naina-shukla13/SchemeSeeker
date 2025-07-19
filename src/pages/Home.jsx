import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Home.css";
//import {<About />} from '../pages/About.jsx';
import heroImage from '../assets/image 1.png'
import img2 from '../assets/image 2.png'
import img3 from '../assets/image 3.png'
import img4 from '../assets/image 4.png'
import img5 from '../assets/image 5.png'
import img6 from '../assets/image 6.png'
import img7 from '../assets/image 7.png'
import img8 from '../assets/image 8.png'
import img9 from '../assets/image 9.png'
import img10 from '../assets/image 10.png'
import img11 from '../assets/image 11.png'
import About from './About';
//import img12 from '../assets/image 12.png'
const Home = () => {
    const navigate = useNavigate();
    const handleCheckEligibility = () => {
        navigate('/eligibiltyform');
    }
  return (
 <>
    <div className='hero-section'>
        <div className="hero-left">
      <h1 className='hero-heading'>Find Government Schemes You're Eligible For</h1>
      <p className = "hero-subheading"> Personalized government scheme suggestions in seconds"</p>
      <button className='hero-button' onClick={handleCheckEligibility}>
        
        <h1>Check Your Eligibilty</h1>
       
      </button>
      </div>
      <div className="hero-right">
         <img src={heroImage} alt="Government help" />
      </div>
      
    </div>

    <div className='feature-section'>
        <div className='feature-card'> 
            <img src={img2} alt = "" />
            <h1>Personalized Matching</h1>
            <p>Match your profile to the most relevant government schemes</p>
        </div>
        <div className='feature-card'> 
            <img src={img3} alt = "" />
            <h1>Comprehensive Database</h1>
            <p>Hundreds of verified central and state welfare programs</p>
        </div>
        <div className='feature-card'> 
            <img src={img4} alt = "" />
            <h1>Local Language Support</h1>
            <p>View scheme details in your regional language for clarity</p>
        </div>
        <div className='feature-card'> 
            <img src={img5} alt = "" />
            <h1>Instant Eligibilty Tool</h1>
            <p>Instantly know which schemes you qualify for, no paperwork required</p>
        </div>

    </div>

    <div className='how-it-works'>
        <h2>How It Works</h2>
        <p className='how-subtext'>Our AI system helps you find matching schemes in just 3 simple steps.</p>
        <div className='step-grid'>
            <div className='step-card'>
                <div className='step-number'>1</div>
                <h3>Enter Your Details</h3>
                <p>Provide information about income, region, education...</p>
                </div>
                 <div className='step-card'>
                <div className='step-number'>2</div>
                
                <h3>AI Analysis</h3>
                <p>We check your profile with 500+ government schemes.</p>
                </div>
                 <div className='step-card'>
                <div className='step-number'>3</div>
                <h3>Get Results</h3>
                <p>You get a list of matched schemes instantly in your language</p>
                </div>
        </div>

    </div>

    <div className='supported-schemes'> 
        <h2>Supported Government Schemes</h2>
        <div className='scheme-grid'>
        <div className='scheme-card'>
            <img src={img6} alt="PM Kisan Yojna" />
            <p>PM Kisan Yojna</p>
        </div>
         <div className='scheme-card'>
            <img src={img7} alt="PM Ujjwala Yojna" />
            <p>Pradhanmantri Ujjwala Yojna</p>
        </div>
         <div className='scheme-card'>
            <img src={img8} alt="PM JanDhan Yojna" />
            <p>PradhanMantri Jan-Dhan Yojna</p>
        </div>
         <div className='scheme-card'>
            <img src={img9} alt="UP Kanya Sumangla Yojna" />
            <p>UP Kanya Sumangla Yojna</p>
        </div>
         <div className='scheme-card'>
            <img src={img10} alt="PM Awas Yojna" />
            <p>PM Awas Yojna</p>
        </div>
         <div className='scheme-card'>
            <img src={img11} alt="PM Rojgar Yojna" />
            <p>PM Rojgar Yojna</p>
        </div>
      </div>
    </div>

    <div className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>SchemeSeeker</h2>
      <p>Connecting citizens to the schemes they deserve.</p>
    </div>

    <div className="footer-links">
      <a href="/about">About</a>
      <a href="#">Contact</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
    </div>

    <p className="footer-copy">© 2025 SchemeSeeker. All rights reserved.</p>

  </div>
</div>

    </>
  )
}

export default Home
