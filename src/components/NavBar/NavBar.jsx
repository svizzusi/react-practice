import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/Gi';
import { AiOutlineClose } from 'react-icons/Ai';
import { useState } from 'react';

const NavBar = ({openLoginModal}) => {
   const [open, setOpen] = useState(true)
   const styles = {
    display: open ? 'none': 'flex'
   }
   function toggle() {
    setOpen(prevOpen => !prevOpen)
   }
    return (
        <nav className='navigation'>
            <h1>BrowserRouter</h1>
            <div className='ham' onClick={toggle}>
                {open ? <GiHamburgerMenu  /> : <AiOutlineClose  />}
            </div>
            <div className='nav-links' style={styles}>
                <NavLink to='/'>Home</NavLink>
                <NavLink onClick={openLoginModal}>Login</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/departments'>Departments</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;
