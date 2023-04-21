import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';





export const Login = () => {

    const [email, setEmail] = useState('');
    const [pass , setPass] = useState('');
    const navigate = useNavigate();
  const handleOnClick = () => navigate('/register');


    return (
        <>

      <form>
        <label htmlFor="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="**********" id="password" name="password" />
        <button className="button is-info" type="Submit"   >Login</button>
      </form>

      <button onClick={handleOnClick} > "Don't have an account? Register here</button>

      </>
      
    )
}