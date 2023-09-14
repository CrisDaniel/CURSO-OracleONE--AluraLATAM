import './Colaborador.css';
import {TiUserDelete} from 'react-icons/ti'
//https://academico.unas.edu.pe/resources/Photos/Students/2018-1/022_002018013872967105.jpg img mio

const Colaborador = (props) => {

    const {nombreIngresado, puestoIngresado, fotoIngresada, id} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    return <div className='colaborador'>
        <TiUserDelete onClick={() => eliminarColaborador(id)} className='eliminar'>Delete</TiUserDelete>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={fotoIngresada} alt="Perfil" />
        </div>
        <div className='info'>
            <h4>{nombreIngresado}</h4>
            <h5>{puestoIngresado}</h5>
        </div>
    </div>
}

export default Colaborador