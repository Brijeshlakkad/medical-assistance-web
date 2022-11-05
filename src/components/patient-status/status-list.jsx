import React from 'react'
import { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import './status-list.css'

const StatusList = (props) => {
    const [ date, setDate ] = useState()
    const [ time, setTime ] = useState() 
    const STATUS_TEXTS = [
        ["No active file. Please Take assessment!","Assessment Taken", 1],
        ["Your file is under review by the counsellor.","File has been reviewed by counsellor",2],
        ["You have an appointment with the counsellor on " + date + " at " + time + ".","File is being assessed by counsellor",3],
        ["The counsellor has rejected your file. If your want to make a new appointment, please fill out the form again.","File approved by counsellor",4],
        ["Your file has been forwarded to a doctor.","File reviewed by Doctor",5],
        ["You have a scheduled appointment with the doctor on " + date + " at " + time + ".", "File is being assessed by Doctor",6],
        ["The doctor has rejected your file. If your want to make a new appointment, please fill out the form again.","Take assessment again",7],
    ]

    useEffect(() => {
        // Enter date/time here
        setDate("10/12")
        setTime("10:00:00")        
    }, [date])
    
    
    return (
        <div className='status-container'>
            <div className='patient-details'>
                <h2>Patient Name: </h2> 
                <h2>File Number: </h2>
            </div>
            <h2>Patient File Status</h2>
            <hr style={{ marginBottom: "25px" }}/>
            {
                STATUS_TEXTS.map(ele => {
                    return(
                        <div class= { props.currentState !== ele[2] ? "step" : "step step-active" }>
                            <div>
                                <div class="circle"> { props.currentState > ele[2] ? <FaCheck /> : ele[2] }  </div>
                            </div>
                            <div>
                                <div class="title">{ props.currentState > ele[2] ? ele[1] : ele[0] }</div>
                            </div>    
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default StatusList