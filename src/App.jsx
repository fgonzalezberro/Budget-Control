// Import react hooks
import { useState } from 'react'

// Import react components
import Header from './assets/components/Header';
import Modal from "./assets/components/Modal";

// Import images
import addNewSpend from "./assets/img/nuevo-gasto.svg";

function App() {
  const [presupuestoInicial , setPresupuestoInicial ] = useState(0);
  const [isValidBudget , setIsValidBudget] = useState(false);
  const [modal , setModal] = useState(false);

  const handleModal = () =>{
    setModal(true);
  }

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
         <img 
              src={addNewSpend} 
              alt="Add spent icon" 
              onClick={handleModal}
          />
       </div>
      )}

      {modal && <Modal 
                   setModal={setModal}
                />
      }
     
    </div>
  )
}

export default App
