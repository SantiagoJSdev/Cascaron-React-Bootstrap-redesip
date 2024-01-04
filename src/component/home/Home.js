import Modal from "bootstrap/dist/js/bootstrap.js";

import { Modal_mostrarTexto } from '../../modal/mostrarTexto';
import '../../styles/home.css'
import { useState } from "react";
import { Modal_mostrarAfecciones } from "../../modal/mostrarAfecciones";

export const Home = () => {

    const [state, setState] = useState({
        direccion: '',
        afeccion: ''
    })
    let { direccion, afeccion } = state;
    let myModal = ''

    const handleShowAddress = (direccion) => {
        myModal = new Modal.Modal(document.getElementById('idModalMostrarTexto'));
        setState((prev) => ({...prev, direccion}))
        myModal.show();
    }
    const handleShowConditions = (afeccion) => {
        myModal = new Modal.Modal(document.getElementById('idModalMostrarAfecciones'));
        setState((prev) => ({...prev, afeccion}))
        myModal.show();
    }
    return (
        <>
            <div className='container_home'>
                <div className='container_table'>
                    <table className="table table-bordered table-hover editable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre y apellido</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Fecha Nacimiento</th>
                                <th scope="col">Fecha Inscripcion</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Tipo sangre</th>
                                <th scope="col">Seguro</th>
                                <th scope="col">Afecciones - Alergias</th>
                                <th scope="col">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>00121122</td>
                                <td>17/06/1986</td>
                                <td>17/06/1986</td>
                                <td>Masculino</td>
                                <td>A+</td>
                                <td>La previsora</td>
                                <td className='td_logo'><img onClick={()=>handleShowConditions('Alergico al polvo')} src="../imagen/ojo.png" alt="Logo view" className='img-fluid' /></td>
                                <td className='td_logo'><img onClick={()=>handleShowAddress('La cruz del pastel')} src="../imagen/ojo.png" alt="Logo view" className='img-fluid' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div >
            </div >
            <Modal_mostrarTexto info={direccion} />
            <Modal_mostrarAfecciones info={afeccion} />
        </>
    );
}

