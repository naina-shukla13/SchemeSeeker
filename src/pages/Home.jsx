import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Home.css";
import { useTranslation } from "react-i18next";

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
import AllSchemes from './Schemes';

const Home = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleCheckEligibility = () => {
        navigate('/eligibiltyform');
    }

    return (
        <>
            {/* HERO SECTION */}
            <div className='hero-section'>
                <div className="hero-left">
                    <h1 className='hero-heading'>
                        {t("heroHeading")}
                    </h1>

                    <p className="hero-subheading">
                        {t("heroSubheading")}
                    </p>

                    <button className='hero-button' onClick={handleCheckEligibility}>
                        <h1>{t("checkEligibility")}</h1>
                    </button>
                </div>

                <div className="hero-right">
                    <img src={heroImage} alt="Government help" />
                </div>
            </div>

            <div>
                <AllSchemes />
            </div>

            {/* FEATURES */}
            <div className='feature-section'>
                <div className='feature-card'>
                    <img src={img2} alt="" />
                    <h1>{t("feature1Title")}</h1>
                    <p>{t("feature1Desc")}</p>
                </div>

                <div className='feature-card'>
                    <img src={img3} alt="" />
                    <h1>{t("feature2Title")}</h1>
                    <p>{t("feature2Desc")}</p>
                </div>

                <div className='feature-card'>
                    <img src={img4} alt="" />
                    <h1>{t("feature3Title")}</h1>
                    <p>{t("feature3Desc")}</p>
                </div>

                <div className='feature-card'>
                    <img src={img5} alt="" />
                    <h1>{t("feature4Title")}</h1>
                    <p>{t("feature4Desc")}</p>
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div className='how-it-works'>
                <h2>{t("howItWorks")}</h2>
                <p className='how-subtext'>
                    {t("howSubtext")}
                </p>

                <div className='step-grid'>
                    <div className='step-card'>
                        <div className='step-number'>1</div>
                        <h3>{t("step1Title")}</h3>
                        <p>{t("step1Desc")}</p>
                    </div>

                    <div className='step-card'>
                        <div className='step-number'>2</div>
                        <h3>{t("step2Title")}</h3>
                        <p>{t("step2Desc")}</p>
                    </div>

                    <div className='step-card'>
                        <div className='step-number'>3</div>
                        <h3>{t("step3Title")}</h3>
                        <p>{t("step3Desc")}</p>
                    </div>
                </div>
            </div>

            {/* SUPPORTED SCHEMES */}
            <div className='supported-schemes'>
                <h2>{t("supportedSchemes")}</h2>

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

            {/* FOOTER */}
            <div className="footer">
                <div className="footer-container">

                    <div className="footer-brand">
                        <h2>SchemeSeeker</h2>
                        <p>{t("footerTagline")}</p>
                    </div>

                    <div className="footer-links">
                        <a href="/about">{t("about")}</a>
                        <a href="#">{t("contact")}</a>
                        <a href="#">{t("terms")}</a>
                        <a href="#">{t("privacy")}</a>
                    </div>

                    <p className="footer-copy">
                        © 2025 SchemeSeeker. {t("rights")}
                    </p>

                </div>
            </div>
        </>
    )
}

export default Home;
