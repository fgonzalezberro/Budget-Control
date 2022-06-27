// Import react hooks
import { useState } from 'react';

// Import react components
import Header from './assets/components/Header';
import ListadoDeGastos from './assets/components/ListadoDeGastos';
import Modal from "./assets/components/Modal";

// Import Helpers
import { generateId } from './assets/helpers';

// Import images
import addNewSpend from "./assets/img/nuevo-gasto.svg";

function App() {
  const [presupuestoInicial , setPresupuestoInicial ] = useState(0);
  const [isValidBudget , setIsValidBudget] = useState(false);
  const [modal , setModal] = useState(false);
  const [animacionModal , setAnimacionModal] = useState(false);
  const [gastos , setGastos] = useState([]);

  const handleModal = () =>{
    setModal(true);

    setTimeout(() =>{
      setAnimacionModal(true);
    }, 600);
  }

  const guardarDato = g =>{
    g.id = generateId();
    setGastos([...gastos, g]);

    setAnimacionModal(false);

        setTimeout(() =>{
            setModal(false);
        },600);
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
        <>
         <main>
            <ListadoDeGastos 
              gastos={gastos}
            />
         </main>

         <div className='nuevo-gasto'>
          <img 
                src={addNewSpend} 
                alt="Add spent icon" 
                onClick={handleModal}
            />
        </div>
       </>
      )}

      {modal && <Modal 
                   setModal={setModal}
                   animacionModal={animacionModal}
                   setAnimacionModal={setAnimacionModal}
                   guardarDato={guardarDato}
                />
      }
     
    </div>
  )
}

export default App
