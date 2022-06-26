import React from 'react';

const ControlPresupuesto = ({presupuestoInicial}) => {
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>Gráfica aquí</div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> ${presupuestoInicial}
                </p>
            </div>
        </div>
    );
};

// Export ControlPresupuesto component
export default ControlPresupuesto;