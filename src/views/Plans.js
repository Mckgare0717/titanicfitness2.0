// App.js
import { useState } from "react";
import "./plans.css"
import { useNavigate } from "react-router-dom";


const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };


  const navigate =useNavigate()
  return (
    <div className="container">
      <h2>Gym Membership Plans</h2>
      <div className="plan">
        <label>
          <input
            type="radio"
            value="basic"
            checked={selectedPlan === "basic"}
            onChange={() => handlePlanChange("basic")}
          />
          Basic Plan - £0/month
          <ul>
            <li>Limited access to gym services</li>
            <li>Limited access to  fitness content</li>
            <li>no-accessto gym during non-peak hours</li>
          </ul>
        </label>
      </div>
      <div className="plan">
        <label>
          <input
            type="radio"
            value="premium"
            checked={selectedPlan === "premium"}
            onChange={() => handlePlanChange("premium")}
          />
          Premium Plan - £50/month
          <ul>
            <li>unlimited access to gym services</li>
            <li>unlimited access to  fitness content</li>
            <li>Access to the gym during the whole day</li>
          </ul>
        </label>
      </div>
      <div className="selected-plan">
        {selectedPlan === "basic" && (
          <p>You have selected the Basic Plan for £0/month.</p>
        )}
        {selectedPlan === "premium" && (
          <p>You have selected the Premium Plan for £50/month.</p>
        )}

        <button onClick={()=>navigate("/login")}>Join Now</button>
      </div>
    </div>
  );
};

export default Plans;
