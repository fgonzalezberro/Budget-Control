// Import react hooks
import { useState } from 'react'

// Import react components
import Header from './assets/components/Header';

// Import images
import addNewSpend from "./assets/img/nuevo-gasto.svg";

function App() {
  const [presupuestoInicial , setPresupuestoInicial ] = useState(0);
  const [isValidBudget , setIsValidBudget] = useState(false);

  return (
    <div className="App">

      <Header 
        presupuestoInicial = {presupuestoInicial}
        setPresupuestoInicial = {setPresupuestoInicial}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />

      {isValidBudget &&  (
         <div className='nuevo-gasto'>
         <img src={addNewSpend} alt="Add spent icon" />
       </div>
      )}
     
    </div>
  )
}

export default App
