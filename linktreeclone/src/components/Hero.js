import React from 'react'
import './heroStyle.css'
import tempImg from '../logo.svg'

export default function Hero(props) {
  return (
    <div className={`hero ${props.bgc}`}>
        <div className={`row ${props.flexDirection}`}>
            <div className={`column ${props.textColor}`}>
                <h1 className='hero-h1'>{props.h1Text}</h1>
                <p className='hero-p'>{props.pText}</p>
                <div className='hero-form row'>
                    <input type="text" placeholder='linktr.ee/yourname' className={`hero-input ${props.display}`} />
                    <button type='submit' className={`hero-button ${props.btnBgc}`}>{props.btnText}</button>
                </div>
            </div>
            <div className="column">
                <img src={tempImg} alt="" />
            </div>
        </div>
    </div>
  )
}
