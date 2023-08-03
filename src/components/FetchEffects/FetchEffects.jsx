import { useState, useEffect } from 'React'

const FetchEffects = () => {

    const [userName, setUserName] = useState({})
    function getData() {
        fetch('https://randomuser.me/api/?results=1')
        .then(result => result.json())
        .then(data => setUserName(data.results[0].name.first))
        .catch(err => 
            console.log('Error fetching', err))
    }
    
    useEffect(() => {
        getData()
        // fetch('https://randomuser.me/api/?results=1')
        // .then(result => result.json())
        // .then(data => setUserName(data.results[0].name.first))
        // .catch(err => 
        //     console.log('Error fetching', err))
    }, [])
  return (
    <>
        {userName && Object.keys(userName).length > 0 ? (
            <h2>First Name: {userName}</h2>
            ) : (
            <h2>Loading...</h2>
            )}
    </>
  )
};

export default FetchEffects;
