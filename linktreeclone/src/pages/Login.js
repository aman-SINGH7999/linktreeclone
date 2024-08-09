import React, {useState} from 'react'
import './loginStyle.css'
import logo2 from '../logo2.png'
import loginImg from '../login_img.png'
import { Link } from 'react-router-dom'
import google from '../google.png'
import apple from '../apple.png'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/login/",{email:username,password:password})
            .then((result)=> console.log(result))
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='login-row'>
        <div className="login-column">
            <Link to="/"><img className="logo2" src={logo2} alt="" /></Link>
            <div>
                <h1 className='login-heding'>Welcome back!</h1>
                <p className='login-text'>Log in to your Linktree.</p>
            </div>
            <form action="" className='form'>
                <input className='login-input' type="text" placeholder='Email or username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input className='login-input' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
                <button className='login-button' type='submit' onClick={submit}>Log in</button>
            </form>

            <div className='forget-links'>
                <Link className='forget-link'>Forgot password?</Link>
                <i className="fa-solid fa-circle"></i>
                <Link className='forget-link'>Forgot username?</Link>
            </div>
            <div style={{opacity:"0.7"}}>OR</div>
            <div className='login-links'>
                <Link to="#" className='login-link'> <img src={google} alt="" />Continue with Google</Link>
                <Link to="#" className='login-link'> <img src={apple} alt="" />Continue with Apple</Link>
            </div>
            <div>
                <p>Don't have an account? <Link to="/signup" className='forget-link'>Sign up.</Link></p>
                <p>You can also <Link className='forget-link'>log in with a phone number</Link></p>
            </div>
        </div>

        <div className="login-column">
            <img className='login-img' src={loginImg} alt=""/>
        </div>
    </div>
  )
}
