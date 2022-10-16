import './Header.css'

const Header = (props) => {
    return (
        <header className='header'>
            <span className='header__logo'></span>
            <div className='header__user'>
                {props.login}
                {props.register}
                {props.myList}
                {props.signOut}
            </div>
            <p className='header__theme'>Dark Mode</p>
        </header>
    )
}

export default Header