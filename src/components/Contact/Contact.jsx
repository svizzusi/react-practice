import { useEffect } from 'React'

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Page'
  },[])

  return <div>Contact</div>;

};

export default Contact;
