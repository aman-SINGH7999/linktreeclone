import React from 'react'
import './cardStyle.css'
import temp from '../logo.svg'

export default function Card(props) {
  return (
    <div className='card'>
        <img src={temp} style={{width:"300px"}} alt="" />
        <p style={{marginTop:"40px", fontWeight:"500"}}>Seamlessly connect your Linktree with the tools you already use.</p>
    </div>
  )
}
