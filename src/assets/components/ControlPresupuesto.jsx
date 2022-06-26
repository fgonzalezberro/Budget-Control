import React from 'react';

const ControlPresupuesto = ({presupuestoInicial}) => {

    // Format price
    const formatPrice = (cant) =>{
     return cant.toLocaleString("en-US" , {
        style: "currency",
        currency: "USD"
     });
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>Gráfica aquí</div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatPrice(presupuestoInicial)}
                </p>
            </div>
        </div>
    );
};

// Export ControlPresupuesto component
export default ControlPresupuesto;