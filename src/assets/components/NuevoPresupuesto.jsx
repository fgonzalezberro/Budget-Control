import React from 'react';

const NuevoPresupuesto = ({presupuestoInicial , setPresupuestoInicial}) => {
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>

                    <input 
                        type = "text" 
                        className = "nuevo-presupuesto"
                        value = {presupuestoInicial}
                        onChange = {e => setPresupuestoInicial(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Añadir"
                />
            </form>
        </div>
    );
};

export default NuevoPresupuesto;