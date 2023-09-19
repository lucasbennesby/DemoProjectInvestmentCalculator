import React, { useState } from "react";

function UserInput(props) {
  //

  const [CurrentSaving, setCurrentSaving] = useState();
  const [YearlySaving, setYearlySaving] = useState();
  const [ExpectedInterest, setExpectedInterest] = useState();
  const [InvestimentDuration, setInvestimentDuration] = useState();

  const handleCurrentSaving = (input) => {
    setCurrentSaving(input.target.value);
  };

  const handleYearlySaving = (input) => {
    setYearlySaving(input.target.value);
  };

  const handleExpectedInterest = (input) => {
    setExpectedInterest(input.target.value);
  };

  const handleInvestimentDuration = (input) => {
    setInvestimentDuration(input.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let userInput = {
      CurrentSaving,
      YearlySaving,
      ExpectedInterest,
      InvestimentDuration,
    };

    // console.log(userInput["InvestimentDuration"]);

    props.onCalculate(userInput);
  };

  const handleReset = () => {
    props.onCalculate("");
  };

  // funçao generica que lida com todos os onChange dos inputs, retorna o nome do input e o valor
  //const handleChange = (input,value)=>{
  //  console.log(input,value)
  //}

  return (
    <div>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={handleCurrentSaving}

              //onchange={(event)=>{handleChange('current-savings',event.target.value)}}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={handleYearlySaving}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={handleExpectedInterest}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={handleInvestimentDuration}
            />
          </p>
        </div>
        <p className="actions">
          <button
            type="reset"
            onClick={handleReset}
            className="buttonAlt"
          >
            Reset
          </button>
          <button
            type="submit"
            className="button"
            onClick={handleSubmit}
          >
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
