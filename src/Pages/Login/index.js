import { NavLink } from 'react-router-dom'
import Form from '../../Components/Form'
import Header from '../../Components/Header'
import './Login.css'

const Login = () => {
    return (
        <div className='form__page'>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
            <Form 
            form_type={'Login'}
            action={'Sign In'}
            route={'/Register'}
            route_text={'Sign Up'}
            ></Form>
        </div>
    )
}

export default Login