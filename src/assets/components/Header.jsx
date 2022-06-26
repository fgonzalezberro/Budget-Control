import React from 'react';

// Import react components
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuestoInicial , setPresupuestoInicial}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            <NuevoPresupuesto 
                presupuestoInicial = {presupuestoInicial}
                setPresupuestoInicial = {setPresupuestoInicial}
            />
        </header>
    );
};

// Export Header component
export default Header;