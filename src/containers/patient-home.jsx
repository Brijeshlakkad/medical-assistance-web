import React from "react";
import { useSelector } from "react-redux";
import { PatientHomeComponent } from "../components/patient-home/patient-home";

export default function PatientHome(props) {
    const fullName = useSelector(state => state.patient.fullName);

    return <PatientHomeComponent fullName={fullName} />
}