import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
//borré colorSecundario no used
    const {colorPrimario,  titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        // backgroundColor: colorSecundario,
        backgroundColor: hexToRgba(colorPrimario, 0.5),
    }

    const estiloTitulo = {borderColor: colorPrimario}


  return <>
    { colaboradores.length > 0 &&
      <section className="equipo" style={obj}>
          <input 
          type="color" 
          className="input-color" 
          // value={colorSecundario}
          value={colorPrimario}
          onChange={(e)=>{
            actualizarColor(e.target.value, id)
          }}
          />

          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores"> 
            {
              colaboradores.map( (colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
          </div>
      </section>
    }
  </>
  
}

export default Equipo