import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { i18n, t } = useTranslation();

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleLangDropdown = () => {
    setLangDropdown(!langDropdown);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdown(false); // close dropdown after selecting
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">

          <div className="logo">
            <h1>SchemeSeeker</h1>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><Link to="/home">{t("navHome")}</Link></li>
              <li><Link to="/about">{t("navAbout")}</Link></li>
              <li><Link to="/schemes">{t("navSchemes")}</Link></li>

              <li className="language-switch">
                <button onClick={toggleLangDropdown}>
                  {i18n.language === "en" ? "English" : "हिंदी"} ▼
                </button>
                {langDropdown && (
                  <ul className="dropdown">
                    {i18n.language !== "en" && (
                      <li onClick={() => changeLanguage("en")}>English</li>
                    )}
                    {i18n.language !== "hi" && (
                      <li onClick={() => changeLanguage("hi")}>हिंदी</li>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <Link to="/signup" className="nav-btn nav-btn-outline">{t("navSignup")}</Link>
          </div>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}><GiHamburgerMenu /></button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
