// Import react library
import React from 'react';

// Import images
import cerrarButton from "../img/cerrar.svg";

const Modal = ({setModal}) => {
    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img 
                    src={cerrarButton}
                    alt="Close modal icon" 
                    onClick = {() => setModal(false)}
                />
            </div>
        </div>
    );
};

// Export modal component
export default Modal;