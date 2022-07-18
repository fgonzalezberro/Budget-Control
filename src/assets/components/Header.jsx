import React from 'react';

// Import react components
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuestoInicial , setPresupuestoInicial, isValidBudget, setIsValidBudget , gastos, setGastos}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {
                isValidBudget ? 
                (<ControlPresupuesto 
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuestoInicial={setPresupuestoInicial}
                    presupuestoInicial = {presupuestoInicial}
                    setIsValidBudget={setIsValidBudget}
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