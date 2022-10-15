import { NavLink } from 'react-router-dom';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../auth/config';
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signUp = (e) => {
        createUserWithEmailAndPassword(email, password)
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return (
          <div className='user__message'>
            <Header />
            <h1 className='user__message-text'>Loading</h1>
          </div>
        );
      }
      if (user) {
        return (
          <div>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
            <div className='user__message'>
            <h1 className='user__message-text'>User registered with success!</h1>
            <NavLink className='return__button' to={'/Login'}>Sing In</NavLink>
            </div>
          </div>
        );
      }
    return (
        <div className='form__page'>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
            <Form 
            form_type={'Sign Up'}
            action={'Sign Up'}
            route={'/Login'}
            route_text={'I am already registered'}
            typingEmail={email => setEmail(email)}
            typingPassword={pass => setPassword(pass)}
            button_function={signUp}
            ></Form>
        </div>
    )
}

export default Register