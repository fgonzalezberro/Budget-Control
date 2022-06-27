import React from 'react';

// Import react components
import Gastos from './Gastos';

const ListadoDeGastos = ({gastos}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? "Gastos" : "Aún no hay gastos"}</h2>

            {
                gastos.map(e => (
                    <Gastos 
                        key={e.id} 
                        nombre={e.nombre}
                    />
                ))
            }
        </div>
    );
};

export default ListadoDeGastos;