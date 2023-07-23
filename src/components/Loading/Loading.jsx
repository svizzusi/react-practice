
import loading from '../../assets/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';


const Loading = () => {

  return (
    <div className='loadingContainer'>
        <Player
            autoplay
            loop
            src={loading}
            style={{ height: '300px', width: '300px' }}
        >
        </Player> 
    </div>
  )
};

export default Loading;
