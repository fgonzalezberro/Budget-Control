// Import react hooks
import {useEffect , useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuestoInicial , gastos}) => {

    // Component states
    const [disponible , setDisponible] = useState(0);
    const [gastado , setGastado] = useState(0);

    useEffect(() =>{
        const totalGastado = gastos.reduce((total , gasto) => gasto.cantidad + total , 0);
        const totalDisponible = presupuestoInicial - totalGastado;

        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos]);

    // Format price
    const formatPrice = (cant) =>{
     return cant.toLocaleString("en-US" , {
        style: "currency",
        currency: "USD"
     });
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
            <CircularProgressbar />
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatPrice(presupuestoInicial)}
                </p>

                <p>
                    <span>Disponible: </span> {formatPrice(disponible)}
                </p>

                <p>
                    <span>Gastado: </span> {formatPrice(gastado)}
                </p>
            </div>
        </div>
    );
};

// Export ControlPresupuesto component
export default ControlPresupuesto;