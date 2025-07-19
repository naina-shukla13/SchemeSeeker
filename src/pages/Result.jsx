import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Result.css'
import schemes from '../data/schemes.json'

const Result = () => {
    const location = useLocation();
    const { name, age, gender, occupation, state, income } = location.state || {};

    const handleSaveFavorite = (scheme) => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        const alreadySaved = saved.find((s) => s.name == scheme.name);

        if(!alreadySaved){
            saved.push(scheme);
            localStorage.setItem("favorites", JSON.stringify(saved));
            alert("Scheme saved to favorites!");
        }else{
            alert("Scheme already in favorites.");
        }
    }
    

const matchedSchemes = schemes.filter(scheme => {
  const { occupation: occ, gender: gend, ageMin, ageMax, state: schemeStates, incomeMin, incomeMax } = scheme.criteria;

  const isOccupationMatch = !occ || occ.includes(occupation);
  const isGenderMatch = !gend || gend.includes(gender);
  const isAgeMinOk = !ageMin || age >= ageMin;
  const isAgeMaxOk = !ageMax || age <= ageMax;
  const isStateMatch = !schemeStates || schemeStates.includes(state) || schemeStates("All India");
  const isIncomeMinOk = !incomeMin || income >= incomeMin;
  const isIncomeMaxOk = !incomeMax || income <= incomeMax;
  

  return(
     isOccupationMatch && 
     isGenderMatch && 
     isAgeMinOk && isAgeMaxOk &&
     isAgeMaxOk &&
     isStateMatch &&
     isIncomeMinOk &&
     isIncomeMaxOk 

  );
});





  return (
    <div>
        <div className='result-page'>
            <h2>Welcome, {name}!</h2>
            <p>Your Submitted Details</p>
            <ul>
            <li><p><strong>Age:</strong> {age}</p></li>
            <li><p><strong>Gender:</strong> {gender}</p></li>
            <li><p><strong>Occupation:</strong> {occupation}</p></li>
            </ul>

            <p>Based on your details, here are a few schemes you might be eligible for:</p>
            <div className='scheme-list'>
                {matchedSchemes.length > 0 ? (
                    matchedSchemes.map((scheme, index) => (
                    <div className='scheme-card' key={index} >
                        <h3>{scheme.name}</h3>
                        <p>{scheme.description}</p>
                        <p><strong>Source:</strong> {scheme.source}</p>
                        {scheme.link && (
                            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className='read-more'>Read More</a>
                        )}
                        <button 
                        className='favorite-button'
                        onClick={() => handleSaveFavorite(scheme)}
                        >
                            save
                        </button>
                        </div>
                    ))
                ) : (
                    <p>No matching schemes found for your profile.</p>
                )}
            </div>
               
        </div>
    </div>
      
  )
}

export default Result
