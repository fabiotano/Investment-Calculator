import React, {useState} from "react";

const initialCurrentSavings = 10000
const initialContribution = 1200
const initialExpectedReturn = 7
const initialDuration = 10

export default function UserInput() {

  const [currentSavings, setCurrentSavings] = useState(initialCurrentSavings)
  const [yearlyContribution, setYearlyContribution] = useState(initialContribution)
  const [expectedReturn, setExpectedReturn] = useState(initialExpectedReturn)
  const [duration, setDuration] = useState(initialDuration)

  const inputChangeHandler = (input, value) => {

    if (input === 'currentSavings') {
      setCurrentSavings(value);
    } else if (input === 'yearlyContribution') {
      setYearlyContribution(value);
    } else if (input === 'expectedReturn') {
      setExpectedReturn(value);
    } else if (input === 'duration') {
      setDuration(value);
    }
  };

  const resetHandler = (event) => {
    // console.log('RESET');
    setCurrentSavings(initialCurrentSavings)
    setYearlyContribution(initialContribution)
    setExpectedReturn(initialExpectedReturn)
    setDuration(initialDuration)
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
          <input type="number" id="current-savings" value={currentSavings} onChange={ (event) => inputChangeHandler('currentSavings', event.target.value ) }/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={ (event) => inputChangeHandler('yearlyContribution', event.target.value ) }/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={expectedReturn} onChange={ (event) => inputChangeHandler('expectedReturn', event.target.value ) }/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={duration} onChange={ (event) => inputChangeHandler('duration', event.target.value ) }/>
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
