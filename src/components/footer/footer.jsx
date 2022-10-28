import React from 'react'
import './footer.css'


export default function FooterComponent() {
    return (
        <footer className='footer'>
            Copyright &copy; {new Date().getFullYear()}  <a href='self' className='text-dark'>Lifeline</a>
        </footer>
    )
}
