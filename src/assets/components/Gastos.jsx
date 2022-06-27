import React from 'react';

// Import images
import ahorroIcono from "../img/icono_ahorro.svg";
import casaIcono from "../img/icono_casa.svg";
import comidaIcono from "../img/icono_comida.svg";
import gastosIcono from "../img/icono_gastos.svg";
import ocioIcono from "../img/icono_ocio.svg";
import saludIcono from "../img/icono_salud.svg";
import suscripcionesIcono from "../img/icono_suscripciones.svg";


const Gastos = ({id , gasto}) => {

    const {categoria, nombre, fecha} = gasto;

    const indexImages = {
        ahorro: ahorroIcono,
        casa: casaIcono,
        comida: comidaIcono,
        gastos: gastosIcono,
        ocio: ocioIcono,
        salud: saludIcono,
        suscripciones: suscripcionesIcono
    }

    return (
        <div className='gasto sombra'>

            <div className='contenido-gasto'>
                <img 
                    src={indexImages[categoria]}
                    alt={`${categoria}Icon`} 
                />

                <div className='descripcion-gasto'>
                    <p className='categoria'>
                        {categoria}
                    </p>

                    <p className='nombre-gasto'>
                        {nombre}
                    </p>

                    <p className='fecha-gasto'>
                        Agregado el: {" "} <span>{fecha}</span>
                    </p>
                </div>
            </div>

            <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
    );
};

export default Gastos;