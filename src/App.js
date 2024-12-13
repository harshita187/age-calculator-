import React, { useState } from 'react';
import "./App.css"

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      alert('Please select your date of birth!');
      return;
    }

    const today = new Date();
    const birthDate = new Date(dob);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative days/months
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className='hero-section'>
      <div className="age-calculator-container">
        <h1>Age Calculator</h1>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="date-input"
        />
        <button onClick={calculateAge} className="calculate-button">
          Calculate Age
        </button>
        {age && (
          <div className="result">
            <h2>Your Age:</h2>
            <p>{age.years} years, {age.months} months, and {age.days} days</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
