import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroContent from '../components/HeroContent'
import './homeStyle.css';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import temp from '../logo.svg'
import Card from '../components/Card';
import Question from '../components/Question';
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <>
    <Navbar/>
      { heroContent ? heroContent.map((val)=>{
          return (
            <Hero 
              bgc={val.bgc} 
              textColor={val.textColor} 
              display={val.display} 
              flexDirection={val.flexDirection} 
              btnBgc={val.btnBgc} 
              h1Text = {val.h1Text}
              pText = {val.pText}
              btnText = {val.btnText}
            />
          )
        }) : null
      }
      <div className='home'>
        <div>
          <h1 className='bio'>The only link in bio trusted by 50M+</h1>
          <p className='bio' style={{color: "rgb(38, 101, 214)"}}>Products</p>
        </div>
        <Slider />

        <div className='hero-block'>
          <div className="c1">
            <div className='c1-up'>
              <img src={temp} alt="" style={{height:"200px"}} />
              <Link><h2>Share your content in limitless ways on your Linktree.</h2></Link>
            </div>
            <div className='c1-down'>
              <img src={temp} alt="" style={{height:"200px"}} />
              <Link><h2>Sell products and collect payments. It’s monetization made simple.</h2></Link>
            </div>
          </div>
            <div className='c2'>
              <img src={temp} alt="" style={{height:"350px"}} />
              <Link><h2>Grow, own and engage your audience by unifying them in one place.</h2></Link>
            </div>
        </div>
        <div style={{padding:"100px"}}>
          <h1 className='bio'>The fast, friendly and powerful link in bio tool.</h1>
          <button className='hero-button bg-pink text-black'>Explore all plans</button>
        </div>
        
        <div className="card-section bg-cream">
          <Card />
          <Card />
          <Card />
        </div>

        <div style={{padding:"100px"}}>
          <h1 className='bio'>As featured in...</h1>
          <div >
            <button className='hero-button bg-white text-black'>Explore all plans</button>
            <button className='hero-button bg-white text-black'>Explore all plans</button>
            <button className='hero-button bg-white text-black'>Explore all plans</button>
            <button className='hero-button bg-white text-black'>Explore all plans</button>
            <button className='hero-button bg-white text-black'>Explore all plans</button>
          </div>
        </div>

        <div>
          <img className='image-card' src="https://linktr.ee/_gatsby/image/87b2d808b1cad9718a50030b99f42f24/15a186931b23468dd8dc151e0365c9e6/Testimonial-Riley-Lemon.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Riley-Lemon.png&a=w%3D1280%26h%3D647%26fm%3Davif%26q%3D75&cd=19c8b60448bc7b7349de62508f52e3a1" alt=""/>

          <h1 className='bio'>“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”</h1>
          <p style={{marginBottom:"0", marginTop:"20px"}}>Riley Lemon</p>
          <p>Youtuber, Content Creator</p>
          <div style={{marginBottom:"60px"}}>
            <i className="fa-solid fa-arrow-left arrow-btn"></i>
            <i className="fa-solid fa-arrow-right arrow-btn"></i>
          </div>
        </div>
        
        <Question />

        <Footer />
        
      </div>
    </>
  )
}
