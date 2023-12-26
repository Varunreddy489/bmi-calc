import React, { useState } from "react";
import "./BmiCalc.css";

const BmiCalc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // calculateAge(birthDate);
  };

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0 ) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = weight / ((height / 100) ** 2);
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi <18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else if((bmi >= 25 && bmi < 29.9)) {
        setMessage('You are overweight')
      }
      else{
        setMessage('You are Obese')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }



  return (
    <div
     style={{ color: "white" }}
     className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight (KiloGrams)</label>
            <input
              className="weight-input"
              placeholder="Enter Weight in Kilograms..."
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <br />
          <div>
            <label>Height (Centimeters)</label>
            <input
              className="height-input"
              placeholder="Enter Height in Centimeters..."
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <br />

          <button className='btn' onClick={calcBmi} type='submit'>Calculate BMI</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>
  );
};

export default BmiCalc;
