import React from 'react'
import './footerStyle.css'
import { Link } from 'react-router-dom'
import appStore from '../appstore.png'
import playStore from '../playstore.png'
import flage1 from '../flage1.png'
import flage2 from '../flag2.png'

export default function Footer() {
  return (
    <div className='footer'>
        <h1 className=''>Jumpstart your corner of the internet today</h1>
        <div className='hero-form'>
            <input type="text" placeholder='linktr.ee/yourname' className="hero-input" />
            <button type='submit' className="hero-button bg-yellow">Claim your Linktree</button>
        </div>

        <div className="main-footer">
            <div className="upper-links">
                <div>
                    <h2>Company</h2>
                    <Link className='footer-links'>The Linktree Blog</Link>
                    <Link className='footer-links'>Engineering Blog</Link>
                    <Link className='footer-links'>Marketplace</Link>
                    <Link className='footer-links'>What's New</Link>
                    <Link className='footer-links'>About</Link>
                    <Link className='footer-links'>Press</Link>
                    <Link className='footer-links'>Careers</Link>
                    <Link className='footer-links'>Link in Bio</Link>
                    <Link className='footer-links'>Social Good</Link>
                    <Link className='footer-links'>Contact</Link>
                </div>
                <div>
                    <h2>Community</h2>
                    <Link className='footer-links'>Linktree for Enterprise</Link>
                    <Link className='footer-links'>2023 Creator Report</Link>
                    <Link className='footer-links'>2022 Creator Report</Link>
                    <Link className='footer-links'>Charities</Link>
                    <Link className='footer-links'>What's Trending</Link>
                    <Link className='footer-links'>Creator Profile Directory</Link>
                    <Link className='footer-links'>Explore Templates</Link>
                </div>
                <div>
                    <h2>Support</h2>
                    <Link className='footer-links'>Help Topics</Link>
                    <Link className='footer-links'>Getting Started</Link>
                    <Link className='footer-links'>Linktree Pro</Link>
                    <Link className='footer-links'>Features & How-Tos</Link>
                    <Link className='footer-links'>FAQs</Link>
                    <Link className='footer-links'>Report a Violation</Link>
                </div>
                <div>
                    <h2>Trust & Legal</h2>
                    <Link className='footer-links'>Terms & Conditions</Link>
                    <Link className='footer-links'>Privacy Notice</Link>
                    <Link className='footer-links'>Cookie Notice</Link>
                    <Link className='footer-links'>Trust Center</Link>
                    <Link className='footer-links'>Cookie Preferences</Link>
                </div>
            </div>
            <div className="lower-links">
                <div>
                    <button className='login'>Log in</button>
                    <button className='hero-button bg-yellow'>Get started for free</button>
                </div>
                <div>
                    <img src={appStore} alt="" />
                    <img src={playStore} alt="" />
                    <div><i className="fa-brands fa-threads"></i></div>
                    <div><i className="fa-brands fa-tiktok"></i></div>
                    <div><i className="fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </div>
        <div className="name">Linktree*</div>
        <div className='footer-bottom'>
            <div>
                <img src={flage1} alt="" />
                <img src={flage2} alt="" className='img2' />
            </div>
            <div>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</div>
        </div>
    </div>
  )
}
