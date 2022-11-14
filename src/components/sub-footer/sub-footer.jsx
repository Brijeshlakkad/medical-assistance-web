import React from 'react'
import ContactUs from '../../containers/contact-us'
import './sub-footer.css'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function SubFooterComponent() {
    return (
        <div className='footer-container'>
            <div className='container'>
                <div className='col-1' style={{ paddingRight: "20px" }}>
                    <h5 className='text'><strong>Know About Us</strong></h5>
                    <p className='para'>
                        Lifeline is an online platform to catch any mental illness in the very starting phase,
                        curing which leads to a better and happy life with a healthy mind and thoughts.
                    </p>
                    <br></br>
                    <h5 id='contactUsCSS' className='text'><strong>Contact Us</strong></h5>
                    <p><strong>Toll Free:</strong> +1-866-225-0709</p>
                    <br />
                    <strong>Email us at:</strong> <a href="mailto:help@lifeline.ca">help@lifeline.ca</a>
                    <h5 id='followUsText'>Follow us on</h5>
                    <a href='https://www.facebook.com/' target="_blank" >
                        <FontAwesomeIcon className='socialMediaIcons' icon={faFacebook} ></FontAwesomeIcon>
                    </a>
                    <a href='https://www.instagram.com/' target="_blank">
                        <FontAwesomeIcon id='instagramCSS' className='socialMediaIcons' icon={faInstagram} ></FontAwesomeIcon>
                    </a>
                    <a href='https://www.linkedin.com/' target="_blank">
                        <FontAwesomeIcon id='linkedinCSS' className='socialMediaIcons' icon={faLinkedin} ></FontAwesomeIcon>
                    </a>
                    <a href='https://www.twitter.com/' target="_blank" >
                        <FontAwesomeIcon className='socialMediaIcons' icon={faTwitter} ></FontAwesomeIcon>
                    </a>
                    <a href='https://wa.me/+19999999999' target="_blank" >
                        <FontAwesomeIcon id='whatsappCSS' className='socialMediaIcons' icon={faWhatsapp} ></FontAwesomeIcon>
                    </a>
                    <a href='https://www.telegram.com/' target="_blank" >
                        <FontAwesomeIcon id='telegramCSS' className='socialMediaIcons' icon={faTelegram} ></FontAwesomeIcon>
                    </a>
                    <a href='https://www.discord.com/' target="_blank" >
                        <FontAwesomeIcon id='discordCSS' className='socialMediaIcons' icon={faDiscord} ></FontAwesomeIcon>
                    </a>
                </div>
                <div className='col-1'>
                    <ContactUs></ContactUs>
                </div>
            </div>
        </div >
    )
}

