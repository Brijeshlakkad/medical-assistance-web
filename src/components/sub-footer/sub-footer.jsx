import React from 'react'
import SubFooterContactUsComponent from './sub-footer-contact-us'
import './sub-footer.css'

export default function SubFooterComponent() {
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
                    <h5 className='text'><strong>Contact Us</strong></h5>
                    <p><strong>Toll Free:</strong>1-866-225-0709</p>
                    <br />
                    <strong>Email:</strong> <a href="mailto:help@lifeline.ca">help@lifeline.ca</a>
                </div>
                <div className='col-1'>
                    <SubFooterContactUsComponent></SubFooterContactUsComponent>
                </div>
            </div>
        </div >
    )
}

