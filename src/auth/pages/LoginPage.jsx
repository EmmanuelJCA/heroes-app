import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'
import Swal from 'sweetalert2'

export const LoginPage = () => {

    const { login } = useContext( AuthContext )

    const [user, setUser] = useState('')

    const navigate = useNavigate()

    const onLogin = ( event ) => {
        event.preventDefault()

        if( user.trim().length <= 1 ) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar tu nombre!',
                showConfirmButton: false,
                timer: 2000,
            })
        }

        const lastPath = localStorage.getItem('lastPath') || '/'

        login( user )

        navigate(lastPath, {
            replace: true
        })
    }

    const onChangeUser = ({ target }) => {
        setUser(target.value)
    }

    return (
        <div className="container mt-5">
            <h1>Inicia Sesion</h1>
            <hr />

            <form onSubmit={ onLogin }>

                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Tu nombre aqui"
                    value={ user }
                    onChange={ onChangeUser }
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
