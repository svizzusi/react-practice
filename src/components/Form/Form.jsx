import style from './Form.module.css'
import { useState } from "React"

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleName(event) {
        setName(event.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        // submit to backend URL
        alert('Form Submitted')
        setName('')
        setEmail('')

    }
  return (
    <>
        <form className={style.form} onSubmit={handleSubmit}>
            <input className={style.input} required type="text" placeholder="Name" value={name} onChange={handleName}/>
            <input className={style.input} required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className={style.submit} disabled={!name || !email} type="submit" value='Send Message'/>
        </form>
    </>
  )
};

export default Form;
