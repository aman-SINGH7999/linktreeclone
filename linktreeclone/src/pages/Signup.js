import React, {useState} from 'react'
import './loginStyle.css'
import logo2 from '../logo2.png'
import signupIMG from '../signup_img.png'
import { Link } from 'react-router-dom'
import google from '../google.png'
import apple from '../apple.png'
import axios from 'axios'

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e)=>{
        console.log(" submit clicked", username, password)
        e.preventDefault();
        try{
            const responce = await axios.post("http://localhost:8000/signup",{email:username,password:password})
            console.log("responce ------- ",responce)
            
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
                <p className='login-text'>Sign up for free!</p>
            </div>
            <form action="POST" className='form'>
                <input className='login-input' type="text" placeholder='Email' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input className='login-input' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
                <button className='login-button' type='submit' onClick={submit}>Create account</button>
            </form>

            <div style={{width:"80%"}}>
                By clicking Create account, you agree to Linktree's privacy notice, T&Cs and to receive offers, news and updates.
            </div>
            <div style={{opacity:"0.7"}}>OR</div>
            <div className='login-links'>
                <Link to="#" className='login-link'> <img src={google} alt="" />Continue with Google</Link>
                <Link to="#" className='login-link'> <img src={apple} alt="" />Continue with Apple</Link>
            </div>
            <div>
                <p>Already have an account?<Link className='forget-link'>Log in.</Link></p>
            </div>
        </div>

        <div className="login-column">
            <img className='login-img' src={signupIMG} alt=""/>
        </div>
    </div>
  )
}
