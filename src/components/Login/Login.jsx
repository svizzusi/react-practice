import style from './Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({closeLoginModal, setUserName}) => {
     const [nameValue, setNameValue] = useState('')
     const [emailValue, setEmailValue] = useState('')
     const navigate = useNavigate()

     const handleCloseModal = (event) => {
         if (event.target.id === 'loginContainer') closeLoginModal()
     }

     function handleNameChange(event) {
        setNameValue(event.target.value)
     }
     function handleEmailChange(event) {
        setEmailValue(event.target.value)
     }


    function handleSubmit(event) {
        event.preventDefault();
        alert('Login Sucessful')
        setUserName(nameValue)
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
            <input 
                onChange={handleNameChange} 
                value={nameValue} 
                type="text" 
                placeholder='Name' 
                required
            ></input>
            <input 
                onChange={handleEmailChange} 
                value={emailValue} 
                type="email" 
                placeholder='Email' 
                required
            ></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Login;
