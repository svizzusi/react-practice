import style from './Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({closeLoginModal}) => {
     const [nameValue, setNameValue] = useState()
     const [emailValue, setEmailValue] = useState()
     const navigate = useNavigate()

     const handleCloseModal = (event) => {
         if (event.target.id === 'loginContainer') closeLoginModal()
     }

     function handleChange(event) {
        setNameValue(event.target.value)
        setEmailValue(event.target.value)
     }


    function handleSubmit(event) {
        event.preventDefault();
        alert('Login Sucessful')
        navigate('/profile')
    }


    return (
    <div
        id={'loginContainer'}
        className={style.loginBg}
        onClick={handleCloseModal}
        >
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input onChange={handleChange} value={nameValue} type="text" placeholder='Name' required></input>
            <input onChange={handleChange} value={emailValue} type="email" placeholder='Email' required></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Login;
