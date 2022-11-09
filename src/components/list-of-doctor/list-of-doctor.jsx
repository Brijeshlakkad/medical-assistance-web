import React from "react";
import { useNavigate } from "react-router-dom";
import { PathConstants } from "../../lib/path-constants";
import { ErrorMessage } from "../elements/error-message";
import { PaginationComponent } from "../pagination/pagination";
import PatientInfo from "../patient-info/patient-info";
import "./list-of-doctor.css";

export function ListOfDoctor({ payload, activePatient, onSelect, errorMessage }) {
    const navigate = useNavigate();
    const onPageChange = (page) => {
        navigate({ pathname: PathConstants.CounselorLOP, search: `page=${page}` });
    }
    return (
        <>
            <div className="list-of-doctor-patient">
                <PatientInfo patient={activePatient.patient} createdAt={activePatient.createdAt} />
                <div className="list-of-doctor">
                    <h1>
                        Assign Patient to Doctor
                    </h1>
                    <table className="assign-pat" id="myTable">
                        <thead className="tab-head-doc">
                            <tr>
                                <th>Doctor's Name</th>
                                <th>Doctor's Email ID</th>
                                <th>Active Patients List</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payload.content.map((doctorRecord, index) => {
                                    return <tr key={`doctor-${index}`}>
                                        <td>{doctorRecord.fullName}</td>
                                        <td>{doctorRecord.emailAddress}</td>
                                        <td>{doctorRecord.currentPatients}</td>
                                        <td><button className="button-list-of-doctor-patient" onClick={() => {
                                            onSelect(doctorRecord.registrationNumber);
                                        }}>select</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    {errorMessage && <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                    }
                </div>
            </div>
            <br></br>
            <PaginationComponent
                onPageChange={onPageChange}
                pageNumber={payload.pageable.pageNumber}
                totalPages={payload.totalPages}
                first={payload.first}
                last={payload.last}
            />
            <div className='extra'></div>
        </>
    );
}
