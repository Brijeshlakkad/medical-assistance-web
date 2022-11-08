import React from 'react';
import { ImCross } from 'react-icons/im';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { PatientRecordStatus } from '../../lib/types';
import counselorImage from "./images/counselor.png";
import doctorImage from "./images/doctor.png";
import patientImage from "./images/patient.png";
import './patient-status.css';

export const PatientStatus = ({ payload }) => {
    const STATUS_ACCEPT = {
        [PatientRecordStatus.NULL]: "Please take the assessment to get started!",
        [PatientRecordStatus.COUNSELOR_IN_PROGRESS]: "Your file is under review by the counsellor.", // reject or accept
        [PatientRecordStatus.COUNSELOR_REJECTED]: "The counsellor has rejected your file. Please fill out the form again if you want to restart the process.",
        [PatientRecordStatus.COUNSELOR_APPOINTMENT]: "Your appointment with the counsellor has been scheduled on " + payload.startDateTime + ".",
        [PatientRecordStatus.DOCTOR_IN_PROGRESS]: "Your file has been forwarded to a doctor for review.", // reject or appoinment
        [PatientRecordStatus.DOCTOR_REJECTED]: "The doctor has rejected your file. Please fill out the form again if you want to restart the process.",
        [PatientRecordStatus.DOCTOR_APPOINTMENT]: "Your appointment with the doctor has been scheduled on " + payload.startDateTime + "."
    };

    const steps = {
        [PatientRecordStatus.NULL]: 0,
        [PatientRecordStatus.COUNSELOR_IN_PROGRESS]: 25,
        [PatientRecordStatus.COUNSELOR_REJECTED]: 37.5,
        [PatientRecordStatus.COUNSELOR_APPOINTMENT]: 50,
        [PatientRecordStatus.DOCTOR_IN_PROGRESS]: 75,
        [PatientRecordStatus.DOCTOR_REJECTED]: 87.5,
        [PatientRecordStatus.DOCTOR_APPOINTMENT]: 100
    }

    const rejected = payload.patientRecordStatus ===PatientRecordStatus.COUNSELOR_REJECTED || payload.patientRecordStatus ===PatientRecordStatus.DOCTOR_REJECTED;
    const first_reject = payload.patientRecordStatus ===PatientRecordStatus.COUNSELOR_REJECTED;
    const second_reject = payload.patientRecordStatus ===PatientRecordStatus.DOCTOR_REJECTED;

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
                percent={steps[payload.patientRecordStatus]}
                filledBackground={rejected ? "#dc3545" : "#198754"}
                height="30px"
                stepPositions={[0, 25, 37.5, 50, 75, 87.5, 100]}
            >
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                        >
                            1
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                        >
                            2
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null} ${first_reject ? "d-block" : "d-none"}`}
                        >
                            <ImCross />
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                        >
                            3
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                        >
                            4
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null} ${second_reject ? "d-block" : "d-none"}`}
                        >
                            <ImCross />
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished }) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null} ${(accomplished && rejected) ? "failed" : null}`}
                        >
                            5
                        </div>
                    )}
                </Step>
            </ProgressBar>
            <div className="status-jumbotron">
                <h2>{STATUS_ACCEPT[payload.patientRecordStatus]}</h2>
            </div>
        </div>
    )
}