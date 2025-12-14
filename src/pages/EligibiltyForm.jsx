import React from 'react'
import { useState } from 'react'
import '../styles/eligibiltyform.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const EligibiltyForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim()){
      alert(t("alertName"));
      return;
    }
    if(!age || age <= 0){
      alert(t("alertAge"));
      return;
    }
    if(!gender){
      alert(t("alertGender"));
      return;
    }
    if(!occupation){
      alert(t("alertOccupation"));
      return;
    }
    if(!state){
      alert(t("alertState"));
      return;
    }
    if(!city.trim()){
      alert(t("alertCity"));
      return;
    }
    if(!income || income <= 0){
      alert(t("alertIncome"));
      return;
    }

    navigate('/result', {
      state: { name, age, gender, occupation, state, city, income }
    });
  }

  return (
    <div className='eligibilty-form'>
      <h2 className='eligibility-heading'>
        {t("eligibilityTitle")}
      </h2>

      <form className='eligibility-form' onSubmit={handleSubmit}>

        <div className='form-group'>
          <label>{t("fullName")}</label>
          <input
            type="text"
            placeholder={t("fullNamePlaceholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>{t("age")}</label>
          <input
            type="number"
            placeholder={t("agePlaceholder")}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>{t("gender")}</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">{t("selectGender")}</option>
            <option value="male">{t("male")}</option>
            <option value="female">{t("female")}</option>
            <option value="other">{t("other")}</option>
          </select>
        </div>

        <div className='form-group'>
          <label>{t("occupation")}</label>
          <select value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="">{t("selectOccupation")}</option>
            <option value="student">{t("student")}</option>
            <option value="employed">{t("employed")}</option>
            <option value="unemployed">{t("unemployed")}</option>
            <option value="farmer">{t("farmer")}</option>
            <option value="worker">{t("worker")}</option>
            <option value="businessman">{t("businessman")}</option>
            <option value="housewife">{t("housewife")}</option>
          </select>
        </div>

        <div className='form-group'>
          <label>{t("state")}</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">{t("selectState")}</option>
            <option value="Uttar Pradesh">{t("up")}</option>
            <option value="Maharashtra">{t("mh")}</option>
            <option value="Delhi">{t("dl")}</option>
            <option value="Karnataka">{t("ka")}</option>
          </select>
        </div>

        <div className='form-group'>
          <label>{t("city")}</label>
          <input
            type="text"
            placeholder={t("cityPlaceholder")}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>{t("income")}</label>
          <input
            type="number"
            placeholder={t("incomePlaceholder")}
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <button type="submit">
          {t("checkEligibilityBtn")}
        </button>

      </form>
    </div>
  )
}

export default EligibiltyForm
