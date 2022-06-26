// Import react hooks
import { useState } from 'react'

// Import react components
import Header from './assets/components/Header';

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
    </div>
  )
}

export default App
