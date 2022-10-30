import React from "react";
import './index.css'

export default function PatientInfo(props) {
    return (
        <div className="patient-info-container">
          <div className="table-header">Patient Information</div>
      <table className="pi-table">
        <tr className="pi-row">
          <th className="pi-header">Patient Name:</th>
          <td className="pi-description">Urvish</td>
        </tr>
        <tr className="pi-row">
          <th className="pi-header">Patient Age:</th>
          <td className="pi-description">23</td>
        </tr>
        <tr className="pi-row">
          <th className="pi-header">Assessment Date:</th>
          <td className="pi-description">12-11-2011</td>
        </tr>
        <tr className="pi-row">
          <th className="pi-header">Address:</th>
          <td className="pi-description">cote des neiges, montreal quebec pincode</td>
        </tr>
        <tr className="pi-row">
          <th className="pi-header">Phone Number:</th>
          <td className="pi-description">0123456789</td>
        </tr>
        <tr className="pi-row">
          <th className="pi-header">Email ID:</th>
          <td className="pi-description">urvish@gmail.com</td>
        </tr>
      </table>
    </div>
  );
}
