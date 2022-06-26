import React from 'react';

// Import react components
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuestoInicial , setPresupuestoInicial, isValidBudget, setIsValidBudget}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {
                isValidBudget ? 
                (<ControlPresupuesto 
                    presupuestoInicial = {presupuestoInicial}
                />) :
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