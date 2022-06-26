import React from 'react';

// Import react components
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuestoInicial , setPresupuestoInicial, isValidBudget, setIsValidBudget}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {
                isValidBudget ? (<p>Success</p>) :
                (<NuevoPresupuesto 
                    presupuestoInicial = {presupuestoInicial}
                    setPresupuestoInicial = {setPresupuestoInicial}
                    setIsValidBudget = {setIsValidBudget}
                />)
            }
        </header>
    );
};

// Export Header component
export default Header;