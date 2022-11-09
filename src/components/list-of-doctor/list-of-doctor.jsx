import React from "react";
import "./list-of-doctor.css";
import styled from "styled-components";
import classNames from "classnames";




export function ListOfDoctor() {
    // const records = [
    //     {
    //         name: "Xyz",
    //         activePatientCount: 10
    //         

    //     },
    //     {
    //         name: "Xyz",
    //         activePatientCount: 10
    //     },
    //     {
    //         name: "Xyz",
    //         activePatientCount: 10
    //     },
    //     {
    //         name: "Xyz",
    //         activePatientCount: 10
    //     }
    // ]
    return (
        <>
            <br></br>

            <div className="list-of-doctor-patient">


                <div className="list-of-table">

                    <table>
                        <thead className="tab-head-doc" style={{ height: "50px" }}>

                            <tr>
                                <th colspan="2">Patient's information</th>

                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Ankur</td>
                            </tr>
                            <tr>

                                <td>Age</td>
                                <td>22</td>
                            </tr><tr>

                                <td>Date of Birth</td>
                                <td>03/22/2010</td>
                            </tr><tr>

                                <td>Address</td>
                                <td>Montreal</td>
                            </tr><tr>

                                <td>Contact Number</td>
                                <td>1234567</td>
                            </tr><tr>

                                <td>Email ID</td>
                                <td>ankur@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>



                </div>


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
                        {/* {
                            records.map((record)=>
                                <tr>
                                    <td>{record.name}</td>
                                    <td className="center-cell">{record.activePatientCount}</td>
                                    <td>record.buttons</td>
                                </tr>
                            )
                        } */}
                        <tbody>

                            <tr>
                                <td>Ankur</td>
                                <td>ankur@gmail.com</td>
                                <td>10</td>
                                <td><button className="button-list-of-doctor-patient">select</button></td>

                            </tr>
                            <tr>
                                <td>Ankur</td>
                                <td>ankur@gmail.com</td>
                                <td>20</td>
                                {/* <button type="button" class="btn btn-outline-primary">Select</button> */}
                                <td><button className="button-list-of-doctor-patient">select</button></td>
                            </tr>
                            <tr>
                                <td>Ankur</td>
                                <td>ankur@gmail.com</td>
                                <td>30</td>
                                <td><button className="button-list-of-doctor-patient">select</button></td>
                            </tr>
                        </tbody>
                    </table>



                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" className="active">
                    2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
                <a href="#">&raquo;</a>
            </div>
        </>
    );
}
