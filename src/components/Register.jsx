import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';



export const Register = () => {

  const navigate = useNavigate();
  const handleOnClick = () => navigate('/login');
    const [email, setEmail] = useState('');
    const [pass , setPass] = useState('');
    const [name , setName] = useState('');

  

    return (
        <>

      <form>
        <label htmlFor="name">name</label>
        <input type="name" placeholder="abcd" id="name" name="name" />
        <label htmlFor="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="**********" id="password" name="password" />
        <button type="Submit"  >Login</button>
      </form>

      <button  onClick={handleOnClick}  > have an account here already? login here</button>

      </>
      
    )
}