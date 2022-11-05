import React, { useEffect, useState } from "react";
import FooterComponent from "../components/footer/footer";
import StatusList from "../components/patient-status/status-list";
import Header from "./header";

export default function StatusPage(props) {
    const [currentState, setCurrentState]= useState()

    useEffect(() => {
        // Get file status from API and setCurrentState 
        setCurrentState(2)
    }, []);

    return (
        <>
            <Header />
            <StatusList currentState = {currentState}/>
            <FooterComponent></FooterComponent>
        </>
    )
}