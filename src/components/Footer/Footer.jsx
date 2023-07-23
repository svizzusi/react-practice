import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
        </footer>
    )
}

export default Footer;