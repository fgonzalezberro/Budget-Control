// Import react hooks
import {useEffect , useState} from 'react';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuestoInicial , gastos, setGastos, setPresupuestoInicial, setIsValidBudget}) => {

    // Component states
    const [porcentaje , setPorcentaje] = useState(0);
    const [disponible , setDisponible] = useState(0);
    const [gastado , setGastado] = useState(0);

    useEffect(() =>{
        const totalGastado = gastos.reduce((total , gasto) => gasto.cantidad + total , 0);
        const totalDisponible = presupuestoInicial - totalGastado;

        // Calculate budget
        const porcentajeActualizado = (((presupuestoInicial - totalDisponible) / presupuestoInicial) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);

        setTimeout(() => {
            setPorcentaje(porcentajeActualizado)
        }, 1000);

    }, [gastos]);

    // Format price
    const formatPrice = (cant) =>{
     return cant.toLocaleString("en-US" , {
        style: "currency",
        currency: "USD"
     });
    }

    // Reset App
    const handleResetApp = () =>{
        setGastos([]);
        setPresupuestoInicial(0);
        setIsValidBudget(false);
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
            <CircularProgressbar 
                value={porcentaje}
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F3F3F3',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                })}
                text={`${porcentaje}% Gastado`}
            />
            </div>

            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                    <span>Presupuesto: </span> {formatPrice(presupuestoInicial)}
                </p>

                <p className={disponible < 0 ? 'negativo' : ''}>
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