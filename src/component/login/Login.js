import { useForm } from "../../hook/useForm"; 
import { useNavigate } from 'react-router-dom';

import "../../styles/login.css";


export const Login = () => {


    const navigate = useNavigate();
    const [values, setValues, handleInputChange, reset] = useForm({
        pass: '',
        usuario: ''
    }); 
    let {pass, usuario} = values;
    const handleLogin = (e) => {
        e.preventDefault();
       console.log({pass, usuario});
       navigate('/home');
    }

    const getLoginUser = (cod, pass) => {
        let raw = JSON.stringify({
            "codVendedor": `${''}`,
            "password": `${pass}`,
        });
        
    }

    return (
        <div className="App_login"> 
        <div className="App_container">
            <div className='App_container__contentImg'>
                <div className='contentImg_div'>
                    <img src="../imagen/2.jpeg" alt="Logo redesip" className='img-fluid' />
                </div>
              

            </div>

            <div className='container__url'>
                <p style={{ color: '#4c4d48', fontWeight: '800', textAlign: 'center', margin: '0px' }}>Login</p>
               
            </div>

            <div className='form__container_login'>
                <form onSubmit={handleLogin}>
                    <div className="input-group input-group_login input-group-mb mb-3 mt-3">
                        {/* <label className="input-group-text space" htmlFor="inputGroupSelect01">Almacen</label> */}
                        <select
                            name='usuario'
                            onChange={handleInputChange}
                            className="form-select"
                            id="inputGroupSelect01"
                        >
                            <option defaultValue>Seleccionar...</option>
                            {
                                ['Santiago', 'Jesus']?.map((item, ind) => {
                                    return <option key={ (ind + 1)} value={ind}>{item}</option>
                                })
                            }

                        </select>
                    </div>
                    <div className="input-group input-group_login input-group-mb mb-3 mt-3">
                        <input
                            name='pass'
                            type="password"
                            value={pass}
                            onChange={handleInputChange}
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder={'Contraseña'}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary btn_login">Enviar</button>
                </form>
                {/* {message.password && <h3 className='absolute__message'>{message.password}</h3>} */}
            </div>
        </div>

    </div>
    );
}

