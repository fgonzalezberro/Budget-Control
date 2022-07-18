import React from 'react';

// Import react components
import Gastos from './Gastos';

const ListadoDeGastos = ({gastos , setEditarGasto, eliminarGasto, filtros, gastosFiltrados}) => {
    return (
        <div className='listado-gastos contenedor'>
            {   filtros ? (
                    <>
                        <h2>{gastosFiltrados.length ? "Gastos" : "Aún no hay gastos"}</h2>
                        {gastosFiltrados.map(gasto=> (
                            <Gastos 
                                key={gasto.id} 
                                gasto={gasto}
                                setEditarGasto = {setEditarGasto}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) :
                (
                    <>
                        <h2>{gastos.length ? "Gastos" : "Aún no hay gastos"}</h2>
                        {gastos.map(gasto=> (
                            <Gastos 
                                key={gasto.id} 
                                gasto={gasto}
                                setEditarGasto = {setEditarGasto}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    );
};

export default ListadoDeGastos;