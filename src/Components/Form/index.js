import { NavLink } from 'react-router-dom'
import './Form.css'

const Form = (props) => {
    return (
        <form className='form'>
            <h1 className='form__title'>{props.form_type}</h1>
            <div className='form__input'>
                <label className='form__label'>Email:</label>
                <input className='form__input-field' placeholder='Type your email' />
            </div>
            <div className='form__input'>
                <label className='form__label'>Password:</label>
                <input className='form__input-field' placeholder='type your password' type={'password'} />
            </div>
            <button className='form__button'>{props.action}</button>
            <NavLink className={'form__route'} to={props.route}>{props.route_text}</NavLink>
        </form>
    )
}

export default Form