import "./Colaborador.css"

import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    //const { nombre, puesto, foto, equipo } = props.datos
    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle color="gray" className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart className="corazon" color="red" onClick={()=>like(id)}/> : <AiOutlineHeart className="corazon" onClick={()=>like(id)}/>}
        </div>
    </div>
}

export default Colaborador