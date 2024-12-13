import React, { useState } from 'react';

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button onClick={calculateAge} style={{ padding: '8px 16px', marginLeft: '10px', fontSize: '16px' }}>
        Calculate Age
      </button>
      {age && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your Age:</h2>
          <p>
            {age.years} years, {age.months} months, and {age.days} days
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

