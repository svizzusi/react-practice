import { NavLink, Outlet} from 'react-router-dom'

const Departments = () => {
  return (
    <div>
        <h1>Tech Departments</h1>
        <nav className='navDeparments'>
            <NavLink to='frontend'>FrontEnd</NavLink>
            <NavLink to="backend">BackEnd</NavLink>
            <NavLink to='devops'>DevOps</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
};

export default Departments;
