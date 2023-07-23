import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (

    <div className='error'>
        < div className='errorText'>
            <h2>404</h2>
            <span>Ooops!</span>
            <h1>Page Not Found</h1>
            <p>This page does not exist or was removed!</p>
            <p>We suggest you go back to home</p>
            <button className='btn'
            onClick = {() => navigate('/', { replace: true})}
            >Back to home</button>
        </div>
        <div className='errorImage'>
            <iframe src="https://embed.lottiefiles.com/animation/144581"></iframe>
        </div>
    </div>
  )
}

export default Error