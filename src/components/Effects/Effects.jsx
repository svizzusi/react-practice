import { useState, useEffect } from 'React'

const Effects = () => {

    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(prevToggle => !prevToggle)
    }

    useEffect(() => {
        document.title = toggle ? 'Toggle True' : 'Toggle False'
    },[])

  return (
    <>
        <h1>Hello</h1>
        {toggle && <h2>David</h2>}
        <button onClick={handleToggle}>Toggle Message</button>
    </>
  )
};

export default Effects;
