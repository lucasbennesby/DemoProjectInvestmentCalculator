import { useState } from "react";
import Header from "./Componentes/Header";
import ResultTables from "./Componentes/ResultTables";
import UserInput from "./Componentes/UserInput";

function App() {
  const [dataTable, setDataTable] = useState("");
  const [userInput, SetUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    SetUserInput(userInput);

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["CurrentSaving"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["YearlySaving"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["ExpectedInterest"] / 100;
    const duration = +userInput["InvestimentDuration"];

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

    //descobrir como passaar os vaalores do yearlydata para a result table
    // do something with yearlyData ...
    console.log(yearlyData);
    setDataTable(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}> No Investment calculation found</p>
      )}
      {userInput && (
        <ResultTables
          dataTable={dataTable}
          initialInvest={userInput["CurrentSaving"]}
        />
      )}
    </div>
  );
}

export default App;
