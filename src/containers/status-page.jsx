import React, { useEffect, useState } from "react";
import FooterComponent from "../components/footer/footer";
import Status from "../components/patient-status/status";
import Header from "./header";

export default function StatusPage(props) {
    const [currentState, setCurrentState]= useState()
    useEffect(() => {
        // Get file status from API and setCurrentState 

        // 1 -> new patient
        // 2 -> assesment taken
        // 3 -> assesment rejected
        // 4 -> counceller appoitment scheduled
        // 5 -> file sent to docter for review 
        // 6 -> file rejected
        // 7 -> doctor appoitment scheduled

        setCurrentState(2)
    }, []);

    return (
        <>
            <Header />
            <Status currentState = {currentState} />
            <FooterComponent></FooterComponent>
        </>
    )
}