import React from 'react'
import { useState } from 'react'
import '../styles/eligibiltyform.css'
import { useNavigate } from 'react-router-dom'

const EligibiltyForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim()){
      alert('Please enter your name');
      return;
    }
    if(!age || age <= 0){
      alert('Please enter a valid age');
      return;
    }
    if(!gender){
      alert('Please select a gender');
      return;
    }
    if(!occupation.trim()){
      alert('Please enter your occupation');
      return;
    }
    if(!state){
      alert("Please select your state");
      return;
    }
    if(!city.trim()){
      alert('Please enter your city');
      return;
    }
    if(!income || income <= 0){
      alert('Please enter a valid income');
      return;
    }
    

    console.log({
      name,
      age,
      gender,
      occupation,
      
    });
    alert("Eligibility form submitted");
    navigate('/result', {
      state: { name, age, gender, occupation, state, city, income}
    });

    
  }
  return (
    
      <div className='eligibilty-form'>
        <h2 className='eligibility-heading'>Check Your Elgibility</h2>
        <form className='eligibility-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name"
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Age</label>
            <input type="number" placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Occupation</label>
            <select value={occupation} onChange={(e) => setOccupation(e.target.value)}>
              <option value="">Select Occupation</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="Farmer"></option>
              <option value="Worker"></option>
              <option value="bussinessman"></option>
              <option value="housewife"></option>
            </select>
            </div>
            <div className='form-group'>
             <label>State</label>
             <select value={state} onChange={(e) => setState(e.target.value)}>
             <option value="">Select State</option>
             <option value="Uttar Pradesh">Uttar Pradesh</option>
             <option value="Maharashtra">Maharashtra</option>
             <option value="Delhi">Delhi</option>
             <option value="Karnataka">Karnataka</option>
    
            </select>
          </div>

          <div className='form-group'>
          <label>City</label>
         <input
          type="text"
         placeholder="Enter your city"
         value={city}
        onChange={(e) => setCity(e.target.value)}
         />
        </div>

       <div className='form-group'>
       <label>Annual Income (INR)</label>
       <input
       type="number"
       placeholder="Enter your annual income"
       value={income}
       onChange={(e) => setIncome(e.target.value)}
       />
      </div>

        <button type="submit" > Check Eligibility</button>
              
            
        </form>
        
      </div>
    
  )
}

export default EligibiltyForm
