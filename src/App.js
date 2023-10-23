import React, { useState } from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    let yearlyContribution = userInput["yearly-contribution"];
    let expectedReturn = userInput["expected-return"] / 100;
    let duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  // console.log(userInput);
  // console.log(yearlyData);


  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {userInput ? <ResultsTable data={yearlyData} initialInvestment={userInput["current-savings"]} /> :  <p style={{textAlign: 'center'}}>"No hay datos disponibles aun"</p>}
    </div>
  );
}

export default App;
