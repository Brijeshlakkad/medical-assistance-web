import React from 'react'
import Step1Image from "./images/mental-health.jpg";
import Step2Image from "./images/patient-checklist.jpg";
import Step3Image from "./images/counselor.jpg";
import Step4Image from "./images/doctor.png";


export default function CardImageComponent() {
    return (
        <div className="image-row">
            <h2>How it works?</h2>
            <div className='image-container'>
                <div className="col-3">
                    <img src={Step1Image} className="intro-img" alt='Mental Health' width={100} />
                    <h4>Step 1: Mental Health Issues</h4>
                </div>
                <div className="col-3">
                    <img src={Step2Image} className="intro-img" alt='Self Assesment Test' />
                    <h4>Step 2: Take Self Assesment Test</h4>
                </div>
                <div className="col-3">
                    <img src={Step3Image} className="intro-img" alt='Counselor Patient' />
                    <h4>Step 3: Meeting Counselor</h4>
                </div>
                <div className="col-3">
                    <img src={Step4Image} className="intro-img" alt='Doctor Patient' />
                    <h4>Step 4: Meeting psychiatrist</h4>
                </div>
            </div>
        </div>
    )
}