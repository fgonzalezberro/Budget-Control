// Import react hooks
import { useState } from 'react'

// Import react components
import Header from './assets/components/Header';

function App() {
  const [presupuestoInicial , setPresupuestoInicial ] = useState(0);

  return (
    <div className="App">
      <Header 
        presupuestoInicial = {presupuestoInicial}
        setPresupuestoInicial = {setPresupuestoInicial}
      />
    </div>
  )
}

export default App
