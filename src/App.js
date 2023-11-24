import React, { useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [BMIStatus, setBMIStatus] = useState("");

    const set_weight = (event) => setWeight(parseInt(event.target.value));
    const set_height = (event) => setHeight(parseInt(event.target.value));

    const calculateBMI = () => {
        const calculatedBMI = weight / ((height / 100) * (height / 100));
        setBMI(calculatedBMI);
        determineBMIStatus(calculatedBMI);
    }

    const determineBMIStatus = (calculatedBMI) => {
        if (calculatedBMI < 18.5) {
            setBMIStatus("Underweight");
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            setBMIStatus("Normal weight");
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            setBMIStatus("Overweight");
        } else {
            setBMIStatus("Obese");
        }
    }

    return (
        <div className="container">
            <p>weight (kg): </p>
            <input type="text" onChange={set_weight}></input>
            <p />
            <p>height (cm): </p>
            <input type="text" onChange={set_height}></input>
            <p />
            <button onClick={calculateBMI}>calculate</button>
            <p />
            <p>The BMI is: {BMI}</p>
            <p>Status: {BMIStatus}</p>
        </div>
    )
}

export default App;