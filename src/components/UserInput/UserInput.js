import React, {useState} from "react";

export default function UserInput() {

  const inputChangeHandler = (input, value) => {
    //it will handle the inputs all at once
    console.log(input)
    console.log(value);;
  }

  const resetHandler = (event) => {
    // console.log('RESET');
    //..
  }

  const submitHandler = (event) => {
    event.preventDefault()
    // console.log('SUMBIT');
    //..
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={ (event) => inputChangeHandler('current-savings', event.target.value ) }/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={ (event) => inputChangeHandler('yearly-contribution', event.target.value ) }/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={ (event) => inputChangeHandler('expected-return', event.target.value ) }/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={ (event) => inputChangeHandler('duration', event.target.value ) }/>
        </p>
      </div>

      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>

    </form>
  );
}
