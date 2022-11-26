import React from 'react'
import './card-by-day.css'

Window.onload = () => {
    document.getElementById("my-user-progress").value = "75";
}

export default function CardByDayComponent() {
    return (
        <div>
            Date: Nov 26, 2022
            Number of Users: 33
            <div className='user-progress user-progress-striped'>
                <div className='user-progress-bars'>
                    <progress id='my-user-progress' className='user-progress user-progress-striped' max={100}></progress>
                </div>
            </div>
        </div>
    )
}