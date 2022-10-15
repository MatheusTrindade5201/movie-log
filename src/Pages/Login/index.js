import { useContext, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { auth } from '../../auth/config'
import Form from '../../Components/Form'
import Header from '../../Components/Header'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const singIn = () => {
        signInWithEmailAndPassword(email, password)
    }
    if (error) {
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
                typingEmail={email => setEmail(email)}
                typingPassword={pass => setPassword(pass)}
                button_function={singIn}
                error={<h1 className='user__message-error'>Error: {error.message}</h1>}
                ></Form>
            </div>
        );
      }
      if (loading) {
        return (
            <div>
                <Header />
                <div className='user__message'>
                <h1 className='user__message-text'>Loading</h1>
                </div>
            </div>
        )
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
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
            form_type={'Login'}
            action={'Sign In'}
            route={'/Register'}
            route_text={'Sign Up'}
            typingEmail={email => setEmail(email)}
            typingPassword={pass => setPassword(pass)}
            button_function={singIn}
            ></Form>
        </div>
    )
}

export default Login