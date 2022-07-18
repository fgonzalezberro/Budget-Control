// Import react hooks
import { useEffect, useState } from 'react';

// Import react components
import Filtros from './assets/components/Filtros';
import Header from './assets/components/Header';
import ListadoDeGastos from './assets/components/ListadoDeGastos';
import Modal from "./assets/components/Modal";

// Import Helpers
import { generateId , formatDate } from './assets/helpers';

// Import images
import addNewSpend from "./assets/img/nuevo-gasto.svg";

function App() {
  const [presupuestoInicial , setPresupuestoInicial ] = useState(Number(localStorage.getItem('presupuestoLS')) ?? 0);
  const [isValidBudget , setIsValidBudget] = useState(false);
  const [modal , setModal] = useState(false);
  const [animacionModal , setAnimacionModal] = useState(false);
  const [gastos , setGastos] = useState(
    localStorage.getItem('gastosLS') ? JSON.parse(localStorage.getItem('gastosLS')) : []
  );
  const [editarGasto , setEditarGasto] = useState({});
  const [filtros , setFiltros] = useState('');
  const [gastosFiltrados , setGastosFiltrados] = useState([]);

  useEffect(() =>{
      if(Object.keys(editarGasto).length > 0){
        setModal(true);

        setTimeout(() =>{
          setAnimacionModal(true);
        }, 600);
      }
  }, [editarGasto]);

  // This useEffect save budget in local storage.
  useEffect(() =>{
    localStorage.setItem('presupuestoLS' , Number(presupuestoInicial) ?? 0);
  }, [presupuestoInicial]);

  // This useEffect save spents in local storage
  useEffect(() =>{
    localStorage.setItem('gastosLS' , JSON.stringify(gastos) ??[]);
  }, [gastos]);

  // This useEffect validate if the local storage data is empty or no and show or hide budget modal.
  useEffect(() =>{
    const presupuestoInLocalStorage = Number(localStorage.getItem('presupuestoLS'));

    presupuestoInLocalStorage > 0 ? setIsValidBudget(true) : setIsValidBudget(false);
  }, []);

  // This us(eEffect catch the filter category
  useEffect(() =>{
    if(filtros){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtros);
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtros]);

  const handleModal = () =>{
    setModal(true);
    setEditarGasto({});

    setTimeout(() =>{
      setAnimacionModal(true);
    }, 600);
  }

  // Save spent
  const guardarDato = g =>{

    g.id = generateId();
    g.fecha = formatDate(Date.now());

    setGastos([...gastos, g]);
    setEditarGasto({})
    setAnimacionModal(false);

        setTimeout(() =>{
            setModal(false);
        },600);
  }

  // Delete budgets
  const eliminarGasto = gastoId =>{
    // Filter budgets
    const gastosActualizados = gastos.filter(gastos => gastos.id !== gastoId);

    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? "fijar" : ""}>

      <Header 
        gastos = {gastos}
        presupuestoInicial = {presupuestoInicial}
        setPresupuestoInicial = {setPresupuestoInicial}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />

      {isValidBudget &&  (
        <>
         <main>
            <Filtros 
              filtros={filtros}
              setFiltros={setFiltros}
            />

            <ListadoDeGastos 
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
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
                   editarGasto={editarGasto}
                   setEditarGasto={setEditarGasto}
                />
      }
     
    </div>
  )
}

export default App
