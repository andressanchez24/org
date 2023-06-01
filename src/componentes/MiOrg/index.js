import "./MiOrg.css"

const MiOrg = (props) =>{
    
//  const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const manejarClick = () =>{
    //     console.log("Show/Unshow", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg