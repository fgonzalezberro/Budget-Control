import React from 'react';

const Gastos = ({id , gasto}) => {
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <div className='descripcion-gasto'>
                    <p className='categoria'>
                        {gasto.categoria}
                    </p>

                    <p className='nombre-gasto'>
                        {gasto.nombre}
                    </p>

                    <p className='fecha-gasto'>
                        Agregado el: {" "} <span>{gasto.fecha}</span>
                    </p>
                </div>
            </div>

            <p class="cantidad-gasto">${gasto.cantidad}</p>
        </div>
    );
};

export default Gastos;