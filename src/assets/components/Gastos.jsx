import React from 'react';

const Gastos = ({key , nombre}) => {
    return (
        <div>
            <p id={key}>{nombre}</p>
        </div>
    );
};

export default Gastos;