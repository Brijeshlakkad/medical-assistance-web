import React from 'react'
import "react-step-progress-bar/styles.css";
import { useState, useEffect } from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import patientImage from "./images/patient.png";
import doctorImage from "./images/doctor.png";
import { ImCross } from 'react-icons/im'
import counselorImage from "./images/counselor.png";
import './status.css'

const Status = (props) => {

    const [ date, setDate ] = useState()
    const [ time, setTime ] = useState() 

    const STATUS_ACCEPT = [
        "Please take the assessment to get started!", 
        "Your file is under review by the counsellor.", // reject or accept
        "The counsellor has rejected your file. Please fill out the form again if you want to restart the process.",
        "Your appointment with the counsellor has been scheduled on " + date + " at " + time + ".",
        "Your file has been forwarded to a doctor for review.", // reject or appoinment
        "The doctor has rejected your file. Please fill out the form again if you want to restart the process.",
        "Your appointment with the doctor has been scheduled on " + date + " at " + time + "."
    ]


    useEffect(() => {
        // Enter date/time here
        setDate("10/12")
        setTime("10:00:00")        
    }, [date])

    const steps = [0, 25, 37.5, 50, 75, 87.5, 100]
    const rejected = props.currentState % 3 == 0;
    const first_reject = props.currentState == 3;
    const second_reject = props.currentState == 6;

    return (
        <div className='status-container'>
            <div className="status-card">
                <img src={patientImage} alt="" />
            </div>
            <div className="status-card">
                <img src={counselorImage} alt="" />
            </div>
            <div className="status-card">
                <img src={doctorImage} alt="" />
            </div>
            <ProgressBar
                percent={steps[props.currentState - 1]}
                filledBackground={ rejected ? "#dc3545" : "#198754" }
                height="30px"
                stepPositions={[0, 25, 37.5, 50, 75, 87.5, 100]}
            >
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                    >
                        1
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                    >
                        2
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null} ${first_reject ? "d-block" : "d-none"}`}
                    >
                        <ImCross/>
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                    >
                        3
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                    >
                        4
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null} ${second_reject ? "d-block" : "d-none"}`}
                    >
                        <ImCross/>
                    </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished}) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                    >
                        5
                    </div>
                    )}
                </Step>
            </ProgressBar>
            <div className="status-jumbotron">
                <h2>{STATUS_ACCEPT[props.currentState - 1]}</h2>
            </div>
        </div>
    )
}

export default Status