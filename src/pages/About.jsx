import React from 'react';
import '../styles/about.css';
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h2>{t("aboutTitle")}</h2>

      <p>
        {t("aboutIntro")}
      </p>

      <h3>{t("whyTitle")}</h3>
      <p>
        {t("whyDesc")}
      </p>

      <h3>{t("whoTitle")}</h3>
      <ul>
        <li>{t("whoStudent")}</li>
        <li>{t("whoFarmer")}</li>
        <li>{t("whoWomenSenior")}</li>
        <li>{t("whoWorkers")}</li>
        <li>{t("whoAnyone")}</li>
      </ul>

      <h3>{t("howTitle")}</h3>
      <p>
        {t("howDesc")}
      </p>
    </div>
  );
};

export default About;
