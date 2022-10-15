import { NavLink } from 'react-router-dom';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import './Register.css';

const Register = () => {
    return (
        <div className='form__page'>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
            <Form 
            form_type={'Sign Up'}
            action={'Sign Up'}
            ></Form>
        </div>
    )
}

export default Register